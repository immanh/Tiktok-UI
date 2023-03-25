import styles from './Header.module.scss';
// Config classnames
import classNames from 'classnames/bind';
function Header() {
    const cx = classNames.bind(styles)
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
                {/* Navigation */}
            </div>

        </header>
     );
}

export default Header;