import { Link } from 'react-router-dom'
import classNames from 'classnames/bind';
import styles from './Button.module.scss'
const cx = classNames.bind(styles)
function Button({ to, href, primary = false, classNames, customClass, leftIcon = false, rightIcon = false, rightButton = false, outline = false, rounded = false, text = false, disabled = false, size = 'medium', customIcon = '', children, onClick, ...others }) {
    let Component = 'button'
    const props =
    {
        onClick,
        ...others,
    }
    const classes = cx('wrapper',
        {
            [size]: size,
            [customClass]: customClass,
            [classNames]: classNames,
            leftIcon,
            rightIcon,
            rightButton,
            primary,
            outline,
            rounded,
            text,
            disabled,
        })

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Component = Link
    }
    else if (href) {
        props.href = href
        Component = 'a'
    }
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon', customIcon)}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            {rightButton}
        </Component>
    );
}
export default Button;