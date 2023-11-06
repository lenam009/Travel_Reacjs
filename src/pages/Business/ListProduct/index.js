import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import '~/assets/css/GridSystem.scss';
import { getListProduct } from '~/components/Redux/selector';
import { useSelector } from 'react-redux';

import ProductItem from './ProductItem';

const cx = classNames.bind(styles);

function ListProduct() {
    const listProduct = useSelector(getListProduct);

    return (
        <div className={cx('container')}>
            <div className={cx('row')}>
                {listProduct.map((x) => (
                    <ProductItem key={x.id} id={x.id} name={x.name} image={x.image} desc={x.desc} />
                ))}
            </div>
        </div>
    );
}

export default ListProduct;
