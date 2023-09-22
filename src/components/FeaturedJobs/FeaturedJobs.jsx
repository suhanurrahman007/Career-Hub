import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showData, setShowData] = useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center space-y-3">
        <h2 className="text-2xl mt-5 font-bold">
          Featured Jobs: {jobs.length}{" "}
        </h2>
        <p className="text-sm text-gray-300">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-7">
        {jobs.slice(0, showData).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={showData === jobs.length ? "hidden": ""}>
        <button
          onClick={() => setShowData(jobs.length)}
          className="btn mt-7 bg-orange-950"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
