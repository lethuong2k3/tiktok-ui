import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="t" />
            <div className={cx('info')}>
                <p className={cx('name')}>Nguyen Van A</p>
                <span className={cx()}></span>
            </div>
        </div>
     );
}

export default AccountItem;