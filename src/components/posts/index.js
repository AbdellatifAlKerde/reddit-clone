import React from "react";
import styles from "./style.module.css";
import TrendingFilter from "../trending-filter";
import PostsCard from "../postsCard";

function Posts() {
  return (
    <div className={styles.posts}>
      <div className={styles.postsWrapper}>
        <div className={styles.title}>Popular Posts</div>
        <TrendingFilter />
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
      </div>
    </div>
  );
}

export default Posts;
