import JSConfetti from './node_modules/js-confetti/dist/es/index.js'
// const jsConfetti = new JSConfetti()
// jsConfetti.addConfetti()

let canvas = document.getElementById('myCanvas1')
const jsConfetti1 = new JSConfetti({ canvas })
jsConfetti1.addConfetti()

canvas = document.getElementById('myCanvas2')
const jsConfetti2 = new JSConfetti({ canvas })
jsConfetti2.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
 })

canvas = document.getElementById('myCanvas3')
const jsConfetti3 = new JSConfetti({ canvas })
jsConfetti3.addConfetti({
    confettiColors: [
      '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
    ],
  })

canvas = document.getElementById('myCanvas4')
const jsConfetti4 = new JSConfetti({ canvas })
jsConfetti4.addConfetti({
    confettiRadius: 6,
    confettiNumber: 5000,
  })

canvas = document.getElementById('myCanvas5')
const jsConfetti5 = new JSConfetti({ canvas })
jsConfetti5.addConfetti(
    {
        emojis: ['🦄'],
        emojiSize: 100,
        confettiNumber: 300,
    }
)