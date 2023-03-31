import { useEffect, useState } from 'react'

import styles from './Header.module.scss';
// Config classnames
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faEllipsisVertical, faMagnifyingGlass, faXmarkCircle, faPlus, faLanguage, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react/headless'
// import { faMagnifyingGlass } from '@fortawesome/free-light-svg-icons';
import images from '~/assets/img'
import { Popper as SearchPopper } from '~/components/Layout/Popper'
import AccountItem from '~/components/AccountItem'
import MenuItem from '../../Popper/Menu/MenuItem'
import Button from '~/components/Button'
import ToggleButton from './ToggleButton'
import Menu from '~/components/Layout/Popper/Menu'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLanguage, faQuestion } from '@fortawesome/free-solid-svg-icons'
// import { faMoon } from '@fortawesome/free-regular-svg-icons'
// import Button from '~/components/Button'
// import MenuItem from '~/components/Layout/general/MenuItem'
// import ToggleButton from '~/components/Layout/general/Header/ToggleButton'

const MENU_ITEMS = [
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

function Header() {
    const cx = classNames.bind(styles)
    const [searchResult, setSearchResult] = useState([])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3])
    //     }, 0)
    // })
    const handleChangeMenu = (item) => {
        console.log(item)

    }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="Tiktok logo" />
                <Tippy
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
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>

                    <Button href='/upload' text size='medium' target='_blank' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary size target='_blank'>Login</Button>
                    {/* <Button rounded customClass={cx('install')} size target='_blank'>Install App</Button> */}
                    <Menu
                        width='224px'
                        items={MENU_ITEMS}
                        onChange={handleChangeMenu}
                    >
                        <div className={cx('more-menu-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Menu>


                </div>
            </div>

        </header >
    );
}

export default Header;