import { Link } from "react-router-dom";
import sdgLogo from "../assets/sdgLogo.png";
const sdgs = {
  1: {
    title: "No Poverty",
    description:
      "We are working on projects that uplift vulnerable communities and promote economic growth.",
  },
  5: {
    title: "Gender Equality",
    description:
      "We support initiatives that empower women and promote gender equality across all sectors.",
  },
  8: {
    title: "Decent Work and Economic Growth",
    description:
      "Our projects foster inclusive economic growth, decent job creation, and equitable opportunities.",
  },
  12: {
    title: "Responsible Consumption and Production",
    description:
      "We advocate for sustainable practices in production and consumption to minimize waste.",
  },
  13: {
    title: "Climate Action",
    description:
      "We support global efforts to mitigate climate change through sustainable practices.",
  },
  15: {
    title: "Life on Land",
    description:
      "We are dedicated to protecting ecosystems, restoring habitats, and promoting biodiversity.",
  },
  17: {
    title: "Partnerships for the Goals",
    description:
      "Collaboration with global partners drives the success of our initiatives for sustainable development.",
  }
};

const SDGsSection = () => (
  <section className="bg-blue-50 relative py-10 px-5">
    <Link
      to={"https://sdgs.un.org/goals"}
      target="_blank"
      className="absolute left-4 top-4 bg-blue-700 text-white px-4 py-2 rounded-lg"
    >
      United Nations SDG's
    </Link>
    <div className="max-w-6xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">
        Our Contribution to Sustainable Development
      </h2>
      <p className="text-xl text-gray-700 mb-6">
        We are proud to play our part in achieving the Sustainable Development
        Goals (SDGs). Currently, we are actively addressing 7 out of the 17
        SDGs.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Object.keys(sdgs).map((key) => (
          <div
            key={key}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              SDG {key}: {sdgs[key].title}
            </h3>
            <p className="text-gray-600">{sdgs[key].description}</p>
          </div>
        ))}
        <img
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          src={sdgLogo}
          alt="sdg"
        />
      </div>
    </div>
  </section>
);

export default SDGsSection;
