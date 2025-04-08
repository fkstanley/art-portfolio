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
  earSmall,
  // gimpSmall,
  icarusSmall,
  liquifiedEyeSmall,
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
  earMedium,
  // gimpMedium,
  icarusMedium,
  liquifiedEyeMedium,
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
  earLarge,
  // gimpLarge,
  icarusLarge,
  liquifiedEyeLarge,
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
    title: "Ear",
    image: {
      small: earSmall,
      medium: earMedium,
      large: earLarge,
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
    title: "Geometric Face",
    image: {
      small: geometricFaceSmall,
      medium: geometricFaceMedium,
      large: geometricFaceLarge,
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
    title: "Icarus",
    image: {
      small: icarusSmall,
      medium: icarusMedium,
      large: icarusLarge,
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
    title: "Liquified Eye",
    image: {
      small: liquifiedEyeSmall,
      medium: liquifiedEyeMedium,
      large: liquifiedEyeLarge,
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
  {
    title: "Sam Morris",
    image: {
      small: samSmall,
      medium: samMedium,
      large: samLarge,
    },
  },
  // Probably want to re-edit this as it's looking quite yellow
  // {
  //   title: "Gimp",
  //   image: {
  //     small: gimpSmall,
  //     medium: gimpMedium,
  //     large: gimpLarge,
  //   },
  // },
];
