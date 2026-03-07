import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import PricingSection from "@components/sections/Pricing";

import Link from "next/link";

const Services = (props) => {

  const Content = {
    "title": "AI-Powered Business Services",
    "subtitle": "Services",
    "description1": "We offer comprehensive AI-driven solutions tailored to help today’s businesses work smarter and grow faster. Whether it’s custom AI web applications, SaaS platforms, or robust enterprise data infrastructure and predictive analytics dashboards, we create intelligent systems that turn complex operations into smooth, automated workflows fueled by real-time insights.",
    "description2": "But we don’t stop at just tech development. We also provide market intelligence reports, digital marketing strategies, B2B lead generation systems, CRM optimization, and revenue automation frameworks. By blending artificial intelligence, data engineering, and performance marketing, we build growth systems that not only cut costs and boost efficiency but also pave the way for long-term business success."
  }

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/ServiceBanner - 4.jpg"} pageTitle={"Services"} />

      {/* services */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">

        <div className="row justify-content-between">
          <div className="col-lg-4 mil-mb-120">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              <span style={{ color: "#001413" }}>{Content.subtitle}</span></span>
            <h3 className="mil-appearance mil-mb-30">{Content.title}</h3>

            <p className="mil-appearance mil-mb-30" style={{ color: "#001413" }}>{Content.description1}</p>
            <p className="mil-appearance mil-mb-30" style={{ color: "#001413" }}>{Content.description2}</p>

            <div className="mil-deco mil-appearance"></div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              {props.services.map((item, key) => (
                <div className="col-xl-6 col-lg-12" key={`services-item-${key}`}>

                  {/* service card */}
                  <Link href={`/services/${item.id}`} className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30">
                    <div className="mil-card-content">
                      {/* icon */}
                      <img src={item.image} alt={item.title} className="mil-card-icon" />
                      <div>
                        {/* text */}
                        <h5 className="mil-mb-10">{item.title}</h5>
                        <p className="mil-softened-40">
                          <span style={{ color: "#001413" }}>{item.short}</span>
                        </p>
                      </div>
                      <br />
                      <div className='icon'>
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#001413" strokeWidth="2">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                  {/* service card end */}

                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-7">

          </div>
        </div>
      </div>
      {/* services end */}

      <PricingSection />
      <CallToActionSection />

    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}