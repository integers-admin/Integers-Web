import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import CallToActionSection from "@components/sections/CallToAction";

const Team = () => {

  const Content = {
    "subtitle": "Team Members",
    "title": "Meet the Team <br />Behind Intelligent Growth",
    "description": "We're a team of AI engineers, data strategists, and digital growth experts dedicated to creating scalable systems for today's businesses. By blending artificial intelligence, analytics, and a focus on performance, we tackle complex challenges and turn them into measurable growth and a lasting competitive edge.",
    "items": [
      {
        "image": "/img/team/1.png",
        "name": "Nikhil Raut",
        "role": "Director"
      },
      {
        "image": "/img/team/2.png",
        "name": "Virendra Kini",
        "role": "Assistant Manager - Marketing"
      },
      {
        "image": "/img/team/3.jpeg",
        "name": "Devendra Rajapurkar",
        "role": "Visual Designer"
      },
      {
        "image": "/img/team/4.png",
        "name": "Rahul Mahale",
        "role": "SEO & Coordinator"
      },
      {
        "image": "/img/team/5.png",
        "name": "Omkar Bandarkar",
        "role": "Motion Graphic Designer"
      },
      {
        "image": "/img/team/6.jpeg",
        "name": "Vinit Pandhre",
        "role": "Social Media Coordinator"
      },
      {
        "image": "/img/team/7.jpeg",
        "name": "Sahil Pawaskar",
        "role": "Graphic Designer"
      },
      {
        "image": "/img/team/8.png",
        "name": "Aishwarya Salunkhe",
        "role": "Content Writer"
      },
      {
        "image": "/img/team/9.jpg",
        "name": "Yukta Moolya",
        "role": "AI/ML Engineer"
      },
      {
        "image": "/img/team/10.jpeg",
        "name": "Neel Naik",
        "role": "Data Engineer"
      },
      {
        "image": "/img/team/11.jpeg",
        "name": "Amarjit",
        "role": "Full Stack Developer"
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/TeamBanner - 3.jpg"} pageTitle={"Team"} />

      {/* team */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">

        <div className="row justify-content-between mil-mb-120">
          <div className="col-lg-5">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              <span style={{ color: "#001413" }}>{Content.subtitle}</span>
            </span>
            <h3 className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{ __html: Content.title }} />
          </div>
          <div className="col-lg-6">
            <p className="mil-appearance mil-mt-55-adapt mil-mb-30" style={{ color: "#001413" }}>{Content.description}</p>

            <div className="mil-deco mil-appearance"></div>
          </div>
        </div>

        <div className="row">

          {Content.items.map((item, key) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={`team-item-${key}`}>

              {/* team card */}
              <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                <div className="mil-cover mil-long">


                  <div className="mil-image-frame">
                    {/* portrait */}
                    <img src={item.image} alt={item.name} style={{ 'objectPosition': 'top', scale: "100%" }} />
                  </div>


                </div>
                <div className="mil-overlay mil-with-bg mil-text-center">
                  <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">
                      <span style={{ color: "#001413" }}>{item.role}</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* team card end */}

            </div>
          ))}
        </div>
      </div>
      {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;
