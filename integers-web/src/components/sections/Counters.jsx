import { useEffect } from "react";
import Data from "@data/sections/counters.json";
import { countersAnimation } from "@/src/common/counters";

const CountersSection = () => {
  useEffect(() => {
    countersAnimation();
  }, []);

  return (
    <div className="container mil-p-0-90">
        <div className="row">
            {Data.items.map((item, key) => (
            <div key={`counter-item-${key}`} className="col-md-6 col-xl-3 mil-mb-30">

                <p className="mil-link mil-softened-50 mil-appearance">
                  <span style={{color:"#001413"}}>{item.label}</span>
                  </p>
                <div className="mil-h3 mil-appearance"><span className="mil-counter" data-number={item.value}>0</span><span className="mil-accent">{item.suffix ? item.suffix : "+"}</span></div>

            </div>
            ))}
        </div>
    </div>
  );
};

export default CountersSection;