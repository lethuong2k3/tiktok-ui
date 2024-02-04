import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({children, className, onClick}) {
    return ( 
        <div className={cx('wrapper', className)} onClick={onClick}>
            {children}
        </div>
     );
}

Wrapper.prototype = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Wrapper;