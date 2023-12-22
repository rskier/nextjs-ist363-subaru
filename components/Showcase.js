import {scroller} from 'react-scroll';

import Image from 'next/image';
import style from './showcase.module.scss';
import Heading from './Heading';
import Button from './Button';

const Showcase = ({featuredImage, subtitle, title}) => {
    return <section className={style.showcase}>
        {featuredImage &&
            <Image 
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText}
                width={featuredImage.node.mediaDetails.width}
                height={featuredImage.node.mediaDetails.height}
                className={style.showcase__image}
            />
        }
        <div className={style.showcase__gradient}></div>
        <div className={style.showcase__text}>
            <Heading level={3} color="white" marginBottom={1}>2024 {subtitle}</Heading>
            <Heading level={1} color="white" marginBottom={2}>{title}</Heading>
            <Button 
                type="primary"
                clickHandler={() => {
                    scroller.scrollTo("main-content", {
                        duration: 800,
                        delay: 0,
                        smooth: true
                    });

                }}
            >Learn more</Button>
        </div>
    </section>
}
export default Showcase;

