
import { Artifact, Era, TimelineEvent } from './types';

export const ERAS_DESCRIPTION: Record<Era, string> = {
  [Era.PALEOLITHIC]: "The Old Stone Age. The longest period of human history, characterized by the development of the first stone tools and a hunter-gatherer lifestyle.",
  [Era.MESOLITHIC]: "The Middle Stone Age. A transitional period between the Paleolithic and Neolithic, marked by the gradual domestication of plants and animals.",
  [Era.NEOLITHIC]: "The New Stone Age. The dawn of agriculture, permanent settlements, and the refinement of stone tools and pottery."
};

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "3.3 Million Years Ago",
    title: "Lomekwi Stone Tools",
    description: "The oldest known stone tools found in Kenya, predating the genus Homo.",
    era: Era.PALEOLITHIC
  },
  {
    year: "2.5 Million Years Ago",
    title: "Oldowan Industry",
    description: "Widespread use of simple stone choppers and flakes by Homo habilis.",
    era: Era.PALEOLITHIC
  },
  {
    year: "1.5 Million Years Ago",
    title: "Acheulean Handaxes",
    description: "Development of symmetrical, bifacial tools like the handaxe by Homo erectus.",
    era: Era.PALEOLITHIC
  },
  {
    year: "400,000 Years Ago",
    title: "Control of Fire",
    description: "Widespread evidence of controlled fire for warmth, cooking, and protection.",
    era: Era.PALEOLITHIC
  },
  {
    year: "40,000 BCE",
    title: "The Creative Explosion",
    description: "The emergence of elaborate cave art, jewelry, and complex burials in Europe and Asia.",
    era: Era.PALEOLITHIC
  },
  {
    year: "15,000 BCE",
    title: "Domestication of the Dog",
    description: "Wolves begin to be domesticated, aiding humans in hunting and protection.",
    era: Era.MESOLITHIC
  },
  {
    year: "10,000 BCE",
    title: "End of the Ice Age",
    description: "Glaciers retreat, leading to environmental changes and the start of the Mesolithic era.",
    era: Era.MESOLITHIC
  },
  {
    year: "9,000 BCE",
    title: "Natufian Culture",
    description: "Semi-sedentary hunter-gatherers in the Levant begin harvesting wild grains.",
    era: Era.MESOLITHIC
  },
  {
    year: "8,500 BCE",
    title: "Agricultural Revolution",
    description: "Systematic farming and animal husbandry emerge in the Fertile Crescent.",
    era: Era.NEOLITHIC
  },
  {
    year: "7,000 BCE",
    title: "Settlement of Çatalhöyük",
    description: "One of the largest and best-preserved Neolithic proto-cities forms in Anatolia.",
    era: Era.NEOLITHIC
  },
  {
    year: "3,300 BCE",
    title: "Ötzi the Iceman",
    description: "A natural mummy from the late Neolithic/Copper Age boundary found in the Alps.",
    era: Era.NEOLITHIC
  },
  {
    year: "3,000 BCE",
    title: "Bronze Age Transition",
    description: "Metalworking begins to replace stone, marking the end of the Stone Age.",
    era: Era.NEOLITHIC
  }
];

export const ARTIFACTS: Artifact[] = [
  {
    id: '1',
    name: 'Acheulean Hand Axe',
    description: 'A multi-purpose stone tool with two sharp faces, often called the "Swiss Army knife" of the Paleolithic.',
    imageUrl: '/ArtifactImages/handaxe.jpg',
    era: Era.PALEOLITHIC,
    use: 'Butchering, digging, wood chopping'
  },
  {
    id: '2',
    name: 'Lascaux Pigments',
    description: 'Ground ochre, charcoal, and hematite mixtures used to create stunning murals of bison and deer.',
    imageUrl: '/ArtifactImages/pigments.jpg',
    era: Era.PALEOLITHIC,
    use: 'Artistic expression, ritual magic'
  },
  {
    id: '3',
    name: 'Bone Needle',
    description: 'A slender polished bone with a drilled eye, revolutionizing clothing by allowing tailored fits.',
    imageUrl: '/ArtifactImages/boneneedle.jpg',
    era: Era.PALEOLITHIC,
    use: 'Sewing hides, making warm clothing'
  },
  {
    id: '4',
    name: 'Microlith Arrowheads',
    description: 'Tiny geometric flint blades attached to wooden shafts to create highly effective composite weapons.',
    imageUrl: '/ArtifactImages/arrowheads.jpg',
    era: Era.MESOLITHIC,
    use: 'Hunting fast game, advanced archery'
  },
  {
    id: '5',
    name: 'Antler Harpoon',
    description: 'Barbed points carved from deer antler, attached to shafts for spearing fish.',
    imageUrl: '/ArtifactImages/harpoon.jpg',
    era: Era.MESOLITHIC,
    use: 'Fishing, aquatic hunting'
  },
  {
    id: '6',
    name: 'Polished Stone Adze',
    description: 'A ground and polished stone tool used for smoothing rough wood and felling trees.',
    imageUrl: '/ArtifactImages/adze.jpg',
    era: Era.NEOLITHIC,
    use: 'Building longhouses, canoe making'
  },
  {
    id: '7',
    name: 'Linear Pottery',
    description: 'Ceramic vessels decorated with incised lines, essential for storing surplus grain.',
    imageUrl: '/ArtifactImages/pottery.jpg',
    era: Era.NEOLITHIC,
    use: 'Grain storage, cooking stews'
  },
  {
    id: '8',
    name: 'Venus of Willendorf',
    description: 'A small limestone figurine portraying a woman, emphasizing fertility and life-giving aspects.',
    imageUrl: '/ArtifactImages/venus.jpg',
    era: Era.PALEOLITHIC,
    use: 'Symbolic totem, fertility amulet'
  },
  {
    id: '9',
    name: 'Obsidian Blade',
    description: 'Volcanic glass knapped to a razor-sharp edge, sharper than modern surgical steel.',
    imageUrl: '/ArtifactImages/obsidian.jpg',
    era: Era.NEOLITHIC,
    use: 'Precision cutting, ceremonial rituals'
  }
];

export const DEVELOPERS = [
  {
    name: "Louwigie Mhiko Devilleres Escoba",
    role: "Project Lead / Lead Developer",
    imageUrl: "/DevImages/Louwigie Mhiko Devilleres Escoba.jpg",
    facebookUrl: "https://www.facebook.com/louwigiemhiko.escoba"
  },
  {
    name: "Christian Agonias",
    role: "Developer",
    imageUrl: "/DevImages/Christian Agonias.jpg",
    facebookUrl: "https://www.facebook.com/cj.agonias.94"
  },
  {
    name: "Clifford Dave Sebial",
    role: "Developer",
    imageUrl: "/DevImages/Clifford Dave Sebial.jpg",
    facebookUrl: "https://www.facebook.com/CliffordDaveSebial"
  },
  {
    name: "Jaypee R. Cabahit",
    role: "Developer",
    imageUrl: "/DevImages/Jaypee R. Cabahit.jpg",
    facebookUrl: "https://www.facebook.com/cabahitjaypee"
  },
  {
    name: "John Lloyd Eramis",
    role: "Developer",
    imageUrl: "/DevImages/John Lloyd Eramis.jpg",
    facebookUrl: "https://www.facebook.com/lord.grim.5891"
  },
  {
    name: "Junard Shine",
    role: "Developer",
    imageUrl: "/DevImages/Junard Shine.jpg",
    facebookUrl: "https://www.facebook.com/junardtheboy"
  },
  {
    name: "Louie Vetton Arriesgado",
    role: "Developer",
    imageUrl: "/DevImages/Louie Vetton Arriesgado.jpg",
    facebookUrl: "https://www.facebook.com/louievetton.arriesgado"
  },
  {
    name: "Prince Naylon",
    role: "Developer",
    imageUrl: "/DevImages/Prince Naylon.jpg",
    facebookUrl: "https://www.facebook.com/Kuzin.Tails"
  },
  {
    name: "Riane Rey Carcedo",
    role: "Developer",
    imageUrl: "/DevImages/Riane Rey Carcedo.jpg",
    facebookUrl: "https://www.facebook.com/riane.rey.carcedo.2025"
  }
];