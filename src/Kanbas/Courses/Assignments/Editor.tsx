import { useParams, Link } from 'react-router-dom'
import * as db from '../../Database'
import './styles.css'

export default function AssignmentEditor () {
  const { cid, aid } = useParams()
  const assignment = db.assignments.find(
    assignment => assignment.course === cid && assignment._id === aid
  )

  return (
    <div id='wd-assignments-editor' className='container mt-5'>
      <div className='mb-4'>
        <label htmlFor='wd-name' className='form-label'>
          <h3>Assignment Name</h3>
        </label>
        <input
          id='wd-name'
          contentEditable
          className='form-control'
          defaultValue={assignment?.title}
        />
      </div>

      <div className='mb-4 card p-4' contentEditable>
        <div id='wd-description' className=''>
          <strong>
            The assignment is{' '}
            <span className='text-danger'>available online</span>
          </strong>
          <p>
            Submit a link to the landing page of your Web application running on
            Netlify. The landing page should include the following:
          </p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p>
            The Kanbas application should include a link to navigate back to the
            landing page.
          </p>
        </div>
      </div>

      <form>
        <div className='mb-3 row'>
          <div className='col-md-8 d-flex me-1'>
            <label htmlFor='wd-points' className='col-sm-3 col-form-label'>
              Points
            </label>

            <input
              id='wd-points'
              className='form-control'
              type='number'
              defaultValue='100'
            />
          </div>
        </div>

        <div className='mb-3 row'>
          <div className='col-md-8 d-flex'>
            <label htmlFor='wd-group' className='col-sm-3 col-form-label'>
              Assignment Group
            </label>
            <select id='wd-group' className='form-select' value='ASSIGNMENTS'>
              <option value='ASSIGNMENTS'>ASSIGNMENTS</option>
              <option value='QUIZZES'>QUIZZES</option>
            </select>
          </div>
        </div>

        <div className='mb-4 row'>
          <div className='col-md-8 d-flex'>
            <label
              htmlFor='wd-display-grade-as'
              className='col-sm-3 col-form-label'
            >
              Display Grade as
            </label>
            <select
              id='wd-display-grade-as'
              className='form-select'
              value='Percentage'
            >
              <option value='Percentage'>Percentage</option>
              <option value='Letter'>Letter</option>
            </select>
          </div>
        </div>

        <div className='mb-4 row'>
          <div className='col-md-2 d-flex'>
            <label htmlFor='wd-submission-type' className='col-sm-2'>
              Submission Type
            </label>
          </div>
          <div className='col-sm-6 card p-4'>
            <select
              id='wd-submission-type'
              className='form-select'
              value='Online'
            >
              <option value='Online'>Online</option>
              <option value='Online'>In person</option>
            </select>

            <fieldset className='mb-4'>
              <legend>Online Entry Options</legend>
              <div className='form-check'>
                <input
                  id='wd-text-entry'
                  className='form-check-input'
                  type='checkbox'
                />
                <label className='form-check-label' htmlFor='wd-text-entry'>
                  Text Entry
                </label>
              </div>
              <div className='form-check'>
                <input
                  id='wd-website-url'
                  className='form-check-input'
                  type='checkbox'
                />
                <label className='form-check-label' htmlFor='wd-website-url'>
                  Website URL
                </label>
              </div>
              <div className='form-check'>
                <input
                  id='wd-media-recordings'
                  className='form-check-input'
                  type='checkbox'
                />
                <label
                  className='form-check-label'
                  htmlFor='wd-media-recordings'
                >
                  Media Recordings
                </label>
              </div>
              <div className='form-check'>
                <input
                  id='wd-student-annotation'
                  className='form-check-input'
                  type='checkbox'
                />
                <label
                  className='form-check-label'
                  htmlFor='wd-student-annotation'
                >
                  Student Annotation
                </label>
              </div>
              <div className='form-check'>
                <input
                  id='wd-file-upload'
                  className='form-check-input'
                  type='checkbox'
                />
                <label className='form-check-label' htmlFor='wd-file-upload'>
                  File Uploads
                </label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className='mb-4 row'>
          <div className='col-md-2 d-flex'>
            <label htmlFor='wd-assign-to' className='col-sm-2'>
              Assign
            </label>
          </div>

          <div className='col-sm-6 card p-4 mb-4'>
            <label htmlFor='wd-assign-to' className='form-label'>
              Assign to
            </label>
            <input
              id='wd-assign-to'
              className='form-control'
              type='text'
              placeholder='Everyone'
              defaultValue='Everyone'
            />

            <div className='mb-4 row'>
              <div>
                <label htmlFor='wd-due-date' className='form-label'>
                  Due
                </label>
                <input
                  id='wd-due-date'
                  className='form-control'
                  type='date'
                  defaultValue='2024-05-13, 11:59 PM'
                />
              </div>
            </div>

            <div className='mb-4 row'>
              <div className='col-md-6'>
                <label htmlFor='wd-available-from' className='form-label'>
                  Available from
                </label>
                <input
                  id='wd-available-from'
                  className='form-control'
                  type='date'
                  defaultValue='2024-05-06, 12:00 AM'
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='wd-available-until' className='form-label'>
                  Until
                </label>
                <input
                  id='wd-available-until'
                  className='form-control'
                  type='date'
                  defaultValue=' '
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <hr />

      <div className='d-flex justify-content-end'>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className='btn btn-secondary me-2'
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className='btn btn-danger'
        >
          Save
        </Link>
      </div>
    </div>
  )
}