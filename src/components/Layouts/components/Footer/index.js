import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Brand from '~/components/Brand';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <div className={cx('content-title')}>
                        <Brand />
                        <h1 className={cx('title')}>LUXTRAVEL</h1>
                    </div>
                    <h2 className={cx('content-search')}>TÌM KIẾM CHỖ Ở GIÁ TỐT NHẤT</h2>
                    <p className={cx('desc')}>
                        Luxstay hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng
                        hành cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm.
                        Với Luxstay, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà
                        riêng, chung cư... trở nên nhanh chóng, thuận tiện và dễ dàng.
                    </p>
                    <div className={cx('info')}>
                        <img
                            src="https://thanhit2612.github.io/luxstay/assets/imgs/qr-code.png"
                            alt=""
                            className={cx('info-img')}
                        />
                        <div className={cx('info-content')}>
                            <img
                                src="https://thanhit2612.github.io/luxstay/assets/imgs/google-play.svg"
                                alt=""
                            />
                            <img
                                src="https://thanhit2612.github.io/luxstay/assets/imgs/apple-store.svg"
                                alt=""
                            />
                            <img
                                src="https://thanhit2612.github.io/luxstay/assets/imgs/huawei.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('content-image')}>
                    <img
                        src="https://thanhit2612.github.io/luxstay/assets/imgs/home-02.png"
                        alt=""
                        className={cx('image')}
                    />
                </div>
            </div>

            <div className={cx('end')}>
                <p>
                    ©2021 Luxstay. Bản quyền thuộc về Công ty TNHH Luxstay Việt Nam -
                    MSDN: 0108308449. Mọi hành vi sao chép đều là phạm pháp nếu không có
                    sự cho phép bằng văn bản của chúng tôi.
                </p>

                <p>
                    Tầng 21 tòa nhà Capital Tower số 109 phố Trần Hưng Đạo, phường Cửa
                    Nam, quận Hoàn Kiếm, Hà Nội. Email: info@luxstay.com, Số điện thoại:
                    18006586.
                </p>

                <p>
                    Số Giấy chứng nhận đăng ký doanh nghiệp: 0108308449, ngày cấp:
                    06/06/2018, nơi cấp: Sở Kế hoạch và Đầu tư TP Hà Nội
                </p>

                <a className={cx('finish')}>copyright© by LeNam</a>
            </div>
        </div>
    );
}

export default Footer;
