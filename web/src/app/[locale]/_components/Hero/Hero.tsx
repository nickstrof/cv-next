import { HeroImage, HeroInfo } from './index';
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero pad-x">
      <div className="inner">
      <div className="line"></div>
        <HeroImage />
        <HeroInfo />
      </div>
    </div>
  );
};
export default Hero;
