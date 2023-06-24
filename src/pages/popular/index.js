import React from "react";
import TrendingToday from "../../components/trending-today";
import Posts from "../../components/posts";
import styles from "./style.module.css";

function Popular() {
  return (
    <section style={{ paddingLeft: "270px" }}>
      <TrendingToday />
      <Posts />
    </section>
  );
}

export default Popular;
