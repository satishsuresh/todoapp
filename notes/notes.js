import { Component } from "react";
import style from "./notes.module.css";

export class Notes extends Component {
  render() {
    return (
      <div>
        <div className={style.card}></div>
        <div className={style.card01}></div>
        <div className={style.card02}></div>
      </div>
    );
  }
}