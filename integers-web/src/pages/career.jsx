import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

// import { getSortedProjectsData } from "@library/projects";

// import 'photoswipe/dist/photoswipe.css'
// import 'react-modal-video/css/modal-video.css'

// import { Gallery, Item } from 'react-photoswipe-gallery'
// import ModalVideo from 'react-modal-video'

import Link from "next/link";

const Career = () => {

    // const rows = [];
    // const projectsGrid = [];

    // for (var i = 0; i < props.projects.length; i += 5) {
    //     rows.push(props.projects.slice(i, 5 + i));
    // }

    // rows.forEach((row) => {
    //     let row_rows = [];
    //     row_rows.push(row.slice(0, 2));
    //     row_rows.push(row.slice(2, 5));

    //     projectsGrid.push(row_rows);
    // })

    // const [isOpen, setOpen] = useState(false);

    // const [modalURL, setModalURL] = useState(false);

    // const openSingleModalVideo = (e) => {
    //     setModalURL(e.target.getAttribute('data-href'));
    //     setOpen(true);
    // }

    const Content = {
        "title": "Careers at Integers Insights",
        "subtitle": "CAREERS",
        "description": "Join a dynamic team of AI engineers, data strategists, and growth innovators who are dedicated to creating intelligent systems for today’s businesses. At Integers Insights, you’ll dive into the latest AI infrastructure, analytics platforms, and performance-driven solutions that make a real difference on a global scale."
    }


    const jobs = [
        {
            id: "digital-marketing-coordinator",
            title: "Digital Marketing Coordinator",
            experience: "1-3 Years",
            deadline: "15-03-2026"

        },
        {
            id: "marketplace-ecommerce-executive",
            title: "Marketplace & E-commerce Executive",
            experience: "1-3 Years",
            deadline: "30-03-2026"
        },
        {
            id: "seo-specialist",
            title: "SEO Specialist",
            experience: "2-4 Years",
            deadline: "10-04-2026"
        },
        {
            id: "social-media-manager",
            title: "Social Media Manager",
            experience: "2-5 Years",
            deadline: "20-04-2026"
        }
    ];

    const cardData = [
        {
            image: "/img/icons/icon_1.svg",
            title: "Real Impact Projects",
            text: "Engage in AI infrastructure, analytics systems, and growth platforms that tackle genuine business challenges on a global scale. "

        },
        {
            image: "/img/icons/icon_2.svg",
            title: "Growth & Learning ",
            text: "Embrace continuous skill enhancement through hands-on projects in AI, data, and digital strategy within a rapidly changing tech landscape. "
        },
        {
            image: "/img/icons/icon_3.svg",
            title: "Ownership & Innovation ",
            text: "Step up, take charge of your ideas, and create scalable solutions where your choices have a direct impact on the results."

        },
        {
            image: "/img/icons/icon_4.svg",
            title: "Flexible & Performance-Driven ",
            text: "We foster a results-oriented culture that values flexibility, accountability, and offers plenty of chances for fast-tracked career advancement."
        }
    ];


    return (

        <Layouts>
            <PageBanner pageImage={"img/portfolio/Rectangle 39.jpg"} pageTitle={"Portfolio"} />

            {/* portfolio */}
            <div className="container mil-content-frame mil-p-120-90 mil-appearance">
                <div className="row">
                    <div className="col-12 mil-text-center mil-appearance mil-mb-120">
                        <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{Content.subtitle}</h3>
                        <h3 className="mil-appearance mil-mb-30">{Content.title}</h3>
                        <p className="mil-text mil-appearance mil-shortened-50 m-auto" style={{ color: "#001413" }}>{Content.description}</p>
                    </div>
                </div>

                {/* <Gallery>
                        {projectsGrid.map((row, row_i) => (
                            <div className={((row_i % 2) == 0) ? "row m-0" : "row m-0 flex-row-reverse"} key={`portfolio-row-${row_i}`}>
                                {row.map((col, col_i) => (
                                    <div className="col-lg-12 p-0" key={`portfolio-row-${row_i}-col-${col_i}`}>
                                        <div className="row" style={{ backgroundColor: "blue" }}>

                                            {col.map((item, key) => (
                                                <div className={(col_i == 0) ? "col-lg-6" : "col-lg-4"} key={`portfolio-row-${row_i}-col-${col_i}-item-${key}`}>
                                                    <div className="mil-portfolio-item mil-appearance mil-mb-30">

                                                        <div className="mil-cover mil-square mil-scale-down-trigger mil-accent-trigger">
                                                            <div className="mil-image-frame">
                                                                {item.type != "video" &&
                                                                    <img src={item.image} alt={item.title} />
                                                                }
                                                                {item.type == "video" &&
                                                                    <video className="mil-video-background" data-value={1.2} autoPlay loop muted playsInline onContextMenu={(e) => e.preventDefault()} preload="auto">
                                                                        <source src={item.image} />
                                                                    </video>
                                                                }
                                                            </div>
                                                        </div>
                                                        <Link href={`portfolio/${item.id}`} className="mil-item-description mil-icon-2-trigger mil-accent-trigger">
                                                            <div className="mil-text-bg mil-mb-5">
                                                                <h5 className="mil-light">{item.title}</h5>
                                                            </div>
                                                            <br />
                                                            <div className="mil-text-bg">
                                                                <p className="mil-link mil-accent">{item.category}</p>
                                                            </div>
                                                        </Link>

                                                        {item.type != "video" &&
                                                            <Item
                                                                original={item.image}
                                                                thumbnail={item.image}
                                                                width={item.imageWidth}
                                                                height={item.imageHeight}
                                                            >
                                                                {({ ref, open }) => (
                                                                    <a data-fancybox="gallery" ref={ref} onClick={open} data-no-swup className="mil-zoom-icon mil-hidden-trigger" style={{ "cursor": "pointer" }}>
                                                                        <img src="/img/icons/zoom.svg" alt="zoom" />
                                                                    </a>
                                                                )}
                                                            </Item>
                                                        }
                                                        {item.type == "video" &&
                                                            <>
                                                                <a data-fancybox="gallery" data-href={item.image} onClick={openSingleModalVideo} data-no-swup className="mil-zoom-icon mil-hidden-trigger" style={{ "cursor": "pointer" }}>
                                                                    <img src="/img/icons/zoom.svg" alt="zoom" />
                                                                </a>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                ))}

                            </div>
                        ))}
                    </Gallery> */}
                <div className="career-page-main">
                    <div className="career-page-child1">
                        <p className='career-page-child1-text1'>Benefits</p>
                        <h4 className='career-page-child1-text2'>Why Work With Us</h4>
                        <p className='career-page-child1-text3'>We create an environment that’s all about growth, where innovation, ownership, and a love for learning really shine. Whether it’s tackling real-world AI projects, facing performance-driven challenges, or enjoying a flexible work culture that supports career advancement, we empower our team to craft meaningful solutions and develop their professional skills.</p>
                    </div>


                    <div className="career-page-child2">
                        {cardData?.map((item, i) => {
                            return (
                                <div className="career-page-child-container" key={i}>
                                    <div className="career-page-child-container1"><img src={item.image} alt="icon" /></div>
                                    <div className="career-page-child-container2">
                                        <p className='career-page-child-container2-txt1'>{item.title}</p>
                                        <p className='career-page-child-container2-txt2'>{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="career-page-main1">
                    <p className='career-page-main1-txt1'>Come join us</p>
                    <p className='career-page-main1-txt2'>Career Openings</p>
                    <div className="career-page-main1-child">
                        {jobs?.map((itm, i) => {
                            return (
                                <Link key={itm.id} href={`/career/${itm.id}`}>
                                    <div className="career-page-main1-child1" key={itm.id}>
                                        <p className="career-page-main1-child1-txt">{itm?.title}</p>
                                        <p><span>Experience: </span>{itm?.experience}</p>
                                        <p><span>Deadline: </span>{itm?.deadline}</p>
                                        <div className='icon'>
                                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7" />
                                                <path d="M7 7h10v10" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>
                </div>

            </div>
            {/* portfolio end */}

            {/* <ModalVideo channel='custom' autoplay isOpen={isOpen} url={modalURL} onClose={() => setOpen(false)} /> */}
        </Layouts>
    );
};
export default Career;

// export async function getStaticProps() {
//     const allProjects = getSortedProjectsData();

//     return {
//         props: {
//             projects: allProjects
//         }
//     }
// }