import classNames from 'classnames/bind';
import styles from './Dialog.module.scss';

const cx = classNames.bind(styles);

const functionDefault = () => {};

function Dialog({
    className,
    title = 'Unknow Title',
    onClickYes = functionDefault,
    onClickNo = functionDefault,
    ...props
}) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('inner')}>
                <span className={cx('notice')}>Thông báo</span>
                <h3 className={cx('title')}>{title}</h3>
                <div className={cx('inner-btn')}>
                    <button onClick={onClickYes} className={cx('btn-agree')}>
                        Đồng ý
                    </button>
                    <button onClick={onClickNo} className={cx('btn-reject')}>
                        Hủy
                    </button>
                </div>
            </div>

            <div onClick={onClickNo} className={cx('wrapper-close')}></div>
        </div>
    );
}

export default Dialog;
