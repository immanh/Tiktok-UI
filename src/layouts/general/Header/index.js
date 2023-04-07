import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
// Config classnames
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisVertical,
    faPlus,
    faLanguage,
    faQuestion,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { MessageIcon, InboxIcon, LogoIcon } from '~/components/Icons'
import { faMoon, faUser } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Button from '~/components/Button'
import ToggleButton from './ToggleButton'
import Menu from '~/layouts/Popper/Menu'

import { Images } from '~/components/Images'
import Search from './Search'
import routes from '~/config/routes'

const notLoggedInMenu = [
    {
        id: 1,
        title: 'English',
        leftIcon: <FontAwesomeIcon icon={faLanguage} />,
        children: {
            item: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        id: 2,
        title: 'Feedback and help',
        leftIcon: <FontAwesomeIcon icon={faQuestion} />,
        to: '/feedback',
    },
    {
        id: 3,
        title: 'Dark mode',
        leftIcon: <FontAwesomeIcon icon={faMoon} />,
        rightButton: <ToggleButton />,
    },
]
const loggedInMenu = [
    {
        title: 'View Profile',
        leftIcon: <FontAwesomeIcon icon={faUser} />,
        to: '/@immm481',
    },
    {
        title: 'Get Coins',
        leftIcon: <FontAwesomeIcon icon={faCoins} />,
        to: '/coin',
    },
    {
        title: 'Settings',
        leftIcon: <FontAwesomeIcon icon={faGear} />,
        to: '/setting',
    },
    ...notLoggedInMenu,
    {
        title: 'Log out',
        type: 'logout',
        leftIcon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        border: true,
    },
]

const cx = classNames.bind(styles)
function Header() {
    // const loggedIn = true;
    const [loggedIn, setLoggedIn] = useState(true)

    const handleChangeMenu = (item) => {
        switch (item.type) {
            case 'logout':
                setLoggedIn(false)
                break
            default:
                // throw new Error(`Invalid type ${item.type}`)
                console.log(`Invalid type ${item.type}`)
        }
    }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <LogoIcon />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    <Button
                        href="/upload"
                        text
                        size="medium"
                        target="_blank"
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>
                    {loggedIn ? (
                        <>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('icon')}>
                                    <MessageIcon className={cx('user-message')} />
                                    <sup className={cx('badge')}>8</sup>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('icon')}>
                                    <InboxIcon className={cx('user-inbox')} />
                                    <sup className={cx('badge')}>10</sup>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary size target="_blank">
                                Login
                            </Button>
                            {/* <Button rounded customClass={cx('install')} size target='_blank'>Install App</Button> */}
                        </>
                    )}
                    {/* {
                        console.log(notLoggedInMenu)
                    } */}
                    <Menu width="224px" items={loggedIn ? loggedInMenu : notLoggedInMenu} onChange={handleChangeMenu}>
                        <div className={cx('more-menu-icon')}>
                            {console.log(loggedIn ? loggedInMenu : notLoggedInMenu)}
                            {loggedIn ? (
                                <>
                                    <Images
                                        className={cx('user-avatar')}
                                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8f228189491f72fa186192209758be77~c5_100x100.jpeg?x-expires=1680962400&x-signature=bdc%2BCZ4%2FoNQ9rwDGWbOkDuJem34%3D"
                                        alt="Nguyen Van A"
                                    />
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </>
                            )}
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
