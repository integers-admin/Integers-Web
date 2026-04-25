import Data from "@data/sections/subscribe.json";
import appData from "@data/app.json";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const SubscribeSection = ({ bgColorClass }) => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Subscribed successfully.");
                setEmail("");
            } else {
                toast.error("Something went wrong");
            }

        } catch (error) {
            toast.error("Something went wrong",error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <ToastContainer />
            <div className={bgColorClass ? `mil-subscribe-1 ${bgColorClass}` : "mil-subscribe-1"} style={{ marginTop: "50px" }}>
                <div className="container mil-p-0-90">
                    <form onSubmit={handleSubmit}>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-2">

                                <h4 className="mil-appearance mil-mb-30">{Data.title}</h4>

                            </div>
                            <div className="col-lg-6">

                                {/* email field */}
                                <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                                    <input className="mil-link" type="email" name="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <label className="mil-link" style={{ color: "#6A8076" }}>yourname@email.com</label>
                                    <span />
                                </div>

                                {/* <input type="hidden" name={appData.settings.mailchimp.key} /> */}
                            </div>
                            <div className="col-lg-2">
                                {/* button */}
                                <div className="mil-appearance"><button type="submit" disabled={loading} className="mil-button mil-button-md mil-scale-down-trigger mil-mb-30" style={{ backgroundColor: "#0984E3", color: "#FFF", cursor: loading ? "not-allowed" : "pointer" }}>{loading ? "Subscribing..." : "Subscribe Now"}</button></div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default SubscribeSection;