import Row from './Row';
import styles from './footer.module.scss';
import Nav from './Nav';

const Footer = () => {
    return <footer className={styles.footer}>
        <Row justifyContent="center">
            <Nav.Social>

            </Nav.Social>
        </Row>
    </footer>
}
export default Footer;