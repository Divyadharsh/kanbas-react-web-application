export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
            <td>
              <input id="wd-website-url" value={100} />
            </td>
            <td>
              <input id="wd-due-date" value={100} />
            </td>
            <td>
              <input id="wd-group" value={100} />
            </td>
            <td>
              <input id="wd-media-recordings" value={100} />
            </td>
            <td>
              <input id="wd-available-from" value={100} />
            </td>
            <td>
              <input id="wd-display-grade-as" value={100} />
            </td>
            <td>
              <input id="wd-student-annotation" value={100} />
            </td>
            <td>
              <input id="wd-available-until" value={100} />
            </td>
            <td>
              <input id="wd-submission-type" value={100} />
            </td>
            <td>
              <input id="wd-file-upload" value={100} />
            </td>
            <td>
              <input id="wd-name" value={100} />
            </td>
            <td>
              <input id="wd-text-entry" value={100} />
            </td>
            <td>
              <input id="wd-assign-to" value={100} />
            </td>
          </tr>
          {/* Complete on your own */}
        </table>
      </div>
  );}
  
  