import React from 'react'
import { RiLoginBoxLine,RiEyeOffFill } from '@remixicon/react';


import './LoginIcon.scss'
export default function LoginIcon({icon,pStyle}) {
    console.log(icon)
    console.log(pStyle)
    switch (icon) {
        case "eye":
            return (
            <RiEyeOffFill className={pStyle}></RiEyeOffFill>
            )
        case "login":
            return (
                <RiLoginBoxLine className={pStyle}></RiLoginBoxLine>
            )
        default:
            break;
    }
  
}
