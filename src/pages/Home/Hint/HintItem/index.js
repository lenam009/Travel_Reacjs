import classNames from 'classnames/bind';
import styles from './HintItem.module.scss';

const cx = classNames.bind(styles);

function HintItem({ image, title, desc }) {
    return (
        <div className={cx('wrapper')}>
            <img alt="" src={image} className={cx('img')} />
            <p className={cx('title')}>{title}</p>
            <p className={cx('desc')}>{desc}</p>
        </div>
    );
}

export default HintItem;
