export const matrixRain = canvas => {
  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const nums = "0123456789"
  const alphabet = katakana + latin + nums
  const fontSize = 12
  //outer scope
  const columns = Math.floor(canvas.width / fontSize)
  const rainCount = new Array(columns).fill(1)
  return function (context) {
    context.fillStyle = "rgba(0, 0, 0, 0.05)"
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = "#0F0"
    context.font = fontSize + "px monospace"

    for (let i = 0; i < rainCount.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
      context.fillText(text, i * fontSize, rainCount[i] * fontSize)

      if (rainCount[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainCount[i] = 0
      }
      rainCount[i]++
    }
  }
}
