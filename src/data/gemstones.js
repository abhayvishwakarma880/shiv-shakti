import pendant from "../assets/images/pendant-om.jpg";
import emerald from "../assets/images/emerald.jpg";
import whiteSapphire from "../assets/images/white-sapphire.jpg";
import whiteTopaz from "../assets/images/white-topaz.jpg";
import rudrakshaCards from "../assets/images/rudraksha-cards.jpg";
import rudrakshaCertified from "../assets/images/rudraksha-certified.jpg";

// Edit names / descriptions here — they are rendered on Home and Gemstones pages.
export const gemstones = [
  {
    id: "emerald",
    name: "Natural Emerald (Panna)",
    category: "Gemstone",
    planet: "Mercury (Budh)",
    image: emerald,
    description: "Deep green emerald for intellect, communication and business growth.",
  },
  {
    id: "white-sapphire",
    name: "White Sapphire",
    category: "Gemstone",
    planet: "Venus (Shukra)",
    image: whiteSapphire,
    description: "Brilliant clear stone associated with harmony, luxury and relationships.",
  },
  {
    id: "white-topaz",
    name: "White Topaz",
    category: "Gemstone",
    planet: "Venus (Shukra)",
    image: whiteTopaz,
    description: "Large cut stone with excellent clarity, suited for rings and pendants.",
  },
  {
    id: "om-pendant",
    name: "Om Gold Pendant",
    category: "Jewellery",
    planet: "Multi-planet",
    image: pendant,
    description: "Handcrafted Om pendant set with coral, yellow and purple stones.",
  },
  {
    id: "rudraksha-certified",
    name: "Lab-Certified Rudraksha",
    category: "Rudraksha",
    planet: "Shiva Blessings",
    image: rudrakshaCertified,
    description: "Authentic Nepal Rudraksha supplied with an IGL laboratory certificate.",
  },
  {
    id: "rudraksha-collector",
    name: "Collector Rudraksha Set",
    category: "Rudraksha",
    planet: "Shiva Blessings",
    image: rudrakshaCards,
    description: "Rare beads in sealed display cases, energised before dispatch.",
  },
];

export const gemCategories = ["All", "Gemstone", "Jewellery", "Rudraksha"];
