import Analytic from "../assets/analytics.png";

const Analytics = () => {
  return (
    <div className="bg-black w-full text-white py-20 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={Analytic}
          alt="analytics"
          className="w-[400px] mx-auto my-4"
        />
        <div className="flex items-center justify-center flex-col md:items-start">
          <div className="p-4 ">
            <p className="text-[#00df9a] md:text-2xl">
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className="text-2xl py-3 font-bold sm:text-3xl md:text-4xl">
              Manage Data Analytics Centrally
            </h1>
            <p className="text-white py-3">
              Our Data Analytics Dashboard is designed to empower your business
              with actionable insights and data-driven decisions. Featuring
              real-time data monitoring, customizable widgets, and interactive
              visualizations, the dashboard allows you to stay ahead of the
              curve by capturing and displaying live data.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md p-4 my-5 text-black font-bold mx-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
