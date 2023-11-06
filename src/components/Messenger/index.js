import { faFaceLaughSquint, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Messenger.module.scss';

const cx = classNames.bind(styles);

function Messenger({ className, success = false, fail = false, ...props }) {
    const [isShow, setIsShow] = useState(true);
    const wrapperMessenger = useRef();

    useEffect(() => {
        const timeShow = setTimeout(() => {
            wrapperMessenger.current.classList.add(cx('animation-disappear'));
            //wrapperMessenger.current.classList.remove(cx('animation-appear'));

            setTimeout(() => {
                setIsShow(false);
            }, 5000);
        }, 300);

        return () => clearTimeout(timeShow);
    }, []);

    const classes = cx('wrapper', {
        [className]: className,
        success,
        fail,
    });

    const text = success ? 'Thêm thành công' : 'Thêm thất bại';
    const icon = success ? faFaceLaughSquint : faFaceFrown;

    return (
        <div ref={wrapperMessenger} className={classes} style={{ display: isShow || 'none' }}>
            {text}&nbsp;
            <FontAwesomeIcon icon={icon} />
        </div>
    );
}

export default Messenger;
