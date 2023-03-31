// import propTypes from 'prop-types';
import styles from './Popper.module.scss';
// Config classnames
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function Popper({ children, className = '' }) {
    return (
        <div className={cx('wrapper', className)}>{children}</div>
    )
}

export default Popper;

// Popper.propTypes = {
//     children: propTypes.object
// }