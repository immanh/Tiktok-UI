import classNames from 'classnames/bind';
// Config classnames
import styles from './Sidebar.module.scss';
import Navigation, { NavItem } from '~/layouts/Common/Sidebar/Navigation';
import {
    HomeIcon,
    FollowIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons/Icons';
import config from '~/config';
import AccountList from './SuggestAccounts/SuggestAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Navigation>
                <NavItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <NavItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowIcon />}
                    activeIcon={<FollowActiveIcon />}
                />
                <NavItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Navigation>
            <AccountList label="Suggested Accounts" />
        </aside>
    );
}

export default Sidebar;
