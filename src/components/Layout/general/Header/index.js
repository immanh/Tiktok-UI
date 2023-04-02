import { useEffect, useState } from 'react'

import styles from './Header.module.scss';
// Config classnames
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faEllipsisVertical, faMagnifyingGlass, faXmarkCircle, faPlus, faLanguage, faQuestion, faPaperPlane, faInbox, faCoins, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faUser } from '@fortawesome/free-regular-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/img'
import { Popper as SearchPopper } from '~/components/Layout/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import ToggleButton from './ToggleButton'
import Menu from '~/components/Layout/Popper/Menu'
import { MessageIcon, InboxIcon, SearchIcon } from '~/components/Icons';

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
            ]
        }

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
        rightButton: <ToggleButton />
    }
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
    const [searchResult, setSearchResult] = useState([])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3])
    //     }, 0)
    // })
    const handleChangeMenu = (item) => {
        switch (item.type) {
            case 'logout':
                setLoggedIn(false)
                break
            default:
                throw new Error(`Invalid type ${item.type}`)
        }

    }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="Tiktok logo" />
                <HeadlessTippy
                    interactive
                    // visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-box')} tabIndex="-1" {...attrs}>
                            <SearchPopper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <p className={cx('search-more-result')}>{`Xem tất cả kết quả dành cho .....`}</p>
                            </SearchPopper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder='Search accounts and video'
                            spellCheck={false}
                        />
                        <button className={cx('search__clear-btn')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('search__loading')} icon={faCircleNotch} />
                        <button className={cx('search__search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>

                    <Button href='/upload' text size='medium' target='_blank' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {
                        loggedIn
                            ?
                            <>
                                <Tippy delay={[0, 200]} content='Messages' placement='bottom'>
                                    <button className={cx('icon')}>
                                        <MessageIcon className={cx('user-message')} />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content='Inbox' placement='bottom'>
                                    <button className={cx('icon')}>
                                        <InboxIcon className={cx('user-inbox')} />
                                    </button>
                                </Tippy>
                            </>
                            :
                            <>
                                <Button primary size target='_blank'>Login</Button>
                                {/* <Button rounded customClass={cx('install')} size target='_blank'>Install App</Button> */}
                            </>
                    }
                    {console.log(loggedIn)}
                    <Menu
                        width='224px'
                        items={loggedIn ? loggedInMenu : notLoggedInMenu}
                        onChange={handleChangeMenu}

                    >
                        <div className={cx('more-menu-icon')}>
                            {
                                loggedIn
                                    ?
                                    <>
                                        <img
                                            className={cx('user-avatar')}
                                            src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9e57e873376ca5f0fac691e09bcd4e45~c5_100x100.jpeg?x-expires=1680508800&x-signature=mq9n%2BECNM2JyHgisdgIsVj5QNB4%3D'
                                            alt='Nguyen Van A'
                                        />
                                    </>
                                    :
                                    <>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </>
                            }
                        </div>
                    </Menu>



                </div>
            </div>

        </header >
    );
}

export default Header;