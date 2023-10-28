import classNames from 'classnames/bind';
import styles from './Brand.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

import doraemon from '~/assets/images/doraemon.jpg';

const cx = classNames.bind(styles);

function Brand() {
    return (
        <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={doraemon} alt="" className={cx('image')} />
        </Link>
    );
}

export default Brand;
