import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full py-20 px-4 bg-black">
      <div className="sm: flex-col max-w-[1240px] mx-auto text-white flex gap-14 md:flex-row ">
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl font-bold text-[#00df9a] md:text-3xl ">
            RITZ.
          </h1>
          <div className="max-w-[700px] ">
            <p>
              Empower your business with real-time insights, customizable
              widgets, and interactive visualizations. Seamlessly integrate data
              from multiple sources and leverage advanced analytics for informed
              decision-making. Transform your data into a strategic asset.
            </p>
          </div>

          <div className="gap-4 flex flex-row  ">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaSquareXTwitter size={30} />
            <FaSquareGithub size={30} />
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-between text-start w-full ">
          <div className="flex flex-col gap-3">
            <h1 className=" text-gray-500">Solutions </h1>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
            <p>Insights</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" text-gray-500">Support </h1>
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Guides</p>
            <p>API Status</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" text-gray-500">Company </h1>
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Press</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" text-gray-500">Legal </h1>
            <p>Claim</p>
            <p>Policy</p>
            <p>Terms</p>
            <p>Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
