import { FaArrowRight } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import { motion } from "framer-motion";
const ContactUs = () => {
  return (
    <motion.nav
      className="flex text-white text-lg py-6 px-12 justify-between place-items-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
    >
      <div className="flex items-center gap-2">
        <h1 className="font-medium text-sm">Contact with us</h1>
        <FaArrowRight />
      </div>
      <div className="flex gap-4 font-medium">
        <a
          href=""
          className="w-9 rounded-full h-9 flex items-center justify-center bg-black/20 border duration-200 hover:-translate-y-2"
        >
          <BiSearchAlt />
        </a>
        <a
          href=""
          className="w-9 rounded-full h-9 flex items-center justify-center bg-black/20 border duration-200 hover:-translate-y-2"
        >
          <FaRegUser />
        </a>
        <a
          href=""
          className="w-9 rounded-full h-9 flex items-center justify-center bg-black/20 border duration-200 hover:-translate-y-2"
        >
          <IoMdHeartEmpty />
        </a>
        <a
          href=""
          className="w-9 rounded-full h-9 flex items-center justify-center bg-black/20 border duration-200 hover:-translate-y-2"
        >
          <TbShoppingBag />
        </a>
      </div>
    </motion.nav>
  );
};

export default ContactUs;
