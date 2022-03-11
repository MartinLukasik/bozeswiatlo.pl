import React, { useEffect, useState } from 'react'

const BIBLE_QUOTES = [
  {
    quote: `А надеющиеся на Господа
обновятся в силе:
поднимут крылья, как орлы,
потекут — и не устанут,
пойдут — и не утомятся.`,
    src: 'Исаия 40:31',
  },
  {
    quote: `Вот Я повелеваю тебе: будь тверд и мужествен, не страшись и не ужасайся; ибо с тобою Господь Бог твой везде, куда ни пойдешь.`,
    src: 'Иисус Навин 1:9',
  },
  {
    quote: `Придите ко Мне все труждающиеся и обремененные, и Я успокою вас.`,
    src: 'От Матфея 11:28',
  },
]

export function BibleQuote() {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * BIBLE_QUOTES.length)
  )
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((index + 1) % BIBLE_QUOTES.length)
    }, 10_000)
    return () => {
      clearInterval(id)
    }
  }, [index, setIndex])

  return (
    <div className="quote">
      <div className="container">
        <div className="quote-quote">{BIBLE_QUOTES[index].quote}</div>
        <div className="quote-icon">
          <img src="/img/quote-icon.webp" alt="" />
        </div>
        <div className="quote-src">{BIBLE_QUOTES[index].src}</div>
      </div>
    </div>
  )
}
