import classNames from 'classnames/bind';
import styles from './Business.module.scss';

import Form from './Form';
import ListProduct from './ListProduct';

import '~/assets/css/GridSystem.scss';

const cx = classNames.bind(styles);

function Business() {
    return (
        <div className={cx('wrapper')}>
            <Form />
            <ListProduct />
        </div>
    );
}

export default Business;
