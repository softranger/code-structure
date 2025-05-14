// src/pages/Dashboard.jsx
export default function Dashboard() {
  return (
        <div>

            {/*  Expire Plan  */}
            <div className="bg-purple-100 p-1 text-center">
                <p className="text-purple">Your Trial Ends in 6 Days, <a href="plans-and-billings.html" className="text-decoration-underline link-purple fw-medium">Choose Plan</a></p>
            </div>
            {/*  /Expire Plan  */}

            <div className="content">

                {/*  head  */}
                <div className="mb-4 d-flex align-items-center flex-wrap gap-2 justify-content-between dashboard-title">
                    <div>
                        <h4 className="fw-bold">Admin Dashboard</h4>
                    </div>
					<div id="reportrange" className="reportrange-picker d-flex align-items-center">
						<i className="ti ti-calendar text-gray-5 fs-14 me-1"></i><span className="reportrange-picker-field"></span>
					</div>
                </div>
                {/*  head  */}

                {/*  time info  */}
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12 d-flex">
                        <div className="card flex-fill shadow-none">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="time-icon bg-soft-primary flex-shrink-0">
										<i className="ti ti-clock-share fs-22"></i>
									</span>
                                    <span className="badge bg-success-transparent fs-14"><i className="ti ti-arrow-narrow-up"></i>22.3%</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="mb-1">Working Hours</p>
                                        <h2>950h 45m</h2>
                                    </div>
                                    <div id="time-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 d-flex">
                        <div className="card flex-fill shadow-none">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="time-icon bg-soft-secondary flex-shrink-0">
										<i className="ti ti-clock-share fs-22"></i>
									</span>
                                    <span className="badge bg-danger-transparent fs-14"><i className="ti ti-arrow-narrow-down"></i>15.2%</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="mb-1">Productive Time</p>
                                        <h2>400h 22m</h2>
                                    </div>
                                    <div id="productivetime-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 d-flex">
                        <div className="card flex-fill shadow-none">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="time-icon bg-violet-100 flex-shrink-0">
										<i className="ti ti-clock-x fs-22 text-violet"></i>
									</span>
                                    <span className="badge bg-success-transparent fs-14"><i className="ti ti-arrow-narrow-up"></i>12.5%</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="mb-1">Unproductive Time</p>
                                        <h2>210h 15m</h2>
                                    </div>
                                    <div id="unproductivetime-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 d-flex">
                        <div className="card flex-fill shadow-none">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="time-icon bg-teal-100 flex-shrink-0">
										<i className="ti ti-clock-x fs-22 text-teal-9"></i>
									</span>
                                    <span className="badge bg-success-transparent fs-14"><i className="ti ti-arrow-narrow-up"></i>12.5%</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="mb-1">Manual Time</p>
                                        <h2>60h 33m</h2>
                                    </div>
                                    <div id="manualtime-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  time info  */}
                {/*  top employees  */}
                <div className="card shadow-none top-employees">
                    <div className="card-body pb-0">
                        <div className="d-flex flex-wrap gap-2 justify-content-between mb-3">
                            <h5 className="fw-bold">Top Employees / Managers</h5>
                            <a href="timesheet.html" className="fs-13 text-decoration-underline">View All Timesheet</a>
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="card shadow-none">
                                    <div className="card-body text-center p-3">
                                        <a href="employee-details.html" className="avatar mb-2">
                                            <img src="assets/img/profiles/avatar-14.jpg" className="img-fluid rounded-circle" alt="img" />
                                        </a>
                                        <h6 className="fw-medium"><a href="employee-details.html">James Haddin</a></h6>
                                        <span className="fs-13">120h 30m</span>
                                        <div className="progress bg-transparent-dark mt-2 p-1" style={{ height: '24px' }} data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-dark" data-bs-placement="top" data-bs-original-title="Total Hours : 120h 30m Manaul  Time : 12h 10m">
                                            <div className="progress-bar bg-success rounded me-1" role="progressbar" style={{ width: '55%' }}></div>
                                            <div className="progress-bar bg-warning rounded me-1" role="progressbar" style={{ width: '10%' }}></div>
                                            <div className="progress-bar bg-light rounded me-1" role="progressbar" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="card shadow-none">
                                    <div className="card-body text-center p-3">
                                        <a href="employee-details.html" className="avatar mb-2">
                                            <img src="assets/img/users/user-05.jpg" className="img-fluid rounded-circle" alt="img" />
                                        </a>
                                        <h6 className="fw-medium"><a href="employee-details.html">Mark Tyler</a></h6>
                                        <span className="fs-13">119h 30m</span>
                                          <div className="progress bg-transparent-dark mt-2 p-1" style={{ height: '24px' }} data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-dark" data-bs-placement="top" data-bs-original-title="Total Hours : 119h 30m Manaul  Time : 12h 10m">
                                              <div className="progress-bar bg-success rounded me-1" role="progressbar" style={{ width: '55%' }}></div>
                                              <div className="progress-bar bg-warning rounded me-1" role="progressbar" style={{ width: '10%' }}></div>
                                              <div className="progress-bar bg-light rounded me-1" role="progressbar" style={{ width: '40%' }}></div>
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="card shadow-none">
                                    <div className="card-body text-center p-3">
                                        <a href="employee-details.html" className="avatar mb-2"><img src="assets/img/users/user-02.jpg" className="img-fluid rounded-circle" alt="img" /></a>
                                        <h6 className="fw-medium"><a href="employee-details.html">Liane Jackson</a></h6>
                                        <span className="fs-13">117h 20m</span>
                                        <div className="progress bg-transparent-dark mt-2 p-1" style={{ height: '24px' }} data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-dark" data-bs-placement="top" data-bs-original-title="Total Hours : 117h 20m Manaul  Time : 12h 10m">
                                            <div className="progress-bar bg-success rounded me-1" role="progressbar" style={{ width: '55%' }}></div>
                                            <div className="progress-bar bg-warning rounded me-1" role="progressbar" style={{ width: '10%' }}></div>
                                            <div className="progress-bar bg-light rounded me-1" role="progressbar" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="card shadow-none">
                                    <div className="card-body text-center p-3">
                                        <a href="employee-details.html" className="avatar mb-2"><img src="assets/img/users/user-10.jpg" className="img-fluid rounded-circle" alt="img" /></a>
                                        <h6 className="fw-medium"><a href="employee-details.html">David Guthrie</a></h6>
                                        <span className="fs-13">116h 30m</span>
                                        <div className="progress bg-transparent-dark mt-2 p-1" style={{ height: '24px' }} data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-dark" data-bs-placement="top" data-bs-original-title="Total Hours : 116h 30m Manaul  Time : 12h 10m">
                                            <div className="progress-bar bg-success rounded me-1" role="progressbar" style={{ width: '35%' }}></div>
                                            <div className="progress-bar bg-light rounded me-1" role="progressbar" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="card shadow-none">
                                    <div className="card-body text-center p-3">
                                        <a href="employee-details.html" className="avatar mb-2"><img src="assets/img/profiles/avatar-07.jpg" className="img-fluid rounded-circle" alt="img" /></a>
                                        <h6 className="fw-medium"><a href="employee-details.html">Joan Knox</a></h6>
                                        <span className="fs-13">114h 30m</span>
                                        <div className="progress bg-transparent-dark mt-2 p-1" style={{ height: '24px' }} data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-dark" data-bs-placement="top" data-bs-original-title="Total Hours : 114h 30m Manaul  Time : 12h 10m">
                                            <div className="progress-bar bg-success rounded me-1" role="progressbar" style={{ width: '55%' }}></div>
                                            <div className="progress-bar bg-warning rounded me-1" role="progressbar" style={{ width: '10%' }}></div>
                                            <div className="progress-bar bg-light rounded me-1" role="progressbar" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="card shadow-none">
                                    <div className="card-body text-center p-3">
                                        <a href="employee-details.html" className="avatar mb-2"><img src="assets/img/profiles/avatar-06.jpg" className="img-fluid rounded-circle" alt="img" /></a>
                                        <h6 className="fw-medium"><a href="employee-details.html">Carolynn Nick</a></h6>
                                        <span className="fs-13">113h 30m</span>
                                        <div className="progress bg-transparent-dark mt-2 p-1" style={{ height: '24px' }} data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-dark" data-bs-placement="top" data-bs-original-title="Total Hours : 113h 30m Manaul  Time : 12h 10m">
                                            <div className="progress-bar bg-success rounded me-1" role="progressbar" style={{ width: '55%' }}></div>
                                            <div className="progress-bar bg-warning rounded me-1" role="progressbar" style={{ width: '10%' }}></div>
                                            <div className="progress-bar bg-light rounded me-1" role="progressbar" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  top employees  */}
                <div className="row">
                    {/*  top teams  */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card shadow-none flex-fill w-100">
                            <div className="card-body">
                                <div className="d-flex flex-wrap gap-2 justify-content-between mb-3">
                                    <h5 className="fw-bold">Top Teams</h5>
                                    <a href="teams.html" className="fs-13 text-decoration-underline">View All</a>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="teams-details.html" className="avatar bg-violet-500 avatar-rounded">
                                            <span className="avatar-title text-white">UI</span>
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="teams-details.html">UI/UX Design</a></h6>
                                            <span className="fs-13">Productive : 35h 21m</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-9 fw-medium d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i>96h 21m</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="teams-details.html" className="avatar bg-pink-500 avatar-rounded">
                                            <span className="avatar-title text-white">DT</span>
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="teams-details.html">Development Team</a></h6>
                                            <span className="fs-13">Productive : 30h 17m</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-9 fw-medium d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i>80h 16m</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="teams-details.html" className="avatar bg-danger-500 avatar-rounded">
                                            <span className="avatar-title text-white">NJ</span>
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="teams-details.html">Node JS</a></h6>
                                            <span className="fs-13">Productive : 32h 40m</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-9 fw-medium d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i>92h 15m</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="teams-details.html" className="avatar bg-teal-500 avatar-rounded">
                                            <span className="avatar-title text-white">AT</span>
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="teams-details.html">Angular</a></h6>
                                            <span className="fs-13">Productive : 33h 42m</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-9 fw-medium d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i>90h 12m</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <a href="teams-details.html" className="avatar bg-orange-500 avatar-rounded">
                                            <span className="avatar-title text-white">HT</span>
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="teams-details.html">HTML Development</a></h6>
                                            <span className="fs-13">Productive : 38h 20m</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-9 fw-medium d-inline-flex align-items-center"><i className="ti ti-clock me-1"></i>88h 14m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  top teams  */}
                    {/*  app usage  */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card shadow-none flex-fill w-100">
                            <div className="card-body">
                                <div className="d-flex flex-wrap gap-2 justify-content-between mb-3">
                                    <h5 className="fw-bold">Top Web App & Usage</h5>
                                    <a href="web-and-app-usage.html" className="fs-13 text-decoration-underline">View All</a>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="javascript:void(0);" className="avatar bg-violet-500 avatar-rounded flex-shrink-0">
                                            <img src="./assets/img/icons/figma-icon.svg" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="javascript:void(0);">Figma</a></h6>
                                            <span className="fs-13">Design</span>
                                        </div>
                                    </div>
                                    <div className="w-50 text-end">
                                        <span className="text-gray-9 fw-medium mb-1 d-block">36h 40m</span>
                                        <div className="progress progress-xs progress-animate w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-success" style={{ width: '60%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="javascript:void(0);" className="avatar bg-violet-500 avatar-rounded flex-shrink-0">
                                            <img src="./assets/img/icons/google2.svg" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="javascript:void(0);">Google</a></h6>
                                            <span className="fs-13">Browser</span>
                                        </div>
                                    </div>
                                    <div className="w-50 text-end">
                                        <span className="text-gray-9 fw-medium mb-1 d-block">24h 40m</span>
                                        <div className="progress progress-xs progress-animate w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-purple" style={{ width: '50%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="javascript:void(0);" className="avatar bg-violet-500 avatar-rounded flex-shrink-0">
                                            <img src="./assets/img/icons/slack2.svg" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="javascript:void(0);">Slack</a></h6>
                                            <span className="fs-13">Communication</span>
                                        </div>
                                    </div>
                                    <div className="w-50 text-end">
                                        <span className="text-gray-9 fw-medium mb-1 d-block">22h 40m</span>
                                        <div className="progress progress-xs progress-animate w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: '40%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="javascript:void(0);" className="avatar bg-violet-500 avatar-rounded flex-shrink-0">
                                            <img src="./assets/img/icons/illustrator2.svg" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="javascript:void(0);">Freepik</a></h6>
                                            <span className="fs-13">Design</span>
                                        </div>
                                    </div>
                                    <div className="w-50 text-end">
                                        <span className="text-gray-9 fw-medium mb-1 d-block">20h 40m</span>
                                        <div className="progress progress-xs progress-animate w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-violet" style={{ width: '30%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <a href="javascript:void(0);" className="avatar bg-violet-500 avatar-rounded flex-shrink-0">
                                            <img src="./assets/img/icons/google-doc2.svg" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="#">Google Docs</a></h6>
                                            <span className="fs-13">Office Suite</span>
                                        </div>
                                    </div>
                                    <div className="w-50 text-end">
                                        <span className="text-gray-9 fw-medium mb-1 d-block">18h 40m</span>
                                        <div className="progress progress-xs progress-animate w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-warning" style={{ width: '20%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  app usage  */}
                    {/*  task details  */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card shadow-none flex-fill w-100">
                            <div className="card-body">
                                <div className="d-flex flex-wrap gap-2 justify-content-between mb-3">
                                    <h5 className="fw-bold">Task Details</h5>
                                    <a href="project-details-task.html" className="fs-13 text-decoration-underline">View All</a>
                                </div>
                                <div className="chartjs-wrapper-demo position-relative mb-4">
                                    <canvas id="tasks" height="150"></canvas>
                                    <div className="position-absolute text-center task-canvas">
                                        <p className="fs-13 mb-1">Total Tasks</p>
                                        <h2>124/165</h2>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mb-3 me-2">
                                        <p className="fs-13 d-inline-flex align-items-center mb-1">Ongoing</p>
                                        <h5>24%</h5>
                                    </div>
                                    <div className="border-start me-2 ps-3 mb-3">
                                        <p className="fs-13 d-inline-flex align-items-center mb-1">On Hold </p>
                                        <h5>10%</h5>
                                    </div>
                                    <div className="border-start me-2 ps-3 mb-3">
                                        <p className="fs-13 d-inline-flex align-items-center mb-1">Overdue</p>
                                        <h5>16%</h5>
                                    </div>
                                    <div className="border-start me-2 ps-3 mb-3">
                                        <p className="fs-13 d-inline-flex align-items-center mb-1">Completed</p>
                                        <h5>40%</h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap bg-gray-900 px-3 py-2 rounded-2 gap-2 justify-content-between">
                                    <span className="text-light fs-13">Spent on Overall Tasks</span>
                                    <h5 className="text-light">389 / 689 hrs</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  task details  */}
                    {/*  project status  */}
                    <div className="col-lg-8 col-md-6 d-flex">
                        <div className="card shadow-none flex-fill w-100">
                            <div className="card-body pb-0">
                                <div className="d-flex flex-wrap gap-2 justify-content-between mb-2">
                                    <h5 className="fw-bold">Project Status</h5>
                                    <div className="d-flex gap-3 chart-text flex-wrap">
                                        <span><i className="ti ti-square-filled me-1 text-primary-800 fs-12"></i>Active</span>
                                        <span><i className="ti ti-square-filled me-1 text-secondary-800 fs-12"></i>Inprogress</span>
                                        <span><i className="ti ti-square-filled me-1 text-success-800 fs-12"></i>Completed</span>
                                    </div>
                                </div>
                                <div id="s-col" className="chart-set"></div>
                            </div>
                        </div>
                    </div>
                    {/*  project status  */}
                    {/*  recent projects  */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card shadow-none flex-fill w-100">
                            <div className="card-body">
                                <div className="d-flex flex-wrap gap-2 justify-content-between mb-3">
                                    <h5 className="fw-bold">Recent Projects</h5>
                                    <a href="projects.html" className="fs-13 text-decoration-underline">View All</a>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6 className="fw-medium mb-1"><a href="project-details.html">Office Management</a></h6>
                                        <div className="d-inline-flex align-items-center">
                                            <span className="fs-13 d-inline-flex align-items-center"><i className="ti ti-subtask me-1 text-orange"></i>08 Tasks</span><span className="mx-2 text-gray-1">|</span><span className="d-inline-flex align-items-center"><i className="ti ti-moneybag me-1 text-violet"></i>$3500</span>
                                        </div>
                                    </div>
                                    <div className="avatar-list-stacked avatar-group-sm">
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-01.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-12.jpg" alt="img" />
											</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6 className="fw-medium mb-1"><a href="project-details.html">Appointment Bookings</a></h6>
                                        <div className="d-inline-flex align-items-center">
                                            <span className="fs-13 d-inline-flex align-items-center"><i className="ti ti-subtask me-1 text-orange"></i>32 Tasks</span><span className="mx-2 text-gray-1">|</span><span className="d-inline-flex align-items-center"><i className="ti ti-moneybag me-1 text-violet"></i>$8966</span>
                                        </div>
                                    </div>
                                    <div className="avatar-list-stacked avatar-group-sm">
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-01.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img" />
											</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6 className="fw-medium mb-1"><a href="project-details.html">Service Management</a></h6>
                                        <div className="d-inline-flex align-items-center">
                                            <span className="fs-13 d-inline-flex align-items-center"><i className="ti ti-subtask me-1 text-orange"></i>56 Tasks</span><span className="mx-2 text-gray-1">|</span><span className="d-inline-flex align-items-center"><i className="ti ti-moneybag me-1 text-violet"></i>$7896</span>
                                        </div>
                                    </div>
                                    <div className="avatar-list-stacked avatar-group-sm">
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-01.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-12.jpg" alt="img" />
											</span>
                                        <a className="avatar bg-primary avatar-rounded text-fixed-white fs-10 fw-medium" href="javascript:void(0);">
												+1
											</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6 className="fw-medium mb-1"><a href="project-details.html">Smart HR & CRMS</a></h6>
                                        <div className="d-inline-flex align-items-center">
                                            <span className="fs-13 d-inline-flex align-items-center"><i className="ti ti-subtask me-1 text-orange"></i>40 Tasks</span><span className="mx-2 text-gray-1">|</span><span className="d-inline-flex align-items-center"><i className="ti ti-moneybag me-1 text-violet"></i>$4124</span>
                                        </div>
                                    </div>
                                    <div className="avatar-list-stacked avatar-group-sm">
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-01.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-20.jpg" alt="img" />
											</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="fw-medium mb-1"><a href="project-details.html">Office Management</a></h6>
                                        <div className="d-inline-flex align-items-center">
                                            <span className="fs-13 d-inline-flex align-items-center"><i className="ti ti-subtask me-1 text-orange"></i>48 Tasks</span><span className="mx-2 text-gray-1">|</span><span className="d-inline-flex align-items-center"><i className="ti ti-moneybag me-1 text-violet"></i>$4578</span>
                                        </div>
                                    </div>
                                    <div className="avatar-list-stacked avatar-group-sm">
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img" />
											</span>
                                        <span className="avatar avatar-rounded">
												<img className="border border-white" src="assets/img/profiles/avatar-04.jpg" alt="img" />
											</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  recent projects  */}
                    {/*  late login  */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card shadow-none flex-fill w-100">
                            <div className="card-body">
                                <div className="d-flex flex-wrap gap-2 justify-content-between mb-3">
                                    <h5 className="fw-bold">Late Logins</h5>
                                    <a href="late-login.html" className="fs-13 text-decoration-underline">View All</a>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="employee-details.html" className="avatar flex-shrink-0">
                                            <img src="assets/img/users/user-09.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="employee-details.html">Michael Tanak</a></h6>
                                                <span className="fs-13">UI/UX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fs-13">Clock In</span>
                                        <h6 className="fw-medium mt-1">09:25 AM</h6>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="employee-details.html" className="avatar bg-violet-500 flex-shrink-0 avatar-rounded">
                                            <span className="avatar-title text-white">AN</span>
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="employee-details.html">Antonio Nathan</a></h6>
                                                <span className="fs-13">PHP Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fs-13">Clock In</span>
                                        <h6 className="fw-medium mt-1">09:15 AM</h6>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="employee-details.html" className="avatar flex-shrink-0">
                                            <img src="assets/img/users/user-06.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="employee-details.html">Karen Galvan</a></h6>
                                                <span className="fs-13">Mobile Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fs-13">Clock In</span>
                                        <h6 className="fw-medium mt-1">08:55 AM</h6>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="employee-details.html" className="avatar flex-shrink-0">
                                            <img src="assets/img/users/user-10.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="employee-details.html">Thomas Ward</a></h6>
                                                <span className="fs-13">UX Lead</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fs-13">Clock In</span>
                                        <h6 className="fw-medium mt-1">09:15 AM</h6>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <a href="employee-details.html" className="avatar flex-shrink-0">
                                            <img src="assets/img/users/user-02.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="employee-details.html">Aliza Duncan</a></h6>
                                                <span className="fs-13">HR Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fs-13">Clock In</span>
                                        <h6 className="fw-medium mt-1">09:12 AM</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  late login  */}
                    {/*  time sheet  */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card shadow-none flex-fill w-100">
                            <div className="card-body">
                                <h5 className="fw-bold mb-3">Timesheet Statistics</h5>
                                <div id="timeline_chart"></div>
                                <div className="legend">
                                    <div><i className="ti ti-point-filled text-success fs-16 me-1"></i>Productive</div>
                                    <div><i className="ti ti-point-filled text-violet fs-16 me-1"></i>Unproductive</div>
                                    <div><i className="ti ti-point-filled text-secondary fs-16 me-1"></i>Overtime</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  time sheet  */}
                    {/*  manual time  */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card shadow-none flex-fill w-100">
                            <div className="card-body">
                                <div className="d-flex flex-wrap gap-2 justify-content-between mb-3">
                                    <h5 className="fw-bold">Manual Time</h5>
                                    <a href="manual-time.html" className="fs-13 text-decoration-underline">View All</a>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="javscript:void(0);" className="avatar flex-shrink-0">
                                            <img src="assets/img/profiles/avatar-02.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="javscript:void(0);">Jonathan King</a></h6>
                                                <span className="fs-13">Time : 01:00 PM - 01:20 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center manual-action">
                                        <a href="javascript:void(0);" className="d-inline-flex me-2 text-primary p-2 border rounded-circle"><i className="ti ti-check fw-bold"></i></a>
                                        <a href="javascript:void(0);" className="d-inline-flex text-danger p-2 border rounded-circle"><i className="ti ti-x fw-bold"></i></a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="javscript:void(0);" className="avatar flex-shrink-0">
                                            <img src="assets/img/profiles/avatar-20.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="javscript:void(0);">Peter Brooks</a></h6>
                                                <span className="fs-13">Time : 12:20 PM - 01:10 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center manual-action">
                                        <a href="javascript:void(0);" className="d-inline-flex me-2 text-primary p-2 border rounded-circle"><i className="ti ti-check fw-bold"></i></a>
                                        <a href="javascript:void(0);" className="d-inline-flex text-danger p-2 border rounded-circle"><i className="ti ti-x fw-bold"></i></a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="javscript:void(0);" className="avatar flex-shrink-0">
                                            <img src="assets/img/profiles/avatar-26.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="javscript:void(0);">Cindy Mateo</a></h6>
                                                <span className="fs-13">Time : 11:40 AM - 12:30 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center manual-action">
                                        <a href="javascript:void(0);" className="d-inline-flex me-2 text-primary p-2 border rounded-circle"><i className="ti ti-check fw-bold"></i></a>
                                        <a href="javascript:void(0);" className="d-inline-flex text-danger p-2 border rounded-circle"><i className="ti ti-x fw-bold"></i></a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="javscript:void(0);" className="avatar flex-shrink-0">
                                            <img src="assets/img/profiles/avatar-23.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="javscript:void(0);">Thomas Walsh</a></h6>
                                                <span className="fs-13">Time : 10:20 AM - 11:00 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center manual-action">
                                        <a href="javascript:void(0);" className="d-inline-flex me-2 text-primary p-2 border rounded-circle"><i className="ti ti-check fw-bold"></i></a>
                                        <a href="javascript:void(0);" className="d-inline-flex text-danger p-2 border rounded-circle"><i className="ti ti-x fw-bold"></i></a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <a href="javscript:void(0);" className="avatar flex-shrink-0">
                                            <img src="assets/img/profiles/avatar-22.jpg" className="rounded-circle" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <h6 className="fw-medium text-truncate mb-1"><a href="javscript:void(0);">Elizabeth Hiltner</a></h6>
                                                <span className="fs-13">Time : 09:10 AM - 10:00 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center manual-action">
                                        <a href="javascript:void(0);" className="d-inline-flex me-2 text-primary p-2 border rounded-circle"><i className="ti ti-check fw-bold"></i></a>
                                        <a href="javascript:void(0);" className="d-inline-flex text-danger p-2 border rounded-circle"><i className="ti ti-x fw-bold"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  manual time  */}
                </div>
            </div>
        </div>
  );
}

