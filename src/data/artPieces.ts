import venus from "../assets/art/webp/Venus.webp";
import sergei from "../assets/art/webp/Sergei Polunin.webp";
import sam from "../assets/art/webp/Sam Morris.webp";
import pulpFiction from "../assets/art/webp/Pulp Fiction.webp";
import geometricHand from "../assets/art/webp/Geometric-Hand.webp";
import geometricFace from "../assets/art/webp/Geometric-Face.webp";
import eyeBruised from "../assets/art/webp/Eye-Bruised.webp";
import ecstasy from "../assets/art/webp/Ecstasy of St Theresa .webp";
import donnieDarko from "../assets/art/webp/Donnie Darko.webp";
import dirtyDancing from "../assets/art/webp/Dirty-Dancing.webp";
import blindSpots from "../assets/art/webp/Blind Spots.webp";
import aquaria from "../assets/art/webp/Aquaria.webp";

export interface ArtPiece {
  title: string;
  image: string;
}

export const artPieces: ArtPiece[] = [
  { title: "Venus", image: venus },
  { title: "Ecstasy of St Theresa", image: ecstasy },
  { title: "Sergei Polunin", image: sergei },
  { title: "Geometric Face", image: geometricFace },
  { title: "Sam Morris", image: sam },
  { title: "Pulp Fiction", image: pulpFiction },
  { title: "Eye Bruised", image: eyeBruised },
  { title: "Geometric Hand", image: geometricHand },
  { title: "Donnie Darko", image: donnieDarko },
  { title: "Dirty Dancing", image: dirtyDancing },
  { title: "Blind Spots", image: blindSpots },
  { title: "Aquaria", image: aquaria },
];
