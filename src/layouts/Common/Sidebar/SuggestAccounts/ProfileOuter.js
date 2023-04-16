import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './SuggestAccount.module.scss';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);
function ProfileOuter() {
    return (
        <div className={cx('container')}>
            <Link to={'/'}>
                <div className={cx('heading')}>
                    <img src={null} alt="username" />
                    <Button primary>Follow</Button>
                </div>
                <strong className={cx('username')}>podcastcuaanday</strong>
                <span className={cx('full-name')}>Ân kể chuyện</span>
            </Link>
            <p className={cx('interact')}>
                <span>8.9M</span>
                <span>Followers</span>
                <span>8.9M</span>
                <span>Likes</span>
            </p>
        </div>
    );
}

export default ProfileOuter;
