import styles from './Sidebar.module.scss';
// Config classnames
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>

        </aside>
     );
}

export default Sidebar;