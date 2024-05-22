import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-center max-w-[800px] my-[-96px] mx-auto h-screen w-full text-center items-center">
        <p className="text-[#00df9a] font-bold text-xl md:text-2xl">
          GROWING WITH DATA ANALYTICS{" "}
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl py-6">
          Grow with data
        </h1>
        <div className="text-xl font-bold sm:text-4xl md:text-5xl flex justify-center py-4">
          <p>Fast, flexible financing for </p>
          <ReactTyped
            className="pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl font-extrabold text-gray-500 mx-3 md:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md p-4 my-5 text-black font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
