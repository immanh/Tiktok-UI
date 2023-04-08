import { useState, useEffect, useRef } from 'react'
import { faCircleNotch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import { Popper as SearchPopper } from '~/layouts/Popper'
import AccountItem from '~/components/AccountItem'
import { SearchIcon } from '~/components/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line
import * as searchServices from '~/services/searchServices'
// eslint-disable-next-line
import * as httpRequest from '~/utils/httpRequest'

import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import { useDebounce } from '~/components/hooks'
const cx = classNames.bind(styles)
const userSearchFake = [
    {
        id: 1,
        nickname: 'SchannelVN',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1681023600&x-signature=jx6cEQoGnAxgsoWNSGrE2d%2FwyAA%3D',
        full_name: 'schannel',
        tick: true,
    },
    {
        id: 2,
        nickname: 'SchannelVN',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1681023600&x-signature=jx6cEQoGnAxgsoWNSGrE2d%2FwyAA%3D',
        full_name: 'schannel',
        tick: true,
    },
    {
        id: 3,
        nickname: 'SchannelVN',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1681023600&x-signature=jx6cEQoGnAxgsoWNSGrE2d%2FwyAA%3D',
        full_name: 'schannel',
        tick: true,
    },
    {
        id: 4,
        nickname: 'SchannelVN',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1681023600&x-signature=jx6cEQoGnAxgsoWNSGrE2d%2FwyAA%3D',
        full_name: 'schannel',
        tick: true,
    },
    {
        id: 5,
        nickname: 'SchannelVN',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1681023600&x-signature=jx6cEQoGnAxgsoWNSGrE2d%2FwyAA%3D',
        full_name: 'schannel',
        tick: true,
    },
    {
        id: 6,
        nickname: 'SchannelVN',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1681023600&x-signature=jx6cEQoGnAxgsoWNSGrE2d%2FwyAA%3D',
        full_name: 'schannel',
        tick: true,
    },
    {
        id: 7,
        nickname: 'SchannelVN',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1681023600&x-signature=jx6cEQoGnAxgsoWNSGrE2d%2FwyAA%3D',
        full_name: 'schannel',
        tick: true,
    },
    {
        id: 8,
        nickname: 'SchannelVN',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1681023600&x-signature=jx6cEQoGnAxgsoWNSGrE2d%2FwyAA%3D',
        full_name: 'schannel',
        tick: true,
    },
]

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showSearchResult, setShowSearchResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const debounce = useDebounce('Manh', true)
    const inputSearchRef = useRef()

    useEffect(() => {
        if (!debounce) {
            return
        }

        setLoading(true)

        //httpRequest
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
    })
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
        // Using a wrapper <div> or <span> tag around the reference
        // element solves this by creating a new parentNode context
        // Fix warning of tippy
        <div>
            <HeadlessTippy
                interactive
                visible
                // visible={showSearchResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-box')} tabIndex="-1" {...attrs}>
                        <SearchPopper>
                            <h4 className={cx('search-title')}>Account</h4>
                            <div className={cx('search-box-body')}>
                                {userSearchFake.map((result) => (
                                    <AccountItem key={result.id} user={result} />
                                ))}
                            </div>
                            <p className={cx('search-more-result')}>{`Xem tất cả kết quả dành cho "${debounce}"`}</p>
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
                        // onChange={handleSearchValue}
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
        </div>
    )
}

export default Search
