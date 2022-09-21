import { useEffect, useRef, useLayoutEffect } from "react"

const useCanvas = (draw, interval = 30) => {
  // Create a reference to the node in the DOM
  const canvasRef = useRef(null)
  let canvas, startDraw, now, delta
  let then = Date.now()
  useLayoutEffect(() => {
    // set the canvas dimension according to the parent container
    canvas = canvasRef.current
    startDraw = draw(canvas)
  }, [])
  useEffect(() => {
    // Grab the node from DOM
    let animationFrameId
    const context = canvas.getContext("2d")
    const render = () => {
      now = Date.now()
      delta = now - then
      if (delta > interval) {
        startDraw(context)
        then = now - (delta % interval)
      }
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])
  return canvasRef
}

export default useCanvas
