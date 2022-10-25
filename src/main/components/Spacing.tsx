import React from "react";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";

function spacing(scalar:number, height:number, width:number, className:string) {
    return(
      <div className={className} style={{height:height, width:width, marginTop:  `calc((100vw + 25vh)*0.875*${scalar}`}}></div>
    );
}

export default spacing;