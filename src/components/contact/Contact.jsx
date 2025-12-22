import { Fragment } from 'react'
import { BlurFade } from '../magicui/blur-fade.tsx'
import { social } from '../ui/Icons.tsx'

const BLUR_FADE_DELAY = 0.04
const Contact = () => {
  return (<>
    <div className={'flex flex-wrap w-full justify-between gap-2'}>
      {social.map((social, index) => (<Fragment key={index}>
        <BlurFade
          delay={BLUR_FADE_DELAY * 10 + index * 0.1}
          className={'flex'}
        >
          <a
            href={social.url}
            target={'_blank'}
            rel="noopener noreferrer"
            className={'bg-white! rounded-xl hover:scale-110 duration-300 shadow border border-[#f5f5f5] p-3.5'}
          >
            {<social.icon/>}
          </a>
        </BlurFade>
      </Fragment>))}
    </div>
  </>)
}

export default Contact
