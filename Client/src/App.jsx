import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AlphaCampaign from "./components/ui/AlphaCampaign";
import BetaCampaign from "./components/ui/BetaCampaign";
import GammaCampaign from "./components/ui/GammaCampaign";
import CreateCampaignForm from "./components/CreateCampaignForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/aplha" element={<AlphaCampaign />} />
        <Route path="/campaign/beta" element={<BetaCampaign />} />
        <Route path="/campaign/gamma" element={<GammaCampaign />} />
        <Route path="/create-campaign" element={<CreateCampaignForm />} />
      </Routes>
    </>
  );
};

export default App;
