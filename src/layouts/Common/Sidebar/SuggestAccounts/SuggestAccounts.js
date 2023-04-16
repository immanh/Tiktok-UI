import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { suggestedAcc } from '~/api';
import AccountItem from '~/components/AccountItem';
import styles from './SuggestAccount.module.scss';
import Button from '~/components/Button';
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
            <Button more>See all</Button>
        </div>
    );
}
AccountList.propTypes = {
    label: PropTypes.string.isRequired,
};
export default AccountList;
