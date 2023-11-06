import classNames from 'classnames/bind';
import styles from './Location.module.scss';
import { Link } from 'react-router-dom';
import Slick from '~/components/Slick';

import config from '~/config';
import LocationItem from './LocationItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const LOCATION_ITEM = [
    {
        image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location1.png',
        name: 'Hà Nội',
        capacity: '2901',
    },
    {
        image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location2.png',
        name: 'TP. Hồ Chí Minh',
        capacity: '2302',
    },
    {
        image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location3.png',
        name: 'Vũng Tàu',
        capacity: '534',
    },
    {
        image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location4.png',
        name: 'Đà Lạt',
        capacity: '1471',
    },
    {
        image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location5.png',
        name: 'Đà Nẵng',
        capacity: '903',
    },
    {
        image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location6.png',
        name: 'Nha Trang',
        capacity: '629',
    },
    {
        image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location7.png',
        name: 'Quảng Ninh',
        capacity: '221',
    },
    {
        image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location8.png',
        name: 'Hội An',
        capacity: '323',
    },
];

function Location() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <h1>Chào mừng đến với Luxtravel!</h1>
                <p style={{ marginTop: '12px' }}>
                    Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Luxstay
                </p>
                <p>
                    <Link to={config.routes.home}>
                        <span className={cx('login-register')}>Đăng nhập</span>
                    </Link>{' '}
                    hoặc{' '}
                    <Link to={config.routes.home}>
                        <span className={cx('login-register')}>Đăng ký</span>
                    </Link>{' '}
                    để trải nghiệm !
                </p>
            </div>

            <div style={{ marginTop: '50px' }}>
                <h1 style={{ fontSize: '2.4rem' }}>Địa điểm nổi bật</h1>
                <p style={{ marginTop: '12px' }}>Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn</p>

                <div className={cx('wrapper-location')}>
                    <Slick dots={true} autoplaySpeed={5000} arrows={true} slidesToShow={5}>
                        {LOCATION_ITEM.map((x, index) => (
                            <LocationItem image={x.image} name={x.name} capacity={x.capacity} key={index} />
                        ))}
                    </Slick>
                </div>
            </div>
        </div>
    );
}

export default Location;
