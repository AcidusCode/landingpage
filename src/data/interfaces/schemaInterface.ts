export interface Address {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface LocalBusiness {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  image: string;
  url: string;
  telephone: string;
  address: Address;
  priceRange: string;
  sameAs: string[];
}

export interface FAQItem {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface FAQPage {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: FAQItem[];
}

// El schema puede ser un array con LocalBusiness y FAQPage
export interface SchemaInterface {
  localBusiness: LocalBusiness;
  faq: FAQItem[];
}
