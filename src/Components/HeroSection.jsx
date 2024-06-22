import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex md:flex-row flex-col overflow-hidden">
      {/* Right Side */}
      <aside className="lg:w-[60%] w-full h-full bg-yellow-100 ">
        <Navbar />
        <motion.div
          className="w-full md:h-[88vh] md:px-16 px-8 flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 1.5 }}
        >
          <div>
            <h4 className="font-bold">Discount up to 20%</h4>
            <h1 className="text-5xl capitalize font-medium">
              Buy fresh and organic <br />
              <div className="flex gap-4">
                <h1>Grocery Food</h1>
                <div className=" hidden w-44 h-10 mt-2 overflow-hidden rounded-full absolute top-36 right-16 lg:block lg:relative lg:top-0 lg:right-0">
                  <img
                    src="https://ch-api.healthhub.sg/api/public/content/1448f38111c346ecb268da0dbd7e42fc?v=6bd78917&t=livehealthyheaderimage"
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
            </h1>
            <p className="text-slate-400 mt-8 w-4/5 leading-tight">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati nihil fugiat ducimus harum distinctio quasi esse tempore
              fugit Obcaecati nihil fugiat !
            </p>
            <div className="flex justify-between mt-12 items-center">
              <button className="font-semibold h-10 flex items-center gap-2 py-2 px-4 bg-green-800 text-white rounded-3xl">
                SHOP NOW <FaArrowRight />
              </button>
              <aside className="flex justify-between gap-4 w-[40%] md:1/3">
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">35k+</h1>
                  <span className="text-slate-400">Users</span>
                </div>
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">18k+</h1>
                  <span className="text-slate-400">Products</span>
                </div>
              </aside>
            </div>
          </div>
        </motion.div>
      </aside>

      {/* Left Side */}
      <aside className="lg:w-[40%] w-full h-full bg-green-800 ">
        <ContactUs />
        <motion.div
          className="w-full md:h-[87vh] relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
        >
          <img
            src="https://github.com/abhinav2-3/Patil-Kaki-Landing-page/blob/master/src/assets/food3.png?raw=true"
            alt="Food plate"
            className="relative md:-left-36"
          />
          <img
            src={"/leaf.png"}
            alt="Leaf"
            className="w-16 h-16 absolute md:bottom-36 md:right-32 top-0 right-20"
          />
        </motion.div>
      </aside>
    </section>
  );
};

export default HeroSection;
