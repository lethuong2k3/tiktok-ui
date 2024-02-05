import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Button from '~/components/Button';
import { CreateEffectIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <>
      <div className={cx('wrapper')}>
        <Button
          href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
          leftIcon={<CreateEffectIcon />}
          large
          className={cx('btn-footer')}
        >
          Create effects
        </Button>
      </div>
      <div className={cx('container-link')}>
        <a href="https://www.tiktok.com/about?lang=en">Abount</a>
        <a href="https://newsroom.tiktok.com/">Newsroom</a>
        <a href="https://www.tiktok.com/about?lang=en">Contact</a>
        <a href="https://www.tiktok.com/about?lang=en">Careers</a>
      </div>
      <div className={cx('container-link')}>
        <a href="https://www.tiktok.com/forgood">TikTok for Good</a>
        <a href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;refer=tiktok_web">
          Advertise
        </a>
        <a href="https://www.tiktok.com/live/creator-networks/en?enter_from=tiktok_official">
          TikTok LIVE Creator Networks
        </a>
        <a href="https://developers.tiktok.com/?refer=tiktok_web">Developers</a>
        <a href="https://www.tiktok.com/transparency">Transparency</a>
        <a href="https://www.tiktok.com/tiktok-rewards/en">TikTok Rewards</a>
        <a href="https://www.tiktok.com/embed">TikTok Embeds</a>
      </div>
      <div className={cx('container-link')}>
        <a href="https://support.tiktok.com/en">Help</a>
        <a href="https://www.tiktok.com/safety?lang=en">Safety</a>
        <a href="https://www.tiktok.com/legal/terms-of-service?lang=en">Terms</a>
        <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=en">Privacy Policy</a>
        <a href="https://www.tiktok.com/privacy/overview/en?enter_method=webapp_desktop">Privacy Center</a>
        <a href="https://www.tiktok.com/creators/creator-portal/en-us/">Creator Portal</a>
        <a href="https://www.tiktok.com/community-guidelines?lang=en">Community Guidelines</a>
      </div>
    </>
  );
}

export default Footer;
