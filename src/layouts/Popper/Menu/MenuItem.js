import PropTypes from 'prop-types'
import styles from './Menu.module.scss'
// Config classnames
import classNames from 'classnames/bind'
import Button from '~/components/Button'
const cx = classNames.bind(styles)

function MenuItem({ data, onSelect }) {
    const classes = cx('menu-child', {
        separate: data.border,
    })
    return (
        <Button
            leftIcon={data.leftIcon}
            to={data.to}
            classNames={classes}
            customIcon={cx('icon')}
            rightButton={data.rightButton}
            onClick={onSelect}
        >
            {data.title}
        </Button>
    )
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
}
export default MenuItem
