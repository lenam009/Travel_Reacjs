import styles from './ButtonGoHome.module.scss';
import classNames from 'classnames/bind';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ButtonGoHome() {
    const [stateIsHome, setStateIsHome] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);

        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    const handleScrollEvent = (e) => {
        setStateIsHome(window.scrollY <= 100);
    };

    return (
        <div className={cx('btn-upToHome')}>
            <FontAwesomeIcon
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={cx('btn-icon-upToHome')}
                style={{ display: stateIsHome ? 'none' : 'block' }}
                icon={faCircleUp}
            />
        </div>
    );
}

export default ButtonGoHome;
