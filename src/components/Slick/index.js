import classNames from 'classnames/bind';
import styles from './Slick.module.scss';
import Slider from 'react-slick';

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
    const settings = {
        dots: dots,
        infinite: true,
        slidesToShow: slidesToShow,
        speed: 700,
        slidesToScroll: 1,
        fade: fade,
        autoplay: true,
        arrows: arrows,
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
