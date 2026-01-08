import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    linkToBook: Schema.Attribute.Component<'shared.text-link', false>;
    naviitems: Schema.Attribute.Component<'shared.link', true>;
    universitylogo: Schema.Attribute.Component<
      'shared.university-logo-link',
      false
    >;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'shared.link', false>;
    navbaritems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutHeading extends Struct.ComponentSchema {
  collectionName: 'components_layout_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeaturedChapters extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_chapters';
  info: {
    displayName: 'FeaturedChapters';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface SectionsInformation extends Struct.ComponentSchema {
  collectionName: 'components_sections_information';
  info: {
    displayName: 'Content';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isButton: Schema.Attribute.Boolean;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedTextLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_links';
  info: {
    displayName: 'textLink';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    link: Schema.Attribute.String;
    prefixText: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedUniversityLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_university_logo_links';
  info: {
    displayName: 'universityLogoLink';
  };
  attributes: {
    universityLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    URL: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.heading': LayoutHeading;
      'sections.featured-chapters': SectionsFeaturedChapters;
      'sections.information': SectionsInformation;
      'shared.link': SharedLink;
      'shared.text-link': SharedTextLink;
      'shared.university-logo-link': SharedUniversityLogoLink;
    }
  }
}
