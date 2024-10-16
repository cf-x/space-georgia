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
    id: 1,
    date: "10/19/2024",
    title: "სიცოცხლე ევროპაზე",
    news: [
      "SpaceX Super Heavy Booster",
      "NASA Europa Clipper მისია",
      "შებრუნებული გალაქტიკები",
      "ატომბირთვის სრული სურათი"
    ],
    description: "არსებობს თუ არა სიცოცხლე იუპიტერის მთვარე ევროპაზე?",
    image: "/posts/1/1-europa-clipper.png",
    alt: "nasa europa clipper mission",
    authors: ["laura"],
    editors: ["givia", "emzari"],
  },
];
