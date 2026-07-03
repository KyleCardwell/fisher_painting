// TODO: Set to Cloudflare R2 URL, e.g. "https://images.fisherpaintinc.com"
export const IMAGE_BASE = "https://pub-114aa5ba9d9e4ce58bfee3087d7dc2f7.r2.dev";

const trimSlashes = (value) => value.replace(/^\/+|\/+$/g, "");

const joinPath = (...segments) =>
  segments
    .filter(Boolean)
    .map((segment) => trimSlashes(String(segment)))
    .join("/");

const withImageBase = (path) => {
  if (!IMAGE_BASE) return null;
  return `${trimSlashes(IMAGE_BASE)}/${trimSlashes(path)}`;
};

export const imageFolders = {
  home: "root/home",
  employees: "root/employees",
  logos: "root/logos",
  portfolio: "root/portfolio",
};

export const r2Image = (folder, filename) => withImageBase(joinPath(folder, filename));

const buildImageGroup = (folder, entries) =>
  Object.fromEntries(
    Object.entries(entries).map(([key, filename]) => [key, filename ? r2Image(folder, filename) : null])
  );

export const images = {
  home: buildImageGroup(imageFolders.home, {
    heroBanner: null,
    heroAbout: null,
    heroWide: null,
    serviceInterior: null,
    serviceExterior: null,
    serviceEpoxy: null,
    careersBg: null,
    depositSmall1: null,
    depositSmall2: null,
    depositSmall3: null,
  }),
  employees: buildImageGroup(imageFolders.employees, {
    brent: "Brent-Fisher-scaled.jpg",
    marla: "Marla-Fisher-scaled.jpg",
    dallen: "Dallen-Fisher-scaled.jpg",
    landon: "Landon-Fisher-scaled.jpg",
    matt: "Matt-Fisher-scaled.jpg",
    jake: "Jake-Miller-scaled.jpg",
    connor: "Connor-Cardwell-scaled.jpg",
    tom: "Tom-Gardiner-scaled.jpg",
  }),
  logos: buildImageGroup(imageFolders.logos, {
    logo: null,
    favicon: null,
  }),
  portfolio: buildImageGroup(imageFolders.portfolio, {
    project1: null,
    project2: null,
    project3: null,
    project4: null,
    project5: null,
    project6: null,
  }),
};

export const portfolioImages = {
  worthingtonGallery: [],
  tower8Gallery: [],
  traegerGallery: [],
  interiorPaintingPortfolio: {
    "Tenant Improvements": [],
    Repaints: [],
    "New Commercial": [],
    Residential: [],
    "Multi-Family": [],
  },
  exteriorCoatingsPortfolio: {
    "High Performance coatings": [],
    "Water Repellents": [],
    "Anti-graffiti coatings": [],
    Repaints: [],
    "New Tilt-ups": [],
    Siding: [],
    Residential: [],
  },
  plasterCoatingsPortfolio: {
    "Gypsum based": [],
    "Lime-based": [],
    "Micro-cement": [],
  },
  stainCoatingsPortfolio: {
    Siding: [],
    "Case base doors": [],
    "CLT structure": [],
  },
  wallcoveringsPortfolio: {
    Wallpapers: [],
    "Standard commercial vinyl": [],
    "Graphics & murals": [],
    "Felt & acoustics": [],
  },
};
