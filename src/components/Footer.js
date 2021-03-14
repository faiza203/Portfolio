import React from "react";

const currentDate = new Date();

export default function Footer() {
  return (
    <h1 className="footer" style={{ background: "black" , color : "white" ,padding : "1em 0" , margin: "0" }}>
      All rights are reserved <span className="curcle" style={{color : "aqua" , padding: "0px 10px 4px 10px" , border : "1px solid aqua" , borderRadius : "50%" }}>c</span> {currentDate.getFullYear()}
    </h1>
  );
}
