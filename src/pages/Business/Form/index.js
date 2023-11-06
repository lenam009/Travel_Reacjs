import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getName, getImage, getDesc } from '~/components/Redux/selector';

import listProductSLiceReducer from '~/components/Redux/FormSliceReducer/ListProductSLiceReducer';
import informationProduct from '~/components/Redux/FormSliceReducer/InformationProduct';
import Messenger from '~/components/Messenger';

const cx = classNames.bind(styles);

function Form() {
    const [showForm, setShowForm] = useState(false);
    const [dialogList, setDialogList] = useState([]);

    const [lastDialog] = dialogList.slice(-1);

    const inputNameRef = useRef();
    const inputFormRef = useRef();

    const name = useSelector(getName);
    const image = useSelector(getImage);
    const desc = useSelector(getDesc);

    useEffect(() => {
        if (showForm) {
            inputFormRef.current.classList.remove(cx('hide-form'));
            inputNameRef.current.focus();
        } else {
            inputFormRef.current.classList.add(cx('hide-form'));
        }
    }, [showForm]);

    const dispatch = useDispatch();

    const handleShowFormButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseButtonClick = () => {
        setShowForm(false);
    };

    const handleAddButtonClick = () => {
        if (!name || !image || !desc) {
            setDialogList((prev) => [...prev, false]);
            return;
        }
        try {
            const data = {
                id: uuid(),
                name,
                image,
                desc,
            };
            dispatch(listProductSLiceReducer.actions.addProduct(data));
            dispatch(informationProduct.actions.setName(''));
            dispatch(informationProduct.actions.setImage(''));
            dispatch(informationProduct.actions.setDesc(''));
            setDialogList((prev) => [...prev, true]);
            inputNameRef.current.focus();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div ref={inputFormRef} className={cx('wrapper-handle-formAdd')}>
                <div className={cx('inner')}>
                    <button onClick={handleCloseButtonClick} className={cx('btn-close')}>
                        <FontAwesomeIcon className={cx('icon-close')} icon={faXmark} />
                    </button>
                    <div className={cx('form-item')}>
                        <label className={cx('name')} htmlFor="name">
                            Tên địa điểm
                        </label>
                        <input
                            ref={inputNameRef}
                            value={name}
                            id="name"
                            className={cx('input-text')}
                            onChange={(e) => dispatch(informationProduct.actions.setName(e.target.value))}
                        />
                    </div>
                    <div className={cx('form-item')}>
                        <label className={cx('image')} htmlFor="image">
                            Đường dẫn hình ảnh
                        </label>
                        <input
                            value={image}
                            id="image"
                            className={cx('input-image')}
                            onChange={(e) => dispatch(informationProduct.actions.setImage(e.target.value))}
                        />
                    </div>
                    <div className={cx('form-item')}>
                        <label className={cx('desc')} htmlFor="desc">
                            Mô tả
                        </label>
                        <textarea
                            maxLength={250}
                            id="desc"
                            className={cx('input-desc')}
                            onChange={(e) => dispatch(informationProduct.actions.setDesc(e.target.value))}
                            value={desc}
                        ></textarea>
                    </div>
                    <div className={cx('form-item')}>
                        <div className={cx('form-btn')}>
                            <span
                                className={cx('errorInput')}
                                style={{ visibility: lastDialog === false ? 'visible' : 'hidden' }}
                            >
                                Bạn chưa điền đủ thông tin !!!
                            </span>
                            <button onClick={handleAddButtonClick} className={cx('btn-add')}>
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>

                <div className={cx('inner-dialog')}>
                    {dialogList.map((x, index) => (
                        <Messenger key={index} className={cx('dialog')} success={x} fail={!x} />
                    ))}
                </div>
            </div>

            <div className={cx('inner-show', showForm && 'hidden')}>
                <div className={cx('form-btn')} style={{ justifyContent: 'end' }}>
                    <button onClick={handleShowFormButtonClick} className={cx('btn-add-show')}>
                        Thêm địa điểm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;
