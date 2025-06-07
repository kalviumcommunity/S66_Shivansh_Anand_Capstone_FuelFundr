import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CampaignCard from "../components/CampaignCard";
import Footer from "../components/Footer";

const campaigns = [
  {
    id: 1,
    title: "Hackathon Travel Fund",
    owner: "Alice Sharma",
    goal: 10000,
    raised: 3500,
  },
  {
    id: 2,
    title: "AI Project Fund",
    owner: "Ravi Kumar",
    goal: 5000,
    raised: 4100,
  },
  {
    id: 3,
    title: "Startup MVP Launch",
    owner: "Neha Verma",
    goal: 25000,
    raised: 12000,
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <section>
        <h2>Trending Campaigns</h2>
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            title={campaign.title}
            owner={campaign.owner}
            goal={campaign.goal}
            raised={campaign.raised}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
