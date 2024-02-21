import classNames from 'classnames/bind';
import styles from './ButtonAction.module.scss';
import { forwardRef } from 'react';
import Menu from '../Popper/Menu';
import FormatNumber from '../FormatNumber/FormatNumber';

const cx = classNames.bind(styles);

const ButtonAction = forwardRef(({ icon, items, data }, ref) => {
  return (
    <>
      {items && items.length > 0 ? (
        <Menu zIndex={5} placement="top-start" offset={[0, 0]} items={items}>
          <button className={cx('btn-icon')}>
            <span className={cx('span-icon')}>{icon}</span>
            <strong>{FormatNumber(data)}</strong>
          </button>
        </Menu>
      ) : (
        <button className={cx('btn-icon')}>
          <span className={cx('span-icon')}>{icon}</span>
          <strong>{FormatNumber(data)}</strong>
        </button>
      )}
    </>
  );
});

export default ButtonAction;
