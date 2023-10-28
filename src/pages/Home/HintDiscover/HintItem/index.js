import classNames from 'classnames/bind';
import styles from './HintItem.module.scss';

const cx = classNames.bind(styles);

function HintItem({ image, title }) {
    return (
        <div className={cx('wrapper')}>
            <img alt="" src={image} className={cx('img')} />
            <div className={cx('content')}>
                <p className={cx('title')}>{title}</p>
            </div>
        </div>
    );
}

export default HintItem;
