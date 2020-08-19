import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="container">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
