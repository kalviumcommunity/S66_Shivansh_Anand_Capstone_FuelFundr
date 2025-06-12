import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import TrendingCampaign from "../components/TrendingCampaign";
import HowItWorks from "../components/HowItWorks";
import UserReview from "../components/UserReviews";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrendingCampaign />
      <HowItWorks />
      <UserReview />
      <Footer />
    </>
  );
};

export default Home;
