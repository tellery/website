import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import styles from "./VideoWrapper.module.css";

export const VideoWrapper = ({ height, width, className, src }) => {
  const ref = useRef(null);

  return (
    <div
      className={clsx(styles.videoWrapper, className)}
      style={{ paddingTop: `${(100 * height) / width}%` }}
    >
      <video
        src={src}
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoWrapper;
