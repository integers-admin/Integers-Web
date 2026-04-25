import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import appData from "@data/app.json";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const Content = {
    subtitle: "Contact",
    title: "Get in touch",
    info: [
      {
        icon: "img/icons/mail-icon.svg",
        label: "Support email",
        value: "info@integersinsights.com",
      },
      {
        icon: "img/icons/contact-icon.svg",
        label: "Call 24/7",
        value: "+91 93212 56706",
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner
        pageImage={"img/content/ContactBanner - 5.jpg"}
        pageTitle={"Contact"}
      />
      <ToastContainer />
      {/* contact */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between mil-mb-90">
          <div className="col-xl-5">
            <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Content.subtitle}
            </h3>
            <h3 className="mil-mb-60 mil-appearance">{Content.title}</h3>
          </div>
          <div className="col-xl-6">
            <div className="row mil-mt-55-adapt">
              {Content.info.map((item, key) => (
                <div className="col-lg-6" key={`contact-item-${key}`}>
                  <div className="mil-icon-box mil-box-hori mil-appearance mil-mb-30">
                    <div className="mil-icon mil-accent">
                      <img src={item.icon} alt={item.label} />
                    </div>
                    {/* <div className="mil-icon-box-text">
                                            <h6>{item.value}</h6>
                                            <p style={{color:"#001413"}}>{item.label}</p>
                                        </div> */}
                    <div className="mil-icon-box-text">
                      <h6>
                        {item.label === "Support email" ? (
                          <a href={`mailto:${item.value}`}>{item.value}</a>
                        ) : item.label === "Call 24/7" ? (
                          <a href={`tel:${item.value}`}>{item.value}</a>
                        ) : (
                          item.value
                        )}
                      </h6>
                      <p style={{ color: "#001413" }}>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          // onSubmit = {( values, { setSubmitting } ) => {
          //     const form = document.getElementById("contactForm");
          //     const status = document.getElementById("contactFormStatus");
          //     const data = new FormData();

          //     data.append('name', values.name);
          //     data.append('email', values.email);
          //     data.append('message', values.message);

          //     fetch(form.action, {
          //         method: 'POST',
          //         body: data,
          //         headers: {
          //             'Accept': 'application/json'
          //         }
          //     }).then(response => {
          //         if (response.ok) {
          //             status.innerHTML = "Thanks for your submission!";
          //             form.reset()
          //         } else {
          //             response.json().then(data => {
          //                 if (Object.hasOwn(data, 'errors')) {
          //                     status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          //                 } else {
          //                     status.innerHTML = "Oops! There was a problem submitting your form"
          //                 }
          //             })
          //         }
          //     }).catch(error => {
          //         status.innerHTML = "Oops! There was a problem submitting your form"
          //     });

          //     setSubmitting(false);
          // }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // const status = document.getElementById("contactFormStatus");

            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: values.name,
                  email: values.email,
                  message: values.message,
                }),
              });

              const result = await response.json();

              if (response.ok) {
                // status.innerHTML = "Message sent successfully!";
                toast.success("Message sent successfully!");
                resetForm();
              } else {
                toast.error(result.message || "Something went wrong!");
                // status.innerHTML = result.message || "Something went wrong!";
              }
            } catch (error) {
              toast.error("Server error!");
              // status.innerHTML = "Server error!";
            }

            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} id="contactForm">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <input
                      className="mil-link"
                      type="text"
                      name="name"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <label className="mil-link" style={{ color: "#001413" }}>
                      Name
                    </label>
                    <span></span>
                    <em>{errors.name && touched.name && errors.name}</em>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <input
                      className="mil-link"
                      type="email"
                      name="email"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <label className="mil-link" style={{ color: "#001413" }}>
                      Email*
                    </label>
                    <span></span>
                    <em>{errors.email && touched.email && errors.email}</em>
                  </div>
                </div>
                <div className="col-lg-12">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <textarea
                      name="message"
                      className="mil-link"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    <label className="mil-link" style={{ color: "#001413" }}>
                      Message
                    </label>
                    <span></span>
                    <em>
                      {errors.message && touched.message && errors.message}
                    </em>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p
                    className="mil-text-sm mil-mb-30"
                    style={{ color: "#001413" }}
                  >
                    Integers Insights Private Limited Unit No 28, 2nd Floor,
                    Vicino Building, New Link Road, Goregaon (Mumbai), Goregaon
                    West, Maharashtra, 400104, India
                  </p>
                </div>
                <div className="col-lg-6">
                  <button
                    type="submit"
                    className="mil-float-right mil-button mil-button-lg mil-scale-down-trigger mil-dark-trigger mil-mb-30"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </div>
                {/* <div className="form-status" id="contactFormStatus" /> */}
              </div>
            </form>
          )}
        </Formik>
      </div>
      {/* contact end */}

      {/* map */}
      <div className="mil-map-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.000061840535!2d72.83180907551265!3d19.151474582068754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x66dc4d70a190031%3A0x651642901b2c5da0!2sIntegers%20Insights%20Private%20Limited!5e0!3m2!1sen!2sin!4v1776840717038!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* map end */}
    </Layouts>
  );
};
export default Contact;
