const Newsletter = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl text-[#00df9a] py-3 font-bold sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-xl md:text-2xl">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="flex flex-col py-4 gap-4">
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="text-black p-4 rounded-md w-full"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md p-4 text-black font-bold">
              Notify me
            </button>
          </div>
          <div>
            <p>
              We care about the protection of your data. Read our{" "}
              <span className="text-[#00df9a]">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
