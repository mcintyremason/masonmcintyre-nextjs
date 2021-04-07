const makePersonSchema = () => {
  return {
    "@context": "http://schema.org/",
    "@type": "Person",
    name: "Mason Lindbergh McIntyre",
    jobTitle: "Software Engineer",
    email: "mason@masonmcintyre.com",
    telephone: "(610) 428-9142",
    description: "Technologist",
    url: "https://masonmcintyre.com",
    alumniOf: "Wilkes University",
    birthPlace: "Bethlehem, PA",
    gender: "male",
    image: "/img/mason-headshot.jpg",
    worksFor: [
      {
        "@type": "Organization",
        name: "Disney Streaming Services",
        sameAs: ["https://www.disneystreaming.com/"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/mason-mcintyre-a68ab1b2",
      "https://twitter.com/mcintyremason",
      "https://www.instagram.com/mcintyremason",
      "https://github.com/mcintyremason",
      "http://www.gowilkesu.com/roster.aspx?rp_id=4947",
      "https://static.huskers.com/custompages/downloads2/433393.pdf?atclid=205329983&spsid=56&spid=28&db_lang=c&db_oem_id=100",
      "http://www.gowilkesu.com/roster.aspx?rp_id=4947",
      "https://www.lehighvalleylive.com/sports/2011/05/easton_area_high_schools_mason.html",
      "https://www.mcall.com/sports/penn-state/mc-xpm-2011-05-13-mc-easton-wrestling-20110513-story.html",
    ],
  };
};

const PersonJsonLd = () => {
  return (
    <script
      key={`personJSONLD`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(makePersonSchema()) }}
    />
  );
};

export default PersonJsonLd;
