import React from "react";
import Input from "@mui/material/Input";
import Styles from "./style.module.css";

function TextField(props) {
  return (
    <Input type={props.type} fullWidth={props.fullWidth} sx={props.sx}>
      TextField
    </Input>
  );
}

export default Input;
