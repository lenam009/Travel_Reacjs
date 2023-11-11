import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { default as PopperWrapper } from '~/components/Popper/Wrapper';
import AccountItem from '~/components/AccountItem';

import { useDispatch, useSelector } from 'react-redux';
import searchReducer, { fetchSearchResults } from '~/components/Redux/SearchSlideReducer/SearchReducer';
import { getLoadingSearchResult, getSearchResults, getSearchValue } from '~/components/Redux/selector';
import { SET_DEBOUNCE_SEARCH_VALUE_SAGA } from '~/components/Redux/ReduxSaga/searchSaga';

const cx = classNames.bind(styles);

function Search() {
    const [showResult, setShowResult] = useState(false);
    const [searchValueInput, setSearchValueInput] = useState('');
    const inputRef = useRef();

    const dispatch = useDispatch();

    const loading = useSelector(getLoadingSearchResult);
    const searchResult = useSelector(getSearchResults);
    const searchValue = useSelector(getSearchValue);

    useEffect(() => {
        if (!searchValue.trim()) {
            dispatch(searchReducer.actions.setSearchResults([]));
            return;
        }

        dispatch(fetchSearchResults(searchValue));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const handleClear = () => {
        dispatch(searchReducer.actions.setSearchValue(''));
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValueInput(value);
        if (!value.startsWith(' ')) {
            dispatch({
                type: SET_DEBOUNCE_SEARCH_VALUE_SAGA,
                payload: value,
            });
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                // trigger="click"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {/* Chú ý nếu searchResult có nhiều phần tử thì nên tách ra component khác và dùng memo */}
                            {searchResult.map((x) => (
                                <AccountItem key={x.id} data={x} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('header-item-search')}>
                    <input
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                        value={searchValueInput}
                        ref={inputRef}
                        className={cx('input-search')}
                        type="text"
                        spellCheck="false"
                        placeholder="Search"
                    />

                    {!!searchValue && !loading && (
                        <button onClick={handleClear} className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && (
                        <button className={cx('spinner')}>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        </button>
                    )}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
