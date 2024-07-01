import AnimatedGradient from "../AnimatedGradient/AnimatedGradient";
import FaceCards from "../FaceCards/FaceCards";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import IceCubes from "../IceCubes/IceCubes";
import Parallax from "../Parallax/Parallax";
import VerticalSlider from "../VerticalSlider/VerticalSlider";

export default function App() {
  return (
    <>
      <FaceCards />
      <Parallax />
      <IceCubes />
      <AnimatedGradient />
      <VerticalSlider />
      <HorizontalSlider />
    </>
  );
}
