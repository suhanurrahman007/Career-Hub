import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../utility/LocalStoage";
import { useState, useEffect } from "react";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([])

  useEffect(() => {
    const appliedJob = getStoreJobApplication();
    const applied = [];
    if (jobs.length > 0) {
      for (const id of appliedJob) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          applied.push(job);
        }
      }
      setAppliedJobs(applied)
    }
  }, []);


  return (
    <div className="grid gap-5 mx-auto">
      <h2 className="text-2xl font-extrabold text-center p-7">Applied Job</h2>
      {appliedJobs.map((appliedJob, id) => <AppliedJob key={id} appliedJob={appliedJob}></AppliedJob>)}
    </div>
  );
};

export default AppliedJobs;
