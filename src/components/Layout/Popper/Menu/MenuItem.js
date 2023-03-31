import styles from './Menu.module.scss';
// Config classnames
import classNames from 'classnames/bind';
import Button from '~/components/Button'
const cx = classNames.bind(styles)

function MenuItem({ data }) {
    const classNames = cx('menu-child')
    return (
        <Button
            leftIcon={data.leftIcon}
            to={data.to}
            classNames={classNames}
            customIcon={cx('icon')}
            rightButton={data.rightButton}
        >
            {data.title}
        </Button>


        // <li className={cx('menu-item')}>
        //     {
        //         leftIcon && <span className={cx('setting-icon')}>{leftIcon}</span>
        //     }
        //     <span className={cx('setting-name')}>{children}</span>
        //     {rightIcon}
        // </li>
    );
}

export default MenuItem;