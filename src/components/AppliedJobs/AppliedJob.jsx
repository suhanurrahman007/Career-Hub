import PropTypes from "prop-types";

const AppliedJob = ({ appliedJob }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = appliedJob;
  return (
    <div className="card card-side rounded-md bg-base-100 shadow-xl">
      <div className="w-52 flex justify-center items-center">
        <img src={logo} alt="Movie" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex space-x-5">
          <button className="btn btn-outline btn-secondary">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-secondary">{job_type}</button>
        </div>

        <div>
          <span>{location}</span>
          <span className="ml-10">{salary}</span>
        </div>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  appliedJob: PropTypes.object.isRequired,
};

export default AppliedJob;
