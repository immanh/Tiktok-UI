import classNames from 'classnames/bind'
import styles from './ToggleButton.module.scss'
const cx = classNames.bind(styles)

function ToggleButton() {
    const classNames = cx('slider',
        {
            round: 'round',
        })
    return (
        <label className={cx("switch")} >
            <input type="checkbox" />
            <span className={classNames} ></span>
        </label>
    )
}

export default ToggleButton;