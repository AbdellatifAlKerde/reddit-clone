import React from "react";
import styles from "./style.module.css";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import AlignVerticalTopOutlinedIcon from "@mui/icons-material/AlignVerticalTopOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";

function TrendingFilter() {
  return (
    <div className={styles.trendingFiltering}>
      <div className={styles.navigation}>
        <a href="#" className={styles.hot}>
          <span className={styles.hotIcon}>
            <LocalFireDepartmentRoundedIcon />
          </span>
          <span className={styles.hotLabel}>Hot</span>
        </a>
        <div className={styles.countryFilter}>
          <div className={styles.countryFilterButton}>
            <button>
              <span className={styles.buttonLabel}>Everywhere</span>
              <span className={styles.buttonIcon}>
                <KeyboardArrowDownRoundedIcon />
              </span>
            </button>
          </div>
        </div>
        <a href="#" className={styles.new}>
          <span className={styles.newIcon}>
            <NewReleasesOutlinedIcon />
          </span>
          <span className={styles.newLabel}>New</span>
        </a>
        <a href="#" className={styles.top}>
          <span className={styles.topIcon}>
            <AlignVerticalTopOutlinedIcon />
          </span>
          <span className={styles.topLabel}>Top</span>
        </a>
      </div>
      <div className={styles.viewMore}>
        <button>
          <span>
            <MoreHorizOutlinedIcon />
          </span>
        </button>
      </div>
      <div className={styles.cardsTypes}>
        <div className={styles.cardsTypesContent}>
          <button>
            <span className={styles.cardsIcon}>
              <ViewAgendaOutlinedIcon />
            </span>
            <span className={styles.downIcon}>
              <KeyboardArrowDownRoundedIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrendingFilter;
