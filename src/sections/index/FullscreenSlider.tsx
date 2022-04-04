import React, { useEffect, useState } from 'react'
import { useBreakpoint, withBreakpoints } from 'gatsby-plugin-breakpoints'
import clsx from 'clsx'
import { useScroll } from '../../contexts/ScrollProvider'

const MOBILE_SLIDES = [
  '/img/slider/1m.webp',
  '/img/slider/2m.webp',
  '/img/slider/3m.webp',
]
const DESKTOP_SLIDES = [
  '/img/slider/1.webp',
  '/img/slider/2.webp',
  '/img/slider/3.webp',
]
const ANNOUNCEMENTS = [
  { title: 'Воскресное служение', time: '11:00, Воскресение' },
  { title: 'Молодежное собрание', time: '18:30, Суббота' },
  { title: 'Евангелизация', time: '18:00, Пятница' },
]

function FullscreenSliderComponent() {
  const breakpoints = useBreakpoint()
  const [index, setIndex] = useState(0)
  const scroll = useScroll()
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(index + 1)
    }, 9_000)
    return () => {
      clearInterval(id)
    }
  }, [index, setIndex])

  const slides = breakpoints.sm ? MOBILE_SLIDES : DESKTOP_SLIDES
  const slideImage = slides[index % slides.length]
  const announcement = ANNOUNCEMENTS[index % ANNOUNCEMENTS.length]

  return (
    <>
      <div className="slider" style={{ height: window.innerHeight }}>
        <div key={index} className={'slide current'}>
          <div
            className={clsx('slide-img', {
              'animation-paused': scroll.scrollY !== 0,
            })}
            style={{
              backgroundImage: `url(${slideImage})`,
            }}
          ></div>
          <div className="slide-text">
            <h2>{announcement.title}</h2>
            <h3>{announcement.time}</h3>
          </div>
        </div>
      </div>
      <div>
        <button
          className="slider-button"
          id="prev"
          onClick={() => setIndex(index > 0 ? index - 1 : slides.length - 1)}
        >
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
            />
          </svg>
        </button>
        <button
          className="slider-button"
          id="next"
          onClick={() => setIndex(index + 1)}
        >
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="mdi-arrow-right"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
            />
          </svg>
        </button>
      </div>
    </>
  )
}

const Component = withBreakpoints(FullscreenSliderComponent)

export const FullscreenSlider = () => <Component breakpoints={{}} />
