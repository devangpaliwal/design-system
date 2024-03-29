import React from "react";
import Button from "./Button";


export default {
    component:Button,
    title:"MyButton",
    tags:["autodocs"]
}

export const Default = {
    args:{
        name: "firstButton",
        value:"firstButton",
        style:{size:"button-large"}
        //onPush: function(){console.log('clicked')}
    }
}