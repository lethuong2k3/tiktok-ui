import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import VideoContent from './VideoContent';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Video() {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios
      .get(`https://65d17786ab7beba3d5e45ae3.mockapi.io/api/tiktok/Video`)
      .then((res) => {
        setVideo(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className={cx('wrapper')}>
      {video.length > 0 && video.map((videoItem) => <VideoContent key={videoItem.id} data={videoItem} />)}
    </div>
  );
}

export default Video;
