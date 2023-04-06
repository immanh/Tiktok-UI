import { useState, useEffect, useRef } from 'react'
import { faCircleNotch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import { Popper as SearchPopper } from '~/components/Layout/Popper'
import AccountItem from '~/components/AccountItem'
import { SearchIcon } from '~/components/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as searchServices from '~/apiServices/searchServices.js'
import * as request from '~/utils/request'

import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import { useDebounce } from '~/components/hooks'
const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showSearchResult, setShowSearchResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const debounce = useDebounce(searchValue, 800)
    const inputSearchRef = useRef()

    useEffect(() => {
        if (!debounce) {
            return
        }
        setLoading(true)
        // request
        //     .get(`users/search`, {
        //         params: {
        //             q: debounce,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data)
        //         setLoading(false)
        //     })
        //     .catch((err) => {
        //         throw new Error(err.message)
        //     })
        // const fetchApi = async () => {
        //     setLoading(true)
        //     const responseResult = await searchServices.search(debounce)
        //     setSearchResult(responseResult)
        //     setLoading(false)
        // }
        // fetchApi()
    }, [debounce])
    const handleHideResult = () => {
        setShowSearchResult(false)
    }
    const handleSearchValue = (e) => {
        const inputValue = e.target.value
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue)
            setSearchResult([])
        }
    }
    return (
        <HeadlessTippy
            interactive
            visible={showSearchResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-box')} tabIndex="-1" {...attrs}>
                    <SearchPopper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} user={result} />
                        ))}
                        <p className={cx('search-more-result')}>{`Xem tất cả kết quả dành cho "${searchValue}"`}</p>
                    </SearchPopper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleSearchValue}
                    onFocus={() => {
                        setShowSearchResult(true)
                    }}
                />
                <button
                    className={cx('search__clear-btn')}
                    onClick={() => {
                        setSearchValue('')
                        inputSearchRef.current.focus()
                        setSearchResult([])
                    }}
                >
                    {loading || <FontAwesomeIcon icon={faXmarkCircle} />}
                </button>
                {loading && <FontAwesomeIcon className={cx('search__loading')} icon={faCircleNotch} />}
                <button className={cx('search__search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search
