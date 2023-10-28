import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';
import Slick from '~/components/Slick';

const cx = classNames.bind(styles);

const IMAGE_ITEM = [
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/promotion1.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/promotion2.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/promotion3.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/promotion1.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/promotion2.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/promotion3.jpg',
        alt: '',
    },
];

function Promotion() {
    return (
        <div className={cx('wrapper')}>
            <h1 style={{ fontSize: '2.4rem' }}>Ưu đãi độc quyền </h1>
            <p style={{ marginTop: '12px' }}>
                Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!
            </p>

            <div className={cx('content')}>
                <Slick slidesToShow={3}>
                    {IMAGE_ITEM.map((x, index) => (
                        <img key={index} className={cx('img')} src={x.src} alt={x.alt} />
                    ))}
                </Slick>
            </div>
        </div>
    );
}

export default Promotion;
