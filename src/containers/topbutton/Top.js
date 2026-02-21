import React, {useEffect} from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    const toggleButton = () => {
      const topButton = document.getElementById("topButton");
      if (!topButton) {
        return;
      }

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    };

    window.addEventListener("scroll", toggleButton);
    toggleButton();

    return () => {
      window.removeEventListener("scroll", toggleButton);
    };
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top" aria-label="Back to top">
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
