import React, {useEffect, useRef, useState} from "react";
import {agentGraph} from "../data/profile";
import "./AgentGraph.css";

const BOOT = 820;
const STEP = 800;
const HOLD = 1700;
const NODE_H = 46;
const VERTICAL_BREAKPOINT = 720;

const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);
const easeOut = t => 1 - Math.pow(1 - t, 3);

function palette(el) {
  const cs = getComputedStyle(el);
  const v = name => cs.getPropertyValue(name).trim();
  return {
    line: v("--line"),
    raised: v("--ink-raised"),
    chalk: v("--chalk"),
    mist: v("--mist"),
    dim: v("--mist-dim"),
    trace: v("--trace"),
    signal: v("--signal")
  };
}

function bezier(p0, c1, c2, p3, t) {
  const m = 1 - t;
  return {
    x:
      m * m * m * p0.x +
      3 * m * m * t * c1.x +
      3 * m * t * t * c2.x +
      t * t * t * p3.x,
    y:
      m * m * m * p0.y +
      3 * m * m * t * c1.y +
      3 * m * t * t * c2.y +
      t * t * t * p3.y
  };
}

/** Lays the 0–100 grid onto pixels, flipping to a vertical flow on narrow screens. */
function layout(ctx, w, h, vertical) {
  const padX = vertical ? 74 : 62;
  const padY = vertical ? 40 : 52;
  const boxes = {};

  agentGraph.nodes.forEach(n => {
    ctx.font = '600 12px "IBM Plex Mono", monospace';
    const labelW = ctx.measureText(n.label).width;
    ctx.font = '500 9px "IBM Plex Mono", monospace';
    const kindW = ctx.measureText(n.kind).width;
    const width = Math.max(labelW, kindW) + 36;

    // n.x is always the position along the pipeline, n.y always the branch offset.
    // Vertical mode maps the pipeline down the page instead of across it.
    const along = n.x / 100;
    const across = n.y / 100;
    boxes[n.id] = {
      ...n,
      w: width,
      h: NODE_H,
      x: padX + (vertical ? across : along) * (w - padX * 2),
      y: padY + (vertical ? along : across) * (h - padY * 2)
    };
  });
  return boxes;
}

function edgePath(a, b, vertical) {
  const from = vertical
    ? {x: a.x, y: a.y + a.h / 2}
    : {x: a.x + a.w / 2, y: a.y};
  const to = vertical ? {x: b.x, y: b.y - b.h / 2} : {x: b.x - b.w / 2, y: b.y};
  const d = vertical ? (to.y - from.y) * 0.55 : (to.x - from.x) * 0.55;
  const c1 = vertical ? {x: from.x, y: from.y + d} : {x: from.x + d, y: from.y};
  const c2 = vertical ? {x: to.x, y: to.y - d} : {x: to.x - d, y: to.y};
  return {from, c1, c2, to};
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function diamond(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y - h / 2);
  ctx.lineTo(x + w / 2, y);
  ctx.lineTo(x, y + h / 2);
  ctx.lineTo(x - w / 2, y);
  ctx.closePath();
}

export default function AgentGraph({theme}) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let colors = palette(document.documentElement);
    let raf;
    let start = null;
    let lastStep = -2;
    let size = {w: 0, h: 0, vertical: false};

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const vertical = rect.width < VERTICAL_BREAKPOINT;
      const h = vertical ? 620 : 300;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = h * dpr;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size = {w: rect.width, h, vertical};
    };

    const draw = now => {
      if (start === null) start = now;
      const {w, h, vertical} = size;
      if (!w) {
        // Zero-width frame (not laid out yet) — skip painting, keep the loop alive.
        if (!reduced) raf = requestAnimationFrame(draw);
        return;
      }

      const total = BOOT + agentGraph.trace.length * STEP + HOLD;
      const elapsed = reduced ? total - HOLD / 2 : now - start;
      const cycle = Math.floor(elapsed / total);
      const t = elapsed % total;
      const rt = t - BOOT;
      const idx = Math.floor(rt / STEP);
      const local = rt < 0 ? 0 : (rt % STEP) / STEP;
      const running = rt >= 0 && idx < agentGraph.trace.length;
      const firing = running && local >= 0.45;

      const activeId = firing ? agentGraph.trace[idx].node : null;
      const doneIds = new Set(
        agentGraph.trace
          .slice(0, running ? idx : agentGraph.trace.length)
          .map(s => s.node)
      );
      if (firing) doneIds.add(activeId);

      const reported = rt < 0 ? 0 : Math.min(idx, agentGraph.trace.length - 1);
      if (reported !== lastStep) {
        lastStep = reported;
        setStep(reported);
      }

      const boxes = layout(ctx, w, h, vertical);
      ctx.clearRect(0, 0, w, h);

      // ---- edges ----
      agentGraph.edges.forEach(([aId, bId]) => {
        const a = boxes[aId];
        const b = boxes[bId];
        const {from, c1, c2, to} = edgePath(a, b, vertical);
        const traversed = doneIds.has(aId) && doneIds.has(bId);
        const live =
          running &&
          !firing &&
          idx > 0 &&
          agentGraph.trace[idx - 1].node === aId &&
          agentGraph.trace[idx].node === bId;

        ctx.save();
        ctx.lineWidth = traversed || live ? 1.5 : 1;
        ctx.strokeStyle = live
          ? colors.signal
          : traversed
          ? colors.trace
          : colors.line;
        if (!traversed && !live) ctx.setLineDash([3, 5]);
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, to.x, to.y);
        ctx.stroke();
        ctx.restore();

        // arrowhead
        const tip = bezier(from, c1, c2, to, 1);
        const back = bezier(from, c1, c2, to, 0.92);
        const ang = Math.atan2(tip.y - back.y, tip.x - back.x);
        ctx.save();
        ctx.fillStyle = live
          ? colors.signal
          : traversed
          ? colors.trace
          : colors.line;
        ctx.translate(tip.x, tip.y);
        ctx.rotate(ang);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-6, 3.2);
        ctx.lineTo(-6, -3.2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // travelling packet
        if (live) {
          const p = bezier(from, c1, c2, to, easeOut(local / 0.45));
          ctx.save();
          ctx.fillStyle = colors.signal;
          ctx.shadowColor = colors.signal;
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // ---- nodes ----
      agentGraph.nodes.forEach((n, i) => {
        const box = boxes[n.id];
        const appear =
          cycle === 0 && !reduced ? clamp01((t - i * 70) / 340) : 1;
        if (appear <= 0) return;

        const isActive = n.id === activeId;
        const isDone = doneIds.has(n.id);
        const pulse = isActive
          ? Math.sin(((local - 0.45) / 0.55) * Math.PI)
          : 0;

        ctx.save();
        ctx.globalAlpha = easeOut(appear);
        ctx.translate(box.x, box.y + (1 - easeOut(appear)) * 8);

        const stroke = isActive
          ? colors.signal
          : isDone
          ? colors.trace
          : colors.line;
        ctx.fillStyle = colors.raised;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = isActive ? 1.8 : 1;
        if (isActive) {
          ctx.shadowColor = colors.signal;
          ctx.shadowBlur = 10 + pulse * 20;
        }

        if (n.shape === "diamond") {
          diamond(ctx, 0, 0, box.w + 22, box.h + 14);
        } else {
          roundRect(ctx, -box.w / 2, -box.h / 2, box.w, box.h, 5);
        }
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.textAlign = "center";
        ctx.fillStyle = isActive || isDone ? colors.chalk : colors.mist;
        ctx.font = '600 12px "IBM Plex Mono", monospace';
        ctx.fillText(n.label, 0, -1);

        ctx.fillStyle = isActive ? colors.signal : colors.dim;
        ctx.font = '500 9px "IBM Plex Mono", monospace';
        ctx.fillText(n.kind.toUpperCase(), 0, 13);
        ctx.restore();
      });

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) requestAnimationFrame(draw);
    });
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [theme]);

  const current = agentGraph.trace[Math.max(step, 0)];
  const done = step >= agentGraph.trace.length - 1;

  return (
    <figure className="graph" ref={wrapRef}>
      <figcaption className="graph__head">
        <span className="mono graph__title">{agentGraph.title}</span>
        <span className="mono graph__legend">
          {agentGraph.legend.map(l => (
            <React.Fragment key={l.kind}>
              <i data-kind={l.kind} /> {l.label}{" "}
            </React.Fragment>
          ))}
        </span>
      </figcaption>

      <canvas
        ref={canvasRef}
        className="graph__canvas"
        role="img"
        aria-label={agentGraph.aria}
      />

      <p className="graph__status mono" aria-live="off">
        <span className="graph__dot" data-done={done} />
        <span className="graph__node">{current.node}</span>
        <span className="graph__log">{current.log}</span>
      </p>
    </figure>
  );
}
