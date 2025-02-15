import { lazy, Suspense } from "react";

// Ленивые импорты
const FaceCards = lazy(() => import("../1.FaceCards/FaceCards"));
const Parallax = lazy(() => import("../2.Parallax/Parallax"));
const IceCubes = lazy(() => import("../3.IceCubes/IceCubes"));
const AnimatedGradient = lazy(
  () => import("../4.AnimatedGradient/AnimatedGradient"),
);
const VerticalSlider = lazy(() => import("../5.VerticalSlider/VerticalSlider"));
const HorizontalSlider = lazy(
  () => import("../6.HorizontalSlider/HorizontalSlider"),
);
const RoadMap = lazy(() => import("../7.RoadMap/RoadMap"));
const Gallery = lazy(() => import("../9.Gallery/Gallery"));
const Menu = lazy(() => import("../10.Menu/Menu"));
const ProductCard = lazy(() => import("../11.ProductCard/ProductCard"));
const AnimatedCard = lazy(() => import("../12.AnimatedCard/AnimatedCard"));
const AnimatedInterface = lazy(
  () => import("../13.AnimatedInterface/AnimatedInterface"),
);
const AnimatedMenu = lazy(() => import("../14.AnimatedMenu/AnimatedMenu"));
const Cards3D = lazy(() => import("../15.Cards3D/Cards3D"));
const CreditCards = lazy(() => import("../16.CreditCards/CreditCards"));
const Double3dCard = lazy(() => import("../17.Double3dCard/Double3dCard"));
const LavaMenu = lazy(() => import("../18.LavaMenu/LavaMenu"));
const GlassTable = lazy(() => import("../19.GlassTable/GlassTable"));
const GridVideo = lazy(() => import("../20.GridVideo/GridVideo"));
const InteractiveForm = lazy(
  () => import("../21.InteractiveForm/InteractiveForm"),
);

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
      <Menu />
      <ProductCard />
      <AnimatedCard />
      <AnimatedInterface />
      <AnimatedMenu />
      <Cards3D />
      <CreditCards />
      <Double3dCard />
      <LavaMenu />
      <GlassTable />
      <GridVideo />
      <InteractiveForm />
    </Suspense>
  );
}
