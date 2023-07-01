import LechonManok from "assets/images/items/1.png";
import ChickenCombo from "assets/images/items/2.png";
import ChickenSisig from "assets/images/items/3.png";
import LechonLiempo from "assets/images/items/4.png";
import LimepoCombo from "assets/images/items/5.png";
import LiempoSisig from "assets/images/items/6.png";

export const Items = [
  {
    id: 1,
    name: "Lechon Manok",
    image: LechonManok,
    description:
      "Mouthwatering Lechon Manok flavored from secret herbs and spices and grilled until golden brown and made even more delicious by the lechon sauce.",
    price: { half: "160", full: "310" },
  },
  {
    id: 2,
    name: "Chicken Combo",
    image: ChickenCombo,
    description:
      "This is a combination of Lechon manok and chicken sisig so you can taste the same menu.",
    price: { half: "", full: "340" },
  },
  {
    id: 3,
    name: "Chicken Sisig",
    image: ChickenSisig,
    description:
      "Freshly cooked lechon manok deboned and chopped until smooth and flavored with our natural and secret ingredients.",
    price: { half: "340", full: "175" },
  },
  {
    id: 4,
    name: "Lechon Liempo",
    image: LechonLiempo,
    description:
      "Juicy and freshly cooked pork belly grilled until golden brown and flavored with lechon sauce.",
    price: { half: "", full: "240" },
  },
  {
    id: 5,
    name: "Liempo Combo",
    image: LimepoCombo,
    description:
      "Freshly cooked roasted liempo chopped to a crisp and flavored with our natural and secret ingredients.",
    price: { half: "", full: "255" },
  },
  {
    id: 6,
    name: "Liempo Sisig",
    image: LiempoSisig,
    description:
      "Freshly cooked roasted liempo chopped to a crisp and flavored with our natural and secret ingredients.",
    price: { half: "", full: "255" },
  },
];
