// Vite requires static imports, this is a little messy but I think the best way to do it
import {
  // Small images
  venusSmall,
  sergeiSmall,
  samSmall,
  pulpFictionSmall,
  geometricHandSmall,
  geometricFaceSmall,
  eyeBruisedSmall,
  ecstasySmall,
  donnieDarkoSmall,
  dirtyDancingSmall,
  blindSpotsSmall,
  aquariaSmall,
  // Medium images
  venusMedium,
  sergeiMedium,
  samMedium,
  pulpFictionMedium,
  geometricHandMedium,
  geometricFaceMedium,
  eyeBruisedMedium,
  ecstasyMedium,
  donnieDarkoMedium,
  dirtyDancingMedium,
  blindSpotsMedium,
  aquariaMedium,
  // Large images
  venusLarge,
  sergeiLarge,
  samLarge,
  pulpFictionLarge,
  geometricHandLarge,
  geometricFaceLarge,
  eyeBruisedLarge,
  ecstasyLarge,
  donnieDarkoLarge,
  dirtyDancingLarge,
  blindSpotsLarge,
  aquariaLarge,
} from "../assets/art/webp";

export interface ArtPiece {
  title: string;
  image: {
    small: string;
    medium: string;
    large: string;
  };
}

export const artPieces: ArtPiece[] = [
  {
    title: "Venus",
    image: {
      small: venusSmall,
      medium: venusMedium,
      large: venusLarge,
    },
  },
  {
    title: "Ecstasy of St Theresa",
    image: {
      small: ecstasySmall,
      medium: ecstasyMedium,
      large: ecstasyLarge,
    },
  },
  {
    title: "Sergei Polunin",
    image: {
      small: sergeiSmall,
      medium: sergeiMedium,
      large: sergeiLarge,
    },
  },
  {
    title: "Geometric Face",
    image: {
      small: geometricFaceSmall,
      medium: geometricFaceMedium,
      large: geometricFaceLarge,
    },
  },
  {
    title: "Sam Morris",
    image: {
      small: samSmall,
      medium: samMedium,
      large: samLarge,
    },
  },
  {
    title: "Pulp Fiction",
    image: {
      small: pulpFictionSmall,
      medium: pulpFictionMedium,
      large: pulpFictionLarge,
    },
  },
  {
    title: "Eye Bruised",
    image: {
      small: eyeBruisedSmall,
      medium: eyeBruisedMedium,
      large: eyeBruisedLarge,
    },
  },
  {
    title: "Geometric Hand",
    image: {
      small: geometricHandSmall,
      medium: geometricHandMedium,
      large: geometricHandLarge,
    },
  },
  {
    title: "Donnie Darko",
    image: {
      small: donnieDarkoSmall,
      medium: donnieDarkoMedium,
      large: donnieDarkoLarge,
    },
  },
  {
    title: "Dirty Dancing",
    image: {
      small: dirtyDancingSmall,
      medium: dirtyDancingMedium,
      large: dirtyDancingLarge,
    },
  },
  {
    title: "Blind Spots",
    image: {
      small: blindSpotsSmall,
      medium: blindSpotsMedium,
      large: blindSpotsLarge,
    },
  },
  {
    title: "Aquaria",
    image: {
      small: aquariaSmall,
      medium: aquariaMedium,
      large: aquariaLarge,
    },
  },
];
