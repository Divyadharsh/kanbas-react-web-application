export default function Dashboard() {
  return (
      <div>
          <h1 id="wd-dashboard-title">Dashboard</h1>
          <hr/>
          <h2 id="wd-dashboard-published">Published Courses (8)</h2>
          <hr/>
          <div id="wd-dashboard-courses" className="row">
              <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 g-4">
                  <div className="wd-dashboard-course col" style={{width: "300px"}}>
                      <div className="card">
                          <img src="/images/reactjs.jpg" className="card-img-top" alt="bg img"/>
                          <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                 href="#/Kanbas/Courses/1234/Home"
                                 style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                  CS1234 React JS
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">Full Stack software developer</a>
                              </p>
                              <p className="wd-dashboard-course-title course-info">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">CS1234.2023.12971 Fall_2024 Semester Full Term</a>
                              </p>
                              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                          </div>
                      </div>
                  </div>

                  <div className="wd-dashboard-course col" style={{width: "300px"}}>
                      <div className="card">
                          <img src="/images/reactjs.jpg" className="card-img-top" alt="bg img"/>
                          <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                 href="#/Kanbas/Courses/1234/Home"
                                 style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                  CS2345 Angular JS
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">Web Stack Validation </a>
                              </p>
                              <p className="wd-dashboard-course-title course-info">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">CS2345.2023.19865 Fall_2024 Semester Full Term</a>
                              </p>
                              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                          </div>
                      </div>
                  </div>

                  <div className="wd-dashboard-course col" style={{width: "300px"}}>
                      <div className="card">
                          <img src="/images/reactjs.jpg" className="card-img-top" alt="bg img"/>
                          <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                 href="#/Kanbas/Courses/1234/Home"
                                 style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                  CS8910 TypeScript
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">Type Script Validation</a>
                              </p>
                              <p className="wd-dashboard-course-title course-info">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">CS8910.2023.10865 Fall_2024 Semester Full Term</a>
                              </p>
                              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                          </div>
                      </div>
                  </div>

                  <div className="wd-dashboard-course col" style={{width: "300px"}}>
                      <div className="card">
                          <img src="/images/reactjs.jpg" className="card-img-top" alt="bg img"/>
                          <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                 href="#/Kanbas/Courses/1234/Home"
                                 style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                  CS3456 Core Java
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">Full Stack JAVA developer</a>
                              </p>
                              <p className="wd-dashboard-course-title course-info">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">CS3456.2023.97342 Fall_2024 Semester Full Term</a>
                              </p>
                              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                          </div>
                      </div>
                  </div>

                  <div className="wd-dashboard-course col" style={{width: "300px"}}>
                      <div className="card">
                          <img src="/images/reactjs.jpg" className="card-img-top" alt="bg img"/>
                          <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                 href="#/Kanbas/Courses/1234/Home"
                                 style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                  CS6120 Natural Language Processing
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">Machine Learning Algorithms</a>
                              </p>
                              <p className="wd-dashboard-course-title course-info">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">CS6120.2023.21890 Fall_2024 Semester Full Term</a>
                              </p>
                              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                          </div>
                      </div>
                  </div>

                  <div className="wd-dashboard-course col" style={{width: "300px"}}>
                      <div className="card">
                          <img src="/images/reactjs.jpg" className="card-img-top" alt="bg img"/>
                          <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                 href="#/Kanbas/Courses/1234/Home"
                                 style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                  CS6704 Python Programming
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">Python Developer</a>
                              </p>
                              <p className="wd-dashboard-course-title course-info">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">CS6704.2023.86501 Summer_2024 Semester Full Term</a>
                              </p>
                              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                          </div>
                      </div>
                  </div>

                  <div className="wd-dashboard-course col" style={{width: "300px"}}>
                      <div className="card">
                          <img src="/images/reactjs.jpg" className="card-img-top" alt="bg img"/>
                          <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                 href="#/Kanbas/Courses/1234/Home"
                                 style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                  CS6540 Programming and Design Principle
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">Programming Algorithms</a>
                              </p>
                              <p className="wd-dashboard-course-title course-info">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">CS6540.2023.40567 Fall_2024 Semester Full Term</a>
                              </p>
                              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                          </div>
                      </div>
                  </div>

                  <div className="wd-dashboard-course col" style={{width: "300px"}}>
                      <div className="card">
                          <img src="/images/reactjs.jpg" className="card-img-top" alt="bg img"/>
                          <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                 href="#/Kanbas/Courses/1234/Home"
                                 style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                  CS7120 Unsupervised Learning
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">Machine Learning Algorithm</a>
                              </p>
                              <p className="wd-dashboard-course-title course-info">
                                  <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">CS7120.2023.95087 Summer_2024 Semester Full Term</a>
                              </p>
                              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}