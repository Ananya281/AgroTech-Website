import { FocusCards } from "./focus-cards";

import img1 from "../../assets/image/img1.png";
import img2 from "../../assets/image/img2.png";
import img3 from "../../assets/image/img3.png";
import img4 from "../../assets/image/img4.png";
import img5 from "../../assets/image/img5.png";
import img6 from "../../assets/image/img6.png";
import img7 from "../../assets/image/img7.png";
import img8 from "../../assets/image/img8.png";
import img9 from "../../assets/image/img9.png";
import img10 from "../../assets/image/img10.png";
import img11 from "../../assets/image/img11.png";
import img12 from "../../assets/image/img12.png";
import img13 from "../../assets/image/img13.png";
import img14 from "../../assets/image/img14.png";
import img15 from "../../assets/image/img15.png";


export function FocusCardsDemo() {
    
  const cards = [
    {
      title: "Forest Adventure",
      src: {img1},
    },
    {
      title: "Valley of life",
      src: {img3},
    },
    {
      title: "image description",
      src: {img4},
    },
    {
      title: "Camping is for pros",
      src: {img11},
    },
    {
      title: "The road not taken",
      src: {img8},
    },
    {
      title: "The First Rule",
      src: {img6},
    },
  ];

  return <FocusCards cards={cards} />;
}
