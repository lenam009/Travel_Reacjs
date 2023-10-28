import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { default as PopperWrapper } from '../Wrapper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    className={cx({
                        'text-children': history.length > 1,
                    })}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div
            className={cx('menu-list', {
                'menu-list-children': history.length > 1,
            })}
            tabIndex={-1}
            {...attrs}
        >
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        onBack={() =>
                            setHistory((prev) => prev.slice(0, prev.length - 1))
                        }
                        title={current.Title}
                    />
                )}
                <div className={cx('menu-body')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            offset={[10, 10]}
            // visible
            onHide={handleResetToFirstPage}
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
