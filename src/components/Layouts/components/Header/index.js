import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faLanguage, faQuestion, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MailIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import Brand from '~/components/Brand';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        Title: 'Language',
        children: {
            Title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    Title: 'Tiếng Anh',
                },
                {
                    code: 'fra',
                    Title: 'Tiếng Pháp',
                },
                {
                    code: 'rus',
                    Title: 'Tiếng Nga',
                },
                {
                    code: 'ja',
                    Title: 'Tiếng Nhật',
                },
                {
                    code: 'kor',
                    Title: 'Tiếng Hàn',
                },
                {
                    code: 'vi',
                    Title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        Title: 'Feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        Title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faPenToSquare} />,
        Title: 'Edit Product',
        to: config.routes.business,
    },
];

const MENU_USER = [
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        Title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = false;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem.Title);
    };

    return (
        <header className={`${cx('header-wrapper')} bg-white`}>
            <div className={cx('header-inner')}>
                <div className={cx('header-item-icon')}>
                    <Brand />
                </div>

                <Search />

                {currentUser ? (
                    <div className={cx('header-item-action-login')}>
                        <div className={cx('header-right-item')}>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                        </div>

                        <div className={cx('header-right-item')}>
                            <Tippy delay={[0, 200]} trigger="mouseenter" content="Tin nhắn" placement="bottom">
                                <button className={cx('btn-message')}>
                                    <UploadIcon className={cx('icon-message')} />
                                </button>
                            </Tippy>
                        </div>

                        <div className={cx('header-right-item')}>
                            <Tippy delay={[0, 200]} trigger="mouseenter" content="Mail" placement="bottom">
                                <button className={cx('btn-message')}>
                                    <MailIcon className={cx('icon-message')} />
                                </button>
                            </Tippy>
                        </div>

                        <div className={cx('header-right-item')}>
                            <Menu items={MENU_USER} onChange={handleMenuChange}>
                                <button className={cx('btn-person')}>
                                    {/* Lỡ để button css cho dễ chứ ko cần css thì phải có forwardRef */}
                                    <Image
                                        alt="a"
                                        src="https://photo-baomoi.bmcdn.me/w700_r16x9/2023_10_17_23_47247801/cbda4dcc788091dec891.jpg.webp"
                                    />
                                </button>
                            </Menu>
                        </div>
                    </div>
                ) : (
                    <div className={cx('header-item-action-require-login')}>
                        <Button primary>Đăng nhập</Button>
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
