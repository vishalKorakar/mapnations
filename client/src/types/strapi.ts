export type Link = {
    label: string | null;
    url: string | null;
    isExternal?: boolean | null;
    isButton?: boolean | null;
  };
  
  // Helpers for Strapi shapes
  export type RichText = Array<{
    type: string;
    children?: Array<{ type: string; text?: string }>;
    [key: string]: any;
  }>;
  
  export type Media = {
    url: string;
    alternativeText?: string | null;
    width?: number | null;
    height?: number | null;
  };
  
  export type TextLink = {
    prefixText: string | null;
    text: string | null;
    link: string | null;
    isExternal?: boolean | null;
  };
  
  export type Header = {
    navbaritems: Link[];
    CTA?: Link | null;
  };
  
  export type Footer = {
    naviitems: Link[];
    linkToBook?: TextLink | null;
    universitylogo?: universityLogoLink; // media; widen unless you need exact shape
  };
  
 export type pages = {
  title: string;
  slug: string;
  Description: string;
  Sections: Section[];
 };

 export type Content = {
  title: string;
  Description: RichText;
 }

 export type FeaturedChapters = {
  image: Media | null;
  title: string;
  URL: string;
  Description: string;
 };


 export type heading = {
  title: string;
 };

 export type universityLogoLink = {
  universityLogo: string;
  URL: string;
 };

  // Dynamic Zone Sections
  export type InformationSection =
    Omit<Content, 'Description'> & {
      __component: 'sections.information';
      id?: number;
      Description: RichText;
    };
  
  export type FeaturedChaptersSection =
    Omit<FeaturedChapters, 'image'> & {
      __component: 'sections.featured-chapters';
      id?: number;
      image: Media | null;
    };
  
  export type LinkSection =
    Link & {
      __component: 'shared.link';
      id?: number;
    };
  
  export type Section = InformationSection | FeaturedChaptersSection | LinkSection;


  export type Maps = {
    image: string;
    mapTitle: string;
    AlternateTitle: string;
    creatorName: string;
    TypeofResource: string;
    DateCreated: string;
    DigitalOrigin: string;
    Topics: string;
    Places: string;
    Dates: string;
    SubjectGenre: string;
    Handle: string;
    RightsStatement: string;
    Publisher: string;
    Language: string;
    Extent: string;
    PhysicalNote: string;
    Scale: string;
    Coordinates: string;
    Notes: string;
    AdministrativeNotes: string;
    LocalIdentifiers: string;
    Description: string;
    mapYear: string;
    chapter: Chapters;
    slug: string;
  };

  export type Chapters = {
    title: string;
    slug: string;
    Description: string;
    order: string;
    maps: Maps[];
  };
  
  