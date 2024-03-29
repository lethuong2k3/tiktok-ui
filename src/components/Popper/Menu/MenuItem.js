import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function MenuItem({ data, medium, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} leftIcon={data.icon} href={data.href} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
