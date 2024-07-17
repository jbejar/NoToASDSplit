"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { logEvent } from "firebase/analytics";
import { analytics } from '../utils/firebase';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
export default function Podcast({ src, title, description, img }: { title: string, src: string, description: string, img: string }) {
  const prefix = "./pod/"
  const onPlay = () => {
      logEvent(analytics,'play', {content_type: title});
  };
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    logEvent(analytics,'podcast_view', {content_type: title});
  }, []);
  return (
    <div className="player-wrapper" onClick={() => setIsPlaying(!isPlaying)}>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <p className="center">
        <img src={prefix + img} onClick={() => setIsPlaying(!isPlaying)} />
      </p>

      <ReactPlayer
        width="100%"
        height="90px"
        playing={isPlaying}
        url={prefix + src}
        controls
        onPlay={onPlay}
        light={false}

      />
    </div>

  )
}
