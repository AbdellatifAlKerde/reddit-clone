import React, { useState } from "react";
import styles from "./style.module.css";
import MainButton from "../main-button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OutboundRoundedIcon from "@mui/icons-material/OutboundRounded";
import Img from "../img";
import { sidebarItems } from "./sidebarItems";

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (itemId) => {
    activeItem === itemId ? setActiveItem(null) : setActiveItem(itemId);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarMenu}>
        <div className={styles.menuSubTitle}>feeds</div>
        <a href="#" className={styles.menuLinks}>
          <HomeRoundedIcon />
          <span>Home</span>
        </a>
        <a href="#" className={styles.menuLinks}>
          <OutboundRoundedIcon />
          <span>Popular</span>
        </a>
        <div className={styles.menuSubTitle}>recent</div>
        <a href="#" className={styles.menuLinks}>
          <div style={{ width: "20px", height: "20px" }}>
            <Img src="https://styles.redditmedia.com/t5_2s5oq/styles/communityIcon_vkdkb2aoisi91.jpg?format=pjpg&s=0cdd8f0ec334c765cbef01e0fb131101e8775b02" />
          </div>
          <span>r/LifeProTips</span>
        </a>
        <div className={styles.menuSubTitle}>topics</div>
        {sidebarItems.map((item) => (
          <>
            <button
              className={styles.topicsLinks}
              onClick={() => handleClick(item.id)}
            >
              <span className={styles.link}>
                <span className={styles.linkIcon1}>{item.icon1}</span>
                <span className={styles.linkLabel}>{item.label}</span>
                <span
                  className={`${styles.linkIcon2} ${
                    activeItem === item.id && styles.rotate
                  }`}
                >
                  {item.icon2}
                </span>
              </span>
            </button>
            {activeItem === item.id && (
              <div className={styles.linksDropDown}>
                {item.links.map((link) => (
                  <a href="#" className={styles.linksDropDownLink}>
                    {link}
                  </a>
                ))}
              </div>
            )}
          </>
        ))}
      </div>
      <div className={styles.sidebarFooter}>
        <div className={styles.sidebarFooterText}>
          Create an account to follow your favorite communities and start taking
          part in conversations.
        </div>
        <MainButton style={{ padding: "12px 0" }} fullWidth={true}>
          Join Reddit
        </MainButton>
      </div>
    </aside>
  );
}

export default Sidebar;
