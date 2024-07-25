import React from "react";
import { TbChefHat } from "react-icons/tb";
import { CiForkAndKnife } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const AboutContent = [
  {
    id: 1,
    title: "Our Chef",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatem! lorem ipsum dolor sit amet consectetur adipisicing elit.",
    logo: <TbChefHat size={50} color="blue" />,
  },
  {
    id: 2,
    title: "Quality Food",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatem! lorem ipsum dolor sit amet consectetur adipisicing elit.",
    logo: <CiForkAndKnife size={50} color="blue" />,
  },
  {
    id: 3,
    title: "Online Order",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatem! lorem ipsum dolor sit amet consectetur adipisicing elit.",
    logo: <MdOutlineShoppingCart size={50} color="blue" />,
  },
];

const About = () => {
  return (
    <section id="about" className="w-full  pt-32">
      <div className="w-full h-full flex flex-col">
        <div>
          <h1 className="text-5xl font-bold text-gray-200 text-center">
            About Us
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full px-10 lg:px-0 pt-5 gap-5">
          <figure className="flex items-center justify-end lg:pt-5">
            <img
              src="/About-img.jpg"
              alt=""
              className="w-[500px] h-[75%]  rounded-xl"
            />
          </figure>
          <div className="w-auto h-auto text-gray-200 rounded-xl p-5 flex flex-col gap-2">
            <h1 className="text-center text-2xl font-bold">SAVORY</h1>
            <p>
              Savory, sebuah kata yang membangkitkan selera dan aroma lezat,
              membawa kita ke dunia kuliner yang penuh dengan rasa gurih yang
              memikat. Di balik namanya yang sederhana, Savory menawarkan lebih
              dari sekadar hidangan biasa. Ini adalah sebuah pengalaman, sebuah
              perjalanan rasa yang memanjakan lidah dan membawa Anda ke
              ketinggian baru dalam menikmati makanan.
            </p>
            <p>
              Di Savory, Anda akan menemukan perpaduan sempurna antara cita rasa
              tradisional dan modern, disajikan dengan sentuhan kreatif dan
              penuh passion. Setiap hidangan dibuat dengan bahan-bahan segar
              berkualitas tinggi, diolah dengan teknik yang tepat untuk
              menghasilkan rasa gurih yang autentik dan tak terlupakan.
            </p>
            <p>
              Savory bukan hanya sebuah restoran, tetapi sebuah destinasi
              kuliner yang wajib dikunjungi bagi para pecinta rasa gurih. Di
              sini, Anda akan menemukan pengalaman makan yang tak terlupakan, di
              mana setiap gigitan adalah sebuah petualangan rasa yang
              mengagumkan.
            </p>
          </div>
        </div>

        <div className="w-[500px] lg:w-full h-[300px] overflow-x-hidden py-1">
          <div className="grid lg:grid-cols-3 mt-5 px-5 gap-5">
            {AboutContent.map((item) => (
              <div
                className="bg-gray-400 rounded-xl h-[200px] flex flex-col px-5 py-2 hover:bg-gray-500 text-gray-800 hover:text-gray-200"
                key={item.id}
              >
                {item.logo}
                <h1 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
