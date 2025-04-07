import venus from "../assets/art/Venus.png";
import sergei from "../assets/art/Sergei Polunin.png";
import sam from "../assets/art/Sam Morris.png";
import pulpFiction from "../assets/art/Pulp Fiction.png";
import geometricHand from "../assets/art/Geometric-Hand.png";
import geometricFace from "../assets/art/Geometric-Face.png";
import eyeBruised from "../assets/art/Eye-Bruised.png";
import ecstasy from "../assets/art/Ecstasy of St Theresa .png";
import donnieDarko from "../assets/art/Donnie Darko.png";
import dirtyDancing from "../assets/art/Dirty-Dancing.png";
import blindSpots from "../assets/art/Blind Spots.png";
import aquaria from "../assets/art/Aquaria.png";

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
