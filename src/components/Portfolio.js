import { ButtonCircleLeft, ButtonCircleRight } from "./shared/Button";
import iconArrowLeft from "../assets/icon-arrow-left.svg";
import iconArrowRight from "../assets/icon-arrow-right.svg";
import portfolio from "../portfolio";
import { useState } from "react";

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [prevImg, setPrevImg] = useState(portfolio.length - 1);
  const [nextImg, setNextImg] = useState(1);

  const handleDecreaseIndex = () => {
    setIndex(prevState => {
      return index === 0 ? portfolio.length - 1 : prevState - 1;
    });

    setPrevImg(prevState => {
      return prevImg === 0 ? portfolio.length - 1 : prevState - 1;
    });

    setNextImg(prevState => {
      return nextImg === 0 ? portfolio.length - 1 : prevState - 1;
    });
  };

  const handleIncreaseIndex = () => {
    setIndex(prevState => {
      return index !== portfolio.length - 1 ? prevState + 1 : 0;
    });

    setPrevImg(prevState => {
      return prevImg !== portfolio.length - 1 ? prevState + 1 : 0;
    });

    setNextImg(prevState => {
      return nextImg !== portfolio.length - 1 ? prevState + 1 : 0;
    });
  };

  return (
    <section className=" flex flex-col justify-center items-center gap-6 mt-14  ">
      <h4 className=" text-2xl text-base-100 font-medium ">My Work</h4>
      <div className=" flex justify-center items-center relative ">
        <img
          className=" rounded-lg w-[80%] absolute left-[-75%] "
          src={portfolio[prevImg].image}
          alt=""
        />
        <img
          className=" rounded-lg w-[80%] m-auto "
          src={portfolio[index].image}
          alt=""
        />
        <img
          className=" rounded-lg w-[80%] absolute right-[-75%] "
          src={portfolio[nextImg].image}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <ButtonCircleLeft
          icon={iconArrowLeft}
          handleDecreaseIndex={handleDecreaseIndex}
        />
        <ButtonCircleRight
          icon={iconArrowRight}
          handleIncreaseIndex={handleIncreaseIndex}
        />
      </div>
    </section>
  );
};
export default Portfolio;
