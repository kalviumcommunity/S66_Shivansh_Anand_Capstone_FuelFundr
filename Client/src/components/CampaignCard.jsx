import React from "react";
import ProgressBar from "./ui/ProgressBar";
import Button from "./ui/Button";

const CampaignCard = ({ title, owner, goal, raised }) => {
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <div>
      <h3>{title}</h3>
      <p>by {owner}</p>
      <ProgressBar percentage={percentage} />
      <p>
        ${raised} raised of ${goal}
      </p>
      <Button text="Donate Now" />
    </div>
  );
};

export default CampaignCard;
