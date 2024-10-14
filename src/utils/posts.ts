export interface Post {
  id: number;
  /// dd/mm/yyyy
  date: string;
  title: string;
  news: string[];
  description: string;
  image: string;
  alt: string;
  source?: string;
  authors: string[];
  editors: string[];
}

export const posts: Post[] = [
  {
    id: 0,
    date: "10/14/2024",
    title: "SpaceX რაღაცა",
    news: ["ეს მოხდა", "ის მოხდა", "იქ მოხდა", "აქ მოხდა"],
    description: "მერე მოვიფიქრებ",
    image: "/posts/0/0-super-heavy.webp",
    alt: "super-heavy-booster-catch",
    authors: ["laura"],
    editors: ["givia", "emzari"],
  }, {
    id: 0,
    date: "10/14/2024",
    title: "SpaceX რაღაცა",
    news: ["ეს მოხდა", "ის მოხდა", "იქ მოხდა", "აქ მოხდა"],
    description: "მერე მოვიფიქრებ",
    image: "/posts/0/0-super-heavy.webp",
    alt: "super-heavy-booster-catch",
    authors: ["laura"],
    editors: ["givia", "emzari"],
  }, {
    id: 0,
    date: "10/14/2024",
    title: "SpaceX რაღაცა",
    news: ["ეს მოხდა", "ის მოხდა", "იქ მოხდა", "აქ მოხდა"],
    description: "მერე მოვიფიქრებ",
    image: "/posts/0/0-super-heavy.webp",
    alt: "super-heavy-booster-catch",
    authors: ["laura"],
    editors: ["givia", "emzari"],
  }, {
    id: 0,
    date: "10/14/2024",
    title: "SpaceX რაღაცა",
    news: ["ეს მოხდა", "ის მოხდა", "იქ მოხდა", "აქ მოხდა"],
    description: "მერე მოვიფიქრებ",
    image: "/posts/0/0-super-heavy.webp",
    alt: "super-heavy-booster-catch",
    authors: ["laura"],
    editors: ["givia", "emzari"],
  }, {
    id: 0,
    date: "10/14/2024",
    title: "SpaceX რაღაცა",
    news: ["ეს მოხდა", "ის მოხდა", "იქ მოხდა", "აქ მოხდა"],
    description: "მერე მოვიფიქრებ",
    image: "/posts/0/0-super-heavy.webp",
    alt: "super-heavy-booster-catch",
    authors: ["laura"],
    editors: ["givia", "emzari"],
  }, {
    id: 0,
    date: "10/14/2024",
    title: "SpaceX რაღაცა",
    news: ["ეს მოხდა", "ის მოხდა", "იქ მოხდა", "აქ მოხდა"],
    description: "მერე მოვიფიქრებ",
    image: "/posts/0/0-super-heavy.webp",
    alt: "super-heavy-booster-catch",
    authors: ["laura"],
    editors: ["givia", "emzari"],
  },
];
