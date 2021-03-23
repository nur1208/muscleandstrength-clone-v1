import { BsCreditCard } from "react-icons/bs";

export const features = [
  {
    link: "#",
    image: "https://cdn.muscleandstrength.com/images/fallback/mns-rewards.png",
    text: (
      <>
        Earn Points
        <span className="new-line">On Everything</span>
      </>
    ),
  },
  {
    link: "#",
    image: "/images/nav-store.png",
    text: (
      <>
        Free Samples
        <span className="new-line">With All Orders</span>
      </>
    ),
  },
  {
    link: "#",
    image: "/images/truck.png",
    text: (
      <>
        Same Day
        <span className="new-line">Shipping</span>
      </>
    ),
  },
  {
    link: "#",
    image: "https://cdn.muscleandstrength.com/images/fallback/mns-rewards.png",
    icon: <BsCreditCard />,
    text: (
      <>
        Money Back
        <span className="new-line">Guarantee</span>
      </>
    ),
  },
];
