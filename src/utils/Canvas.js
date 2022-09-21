import React from "react"
import useCanvas from "./useCanvas"
export default props => {
  const { draw, interval, ...rest } = props
  const canvasRef = useCanvas(draw, interval)
  return <canvas ref={canvasRef} {...rest} />
}
