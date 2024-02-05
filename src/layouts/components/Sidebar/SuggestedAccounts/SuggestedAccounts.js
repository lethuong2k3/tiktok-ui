import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss"
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function SuggestedAccounts() {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('login-hint')}>Log in to follow creators, like videos, and view comments.</p>
            <Button large outline>Log in</Button>
        </div>
     );
}

export default SuggestedAccounts;