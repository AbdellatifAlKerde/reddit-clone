import React from "react";
import styles from "./style.module.css";
import redditLogo from "../../assets/images/reddit-logo.svg";
import redditLogoText from "../../assets/images/reddit-logo-text.svg";
import Img from "../../components/img/index";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MainButton from "../main-button";
import SecondaryButton from "../secondary-button";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} ${styles.flex}`}>
        <div className={`${styles.logoSearch} ${styles.flex}`}>
          <a href="#" className={`${styles.logo} ${styles.flex}`}>
            <div className={styles.redditLogo}>
              <Img src={redditLogo} alt="reddit logo" />
            </div>
            <div className={`${styles.redditLogoText} ${styles.flex}`}>
              <Img src={redditLogoText} alt="reddit logo text" />
            </div>
          </a>
          <div className={styles.searchBar}>
            <div className={`${styles.searchBarInput} ${styles.flex}`}>
              <div className={`${styles.inputWrapper} ${styles.flex}`}>
                <label htmlFor="header-search-bar">
                  <div className={`${styles.searchIcon} ${styles.flex}`}>
                    <SearchRoundedIcon />
                  </div>
                </label>
                <input
                  id="header-search-bar"
                  type="search"
                  placeholder="Search Reddit"
                />
              </div>
            </div>
          </div>
        </div>
        <nav className={`${styles.navigationBar} ${styles.flex}`}>
          <div className={`${styles.navigationButtons} ${styles.flex}`}>
            <SecondaryButton>
              <span style={{ marginRight: "8px" }}>
                <QrCodeScannerRoundedIcon
                  style={{ width: "20px", height: "20px" }}
                />
              </span>
              Get App
            </SecondaryButton>
            <MainButton>Log In</MainButton>
          </div>
          <div className={styles.profileDropDown}>
            <div className={`${styles.profileDropdownIcons} ${styles.flex}`}>
              <PersonOutlineRoundedIcon />
              <KeyboardArrowDownRoundedIcon />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
