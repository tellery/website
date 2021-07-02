import React from 'react'
import styles from "./CircularLoading.module.css";

export const CircularLoading = ({ size, color, scale = 0.5 }) => {
  return (
    <div
      style={{ '--size': `${size}px`, '--color': color, '--scale': scale }}
      className={styles.container}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default CircularLoading