import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = job;

  console.log(id);
  return (
    <div className="py-5">
      <h2 className="text-2xl font-bold text-center p-7">Job Details</h2>
      <div className="flex justify-between items-center">
        <div className="w-7/12 space-y-5">
          <p className="text-sm text-gray-400 text-justify">
            <span className="text-lg font-bold text-white">
              Job Description:{" "}
            </span>
            {job_description}
          </p>
          <p className="text-sm text-gray-400 text-justify">
            <span className="text-lg font-bold text-white">
              Job Responsibility:{" "}
            </span>
            {job_responsibility}
          </p>

          <p className="text-sm text-gray-400 text-justify">
            <span className="text-lg font-bold text-white">
              Educational Requirements:
            </span>{" "}
            <br />
            {educational_requirements}
          </p>
          <p className="text-sm text-gray-400 text-justify">
            <span className="text-lg font-bold text-white">Experiences:</span>
            <br />
            {experiences}
          </p>
        </div>
        <div className="bg-blue-950 p-7 w-4/12">
          <h2 className="text-lg text-white font-bold">Job Details</h2>
          <hr className="my-3" />
          <div className="space-y-3">
            <p className="text-sm text-gray-400 text-justify">
              <span className="text-md font-bold text-white">Salary: </span>
              {salary}
            </p>
            <p className="text-sm text-gray-400 text-justify">
              <span className="text-md font-bold text-white">Job Title: </span>
              {job_title}
            </p>
          </div>
          <h2 className="text-lg mt-3 text-white font-bold">
            Contact Information
          </h2>
          <hr className="my-3" />

          <div>
            <p className="text-sm text-gray-400 text-justify">
              <span className="text-md font-bold mr-2 text-white">Phone: </span>
              {contact_information.phone}
            </p>
            <p className="text-sm text-gray-400 text-justify">
              <span className="text-md font-bold mr-2 text-white">Email: </span>
              {contact_information.email}
            </p>
            <p className="text-sm text-gray-400 text-justify">
              <span className="text-md font-bold mr-2 text-white">
                Address:{" "}
              </span>
              {contact_information.address}
            </p>
          </div>
          <button className="btn mt-7 w-full bg-orange-950">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
