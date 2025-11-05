import * as React from "react";
// @ts-ignore
import resume from "../../assets/sindor.pdf";
import {RiGithubLine, RiPhoneLine} from "react-icons/ri";
import {FiLinkedin, FiFile} from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {TbBrandTelegram} from "react-icons/tb";

export const Icons = {
    email: () => <HiOutlineMail className="size-5"/>,
    phone: () => <RiPhoneLine className="size-5"/>,
    resume: () => <FiFile className="size-5"/>,
    telegram: () => <TbBrandTelegram className="size-5"/>,
    github: () => <RiGithubLine className="size-5"/>,
    linkedin: () => <FiLinkedin className="size-5"/>,
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
