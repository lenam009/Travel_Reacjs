import Slick from '~/components/Slick';
import HintItem from './HintItem';
import styles from './HintItem/HintItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HINT_ITEM = [
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/explore/explore.jpg',
        alt: '',
        title: '5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/explore/explore2.jpg',
        alt: '',
        title: 'Du lịch Cần Thơ nhất định phải ghé thăm những địa điểm này',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/explore/explore3.jpg',
        alt: '',
        title: 'Tuần lễ "Tôi yêu bánh mì Sài Gòn" chính thức diễn ra từ ngày 24/4 ',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/explore/explore4.jpg',
        alt: '',
        title: 'Trải nghiệm thú vị ở sở thú Zoodoo Đà Lạt',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/explore/explore5.jpg',
        alt: '',
        title: 'Hội An sẽ lập chốt quản lý du khách đeo khẩu trang khí vào thành phố',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/explore/explore6.png',
        alt: '',
        title: 'Thủ đô Hà Nội nằm trong danh sách những thành phố đẹp nhất thế giới',
    },
];

function HintDiscover() {
    return (
        <div style={{ marginTop: '52px' }}>
            <h1 style={{ fontSize: '2.4rem' }}>Gợi ý khám phá </h1>
            <p style={{ marginTop: '12px' }}>Những địa điểm thường đến mà Luxstravel gợi ý dành cho bạn</p>

            <div className={cx('wrapper-list')}>
                <Slick slidesToShow={3} arrows={true}>
                    {HINT_ITEM.map((x, index) => (
                        <HintItem key={index} title={x.title} desc={x.desc} image={x.src} />
                    ))}
                </Slick>
            </div>
        </div>
    );
}

export default HintDiscover;
