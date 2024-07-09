export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, link to the Kanbas application, links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" value="100" /><br /><br />
      <label htmlFor="wd-group">Assignment Group</label>
      <select id="wd-group">
        <option value="assignments">ASSIGNMENTS</option>
      </select>
      <br /><br />
      <label htmlFor="wd-display-grade-as">Display Grade as</label>
      <select id="wd-display-grade-as">
        <option value="percentage">Percentage</option>
      </select>
      <br /><br />
      <label htmlFor="wd-submission-type">Submission Type</label>
      <select id="wd-submission-type">
        <option value="online">Online</option>
      </select>
      <br /><br />
      <label>Online Entry Options</label>
      <br />
      <input type="checkbox" id="wd-text-entry" />
      <label htmlFor="wd-text-entry">Text Entry</label>
      <br />
      <input type="checkbox" id="wd-website-url" />
      <label htmlFor="wd-website-url">Website URL</label>
      <br />
      <input type="checkbox" id="wd-media-recordings" />
      <label htmlFor="wd-media-recordings">Media Recordings</label>
      <br />
      <input type="checkbox" id="wd-student-annotation" />
      <label htmlFor="wd-student-annotation">Student Annotation</label>
      <br />
      <input type="checkbox" id="wd-file-upload" />
      <label htmlFor="wd-file-upload">File Uploads</label>
      <br /><br />
      <label htmlFor="wd-assign-to">Assign to</label>
      <select id="wd-assign-to">
        <option value="everyone">Everyone</option>
      </select>
      <br /><br />
      <label htmlFor="wd-due-date">Due</label>
      <input type="date" id="wd-due-date" value="2024-05-13" /><br /><br />
      <label htmlFor="wd-available-from">Available From</label>
      <input type="date" id="wd-available-from" value="2024-05-06" /><br /><br />
      <label htmlFor="wd-available-until">Until</label>
      <input type="date" id="wd-available-until" value="2024-05-20" /><br /><br />
      <button type="submit">Save</button>
      <button type="button">Cancel</button>
    </div>
  );
}