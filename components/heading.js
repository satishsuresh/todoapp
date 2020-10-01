import { Component } from "react";
import style from "./heading.module.css";

export class Heading extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <div >
        <input className={style.search} type="text" placeholder="Search"/>
     
            </div>
    </div>
    </div>
    );
  }
}