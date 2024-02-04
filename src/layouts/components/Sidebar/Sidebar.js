import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss"
import Menu, {MenuItem} from "./Menu";
import config from "~/config";
import {ForYouIcon, FollowingIcon, FriendsIcon, ExploreIcon, LiveIcon, ProfileIcon} from '~/components/Icons'


const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
               { <MenuItem title="For You" to={config.routes.home} icon={<ForYouIcon />} activeIcon={<ForYouIcon solid />} />}
               { <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon className={cx('icons-sidebar')} />} activeIcon={<FollowingIcon className={cx('icons-sidebar')} solid />} />}
               { <MenuItem title="Friends" to={config.routes.friends} icon={<FriendsIcon />} activeIcon={<FriendsIcon solid />} />}
               { <MenuItem title="Explore" to={config.routes.explore} icon={<ExploreIcon />} activeIcon={<ExploreIcon solid />} />}
               { <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIcon solid />} />}
               { <MenuItem title="Profile" to={config.routes.profile} icon={<ProfileIcon className={cx('icons-sidebar')} />} activeIcon={<ProfileIcon className={cx('icons-sidebar')} solid />} />}
            </Menu>
        </aside>
    );
}

export default Sidebar;