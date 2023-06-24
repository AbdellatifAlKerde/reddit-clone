import React from "react";
import styles from "./style.module.css";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import Img from "../img";
import SecondaryButton from "../secondary-button";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function PostsCard() {
  return (
    <div className={styles.postsCard}>
      <div className={styles.votes}>
        <div className={styles.votesContent}>
          <button>
            <span>
              <NorthRoundedIcon />
            </span>
          </button>
          <div>18.1k</div>
          <button>
            <span>
              <SouthRoundedIcon />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.cardHeader}>
          <div className={styles.headerIcon}>
            <a href="#">
              <Img src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png?width=256&v=enabled&s=afa114d8884bc635b2e6a4b781b78bbfc77180bd" />
            </a>
          </div>
          <div className={styles.headerTextWrapper}>
            <div className={styles.headerText}>
              <div className={styles.headerProfileName}>
                <a href="#">r/AskReddit</a>
              </div>
              <span className={styles.dot}>•</span>
              <span className={styles.postedBy}>Posted by</span>
              <a href="#" className={styles.userPostedProfile}>
                u/GreenerPeach01
              </a>
              <span>21 hours ago</span>
            </div>
          </div>
          <SecondaryButton>Join</SecondaryButton>
        </div>
        <div className={styles.postContent}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            <div>
              <h3>
                Which celebrity gives off vibes that they have committed crimes
                but keep getting away with it, and you're just waiting for them
                to get officially caught/charged?
              </h3>
            </div>
          </a>
        </div>
        <div style={{ marginTop: "8px" }}></div>
        <div className={styles.postActionsWrapper}>
          <div className={styles.postActions}>
            <a href="#" className={styles.comments}>
              <span className={styles.icon}>
                <ChatBubbleOutlineOutlinedIcon />
              </span>
              <span className={styles.text}>10.3k Comments</span>
            </a>
            <div className={styles.share}>
              <button>
                <ReplyOutlinedIcon />
                <span className={styles.shareLabel}>Share</span>
              </button>
            </div>
            <div className={styles.share}>
              <button>
                <BookmarkBorderOutlinedIcon />
                <span className={styles.shareLabel}>Save</span>
              </button>
            </div>
            <div className={styles.more}>
              <button>
                <MoreHorizOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsCard;
