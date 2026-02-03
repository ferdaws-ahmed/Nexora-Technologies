import FeaturesGrid from "./FeaturesGrid";
import FeaturesHeader from "./FeaturesHeader";

const Features = () => {
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>
      <FeaturesHeader />
      <FeaturesGrid />
      {/* <BenefitsSection /> */}
      {/* <FeaturesCTA /> */}
    </div>
  );
};

export default Features;
