export const IMAGE_BASE =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
  "https://pub-114aa5ba9d9e4ce58bfee3087d7dc2f7.r2.dev";

const trimSlashes = (value) => value.replace(/^\/+|\/+$/g, "");

const joinPath = (...segments) =>
  segments
    .filter(Boolean)
    .map((segment) => trimSlashes(String(segment)))
    .join("/");

const withImageBase = (path) =>
  `${trimSlashes(IMAGE_BASE)}/${trimSlashes(path)}`;

//Where these are stored on CloudFlare
export const imageFolders = {
  root: "root",
  employees: "root/employees",
  homeBanner: "root/home/banner",
  projects: "root/home/projects",
  homeServices: "root/home/services",
  logos: "root/logos",
  portfolio: "root/portfolio",
  about: "root/about",
  contact: "root/contact",
  careers: "root/careers",
  services: "root/services",
  servicesInterior: "root/services/interiors",
  servicesExterior: "root/services/exteriors",
  servicesPlaster: "root/services/plaster-coatings",
  servicesTransparent: "root/services/stain-transparent-coatings",
  servicesWallcoverings: "root/services/wallcoverings",
};

export const r2Image = (folder, filename) =>
  withImageBase(joinPath(folder, filename));

const buildImageGroup = (folder, entries) =>
  Object.fromEntries(
    Object.entries(entries).map(([key, filename]) => [
      key,
      filename ? r2Image(folder, filename) : null,
    ]),
  );

const listImages = (folder, filenames) =>
  filenames.map((filename) => r2Image(folder, filename));

const listGallery = (folder, filenames) => ({
  All: listImages(folder, filenames),
});

export const servicePortfolioImageFilenames = {
  interiors: [
    "eHUIC8yn.webp",
    "QIFe4nW1.webp",
    "High-Pointe-Surgical-Center-7832.webp",
    "pvtLTcAM.webp",
    "The-Worthington-Residences_Salt-Lake-City_UT_02-JV008_Interior-12.webp",
    "The-Plastics-Clinic-7688.webp",
    "IMG_6433.webp",
    "Western-23.webp",
    "Tm8ngjyp.webp",
    "The-Worthington-Residences_Salt-Lake-City_UT_02-JV008_Interior-18.webp",
    "The-Worthington-Residences_Salt-Lake-City_UT_02-JV008_Interior-14.webp",
    "G-KHVRa4.webp",
    "28CrWOo.webp",
    "8kNJ1yjj.webp",
    "The-Plastics-Clinic-.webp",
    "The-Worthington-Residences_Salt-Lake-City_UT_02-JV008_Interior-17.webp",
    "The-Plastics-Clinic-5.webp",
    "Traeger-Grills_Salt-Lake-City_UT_02-218005_Interior-1.webp",
  ],
  exteriors: [
    "The-Worthington-Residences_Salt-Lake-City_UT_02-JV008_Exterior-15.webp",
  ],
  plasterCoatings: [
    "The-Plastics-Clinic-7693.webp",
    "The-Plastics-Clinic-7675.webp",
    "The-Plastics-Clinic-3.webp",
  ],
  stainTransparentCoatings: [
    "The-Worthington-Residences_Salt-Lake-City_UT_02-JV008_Interior-1.webp",
  ],
  wallcoverings: [
    "oxIjh79R.webp",
    "Uk-y-yS5.webp",
    "Western-10.webp",
    "The-Plastics-Clinic-7782.webp",
    "The-Plastics-Clinic-7798.webp",
    "The-Plastics-Clinic-7777.webp",
  ],
};

export const images = {
  home: {
    ...buildImageGroup(imageFolders.homeBanner, {
      heroBanner: "slc-wasatch-mountains-1.jpg",
      heroAbout: "Depositphotos_4680739_ds.webp",
      heroWide: "slc-wasatch-mountains-1.jpg",
      heroSouth: "st-george-red-rocks-1.jpg",
    }),
    ...buildImageGroup(imageFolders.homeServices, {
      serviceInterior: "interior-painting.webp",
      serviceExterior: "DoTerra_new2.jpg",
      serviceEpoxy: "epoxy-coatings.webp",
      serviceWallcoverings: "The-Plastics-Clinic-7782.webp",
    }),
    depositSmall1: r2Image(
      imageFolders.homeServices,
      "The-Plastics-Clinic-7782.webp",
    ),
    depositSmall2: r2Image(
      imageFolders.homeBanner,
      "Depositphotos_4680739_ds.webp",
    ),
    depositSmall3: r2Image(
      imageFolders.homeBanner,
      "st-george-red-rocks-1.jpg",
    ),
    careersBg: r2Image(
      imageFolders.homeBanner,
      "Depositphotos_4680739_ds.webp",
    ),
    team: r2Image(imageFolders.employees, "Entire-Team-scaled.jpg"),
  },
  employees: buildImageGroup(imageFolders.employees, {
    brent: "Brent-Fisher-scaled.jpg",
    marla: "Marla-Fisher-scaled.jpg",
    dallen: "Dallen-Fisher-scaled.jpg",
    landon: "Landon-Fisher-scaled.jpg",
    matt: "Matt-Fisher-scaled.jpg",
    jake: "Jake-Miller-scaled.jpg",
    connor: "Connor-Cardwell-scaled.jpg",
    tom: "Tom-Gardiner-scaled.jpg",
    team: "Entire-Team-scaled.jpg",
  }),
  logos: buildImageGroup(imageFolders.logos, {
    logo: "Fisher_Painting_-_Final_transparent-scaled.png",
    logoFull: "Fisher_Painting_-_Final_transparent-scaled.png",
    logoBlack: "FP_-_Black_transparent-scaled.png",
    logoWhite: "FP_-_White_transparent-scaled.png",
    favicon: "favicon-2.png",
  }),
  projects: buildImageGroup(imageFolders.projects, {
    project1: "project-1.webp",
    project2: "project-2.webp",
    project3: "project-3.webp",
    project4: "project-4.webp",
    project5: "project-5.webp",
    project6: "project-6.webp",
  }),
  about: buildImageGroup(imageFolders.about, {
    banner: "Western-32.webp",
    project: "i-M-iqYF.webp",
  }),
  contact: buildImageGroup(imageFolders.contact, {
    banner: "h8hgZzgv.webp",
    project: "The-Worthington-Residences_Salt-Lake-City_UT_Exterior-4.webp",
  }),
  careers: buildImageGroup(imageFolders.careers, {
    banner: "The-Plastics-Clinic-7718.webp",
  }),
  portfolio: buildImageGroup(imageFolders.portfolio, {
    banner: "The-Plastics-Clinic-2.webp",
  }),
  services: {
    banner: r2Image(imageFolders.services, "banner-img.webp"),
    interior: listImages(imageFolders.servicesInterior, [
      "QIFe4nW1.webp",
      "eHUIC8yn.webp",
      "Western-23.webp",
      "The-Plastics-Clinic-5.webp",
    ]),
    exterior: listImages(imageFolders.servicesExterior, [
      "The-Worthington-Residences_Salt-Lake-City_UT_02-JV008_Exterior-15.webp",
    ]),
    plaster: listImages(imageFolders.servicesPlaster, [
      "The-Plastics-Clinic-7693.webp",
      "The-Plastics-Clinic-7675.webp",
      "The-Plastics-Clinic-3.webp",
    ]),
    transparent: listImages(imageFolders.servicesTransparent, [
      "The-Worthington-Residences_Salt-Lake-City_UT_02-JV008_Interior-1.webp",
    ]),
    wallcoverings: listImages(imageFolders.servicesWallcoverings, [
      "oxIjh79R.webp",
      "Uk-y-yS5.webp",
      "Western-10.webp",
      "The-Plastics-Clinic-7782.webp",
      "The-Plastics-Clinic-7798.webp",
      "The-Plastics-Clinic-7777.webp",
    ]),
  },
};

export const portfolioCards = [
  {
    title: "Traeger HQ",
    date: "2025",
    href: "/portfolio/traeger",
    image: r2Image(imageFolders.portfolio, "Traeger-Grills-Interior-1.jpg"),
  },
  {
    title: "Bees Stadium Daybreak",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Bees-Stadium-Daybreak.png"),
  },
  {
    title: "Delta Center",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Delta-Center.webp"),
  },
  {
    title: "Megaplex Daybreak",
    date: "Summer 2024",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Megaplex-Daybreak-2.jpg"),
  },
  {
    title: "U of U Baseball",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "UofU-Baseball.webp"),
  },
  {
    title: "Summit Vista",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Summit-Vista-1.jpg"),
  },
  {
    title: "Worthington Apartments",
    date: "2025",
    href: "/portfolio/worthington",
    image: r2Image(imageFolders.portfolio, "Worthington.webp"),
  },
  {
    title: "Murray City Hall",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Murray-City-Hall-Exterior.jpg"),
  },
  {
    title: "Herriman City Hall",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Herriman-City-Hall.webp"),
  },
  {
    title: "West Valley City Police HQ",
    date: "2025",
    href: "/portfolio",
    image: r2Image(
      imageFolders.portfolio,
      "West-Valley-City-Police-HQ-Exterior.jpg",
    ),
  },
  {
    title: "doTerra Corporate Campus",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "doTerra-Office.jpg"),
  },
  {
    title: "Bill.com Draper Office",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "bill-com.webp"),
  },
  {
    title: "STK Steakhouse",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "STK-Steakhouse.jpg"),
  },
  {
    title: "Kensington Tower",
    date: "2025",
    href: "/portfolio/tower-8",
    image: r2Image(imageFolders.portfolio, "Kensington-Tower.jpg"),
  },
  {
    title: "U of U West Village",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "U-of-U-West-Village.jpg"),
  },
  {
    title: "Toole Technical College",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Tooele-Technical-College-2.jpg"),
  },
  {
    title: "U of U Helix Office Building",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "U-of-U-Helix-Office-Building.jpg"),
  },
  {
    title: "Base Camp Talisker Club",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Base-Camp-Tuhaye.jpg"),
  },
  {
    title: "Lehi City Hall",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Lehi-City-Hall.jpg"),
  },
  {
    title: "Loveland Living Planet Aquarium",
    date: "2025",
    href: "/portfolio",
    image: r2Image(
      imageFolders.portfolio,
      "Loveland-Living-Planet-Aquarium.jpg",
    ),
  },
  {
    title: "Domo HQ",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Domo-Headquarters.jpg"),
  },
  {
    title: "U of U Eccles Stadium",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "U-of-U-Eccles-Stadium-2.webp"),
  },
  {
    title: "All Star Entertainment",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "All-Star-Entertainment.jpg"),
  },
  {
    title: "Montage Deer Valley",
    date: "2025",
    href: "/portfolio",
    image: r2Image(imageFolders.portfolio, "Montage-Deer-Valley.jpg"),
  },
];

export const categorizedPortfolioImages = {
  interiorPaintingPortfolio: {
    "Tenant Improvements": listImages(imageFolders.portfolio, [
      "bill-com.webp",
      "doTerra-Office.jpg",
      "Domo-Headquarters.jpg",
      "STK-Steakhouse.jpg",
    ]),
    Repaints: listImages(imageFolders.portfolio, [
      "Delta-Center.webp",
      "Traeger-Grills-Interior.jpg",
    ]),
    "New Commercial": listImages(imageFolders.portfolio, [
      "Megaplex-Daybreak-2.jpg",
      "Lehi-City-Hall.jpg",
      "U-of-U-Helix-Office-Building.jpg",
    ]),
    Residential: listImages(imageFolders.portfolio, [
      "Base-Camp-Tuhaye.jpg",
      "Montage-Deer-Valley.jpg",
    ]),
    "Multi-Family": listImages(imageFolders.portfolio, [
      "Worthington.webp",
      "Summit-Vista-1.jpg",
    ]),
  },
  exteriorCoatingsPortfolio: {
    "High Performance coatings": listImages(imageFolders.portfolio, [
      "West-Valley-City-Police-HQ-Exterior.jpg",
      "Murray-City-Hall-Exterior.jpg",
      "Herriman-City-Hall.webp",
    ]),
    "Water Repellents": listImages(imageFolders.portfolio, [
      "Worthington.webp",
      "Murray-City-Hall.jpg",
    ]),
    "Anti-graffiti coatings": listImages(imageFolders.portfolio, [
      "Delta-Center.webp",
    ]),
    Repaints: listImages(imageFolders.portfolio, [
      "Domo-Headquarters.jpg",
      "Loveland-Living-Planet-Aquarium.jpg",
    ]),
    "New Tilt-ups": listImages(imageFolders.portfolio, [
      "doTerra-Office.jpg",
      "Tooele-Technical-College-2.jpg",
    ]),
    Siding: listImages(imageFolders.portfolio, [
      "Base-Camp-Tuhaye.jpg",
      "Montage-Deer-Valley.jpg",
    ]),
    Residential: listImages(imageFolders.portfolio, ["Base-Camp-Tuhaye.jpg"]),
  },
  plasterCoatingsPortfolio: {
    "Gypsum based": listImages(imageFolders.portfolio, [
      "STK-Steakhouse.jpg",
      "Traeger-Grills-Interior-1.jpg",
    ]),
    "Lime-based": listImages(imageFolders.portfolio, ["Kensington-Tower.jpg"]),
    "Micro-cement": listImages(imageFolders.homeServices, [
      "The-Plastics-Clinic-7782.webp",
    ]),
  },
  stainCoatingsPortfolio: {
    Siding: listImages(imageFolders.portfolio, [
      "Base-Camp-Tuhaye.jpg",
      "Montage-Deer-Valley.jpg",
    ]),
    "Case base doors": listImages(imageFolders.portfolio, [
      "Traeger-Grills-Interior.jpg",
    ]),
    "CLT structure": listImages(imageFolders.portfolio, [
      "U-of-U-West-Village.jpg",
    ]),
  },
  wallcoveringsPortfolio: {
    Wallpapers: listImages(imageFolders.portfolio, ["STK-Steakhouse.jpg"]),
    "Standard commercial vinyl": listImages(imageFolders.portfolio, [
      "Traeger-Grills-Interior-1.jpg",
    ]),
    "Graphics & murals": listImages(imageFolders.portfolio, [
      "All-Star-Entertainment.jpg",
    ]),
    "Felt & acoustics": listImages(imageFolders.portfolio, [
      "Loveland-Living-Planet-Aquarium.jpg",
    ]),
  },
};

export const portfolioImages = {
  worthingtonGallery: listImages(imageFolders.portfolio, ["Worthington.webp"]),
  tower8Gallery: listImages(imageFolders.portfolio, ["Kensington-Tower.jpg"]),
  traegerGallery: listImages(imageFolders.portfolio, [
    "Traeger-Grills-Interior.jpg",
    "Traeger-Grills-Interior-1.jpg",
  ]),
  interiorPaintingPortfolio: listGallery(
    imageFolders.servicesInterior,
    servicePortfolioImageFilenames.interiors,
  ),
  exteriorCoatingsPortfolio: listGallery(
    imageFolders.servicesExterior,
    servicePortfolioImageFilenames.exteriors,
  ),
  plasterCoatingsPortfolio: listGallery(
    imageFolders.servicesPlaster,
    servicePortfolioImageFilenames.plasterCoatings,
  ),
  stainCoatingsPortfolio: listGallery(
    imageFolders.servicesTransparent,
    servicePortfolioImageFilenames.stainTransparentCoatings,
  ),
  wallcoveringsPortfolio: listGallery(
    imageFolders.servicesWallcoverings,
    servicePortfolioImageFilenames.wallcoverings,
  ),
};
