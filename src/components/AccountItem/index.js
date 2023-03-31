import styles from './AccountItem.module.scss';
// Config classnames
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account')}>
            <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8f228189491f72fa186192209758be77~c5_100x100.jpeg?x-expires=1680080400&x-signature=scbcwvrcXXb0g33PuecCXZUxOt8%3D' className={cx('avatar')} alt='Account avatar'></img>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>Đức Mạnh</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('official')} />
                </h4>
                <span className={cx('nickname')}>Nguyen Thi Mong Thanh</span>
            </div>
        </div>
    );
}

export default AccountItem;