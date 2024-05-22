import { FaRegUser } from "react-icons/fa6";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full text-black bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-7 shadow-xl w-full items-center text-center hover:scale-105 duration-300">
          <FaRegUser size={50} className="mx-auto  " />
          <h1 className="text-xl font-bold md:text-2xl">Single User</h1>
          <p className="text-2xl font-bold md:text-3xl">250$</p>
          <div>
            <p className="border-b-2 p-3">500 GB Storage</p>
            <p className="border-b-2 p-3">1 Granted User</p>
            <p className="border-b-2 p-3">Send upto 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md p-3 my-5 text-black font-bold">
            Start Trial
          </button>
        </div>
        <div className="sm:my-8 bg-gray-100 flex flex-col gap-7 shadow-xl w-full items-center hover:scale-105 duration-300 text-center md:my-0">
          <img src={Double} alt="/" className="w-20 mx-auto" />
          <h1 className="text-xl font-bold md:text-2xl">Two Users</h1>
          <p className="text-2xl font-bold md:text-3xl">420$</p>
          <div>
            <p className="border-b-2 p-3">2 TB Storage</p>
            <p className="border-b-2 p-3">2 Granted Users</p>
            <p className="border-b-2 p-3">Send upto 5 GB</p>
          </div>
          <button className="bg-black w-[150px] rounded-md p-3 my-5 text-[#00df9a] font-bold">
            Start Trial
          </button>
        </div>
        <div className="flex flex-col gap-7 shadow-xl w-full items-center text-center hover:scale-105 duration-300">
          <img src={Triple} alt="/" className="w-20 mx-auto " />
          <h1 className="text-xl font-bold md:text-2xl">Three Users</h1>
          <p className="text-2xl font-bold md:text-3xl">690$</p>
          <div>
            <p className="border-b-2 p-3">5 TB Storage</p>
            <p className="border-b-2 p-3">3 Granted Users</p>
            <p className="border-b-2 p-3">Send upto 10 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md p-3 my-5 text-black font-bold">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
