import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.nav
      className="flex text-lg py-6 px-12 justify-between font-semibold  place-items-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
    >
      <div className="flex gap-2 uppercase">
        <h4>Go</h4>
        <h1 className="font-bold">Food</h1>
      </div>
      <div className="flex gap-8 font-medium">
        <a href="">Home</a>
        <a href="">Groceries</a>
        <a href="">Pages</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
