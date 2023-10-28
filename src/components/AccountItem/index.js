import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="errorImg" />
            <div className={cx('info')}>
                <b className={cx('name')}>
                    {data.full_name}
                    {data.tick && (
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    )}
                </b>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
