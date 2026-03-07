// import { useRouter } from "next/router";
// import careerData from "../../data/sections/career.json";
// import Layouts from "@/src/layouts/Layouts";
// import PageBanner from "@/src/components/PageBanner";

// const CareerDetails = () => {
//     const { query, isReady } = useRouter();

//     if (!isReady) return <p style={{ padding: "40px" }}>Loading...</p>;

//     const job = careerData.jobs.find(
//         (item) => item.id === query.id
//     );

//     if (!job)
//         return (
//             <div style={{ padding: "40px" }}>
//                 <h2>Job Not Found</h2>
//             </div>
//         );

//     return (



//         <Layouts>
//             <div className="main-career-detail">
//                 <div className="m1">
//                     <h4 className="txt1">title</h4>
//                     <p className="txt2">employmentType</p>
//                     <p className="txt3">location</p>
//                 </div>
//             </div>

//             <div className="border" style={{ border: "green solid 2px" }}>
//                 <div className="mil-content-frame mil-p-120-90 privacy-page">
//                     <div className="container">
//                         <h4>Privacy Policy</h4>

//                     </div>
//                 </div>
//             </div>
//         </Layouts>
//     );
// }

// export default CareerDetails; 


import { useRouter } from "next/router";
import careerData from "../../data/sections/career.json";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const CareerDetails = () => {
    const { query, isReady } = useRouter();

    if (!isReady) return <p className="loading-text">Loading...</p>;

    const job = careerData.jobs.find(
        (item) => item.id === query.id
    );

    if (!job)
        return (
            <div className="not-found">
                <h2>Job Not Found</h2>
            </div>
        );

    return (
        <Layouts>
            <div className="main-career-detail">
                <div className="m1">
                    <h4 className="txt1">{job.title}</h4>
                    <p className="txt2">{job.employmentType}</p>
                    <p className="txt3">{job.location}</p>
                </div>
            </div>

            <div className="border">
                <div className="mil-content-frame career-page">
                    <div className="container">

                        <div className="main-career-container">


                            <div className="main-career-container1">
                                {/* Job Basic Info */}
                                <div className="career-job-info">
                                    <p className="career-job-info-title">{job.title}</p>

                                    <div className="career-meta">
                                        <p><span>Location:</span> {job.location}</p>
                                        <p><span>Experience:</span> {job.experience}</p>
                                        <p><span>Industry:</span> {job.industry}</p>
                                        <p><span>Employment Type:</span> {job.employmentType}</p>
                                    </div>
                                </div>

                                {/* Role Overview */}
                                <div className="career-section">
                                    <p className="career-job-info-title">Role Overview</p>
                                    <p className="career-paragraph">
                                        {job.roleOverview}
                                    </p>
                                </div>

                                {/* Responsibilities */}
                                <div className="career-section">
                                    <p className="career-job-info-title">
                                        Key Responsibilities
                                    </p>
                                    <ul className="career-list">
                                        {job.responsibilities.map((item, index) => (
                                            <li key={index} className="career-list-item">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Requirements */}
                                <div className="career-section">
                                    <p className="career-job-info-title">
                                        Required Skills & Qualifications
                                    </p>
                                    <ul className="career-list">
                                        {job.requirements.map((item, index) => (
                                            <li key={index} className="career-list-item">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="main-career-container2">

                                <div className="main-career-container-2">
                                    <div className="mil-appearance">
                                        <div className="mil-appearance-child">
                                            <Link href="https://forms.gle/EcP4J6XEHp7JAx7v5" target="_blank"
                                                rel="noopener noreferrer" style={{ backgroundColor: "#0984E3", color: "#FFF" }} className="mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space"><span>Apply now</span></Link>
                                        </div>
                                    </div>
                                    <div className="social">
                                        <p>Share This Job</p>
                                        <div className="icons">
                                            <a href="https://www.instagram.com/integers.insights/" target="_blank">
                                                <img src="/img/icons/instagram1.svg" alt="icon" />
                                            </a>

                                            <a href="https://www.linkedin.com/company/integerstech/" target="_blank">
                                                <img src="/img/icons/linkedin1.svg" alt="icon" />
                                            </a>

                                            <a href="">
                                                <img src="/img/icons/snapchat1.svg" alt="icon" />
                                            </a>

                                            <a href="">
                                                <img src="/img/icons/twitter1.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default CareerDetails;