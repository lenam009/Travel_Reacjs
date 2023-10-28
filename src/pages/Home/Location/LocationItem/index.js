import classNames from 'classnames/bind';
import styles from './LocationItem.module.scss';

const cx = classNames.bind(styles);

function LocationItem({
    image = 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location1.png',
    name,
    capacity,
}) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img')} alt="" src={image} />
            <div className={cx('content')}>
                <h1 className={cx('name-city')}>{name}</h1>
                <p className={cx('capacity')}>{capacity} chỗ ở</p>
            </div>
        </div>
    );
}

export default LocationItem;
