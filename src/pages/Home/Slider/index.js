import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Slick from '~/components/Slick';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('container')} style={{ marginTop: '20px' }}>
            <Slick fade={true} dots={true}>
                <div className={cx('wrapper-img')}>
                    <img
                        src="https://thanhit2612.github.io/luxstay/assets/imgs/slider1.png"
                        alt="slider"
                        className={cx('img')}
                    />
                </div>

                <div className={cx('wrapper-img')}>
                    <img
                        src="https://thanhit2612.github.io/luxstay/assets/imgs/slider2.png"
                        alt="slider"
                        className={cx('img')}
                    />
                </div>
            </Slick>
        </div>
    );
}

export default Slider;
