import PropTypes from 'prop-types';
import { suggestedAcc } from '~/api';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
const cx = classNames.bind(styles);

function AccountList({ label }) {
    return (
        <div className={cx('accounts')}>
            <p className={cx('label')}>{label}</p>
            {suggestedAcc.map((acc, index) => (
                <AccountItem
                    user={acc}
                    key={index}
                    customAvatar={cx('suggested-account')}
                    customInfo={cx('suggsted-info')}
                    live={acc.live}
                />
            ))}
        </div>
    );
}
AccountList.propTypes = {
    label: PropTypes.string.isRequired,
};
export default AccountList;
