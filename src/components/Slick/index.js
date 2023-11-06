import classNames from 'classnames/bind';
import styles from './Slick.module.scss';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

//Chú ý slide image thi có fade sẽ đẹp hơn
//Nhưng đối với slick menu thì phải bỏ fade

function Slick({
    slidesToShow = 1,
    children,
    autoplaySpeed = 3000,
    arrows = false,
    fade = false,
    dots = false,
    ...props
}) {
    const [width, setWidth] = useState(window.innerWidth);

    const numberSlideShow = (width) => {
        let slideToshow = slidesToShow;
        if (slideToshow === 1) return;
        if (width < 740) slideToshow = 1;
        else if (width < 1024) slideToshow = 2;
        else if (width < 1240) slideToshow = 3;
        return slideToshow;
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.addEventListener('resize', handleResize);
    }, [width]);

    const settings = {
        dots: dots,
        infinite: true,
        slidesToShow: numberSlideShow(width),
        speed: 700,
        slidesToScroll: 1,
        fade: fade,
        autoplay: true,
        arrows: arrows ? (width >= 740 ? true : false) : false,
        autoplaySpeed: autoplaySpeed,
        touchThreshold: 999,
        ...props,
    };

    return (
        <div className={cx('container')}>
            <Slider {...settings}>{children}</Slider>
        </div>
    );
}

export default Slick;
