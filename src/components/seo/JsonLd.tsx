import React from "react";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anand Prakash",
    jobTitle: "Event Sales & F&B Operations Coordinator",
    description:
      "Hospitality management graduate from IHM Mumbai with expertise in event sales coordination, F&B operations, and luxury client servicing.",
    url: "https://anandihm.vercel.app",
    gender: "Male",
    nationality: "Indian",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IHM Mumbai (Institute of Hotel Management, Catering Technology and Applied Nutrition)",
      url: "https://www.ihmctan.edu/",
    },
    worksFor: {
      "@type": "Organization",
      name: "Chefworks Hospitality",
      url: "https://chefworks.in/",
    },
    knowsAbout: [
      "Event Sales Coordination",
      "F&B Operations",
      "Luxury Hospitality",
      "Client Relationship Management",
      "Menu Planning",
      "On-ground Execution",
    ],
    sameAs: [
      "https://www.linkedin.com/in/anandhm",
      "https://www.instagram.com/anandprakash",
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
