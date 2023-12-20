import classnames from 'classnames/bind';
import styles from './heading.module.scss';

const cx = classnames.bind(styles);

const Heading = ({children, color, level, textAlign, marginBottom, marginTop, marginLeft, marginRight}) => {
    const Tag = level > 6 ? 'h6' : `h${level}`;

    const headingClasses = cx({
        heading: true,
        [`heading${level}`] : level,
        [`font-color-${color}`] : color,
        [`text-align-${textAlign}`] : textAlign,
        [`margin-top-${marginTop}`] : marginTop,
        [`margin-left-${marginLeft}`] : marginLeft,
        [`margin-right-${marginRight}`] : marginRight,
        [`margin-bottom-${marginBottom}`] : marginBottom,
    });
    
    return <Tag className={headingClasses}>{children}</Tag>
}
export default Heading;