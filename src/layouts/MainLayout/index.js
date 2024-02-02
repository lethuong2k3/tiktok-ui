import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss"

const cx = classNames.bind(styles);

function MainLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>       
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;