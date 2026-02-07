import React from "react";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anand Prakash",
    jobTitle: "Event Sales & F&B Coordinator",
    url: "https://anandprakash.com",
    sameAs: [
      "https://www.linkedin.com/in/anandprakash",
      "https://www.instagram.com/anandprakash",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IHM Mumbai",
    },
    worksFor: {
      "@type": "Organization",
      name: "Chefworks Hospitality",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
