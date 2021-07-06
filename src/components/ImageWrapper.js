import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import styles from "./ImageWrapper.module.css"

export const ImageWrapper = ({ height, width, className, src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div
      className={clsx(styles.imageWrapper, className)}
      style={{ paddingTop: `${(100 * height) / width}%` }}
    >
      <img
        src={src}
        style={{ opacity: imageLoaded ? 1 : 0.1 }}
        onLoad={(e) => setImageLoaded(true)}
        ref={ref}
      />
    </div>
  );
};

export default ImageWrapper;
