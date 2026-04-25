// import Layouts from "@/src/layouts/Layouts";

// import { getSortedPostsData } from "../lib/posts";

// import PageBanner from "@/src/components/PageBanner";
// import SubscribeSection from "../components/sections/Subscribe";
// import LatestPostsSection from "../components/sections/LatestPosts";
// import CallToActionSection from "../components/sections/CallToAction";
// import AwardsSection from "../components/sections/Awards";
// import CountersSection from "../components/sections/Counters";

// import 'photoswipe/dist/photoswipe.css'

// import { Gallery, Item } from 'react-photoswipe-gallery'

// const About = ( props ) => {
//   const Content = {
//     "about": {
//       "subtitle": "Our story",
//       "title": "Writing content like you've never had before",
//       "text_1": "Gutem temporibus quae facilis totam, dolorem laborum optio laudantium explicabo quia ea. Officia beatae excepturi adipisci? Nobis consequatur ullam officiis adipisci assumenda, voluptas optio, commodi, soluta itaque error consectetur cupiditate vero voluptatem architecto blanditiis quidem amet. Quod ipsam consequuntur distinctio velit sed ipsum quisquam, itaque placeat error non animi.",
//       "text_2": "Exercitationem voluptatibus accusamus amet ratione atque, dolor vel necessitatibus illo ipsa officia, sunt quia magni saepe velit ipsum sapiente blanditiis minima. Voluptatem odit ullam veritatis corrupti officia non aperiam eius vero amet, sed porro blanditiis, harum, quo fugit cupiditate. Maxime quaerat ratione. Nobis consequatur ullam officiis adipisci assumenda, voluptas optio, commodi. Consectetur cupiditate vero."
//     },
//     "gallery": [
//       {
//         "url": "img/content/12.jpg",
//         "width": 1000,
//         "height": 1573
//       },
//       {
//         "url": "img/content/13.jpg",
//         "width": 1000,
//         "height": 1065
//       },
//       {
//         "url": "img/content/14.jpg",
//         "width": 1000,
//         "height": 1499
//       },
//       {
//         "url": "img/content/15.jpg",
//         "width": 1000,
//         "height": 792
//       }
//     ]
//   }

//   return (
//     <Layouts>
//       <PageBanner pageImage={"img/content/4.jpg"} pageTitle={"About"} />

//       {/* about */}
//       <div className="container mil-content-frame mil-appearance mil-p-120-90">
//           <div className="row justify-content-between">
//               <div className="col-lg-5">
//                   <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.about.subtitle}</span>
//                   <h3 className="mil-appearance mil-mb-30">{Content.about.title}</h3>
//               </div>
//               <div className="col-lg-6">
//                   <div className="row">
//                       <div className="col-lg-6">

//                           <p className="mil-first-letter mil-appearance mil-mb-30">
//                             {Content.about.text_1}
//                           </p>

//                       </div>
//                       <div className="col-lg-6">

//                           <p className="mil-appearance mil-mb-30">
//                             {Content.about.text_2}
//                           </p>

//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//       {/* about end */}

//       {/* gallery */}
//       <div className="container mil-content-frame mil-gallery-1 mil-p-0-90">
//           <div className="row justify-content-between align-items-center mil-appearance">
//             <Gallery>
//               {Content.gallery.map((item, key) => (
//               <div className="col-md-6 col-xl-3 mil-mb-30" key={`gallery-iten-${key}`}>
//                   <Item
//                       original={item.url}
//                       thumbnail={item.url}
//                       width={item.width}
//                       height={item.height}
//                   >
//                   {({ ref, open }) => (
//                   <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className={`mil-just-image${key % 2 == 0 ? " mil-image-vert" : " mil-image-square" } mil-icon-3-trigger`} style={{ "cursor" : "pointer" }}>
//                       <img src={item.url} alt="img" className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
//                   </a>
//                   )}
//                   </Item>
//               </div>
//               ))}
//             </Gallery>
//           </div>
//       </div>
//       {/* gallery end */}

//       <CountersSection />
//       <AwardsSection />
//       <CallToActionSection />
//       <LatestPostsSection posts={props.posts} />
//       <SubscribeSection />
//     </Layouts>
//   );
// };
// export default About;

// export async function getStaticProps() {
//   const allPosts = getSortedPostsData();

//   return {
//     props: {
//       posts: allPosts
//     }
//   }
// }

import { useEffect } from "react";
import Layouts from "@layouts/Layouts";

import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import { getSortedPostsData } from "@library/posts";

import PageBanner from "@components/PageBanner";
import SubscribeSection from "@components/sections/Subscribe";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionSection from "@components/sections/CallToAction";
import CountersSection from "@components/sections/Counters";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import { cursorSwiperAnimation } from "@/src/common/cursor";

const About2 = (props) => {
  useEffect(() => {
    cursorSwiperAnimation();
  }, []);

  const Content = {
    about1: {
      subtitle: "System Builders",
      title: "The Intelligence Behind Smarter Decisions",
      text_1:
        "We are an advanced, artificial intelligence-driven SaaS company founded by a team of data scientists, engineers, and business strategists who aim to transform the landscape of market research, data analysis, and business decisions.",
      text_2:
        "Our SaaS technology leverages AI to provide marketing analytics, automated decisions, and immediate insights eliminating the need for speculation at work.With our tool, you will be able to capitalize on some of the world's best opportunities through the use of powerful tools capable of providing you with thorough market research, trends analysis, and competitor analysis. It is all about knowing what to sell and to whom while making use of the weaknesses of competitors for higher profit margins.",

      image1: "/img/content/About us - 3.jpg",
      image2: "/img/content/About us - 1.jpg",
      rotateText: "Dedication - Perfection - Growth ",
    },
    about2: {
      subtitle: "Digital Intelligence",
      title: "Building AI products that interacts",
      text_1:
        "We have an all-in-one platform that helps in decision-making with a combination of insights from market trends, growth marketing, and competitor research, in one window. Instead of bombarding you with numbers and data, our AI software makes relevant personalized suggestions according to your go-to-market strategy. ",
      text_2:
        " Today’s business world is all about having smart insights and quick data available using our efficient AI platform. You will get new market opportunities and better marketing techniques for both local and international levels. Our new AI tool has been designed especially for you.",
    },

    gallery: [
      {
        url: "/img/content/about-banners-01.jpg",
        width: 1000,
        height: 1500,
      },
      {
        url: "/img/content/about-banners-02.jpg",
        width: 1920,
        height: 1280,
      },
      {
        url: "/img/content/about-banners-04.jpg",
        width: 1000,
        height: 1500,
      },
      {
        url: "/img/content/about-banners-03.jpg",
        width: 1920,
        height: 1440,
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner
        pageImage={"/img/content/About us - 1.jpg"}
        pageTitle={"About 2"}
      />

      {/* about */}
      <div className="container mil-content-frame mil-p-120-0">
        <div className="row justify-content-between align-items-center">
          <div className="mil-12 col-xl-5 mil-mb-120">
            <div className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Content.about1.subtitle}
            </div>
            <h3 className="mil-appearance mil-mb-30">{Content.about1.title}</h3>
            <p
              className="mil-appearance mil-mb-30"
              style={{ color: "#001413" }}
            >
              {Content.about1.text_1}
            </p>
            <p
              className="mil-appearance mil-mb-30"
              style={{ color: "#001413" }}
            >
              {Content.about1.text_2}
            </p>
          </div>
          <div className="mil-12 col-xl-6 mil-mb-120">
            {/* collage */}
            <div className="mil-collage-1">
              <div
                className="mil-circle-text-position"
                style={{ bottom: "62%", left: "-75px" }}
              >
                <div
                  className="mil-circle-text mil-rotate mil-accent-inside mil-appearance"
                  data-value="360"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text
                        className="mil-link mil-dark"
                        style={{ letterSpacing: "3.2px" }}
                      >
                        {/* circle text */}
                        <textPath xlinkHref="#circlePath">
                          {Content.about1.rotateText}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mil-image-1 mil-appearance">
                <div className="mil-just-image mil-image-square">
                  {/* back image */}
                  <img
                    src={Content.about1.image1}
                    alt="img"
                    className="mil-scale-img"
                    data-value-1="1"
                    data-value-2="1.2"
                  />
                </div>
              </div>
              <div className="mil-image-2 mil-appearance">
                <div className="mil-just-image">
                  {/* front image */}
                  <img
                    src={Content.about1.image2}
                    alt="img"
                    style={{ objectPosition: "right" }}
                  />
                </div>
              </div>
            </div>
            {/* collage end */}
          </div>
        </div>
      </div>
      {/* about end */}

      {/* about */}
      <div className="container mil-content-frame mil-appearance mil-p-0-90">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
                {Content.about2.subtitle}
            </span>
            <h3 className="mil-appearance mil-mb-30">{Content.about2.title}</h3>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <p
                  className="mil-first-letter mil-appearance mil-mb-30"
                  style={{ color: "#001413" }}
                >
                  {Content.about2.text_1}
                </p>
              </div>
              <div className="col-lg-6">
                <p
                  className="mil-appearance mil-mb-30"
                  style={{ color: "#001413" }}
                >
                  {Content.about2.text_2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}

      {/* gallery */}
      <div className="container mil-p-0-120">
        <Gallery>
          <Swiper
            {...sliderProps.milGallerySlider}
            className="swiper-container mil-gallery-slider mil-appearance"
          >
            {Content.gallery.map((item, key) => (
              <SwiperSlide className="swiper-slide" key={`gallery-item-${key}`}>
                <Item
                  original={item.url}
                  thumbnail={item.url}
                  width={item.width}
                  height={item.height}
                >
                  {({ ref, open }) => (
                    <a
                      data-fancybox="gallery"
                      data-no-swup
                      ref={ref}
                      onClick={open}
                      className="mil-just-image mil-image-hori mil-icon-3-trigger"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={item.url}
                        alt="img"
                        className="mil-scale-img"
                        data-value-1="1"
                        data-value-2="1.2"
                      />
                    </a>
                  )}
                </Item>
              </SwiperSlide>
            ))}
          </Swiper>
        </Gallery>
      </div>
      {/* gallery end */}

      <CountersSection />
      <CallToActionSection />
      {/* <LatestPostsSection posts={props.posts} layout={2} /> */}
      <SubscribeSection />
    </Layouts>
  );
};
export default About2;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}
