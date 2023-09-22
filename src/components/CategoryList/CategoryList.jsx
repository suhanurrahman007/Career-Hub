import images1 from "../../assets/icons/accounts.png"
import images2 from "../../assets/icons/creative.png";
import images3 from "../../assets/icons/marketing.png";
import images4 from "../../assets/icons/chip.png";

const CategoryList = () => {
    return (
      <div className="text-white py-7 bg-gray-800">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold">Job Category List</h2>
          <p className="text-sm text-gray-300">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex justify-center space-x-5 mt-7 items-center">
          <div className="card rounded-lg  bg-base-100 shadow-xl">
            <figure>
              <img className="w-20 mt-7" src={images1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p className="text-sm text-gray-300">300 Jobs Available</p>
            </div>
          </div>

          <div className="card rounded-lg  bg-base-100 shadow-xl">
            <figure>
              <img className="w-20 mt-7" src={images2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Creative Design</h2>
              <p className="text-sm text-gray-300">100+ Jobs Available</p>
            </div>
          </div>

          <div className="card rounded-lg  bg-base-100 shadow-xl">
            <figure>
              <img className="w-20 mt-7" src={images3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Marketing & Sales</h2>
              <p className="text-sm text-gray-300">150 Jobs Available</p>
            </div>
          </div>

          <div className="card rounded-lg  bg-base-100 shadow-xl">
            <figure>
              <img className="w-20 mt-7" src={images4} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Engineering Job</h2>
              <p className="text-sm text-gray-300">224 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoryList;