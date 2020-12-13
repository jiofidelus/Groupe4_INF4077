import React from "react";

export default function Dot({ level }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <span
        className="dot"
        style={{ backgroundColor: level >= 1 ? "#ffd369" : "#bbb" }}
      ></span>
      <span
        className="dot"
        style={{ backgroundColor: level >= 2 ? "#ffd369" : "#bbb" }}
      ></span>
      <span
        className="dot"
        style={{ backgroundColor: level >= 3 ? "#ffd369" : "#bbb" }}
      ></span>
      <span
        className="dot"
        style={{ backgroundColor: level >= 4 ? "#ffd369" : "#bbb" }}
      ></span>
      <span
        className="dot"
        style={{ backgroundColor: level >= 5 ? "#ffd369" : "#bbb" }}
      ></span>
    </div>
  );
}
