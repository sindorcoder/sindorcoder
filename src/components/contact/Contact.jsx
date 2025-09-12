import {social} from "../ui/Icons.tsx";
import {Link} from "react-router-dom";
import {BlurFade} from "../magicui/blur-fade.tsx";
import {Fragment} from "react";

const BLUR_FADE_DELAY = 0.04;
const Contact = () => {

    return (
        <>
                <div className={'flex flex-wrap w-full justify-center gap-2'}>

                    {
                        social.map((social, index) => (
                            <Fragment key={index}>
                                <BlurFade delay={BLUR_FADE_DELAY * 10 + index * 0.1} className={'flex  gap-2'}>
                                    <Link to={social.url} target={'_blank'} rel="noopener noreferrer"
                                          className={'!bg-[#fff] rounded-xl shadow border-[1px] border-[#f5f5f5] p-3'}>
                                            {<social.icon/>}
                                    </Link>
                                </BlurFade>
                            </Fragment>
                        ))
                    }
                </div>
        </>
    );
};

export default Contact;
