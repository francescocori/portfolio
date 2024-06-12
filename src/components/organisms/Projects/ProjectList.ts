import { Hkr, DaycareSos, FoodieMania } from "../../../../public/Images";
interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  image: string;
  codeUrl?: string;
}
export const projects: Project[] = [
  {
    id: "HKR",
    title: "HKR",
    description:
      "The HKR website is a platform hosting live auctions for crushed cars, for buyers and sellers to engage in real-time bidding on salvaged vehicles.",
    liveUrl: "https://beta.hkr.co.uk/",
    image: Hkr.src,
  },
  {
    id: "DaycareSOS",
    title: "DaycareSOS",
    description:
      "Daycare SOS connects nurseries with parents, allowing easy booking of childcare spots, including last-minute and backup care. ",
    liveUrl: "https://www.daycaresos.com/",
    image: DaycareSos.src,
  },
  {
    id: "Foodie-Mania",
    title: "Foodie-Mania",
    description:
      "This is a prototype for a restaurant webpage with Community, Menu and Recipes sections, implemented on the early stage of my developer journey.",
    liveUrl: "https://foodiemania.netlify.app/",
    image: FoodieMania.src,
    codeUrl: "https://github.com/francescocori/restaurant-website",
  },
];
