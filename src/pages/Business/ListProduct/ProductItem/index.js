import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIdCloseDialog } from '~/components/Redux/selector';
import informationProduct from '~/components/Redux/FormSliceReducer/InformationProduct';
import listProductSLiceReducer from '~/components/Redux/FormSliceReducer/ListProductSLiceReducer';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import '~/assets/css/GridSystem.scss';
import Dialog from '~/components/Dialog';

import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductItem({ image = '', name = 'Tên địa điểm không rõ', desc = 'Mô tả không rõ', id = 0 }) {
    const [imageError, setImageError] = useState('');
    const getThisIdCloseDialog = useSelector(getIdCloseDialog);

    const dispatch = useDispatch();

    const handleErrorImage = () => {
        setImageError(
            'data:image/png;base64,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',
        );
    };

    const handleShowCloseDialog = () => {
        dispatch(informationProduct.actions.setIdCloseDialog(id));
    };

    const handleHideCloseDialog = () => {
        dispatch(informationProduct.actions.setIdCloseDialog(null));
    };

    const handleDeleteItem = () => {
        dispatch(listProductSLiceReducer.actions.deleteProduct(id));
    };

    return (
        <div className={cx('col col-12 col-md-6 col-lg-4 col-xl-3')}>
            <div className={cx('product-item')}>
                <FontAwesomeIcon onClick={handleShowCloseDialog} className={cx('icon')} icon={faXmark} />
                <img className={cx('image')} src={imageError ? imageError : image} alt="" onError={handleErrorImage} />
                <h2 className={cx('name')}>{name}</h2>
                <p className={cx('desc')}>{desc}</p>
            </div>

            {getThisIdCloseDialog === id && (
                <Dialog
                    onClickYes={handleDeleteItem}
                    onClickNo={handleHideCloseDialog}
                    title="Bạn có chắc chắn muốn xóa?"
                />
            )}
        </div>
    );
}

ProductItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
};

export default ProductItem;
