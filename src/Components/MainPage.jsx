import React, { useEffect, useRef } from "react";
import ModelRoomFull from "./ModelRoomFull";

const ModelRender = () => {
  return (
    <div>
      <ModelRoomFull />

      <div style={{maxWidth: "5%", backgroundColor: "yellow", opacity: "0.1"}}>
        {Array.from({ length: 100 }).map((_, index) => (
          <h1 key={index} style={{ display: "inline-block", maxWidth: "20%" }}>aa</h1>
        ))}
      </div>
    </div>
  );
};

export default ModelRender;
