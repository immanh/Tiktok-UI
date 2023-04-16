import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { suggestedAcc } from '~/api';
import AccountItem from '~/components/AccountItem';
import styles from './SuggestAccount.module.scss';
import Button from '~/components/Button';
import ProfileOuter from './ProfileOuter';
const cx = classNames.bind(styles);

function AccountList({ label }) {
    return (
        <Tippy
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <ProfileOuter />
                </div>
            )}
        >
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
        </Tippy>
    );
}
AccountList.propTypes = {
    label: PropTypes.string.isRequired,
};
export default AccountList;
