import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://incampus.web.app",
    },

    {
      url: "https://incampus.web.app/services",
    },

    {
      url: "https://incampus.web.app/universities",
    },

    {
      url: "https://incampus.web.app/study-abroad-consultancy-hyderabad",
    },

    {
      url: "https://incampus.web.app/study-abroad-consultancy-telangana",
    },

    {
      url: "https://incampus.web.app/study-in-usa",
    },
  ];
}