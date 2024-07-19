import { BsGripVertical, BsPlus } from 'react-icons/bs'
import { FaCheckCircle, FaCircle, FaPlus, FaSearch } from 'react-icons/fa'
import { IoEllipsisVertical } from 'react-icons/io5'
import { VscNotebook } from 'react-icons/vsc'
import * as db from '../../Database'
import { useParams } from 'react-router'

import './styles.css'
export default function Assignments () {
  const { cid } = useParams()
  const assignments = db.assignments.filter(
    assignment => assignment.course === cid
  )

  const getAssignmentName = (id: any) => {
    const assignmnetprefix = id[0] 
    const assignmentsuffix = id[id.length - 1] 
    return `${assignmnetprefix}${assignmentsuffix}`
  }

  return (
    <div id='wd-assignments' className='container'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <div className='input-group w-50'>
          <span className='input-group-text bg-white border-end-0'>
            <FaSearch />
          </span>
          <input
            id='wd-search-assignment'
            className='form-control border-start-0'
            placeholder='Search for Assignments'
          />
        </div>
        <div className='d-flex'>
          <button id='wd-add-assignment-group' className='btn btn-light me-2'>
            <FaPlus className='me-1' />
            Group
          </button>
          <button id='wd-add-assignment' className='btn btn-danger'>
            <FaPlus className='me-1' />
            Assignment
          </button>
        </div>
      </div>

      <li className='list-group-item p-0 mb-5 fs-5 border-gray'>
        <h3 id='wd-assignments-title' className=' bg-light p-3 ps-2'>
          <BsGripVertical className='me-2 fs-3' />
          ASSIGNMENTS
          <div className='d-flex float-end'>
            <button className='percentage-badge border-gray float-end'>
              40% of Total
            </button>
            <BsPlus
              className='fs-2 position-relative'
              style={{ bottom: '1px' }}
            />
            <IoEllipsisVertical className='fs-4' />
          </div>
        </h3>

        <ul id='wd-assignment-list' className='list-group rounded-0'>
          {assignments.map(assignment => (
            <li
              key={assignment._id}
              className='wd-assignment-list-item list-group-item p-3 ps-1'
            >
              <div className='d-flex align-items-center'>
                <div className='icons-wrapper'>
                  <BsGripVertical className='me-2 fs-3 icon-color' />
                  <VscNotebook className='me-2 fs-5 icon-color' />
                </div>
                <div className='flex-grow-1'>
                  <a
                    className='wd-assignment-link text-green no-underline'
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    <strong>{getAssignmentName(assignment._id)}</strong>
                  </a>
                  <br />
                  <span className='wd-assignment-details'>
                    <span className='text-danger'>Multiple Modules</span> |{' '}
                    <strong>Not available until</strong> May 6 at 12:00am |
                    <br />
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </span>
                </div>
                <FaCheckCircle className='text-success me-2' />
                <IoEllipsisVertical className='fs-5' />
              </div>
            </li>
          ))}
        </ul>
      </li>
    </div>
  )
}