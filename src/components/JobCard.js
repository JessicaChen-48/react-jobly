import { useRef, useContext, useEffect, useState } from "react";
import UserContext from "../userContext";
import "./Company.css"

function JobCard({ job }) {
  const { currentUser, applyForJob } = useContext(UserContext);
  const { id, title, salary, equity, companyName } = job;
  const isApplied =
    !currentUser || !currentUser.jobs
      ? false
      : currentUser.jobs.includes(id);

  async function handleClick(e) {
    await applyForJob(id);
  }

  return (
    <div className="card w-75 mb-3">
      <div className="card-body col-sm-8">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{companyName}</h5>
        <p className="card-text">Salary: {salary}</p>
        <p className="card-text">Equity: {equity}</p>
        {!isApplied && (
          <button onClick={handleClick} className="btn btn-danger">
            Apply
          </button>
        )}
        {isApplied && <button className="btn btn-success">APPLIED</button>}
      </div>
    </div>
  );
}

export default JobCard;

// ask about local storage
