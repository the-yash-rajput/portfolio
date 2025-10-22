import React, { useState, useEffect, useContext, Suspense } from "react";
import "../projects/Project.scss";
import "./OpenSource.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import OpenSourceCard from "./OpenSourceCard";
import OpenSourcePRCard from "./OpenSourcePRCard";

const openSourceContributions = [
  {
    id: "browser-use-1",
    name: "Browser Use",
    description: "Contributed valuable suggestions to improve project efficiency, driving development and enhancing community engagement.",
    role: "Core Team Member",
    contribution: "Led the initiative to create a generic open-source model supporting multiple LLMs, significantly enhancing the project's scalability and usability.",
    technologies: ["AI Agents", "LLM Integration", "Browser Automation", "Open Source"],
    status: "Core Team",
    url: "#",
    achievements: [
      "Joined core team after valuable contributions",
      "Enhanced project scalability",
      "Improved community engagement"
    ]
  }
];


export default function OpenSourceContributions() {
  
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [contributions, setContributions] = useState([]);
  const [activeTab, setActiveTab] = useState('contributions');
  // todo: remove useContext because is not supported
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getContributionData = () => {
      // For now, using static data. In a real implementation, you might fetch from an API
      // or load from a JSON file containing your open source contributions
      try {
        setContributionFunction(openSourceContributions);
      } catch (error) {
        console.error(
          `${error} (because of this error, nothing is shown in place of Open Source Contributions section)`
        );
        setContributionFunction("Error");
      }
    };
    getContributionData();
  }, []);

  function setContributionFunction(array) {
    setContributions(array);
  }

  const renderTabContent = () => {
    if (activeTab === 'contributions') {
      return (
        <div className="repo-cards-div-main">
          {contributions.map((contribution, i) => {
            if (!contribution) {
              console.error(
                `Open Source Contribution Object for contribution number : ${i} is undefined`
              );
            }
            return (
              <OpenSourceCard 
                contribution={contribution} 
                key={contribution.id} 
                isDark={isDark} 
              />
            );
          })}
        </div>
      );
    } else if (activeTab === 'pull-requests') {
      return (
        <div className="repo-cards-div-main">
          {openSource.openSourcePRs.display && openSource.openSourcePRs.prs.map((pr, i) => {
            return (
              <OpenSourcePRCard 
                prInfo={pr} 
                key={i} 
                isDark={isDark} 
              />
            );
          })}
        </div>
      );
    }
    return null;
  };

  if (
    !(typeof contributions === "string" || contributions instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Contributions</h1>
          
          {/* Tab Navigation */}
          <div className="opensource-tabs">
            <button 
              className={`tab-button ${activeTab === 'contributions' ? 'active' : ''} ${isDark ? 'dark' : ''}`}
              onClick={() => setActiveTab('contributions')}
            >
              Contributions
            </button>
            <button 
              className={`tab-button ${activeTab === 'pull-requests' ? 'active' : ''} ${isDark ? 'dark' : ''}`}
              onClick={() => setActiveTab('pull-requests')}
            >
              Pull Requests
            </button>
          </div>

          {/* Tab Content */}
          {renderTabContent()}
          
          <Button
            text={"View More Contributions"}
            className="project-button"
            href={socialMediaLinks.github || "#"}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}