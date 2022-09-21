import React from "react"
import * as styles from "./ImageEffectWrapper.module.css"
const ImageEffectWrapper = ({ text, children, effect }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={`${styles.content} ${styles[effect]}`}>{text}</div>
    </div>
  )
}

export default ImageEffectWrapper
