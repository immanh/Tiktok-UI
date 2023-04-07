import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './AccountItem.module.scss'
// Config classnames
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Images } from '../Images'
const cx = classNames.bind(styles)
function AccountItem({ user }) {
    return (
        <Link to={`profile/@${user.nickname}`} className={cx('account')}>
            <Images src={user.avatar} className={cx('avatar')} alt={user.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{user.full_name}</span>
                    {user.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('official')} />}
                </h4>
                <span className={cx('nickname')}>{user.nickname}</span>
            </div>
        </Link>
    )
}
AccountItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default AccountItem
