import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, className }) {
    const classes = cx('menu-item', {
        separate: data.separate,
        [className]: className,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.Title}
        </Button>
    );
}

export default MenuItem;
