// Single source of truth for business details.
// Source: https://shivshaktijyotishkendra.in/ (+ number provided by client).

export const site = {
  name: "Shiv Shakti Jyotish Kendra",
  shortName: "Shiv Shakti",
  tagline: "The Most Trusted Astrologer in Lucknow",
  astrologer: "Dr. Virendra Verma",
  email: "shivshaktivirendra@gmail.com",
  phones: [
    { display: "+91 84008 95414", tel: "+918400895414", primary: true },
    { display: "+91 94506 49300", tel: "+919450649300" },
    { display: "+91 94150 88525", tel: "+919415088525" },
  ],
  whatsapp: "918400895414",
  addresses: [
    {
      label: "Indira Nagar, Lucknow (Main)",
      text: "B-27, Lower Ground Floor, Keshav Complex, Faizabad Road, Indira Nagar, near Lekhraj Metro Station, Lucknow, Uttar Pradesh 226016",
    },
    {
      label: "Gomti Nagar, Lucknow",
      text: "4/169, near Kathuta Chauraha, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    },
    {
      label: "Eldeco Udyan-1, Lucknow",
      text: "Shop No. 10, BRD Complex, Bangla Bazar Rd, near SBI Bank, Udyan-1, Eldeco Udyan-1, Bangla Bazar, Lucknow, Uttar Pradesh 226002",
    },
    {
      label: "Noida",
      text: "Sector-51, Block D 45, near Kendriya Vihar, Noida",
    },
  ],
  social: {
    youtube: "https://www.youtube.com/@ShivShaktiJyotishKendra/videos",
    facebook: "https://www.facebook.com/shivshaktivirendra",
    instagram: "https://www.instagram.com/shivshaktijyotishkendra/",
  },
  // NOTE: the old website shows different experience numbers in different
  // sections (18 / 25 / 30). Update the value below once the client confirms.
  stats: [
    { value: "25+", label: "Years of Experience" },
    { value: "4", label: "Consultation Centres" },
    { value: "11", label: "Astrology Services" },
    { value: "IGL", label: "Certified Rudraksha" },
  ],
};

export const primaryPhone = site.phones[0];

export const whatsappLink = (message = "Namaste, I would like to book a consultation.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gemstones", to: "/gemstones" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
