import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon, DiscoverIcon } from '../../../Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper-sidebar')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon className={cx('home-icon')} />}
                />
                <MenuItem
                    title="Đang following"
                    to={config.routes.following}
                    icon={<UserGroupIcon className={cx('user-group-icon')} />}
                />
                <MenuItem
                    title="Khám phá"
                    to={config.routes.profile}
                    icon={<DiscoverIcon className={cx('live-icon')} />}
                />
                <MenuItem title="LIVE" to="/live" icon={<LiveIcon className={cx('live-icon')} />} />
            </Menu>
            <h1>ss</h1>
        </aside>
    );
}

export default Sidebar;
