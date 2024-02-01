import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from '~/components/Popper/Menu/Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = []}) {

    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
          const isParent = !!item.children;
            return <MenuItem key={index} onClick={() => {
              if (isParent) {
                setHistory(prev => [...prev, item.children])
              } 
            }}>{item}</MenuItem>
        })
    }

  return (
    <Tippy
      interactive
      placement="bottom-end"
      delay={[0, 700]}
      offset={[6, 8]}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-poper')}>
            {history.length > 1 && <Header title="Language" onBack={() => {
              setHistory(prev => prev.slice(0, prev.length - 1))
            }} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory(prev => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;