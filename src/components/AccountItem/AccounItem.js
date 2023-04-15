import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AccountItem.module.scss';
// Config classnames
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Images } from '../Images';
const cx = classNames.bind(styles);
function AccountItem({ user, customAvatar, customInfo, live = false }) {
    const accClasses = cx('account', {
        [customAvatar]: customAvatar,
    });
    const infoClasses = cx('username', {
        [customInfo]: customInfo,
    });
    // const Images = styled.img`
    //     border-color: var(--primary-color);
    // `;
    return (
        <Link to={`profile/@${user.full_name}`} className={accClasses}>
            <Images
                src={user.avatar}
                className={cx('avatar')}
                style={live ? { 'border-color': 'var(--primary-color)' } : { 'border-color': 'transparent' }}
                alt={user.full_name}
            />
            <div className={infoClasses}>
                <h4 className={cx('username')}>
                    <span>{user.full_name}</span>
                    {user.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('official')} />}
                </h4>
                <span className={cx('nickname')}>{user.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    user: PropTypes.object.isRequired,
    customAvatar: PropTypes.string,
    customInfo: PropTypes.string,
};

export default AccountItem;
