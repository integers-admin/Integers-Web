import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import Image from "next/image";

const DefaultHeader = ({ transparent, invert, extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if (item.children != 0) {
      s_class1 = 'mil-has-children';
    }
    let newobj = Object.assign({}, item, { "classes": s_class1 });
    navItems.push(newobj);
  });

  return (
    <div className={`mil-top-panel mil-invert-nav ${transparent ? " mil-transparent-nav" : ""} mil-animated ${extraClass ? extraClass : ""}`}>
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="mil-logo mil-scale-down-trigger mil-accent-trigger">
            <div className="mil-h5">
              <Image src="/img/icons/Int_Logo.svg" alt="Integers Insights Logo" height={52} width={187} priority />
              {/* {appData.header.logo.text}<span className="mil-accent">{appData.header.logo.accent}</span> */}
            </div>
          </a>
        </Link>
        <div className={`mil-mobile-dropdown mil-menu-center ${toggle ? "mil-active" : ""}`}>
          <div id="swupTopbar" className="mil-top-bar-transition">
            <nav className="mil-dark-nav">
              <ul className="mil-inline-list mil-hidden-trigger">
                {navItems.map((item, key) => (
                  <li className={item.classes} key={`header-menu-item-${key}`}>
                    <Link href={item.link} className="mil-link">
                      {item.label}
                    </Link>
                    {item.children != 0 &&
                      <ul>
                        {item.children.map((subitem, key) => (
                          <li key={`header-submenu-item-${key}`}>
                            <Link href={subitem.link} className="mil-link">
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    }
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="mil-social mil-hidden-trigger">
            {/* {appData.social.map((item, key) => (
              <li key={`header-social-item-${key}`}>
                <a href={item.link} title={item.title} target="_blank" onMouseEnter={(e) => e.currentTarget.querySelector("i").style.color = "#6CD3D0"}
                  onMouseLeave={(e) => e.currentTarget.querySelector("i").style.color = ""}>
                  <i className={item.icon} />
                </a>
              </li>
            ))} */}

            {toggle ?
              appData.social.map((item, key) => (
                <li key={key}>
                  <a href={item.link} title={item.title} target="_blank" rel="noopener noreferrer" className="mil-light" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={item.icon} alt={item.title} style={{ height: "24px", width: "24px" }} />
                  </a>
                </li>
              ))
              :
              appData.social1.map((item, key) => (
                <li key={key}>
                  <a href={item.link} title={item.title} target="_blank" rel="noopener noreferrer" className="mil-light" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={item.icon} alt={item.title} style={{ height: "24px", width: "24px" }} />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        {/* mobile menu button */}
        <div
          className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
        {/* mobile menu button end */}
      </div>
    </div>
  );
};
export default DefaultHeader;
