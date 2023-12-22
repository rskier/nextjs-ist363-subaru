import Link from 'next/link';
import style from './calltoaction.module.scss';
import Heading from './Heading';
import Button from './Button';

const CallToAction = ({subtitle}) => {
    return <section className={style.calltoaction}>
            <Heading level={2} textAlign="center" color="white">Get Behind the Wheel</Heading>
            <p>Start customizing your {subtitle} today, or contact your local Subaru dealer to experience one in person.</p>
        <div className={style.calltoaction__buttons}>
            <Button type="primary">
                <Link href="https://www.subaru.com/build.html">
                Build & Price
                </Link>
            </Button>
            <Button type="secondary">
                <Link href="https://www.subaru.com/find/a-retailer.html">
                 Contact Dealer
                </Link>
            </Button>
        </div>
    </section>
}
export default CallToAction;
