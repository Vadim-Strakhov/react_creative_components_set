import { lazy, Suspense } from "react";

// Ленивые импорты
const FaceCards = lazy(() => import("../1.FaceCards/FaceCards"));
const Parallax = lazy(() => import("../2.Parallax/Parallax"));
const IceCubes = lazy(() => import("../3.IceCubes/IceCubes"));
const AnimatedGradient = lazy(
  () => import("../4.AnimatedGradient/AnimatedGradient")
);
const VerticalSlider = lazy(() => import("../5.VerticalSlider/VerticalSlider"));
const HorizontalSlider = lazy(
  () => import("../6.HorizontalSlider/HorizontalSlider")
);
const RoadMap = lazy(() => import("../7.RoadMap/RoadMap"));
const Gallery = lazy(() => import("../9.Gallery/Gallery"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <FaceCards />
      <Parallax />
      <IceCubes />
      <AnimatedGradient />
      <VerticalSlider />
      <HorizontalSlider />
      <RoadMap />
      <Gallery />
    </Suspense>
  );
}
