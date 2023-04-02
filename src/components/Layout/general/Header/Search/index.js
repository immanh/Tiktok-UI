import { useState, useEffect, useRef } from 'react'
import { faCircleNotch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import { Popper as SearchPopper } from '~/components/Layout/Popper'
import AccountItem from '~/components/AccountItem'
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import styles from './Search.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showSearchResult, setShowSearchResult] = useState(true)

    const inputSearchRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    })
    const handleHideResult = () => {
        setShowSearchResult(false)
    }
    return (
        <HeadlessTippy
            interactive
            visible={showSearchResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    ref={inputSearchRef}
                    placeholder='Search accounts and video'
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value)

                    }}
                    onFocus={() => {
                        setShowSearchResult(true)
                    }}
                />
                <button className={cx('search__clear-btn')} onClick={() => {

                    setSearchValue('')
                    inputSearchRef.current.focus()
                    setSearchResult([])
                }}>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button>
                {
                    // !!searchValue && <FontAwesomeIcon className={cx('search__loading')} icon={faCircleNotch} />
                }
                <button className={cx('search__search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;