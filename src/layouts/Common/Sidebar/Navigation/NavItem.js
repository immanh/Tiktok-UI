import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
const cx = classNames.bind(styles);
function NavItem({ to, icon, title, activeIcon }) {
    return (
        <NavLink to={to} className={(nav) => cx('item', { active: nav.isActive })}>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,

    title: PropTypes.string.isRequired,
};
export default NavItem;
