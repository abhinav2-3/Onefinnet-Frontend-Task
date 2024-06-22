/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";
import { MdTitle } from "react-icons/md";
const Card = ({ title, imgURL }) => {
  return (
    <div className="lg:w-[45%] w-full h-24 flex gap-4 items-center justify-between">
      <figure className="flex gap-4 items-center">
        <img src={imgURL} alt={MdTitle} className="w-20 h-20 rounded-full" />
        <aside className="h-20 flex flex-col justify-evenly">
          <h1 className="text-2xl font-semibold text-ellipsis text-wrap">
            {title}
          </h1>
          <p className="text-slate-400 text-sm">
            Lorem ipsum dolor sit amet consectetur elit.
          </p>
        </aside>
      </figure>
      <aside className="h-20 flex flex-col justify-evenly">
        <h1 className="text-2xl font-semibold">$8.54</h1>
        <button className="text-green-800 font-semibold flex items-center gap-2">
          <span>Shop Now </span>
          <FaArrowRight />
        </button>
      </aside>
    </div>
  );
};

export default Card;
