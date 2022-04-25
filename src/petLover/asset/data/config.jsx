import carasol1 from "../images/carousel-1.jpg";
import carasol2 from "../images/carousel-2.jpg";
import img1 from "../images/team-1.jpg";
import img2 from "../images/team-2.jpg";
import img3 from "../images/team-3.jpg";
import img4 from "../images/team-4.jpg";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
import price1 from "../images/price-1.jpg";
import price2 from "../images/price-2.jpg";
import price3 from "../images/price-3.jpg";
// import "../"
import { FaTimes, FaCheck, FaHome, FaBone } from "react-icons/fa";
// import "../style/card.css";
// import "./style/card.css";
// ============
// Carasole Data
// ============

export const HeadData = [
  {
    text: "Best Pet Services",
    head: "Keep Your Pet Happy",
    image: carasol1,
    para: "When got here, I dont think You'll regret",
  },
  {
    text: "Best Pet Services",
    head: "Pet Spa & Grooming",
    image: carasol2,
    para: "When got here, I dont think You'll regret",
  },
];
// ============
// Booking Data
// ============
export const BookingData = [
  {
    image: <FaHome />,
    title: "Pet Boarding",
    message: " When got here, I dont think You'll regret",
  },
  {
    image: <FaBone />,
    title: "Pet Feeding",
    message: " When got here, I dont think You'll regret",
  },
  {
    image: <FaBone />,
    title: "Pet Grooming",
    message: " When got here, I dont think You'll regret",
  },
  {
    image: <FaBone />,
    title: "Pet Tranning",
    message: " When got here, I dont think You'll regret",
  },
];
export const ServicesData = [
  {
    image: <FaHome />,
    title: "Pet Boarding",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
  {
    image: <FaBone />,
    title: "Pet Feeding",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
  {
    image: <FaHome />,
    title: "Pet Boarding",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
  {
    image: <FaBone />,
    title: "Pet Grooming",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
  {
    image: <FaBone />,
    title: "Pet Tranning",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
  {
    image: <FaHome />,
    title: "Pet Boarding",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
];
export const TeamData = [
  {
    image: <img src={img1} className=" w-full h-[300px]" />,
    name: "Molie Rose",
    discipline: "founder & CEO",
  },
  {
    image: <img src={img2} className=" w-full h-[300px]" />,
    name: "Jennifer Page",
    discipline: "Chief Executive",
  },
  {
    image: <img src={img3} className=" w-full h-[300px]" />,
    name: "Kate Glover",
    discipline: "Docter",
  },
  {
    image: <img src={img4} className=" w-full h-[300px]" />,
    name: "Lilly Fry",
    discipline: "Trainer",
  },
];

export const BlogData = [
  {
    image: <img src={blog1} className="w-full rounded-t-md" />,
    title: "Pet Treatment",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
  {
    image: <img src={blog2} className="w-full rounded-t-md" />,
    title: "Pet Caring",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
  {
    image: <img src={blog3} className="w-full rounded-t-md" />,
    title: "Pet Grooming",
    message:
      "When got here, I dont think You'll regret When got here, I dont think You'll regret When got here,",
  },
];
export const PriceData = [
  {
    image: <img src={price1} className="w-full rounded-t-md " />,
    quality: "Best",
    price: "49",
    care1: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {"Feeding"}
      </p>
    ),
    care2: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {"Boarding"}
      </p>
    ),
    care3: (
      <p>
        <span className="text-red-700">
          <FaTimes />
        </span>
        {"Spa & Grooming"}
      </p>
    ),
    care4: (
      <p>
        <span className="text-red-700">
          <FaTimes />
        </span>
        {" Veterinary Medicine"}
      </p>
    ),
    btn: (
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-[50px]">
        Read More
      </button>
    ),
  },
  {
    image: <img src={price2} className="w-full rounded-t-md" />,
    quality: <p className="text-green-500"> Standard</p>,
    price: "99",
    care1: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {"Feeding"}
      </p>
    ),
    care2: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {"Boarding"}
      </p>
    ),
    care3: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {"Spa & Grooming"}
      </p>
    ),
    care4: (
      <p>
        <span className="text-red-700">
          <FaTimes />
        </span>
        {" Veterinary Medicine"}
      </p>
    ),
    btn: (
      <button className="font-bold w-full bg-green-600 hover:bg-green-700 hover:text-black text-white h-[50px]">
        Read More
      </button>
    ),
  },
  {
    image: <img src={price3} className="w-full rounded-t-md" />,
    quality: "Premium",
    price: "149",
    care1: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {"Feeding"}
      </p>
    ),
    care2: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {"Boarding"}
      </p>
    ),
    care3: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {"Spa & Grooming"}
      </p>
    ),
    care4: (
      <p>
        <span className="text-green-700">
          <FaCheck />
        </span>
        {" Veterinary Medicine"}
      </p>
    ),
    btn: (
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-[50px]">
        Read More
      </button>
    ),
  },
];

export const blogp1 = (
  <p>
    Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit
    diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna
    kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum
    sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur
    justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores
    diam nonumy, gubergren sit stet no diam kasd vero, eos tempor gubergren
    clita est consetetur dolores et dolor. Sadipscing lorem kasd labore ea
    sanctus sanctus, dolores invidunt et consetetur et duo. Tempor dolores
    accusam sit vero sit, sed labore duo vero et at, et amet et justo gubergren.
    Labore aliquyam voluptua dolor nonumy lorem. Sanctus sed sadipscing rebum
    ipsum dolor et ea no. Ipsum elitr sea erat.
  </p>
);
export const blogp2 = (
  <p>
    {" "}
    Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam
    dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam
    stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero
    sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam
    ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no
    diam sit. Dolor erat justo dolore sit invidunt, sed duo dolor et amet no et.
    Ut takimata tempor kasd amet kasd ut. No et ipsum amet tempor et. Sed nonumy
    sed vero ut, sed aliquyam accusam clita dolores tempor est. Ea et takimata
    consetetur et amet sanctus. Duo no diam ipsum diam dolores, eirmod diam
    dolores clita sed erat magna. Dolore ut amet ea magna. Sea et dolore sit
    labore at amet eos. Dolor voluptua sit rebum sit ut nonumy. Dolor amet amet
    sit sadipscing, lorem.
  </p>
);
export const blogp3 = (
  <p>
    Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua
    tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata
    justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat
    diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet
    eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing
    gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
    voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero
    ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit
    ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem
    clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.
    Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no
    justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr
    aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod
    vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos
    magna, justo gubergren labore sit voluptua eos. Dolores et no stet magna et
    gubergren amet dolor sit, lorem dolore est vero et. Justo erat magna ipsum
    magna sea. Magna amet est sit sed sadipscing. At takimata dolores ut dolore
    takimata stet nonumy ipsum, gubergren vero ea consetetur aliquyam kasd est
    magna justo, dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet
    duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo ut,
    accusam erat sed dolor at accusam takimata ipsum sea diam. Ipsum voluptua
    lorem sed amet, amet sea sit et at nonumy labore takimata, justo ipsum
    voluptua stet takimata. Ea lorem elitr aliquyam gubergren sit magna sanctus,
    sed sed dolore ipsum justo dolor et amet invidunt erat.
  </p>
);

export const BlogData3 = [
  {
    image: (
      <img
        src={blog1}
        className="w-[70px] h-[70px] rounded mr-1 md:mr-3 mt-2 float-left"
      />
    ),
  },
  {
    image: (
      <img
        src={blog2}
        className="w-[70px] h-[70px] rounded mr-1 md:mr-3 mt-2 float-left"
      />
    ),
  },
  {
    image: (
      <img
        src={blog3}
        className="w-[70px] h-[70px] rounded mr-1 md:mr-3 mt-2 float-left"
      />
    ),
  },
  {
    image: (
      <img
        src={blog1}
        className="w-[70px] h-[70px] rounded mr-1 md:mr-3 mt-2 float-left"
      />
    ),
  },
  {
    image: (
      <img
        src={blog2}
        className="w-[70px] h-[70px] rounded mr-1 md:mr-3 mt-2 float-left"
      />
    ),
  },
];
// export const data = [
//   {
//     image: <img src={img1} className="img1 w-[320px] h-[400px]" />,
//     name: "burger",
//     price: "$23",
//   },
//   {
//     image: <img src={img2} className="img1 w-[320px] h-[400px]" />,
//     name: "Achary",
//     price: "$23",
//   },
//   {
//     image: <img src={img3} className="img1 w-[320px] h-[400px]" />,
//     name: "Cake",
//     price: "$23",
//   },
//   {
//     image: <img src={img4} className="img1 w-[320px] h-[400px]" />,
//     name: "Handburger",
//     price: "$16",
//   },
//   {
//     image: <img src={img5} className="img1 w-[320px] h-[400px]" />,
//     name: "Karaye",
//     price: "$16",
//   },
//   {
//     image: <img src={img6} className="img1 w-[320px] h-[400px]" />,
//     name: "Omlet",
//     price: "$23",
//   },
// ];

// export const ProductData = [
//   {
//     image: <img src={img7} className="img1 w-full h-[400px]" />,
//     name: "Fresh Kabab",
//     price: "$23",
//   },
//   {
//     image: <img src={img8} className="img1 w-full h-[400px]" />,
//     name: "Hot Pizza",
//     price: "$23",
//   },
//   {
//     image: <img src={img3} className="img1 w-full h-[400px]" />,
//     name: "Ice Cream",
//     price: "$23",
//   },
// ];
// export const ReviewData = [
//   {
//     image: <img src={img7} className="img2" />,
//     name: "Kaleem Ullah",
//     message: "The food was quite delicious  and the staff was amazing.",
//   },
//   {
//     image: <img src={img8} className="img2" />,
//     name: "Wajid Afridi",
//     message: "The food was quite delicious  and the staff was amazing.",
//   },
//   {
//     image: <img src={img3} className="img2" />,
//     name: "Adnan Ahmad",
//     message: "The food was quite delicious  and the staff was amazing.",
//   },
// ];

// export const card = [
//   {
//     image: <img src={crd} className="Card__img" />,
//     head: "traditional",
//     text: "Lorem Ipsum is simply dummy text of the printing text of the printing text of the printing and typesetting industry. Lorem Ipsuma type specimen book",
//   },
//   {
//     image: <img src={crd} className="Card__img" />,
//     head: "chipotly",
//     text: "Lorem Ipsum is simply dummy text of the printing text of the printing text of the printing and typesetting industry. Lorem Ipsuma type specimen book",
//   },
//   {
//     image: <img src={crd} className="Card__img" />,
//     head: "salsa picante",
//     text: "Lorem Ipsum is simply dummy text of the printing text of the printing text of the printing and typesetting industry. Lorem Ipsuma type specimen book",
//   },
// ];

export const FilterRecord = [
  {
    id: 1,
    option: "web",
    image: img1,
    subtitle: "i am ali",
  },
  {
    id: 2,
    option: "web",
    image: img2,
    subtitle: "i am ahmad",
  },
  {
    id: 3,
    option: "app",
    image: img3,
    subtitle: "i am rahat",
  },
  {
    id: 4,
    option: "ios",
    image: blog1,
    subtitle: "i am abid",
  },
  {
    id: 5,
    option: "app",
    image: img1,
    subtitle: "i am ali",
  },
];

// export const sliderData = [
//   {
//     message:
//       "I have never had an elote. But if they take like this then i love elotes!",
//     image: crd,
//     name: "Kaleem Ullah.",
//     Specialization: "Product Manager",
//   },
//   {
//     message:
//       "These taste so aunthentic reminds me of visiting my abuela in oaxaca !",
//     image: crd,
//     name: "Shafi Ullah.",
//     Specialization: "Product Designer",
//   },
//   {
//     message:
//       "I have never had an elote. But if they take like this then i love elotes!",
//     image: crd,
//     name: "Kaleem Ullah.",
//     Specialization: "Product Manager",
//   },
//   {
//     message:
//       "These taste so aunthentic reminds me of visiting my abuela in oaxaca !",
//     image: crd,
//     name: "Shafi Ullah.",
//     Specialization: "Product Designer",
//   },
//   {
//     message:
//       "I have never had an elote. But if they take like this then i love elotes!",
//     image: crd,
//     name: "Kaleem Ullah.",
//     Specialization: "Product Manager",
//   },
//   {
//     message:
//       "These taste so aunthentic reminds me of visiting my abuela in oaxaca !",
//     image: crd,
//     name: "Shafi Ullah.",
//     Specialization: "Product Designer",
//   },
// ];
