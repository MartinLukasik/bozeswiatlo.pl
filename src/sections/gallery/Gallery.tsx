import React, { useMemo, useState } from 'react'
import LightGallery from 'lightgallery/react'
import clsx from 'clsx'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'

import IMAGES from '../../gallery-sources'

const IMAGES_PER_PAGE = 12

export function Gallery() {
  const [page, setPage] = useState(0)
  const [tag, setTag] = useState('')

  const images = useMemo(() => {
    return IMAGES.filter(image => tag === '' || image.tags.includes(tag))
  }, [tag])

  const pages = Math.ceil(images.length / IMAGES_PER_PAGE)

  function handleTagChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTag(e.target.value)
    setPage(0)
  }

  return (
    <>
      <div className="select-wrapper">
        <div className="select">
          <select id="gallery-select" onChange={handleTagChange}>
            <option selected value="">
              Все фотографии
            </option>
            <option value="евангелизации">Евангелизации</option>
          </select>
        </div>
      </div>
      <LightGallery
        key={tag + page}
        elementClassNames="gallery"
        speed={500}
        plugins={[lgThumbnail]}
      >
        {images
          .slice(page * IMAGES_PER_PAGE, (page + 1) * IMAGES_PER_PAGE)
          .map(image => (
            <a key={image.src} href={image.src}>
              <img src={image.src} alt="" height="300" />
            </a>
          ))}
      </LightGallery>
      <nav className="pager">
        <ul>
          <li
            className="pager__item pager__item--prev"
            onClick={() => setPage(page === 0 ? pages - 1 : page - 1)}
          >
            <a className="pager__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#33313C"
                    d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          {Array(pages)
            .fill(0)
            .map((_, index) => (
              <li
                key={images[index].src}
                className={clsx('pager__item', {
                  'pager__item--active': index === page,
                })}
                onClick={() => setPage(index)}
              >
                <a className="pager__link">{index + 1}</a>
              </li>
            ))}
          <li
            className="pager__item pager__item--next"
            onClick={() => setPage((page + 1) % pages)}
          >
            <a className="pager__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#33313C"
                    d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
