import classNames from 'classnames/bind';
import styles from './TutorialItem.module.scss';

const cx = classNames.bind(styles);

function TutorialItem({ image, title }) {
    return (
        <div className={cx('wrapper')}>
            <img alt="" src={image} className={cx('img')} />
        </div>
    );
}

export default TutorialItem;
