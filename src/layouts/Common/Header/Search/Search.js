import { useState, useEffect, useRef } from 'react';
import { faCircleNotch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Popper as SearchPopper } from '~/layouts/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import * as searchServices from '~/services/searchServices';
// eslint-disable-next-line
import * as httpRequest from '~/utils/httpRequest';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputSearchRef = useRef();

    const debounceValue = useDebounce(searchValue, 700);
    useEffect(() => {
        if (!debounceValue) {
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const responseResult = await searchServices.search(debounceValue);
            setSearchResult(responseResult);
            setLoading(false);
        };
        fetchApi();
    }, [debounceValue]);
    const handleHideResult = () => {
        setShowSearchResult(false);
    };
    const handleSearchValue = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
            setSearchResult([]);
        }
    };
    const handleClearInput = () => {
        setSearchValue('');
        inputSearchRef.current.focus();
        setSearchResult([]);
    };
    return (
        // Using a wrapper <div> or <span> tag around the reference
        // element solves this by creating a new parentNode context
        // Fix warning of tippy
        <div>
            <HeadlessTippy
                interactive
                // visible
                visible={showSearchResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-box')} tabIndex="-1" {...attrs}>
                        <SearchPopper>
                            <h4 className={cx('search-title')}>Account</h4>
                            <div className={cx('search-box-body')}>
                                {/* Nếu như nhiều item thì nên tách ra 1 component riêng dùng useMemo để khi re-render không bị ảnh hưởng tới component khác */}
                                {searchResult.map((result) => (
                                    <AccountItem key={result.id} user={result} />
                                ))}
                            </div>
                            <p
                                className={cx('search-more-result')}
                            >{`Xem tất cả kết quả dành cho "${debounceValue}"`}</p>
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
                            setShowSearchResult(true);
                        }}
                    />
                    <button className={cx('search__clear-btn')} onClick={handleClearInput}>
                        {loading || <FontAwesomeIcon icon={faXmarkCircle} />}
                    </button>
                    {loading && <FontAwesomeIcon className={cx('search__loading')} icon={faCircleNotch} />}
                    <button className={cx('search__search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
