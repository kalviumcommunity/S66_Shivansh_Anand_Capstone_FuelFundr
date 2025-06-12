import CampaignCard from "./CampaignCard";

const campaigns = [
  {
    id: 1,
    title: "Hackathon Travel Fund",
    owner: "Alice Sharma",
    goal: 10000,
    raised: 3500,
    image: "https://i.ytimg.com/vi/WxuoE5KM5S4/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "AI Project Fund",
    owner: "Ravi Kumar",
    goal: 5000,
    raised: 4100,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Startup MVP Launch",
    owner: "Neha Verma",
    goal: 25000,
    raised: 12000,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
];

const TrendingCampaign = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading with Underline Effect */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trending Campaigns
            </h2>
            <div className="mt-3 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Grid Layout for Campaign Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                title={campaign.title}
                owner={campaign.owner}
                goal={campaign.goal}
                raised={campaign.raised}
                image={campaign.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCampaign;
