import * as React from "react";
// @ts-ignore
import resume from "../../assets/sindor.pdf";
import {Github, Linkedin, Mail, Phone, Send, File} from "lucide-react";


export const Icons = {
    email: ({strokeWidth = 2, size = 15}) => <Mail  size={size} strokeWidth={strokeWidth} />,
    phone: ({strokeWidth = 2, size = 15}) => <Phone  size={size} strokeWidth={strokeWidth} />,
    resume: ({strokeWidth = 2, size = 15}) => <File  size={size} strokeWidth={strokeWidth} />,
    telegram: ({strokeWidth = 2, size = 15}) => <Send  size={size} strokeWidth={strokeWidth} />,
    github: ({strokeWidth = 2, size = 15}) => <Github size={size} strokeWidth={strokeWidth} />,
    linkedin: ({strokeWidth = 2, size = 15}) => <Linkedin  size={size} strokeWidth={strokeWidth} />,
};

export const social =
    [
        {
            name: "GitHub",
            url: "https://github.com/sindorcoder",
            icon: Icons.github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/sindorolmasov",
            icon: Icons.linkedin,
        },
        {
            name: "Telegram",
            url: "https://t.me/sindor_712",
            icon: Icons.telegram,
        },
        {
            name: "Send Email",
            url: "mailto:sindordev77@gmail.com",
            icon: Icons.email,
        },
        {
            name: "Call Phone",
            url: "tel:+998906027875",
            icon: Icons.phone,
        },
        {
            name: "view resume",
            url: resume,
            icon: Icons.resume,
        },
    ]
