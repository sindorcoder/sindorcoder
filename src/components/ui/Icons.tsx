import * as React from "react";
import {FileText, GithubIcon, Linkedin, MailIcon, PhoneIcon,} from "lucide-react";
// @ts-ignore
import resume from "../../assets/sindor.pdf";
import {RiTelegramFill} from "react-icons/ri";


export const Icons = {
    email: () => <MailIcon className="size-5"/>,
    phone: () => <PhoneIcon className="size-5"/>,
    resume: () => <FileText className="size-5"/>,
    telegram: () => <RiTelegramFill className="size-5"/>,
    github: () => <GithubIcon className="size-5"/>,
    linkedin: () => <Linkedin className="size-5"/>,
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
