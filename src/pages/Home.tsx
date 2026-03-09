import { HeroSlideshow } from "../components/HeroSlideshow";
import { artPieces } from "../data/artPieces";

export const Home = () => {
  return <HeroSlideshow artPieces={artPieces} interval={6000} />;
};
