import Image from '../Image';
import Button from '../Button';
import {
  CommentIcon,
  CoppyLinkIcon,
  DownloandIcon,
  EmbedIcon,
  FacebookIcon,
  HeartIcon,
  MusicIcon,
  SendFriendIcon,
  ShareIcon,
  UncollectIcon,
  WhatsAppIcon,
} from '../Icons';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import ButtonAction from '../ButtonAction/ButtonAction';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function VideoContent({ data }) {
  const SHARE_MENU = [
    {
      icon: <EmbedIcon />,
      title: 'Embed',
    },
    {
      icon: <SendFriendIcon />,
      title: 'Send to friends',
    },
    {
      icon: <FacebookIcon />,
      title: 'Share to Facebook',
    },
    {
      icon: <WhatsAppIcon />,
      title: 'Share to WhatsApp',
    },
    {
      icon: <CoppyLinkIcon />,
      title: 'Coppy link',
    },
  ];

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [content, ...tags] = data.title.split(' #');

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className={cx('wrapper-item')}>
      <a href={`/@${data.nickName}`}>
        <div className={cx('container-img')}>
          <Image src={data.img} />
        </div>
      </a>
      <div className={cx('content')}>
        <div className={cx('text-info-container')}>
          <div className={cx('author-container')}>
            <a href={`/@${data.nickName}`}>
              <h3 className={cx('author-title')}>{data.name}</h3>
              <h4 className={cx('author-nickname')}>{data.nickName}</h4>
            </a>
            <Button outline className={cx('btn-follow')}>
              Follow
            </Button>
            <div className={cx('container-text')}>
              <span className={cx('span-text')}>{content}</span>
              {tags.map((tag, index) => (
                <a key={index} href="/#">
                  <strong className={cx('tag')}>{`#${tag}`}</strong>
                  <span style={{ width: '4px', height: '21px' }}></span>
                </a>
              ))}
            </div>
            <div className={cx('music-tag')}>
              <h4>
                <a href="/#">
                  <MusicIcon />
                  <div className={cx('music-text')}>{data.music}</div>
                </a>
              </h4>
              {data.template ? (
                <div className={cx('anchor-tag')}>
                  <a href="/#">
                    <Image src="https://p9-sg.tiktokcdn.com/obj/tiktok-obj/capcut_logo_64px_bk.png" />
                    <p>CapCut · Edit like a pro</p>
                  </a>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={cx('player-wrapper')}>
          <div className={cx('video-card')}>
            <div className={cx('video-border')}>
              <video onClick={onVideoPress} ref={videoRef} loop src={data.video}></video>
            </div>
          </div>
          <div className={cx('action-item')}>
            <div style={{ cursor: 'pointer' }}>
              <DownloandIcon />
              <ButtonAction data={data.heart} icon={<HeartIcon />} />
              <ButtonAction data={data.comment} icon={<CommentIcon />} />
              <ButtonAction data={data.collect} icon={<UncollectIcon />} />
              <ButtonAction data={data.share} items={SHARE_MENU} icon={<ShareIcon />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoContent;
