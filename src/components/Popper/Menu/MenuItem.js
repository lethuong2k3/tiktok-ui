import classNames from "classnames/bind";
import style from "./Menu.module.scss"

import Button from "~/components/Button";

const cx = classNames.bind(style);

function MenuItem({children, onClick}) {
    const classes = cx('menu-item', {
        separate: children.separate
    });
    return ( 
        <Button className={classes} leftIcon={children.icon} to={children.to} onClick={onClick}>{children.title}</Button>
     );
}

export default MenuItem;