import myImage from "../../assets/images/user.png"
const Banner = () => {
    return (
      <div className="flex justify-between px-4 items-center">
        <div className="space-y-5">
          <h2 className="text-4xl text-white font-extrabold">
            One Step  <br /> Closer To Your <br />
            <span className="text-orange-700">Dream Job</span>
          </h2>
          <p className="text-sm text-gray-400 text-justify w-7/12">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-orange-950 text-white hover:bg-blue-950">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={myImage} alt="" />
        </div>
      </div>
    );
};

export default Banner;