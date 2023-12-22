import styles from './swatches.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);


const Swatches = ({
    activeColor,
    colors,
    setActiveColor
}) => {

    return <ul className={styles.swatches__list}>
        {colors.map((color, index) => {
            const swatchClasses = cx({
                swatches__list__item:true,
                active: index === activeColor
            });
            return <li 
            className={swatchClasses}
            style={{backgroundColor: color.swatch.edges[0].node.swatchInformation.hexValue}}
            onClick={()=>{
                setActiveColor(index);
            }}
            >
            </li>
        })}
    </ul>
}

export default Swatches;