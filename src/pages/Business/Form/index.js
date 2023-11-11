import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import listProductSLiceReducer from '~/components/Redux/FormSliceReducer/ListProductSLiceReducer';
import Messenger from '~/components/Messenger';

const cx = classNames.bind(styles);

function Form() {
    const [showForm, setShowForm] = useState(false);
    const [dialogList, setDialogList] = useState([]);

    const [lastDialog] = dialogList.slice(-1);

    const inputNameRef = useRef();
    const inputFormRef = useRef();

    const handleSubmitForm = (value) => {
        try {
            const data = {
                id: uuid(),
                name: value.name,
                image: value.image,
                desc: value.desc,
            };
            dispatch(listProductSLiceReducer.actions.addProduct(data));
            value.name = '';
            value.image = '';
            value.desc = '';
            setDialogList((prev) => [...prev, true]);
            inputNameRef.current.focus();
        } catch (e) {
            console.log(e);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            image: '',
            desc: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Tên địa điểm không được bỏ trống *')
                .min(6, 'Tên địa điểm không được bé hơn 6 ký tự *'),
            image: Yup.string().required('Đường dẫn hình ảnh không được bỏ trống *'),
            desc: Yup.string().required('Mô tả không được bỏ trống *'),
            //Tham khảo.............................................................
            // email: Yup.string()
            //     .required()
            //     .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Vui lòng nhập đúng định dạng Email'),
            // confirmPass: Yup.string().oneOf([Yup.ref('password')], 'password not match'),
        }),
        onSubmit: handleSubmitForm,
    });

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

    return (
        <div className={cx('wrapper')}>
            <div ref={inputFormRef} className={cx('wrapper-handle-formAdd')}>
                <div className={cx('inner')}>
                    <button onClick={handleCloseButtonClick} className={cx('btn-close')}>
                        <FontAwesomeIcon className={cx('icon-close')} icon={faXmark} />
                    </button>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={cx('form-item')}>
                            <label className={cx('name')} htmlFor="name">
                                Tên địa điểm
                            </label>
                            <input
                                ref={inputNameRef}
                                value={formik.values.name}
                                id="name"
                                className={cx('input-text')}
                                onChange={formik.handleChange}
                            />
                            <p className={cx('errorMessage')}>{formik.errors.name}&nbsp;</p>
                        </div>
                        <div className={cx('form-item')}>
                            <label className={cx('image')} htmlFor="image">
                                Đường dẫn hình ảnh
                            </label>
                            <input
                                value={formik.values.image}
                                id="image"
                                className={cx('input-image')}
                                onChange={formik.handleChange}
                            />
                            <p className={cx('errorMessage')}>{formik.errors.image}&nbsp;</p>
                        </div>
                        <div className={cx('form-item')}>
                            <label className={cx('desc')} htmlFor="desc">
                                Mô tả
                            </label>
                            <textarea
                                maxLength={250}
                                id="desc"
                                className={cx('input-desc')}
                                value={formik.values.desc}
                                onChange={formik.handleChange}
                            ></textarea>
                            <p className={cx('errorMessage')}>{formik.errors.desc}&nbsp;</p>
                        </div>
                        <div className={cx('form-item')}>
                            <div className={cx('form-btn')}>
                                <span
                                    className={cx('errorInput')}
                                    style={{ visibility: lastDialog === false ? 'visible' : 'hidden' }}
                                >
                                    Bạn chưa điền đủ thông tin !!!
                                </span>
                                <button
                                    type="submit"
                                    className={cx(
                                        'btn-add',
                                        `${Object.keys(formik.errors).length !== 0 && 'errorBtnAdd'}`,
                                    )}
                                >
                                    Thêm
                                </button>
                            </div>
                        </div>
                    </form>
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
