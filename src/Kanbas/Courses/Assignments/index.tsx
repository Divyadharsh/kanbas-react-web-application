import React from "react";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { BsGripVertical } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import AssignmentsControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <ul id="wd-assignments" className="list-group rounded-0 my-2">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="fs-4" />
          <IoMdArrowDropdown className="mx-2" />
          <b>ASSIGNMENTS</b>
          <IoEllipsisVertical className="float-end mt-1"/>
          <FaPlus className="float-end text-secondary mx-2 mt-1" />
          <span className="badge rounded-pill float-end text-dark border border-secondary">40% of Total</span>
        </div>
        <ul id="wd-assignment-list" className="list-group rounded-0">
          {courseAssignments.map(assignment => (
            <li className="wd-assignment-list-item list-group-item p-3" style={{borderLeft: "5px solid green"}}>
              <div className="row align-items-center">
                <div className="col-1">
                  <BsGripVertical className="fs-4" />
                </div>
                <div className="col-1">
                  <FaRegEdit className="text-success" />
                </div>
                <div className="col">
                  <Link className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                    key={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    <h5><b>{assignment._id}</b></h5>
                  </Link>
                  <p>
                  <span className='text-danger'>Multiple Modules</span> |{' '}
                    <strong>Not available until</strong> May 6 at 12:00am |
                    <br />
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
  </p>
                </div>
                <div className="col float-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}