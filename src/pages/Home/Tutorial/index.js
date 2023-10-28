import Slick from '~/components/Slick';
import TutorialItem from './TutorialItem';

const HINT_ITEM = [
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/tutorial/tutorial1.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/tutorial/tutorial2.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/tutorial/tutorial3.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/tutorial/tutorial4.jpg',
        alt: '',
    },
    {
        src: 'https://thanhit2612.github.io/luxstay/assets/imgs/tutorial/tutorial5.jpg',
        alt: '',
    },
];

function Tutorial() {
    return (
        <div style={{ marginTop: '52px' }}>
            <h1 style={{ fontSize: '2.4rem' }}>Hướng dẫn sử dụng </h1>
            <p style={{ marginTop: '12px' }}>
                Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng
            </p>

            <div>
                <Slick slidesToShow={3} arrows={true}>
                    {HINT_ITEM.map((x, index) => (
                        <TutorialItem
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

export default Tutorial;
