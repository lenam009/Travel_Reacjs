import Slick from '~/components/Slick';
import HintItem from './HintItem';

const HINT_ITEM = [
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/promotion1.jpg',
        alt: '',
        title: 'Hà Nội nội thành lãng mạn',
        desc: 'Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội.',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/suggest/suggest2.jpg',
        alt: '',
        title: 'vũng tàu biệt thự hồ bơi',
        desc: 'Những căn biệt thự có hồ bơi dành cho kỳ nghỉ của bạn tại Vũng Tàu',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/suggest/suggest7.jpg',
        alt: '',
        title: 'Gần trung tâm',
        desc: 'Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh.',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/suggest/suggest4.jpg',
        alt: '',
        title: 'sài gòn cần là có ngay',
        desc: 'Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng.',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/suggest/suggest5.jpg',
        alt: '',
        title: 'bể bơi & bbq',
        desc: 'Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/suggest/suggest6.jpg',
        alt: '',
        title: 'siêu giảm giá!',
        desc: 'Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay.',
    },
];

function Hint() {
    return (
        <div style={{ marginTop: '52px' }}>
            <h1 style={{ fontSize: '2.4rem' }}>Gợi ý từ Luxtravel </h1>
            <p style={{ marginTop: '12px' }}>
                Những địa điểm thường đến mà Luxtravel gợi ý dành cho bạn
            </p>

            <div>
                <Slick slidesToShow={4} arrows={true}>
                    {HINT_ITEM.map((x, index) => (
                        <HintItem
                            key={index}
                            title={x.title}
                            desc={x.desc}
                            image={x.src}
                        />
                    ))}
                </Slick>
            </div>
        </div>
    );
}

export default Hint;
