import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="card text-white card-compact rounded-md bg-blue-950 shadow-xl">
      <img className="w-40 ml-5 mt-5" src={logo} alt="" />
      <div className="card-body space-y-1">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex space-x-5">
          <button className="btn btn-outline btn-secondary">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-secondary">{job_type}</button>
        </div>

        <div className="flex space-x-5">
          <p>{location}</p>
          <p>{salary}</p>
        </div>
        <Link to={`/job/${id}`}>
          <button className="btn mt-5 w-1/2 bg-orange-950">View Details</button>
        </Link>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
