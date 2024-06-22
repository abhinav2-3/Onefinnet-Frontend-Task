import { useEffect, useState } from "react";
import { FoodButton } from "../Utils/data.json";
import Card from "./Card";
import Loader from "./Loader";
const CategorySection = () => {
  const [data, setData] = useState([]);
  const [activeBtn, setActiveBtn] = useState("Vegetarian");
  const [loading, setLoading] = useState(false);

  const API = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeBtn}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.meals);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        console.log("Data fetched Successfully");
        setLoading(false);
      }
    };

    fetchData();
  }, [API]);

  return (
    <section className="w-full md:h-screen flex gap-4 flex-col antialiased md:p-12 p-8 bg-white">
      <h4 className="font-bold text-lg text-center text-green-950">
        Shop By Category
      </h4>
      <h1 className="text-4xl font-semibold text-green-950 text-center">
        Top Category Of Organic Food
      </h1>
      <div className="flex w-full gap-6 mt-8 overflow-x-auto md:overflow-visible">
        {FoodButton.map((btn) => {
          return (
            <button
              key={btn.name}
              onClick={() => setActiveBtn(btn.category)}
              className={`uppercase py-1 text-sm md:text-lg px-4 md:py-3 md:px-8 bg-green-800 text-white font-medium rounded-3xl ${
                activeBtn !== btn.category && "bg-slate-300/40 text-black"
              }`}
            >
              {btn.name}
            </button>
          );
        })}
      </div>
      <div className="flex gap-8 w-full flex-wrap">
        {loading ? (
          <Loader />
        ) : (
          data.map((item) => {
            return (
              <Card
                key={item?.idMeal}
                title={item?.strMeal}
                imgURL={item?.strMealThumb}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default CategorySection;
