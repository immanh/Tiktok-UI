import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Menu.module.scss';
// Config classnames
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

function HeaderMenu({ title, onBack }) {
    const a = '2'
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('back-icon')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h3 className={cx('heading')}>{title}</h3>
        </header>
    );
}

export default HeaderMenu;