import React from 'react'

export function Social() {
  return (
    <>
      <section className="canvas-wrapper">
        <canvas id="canvas"></canvas>
        <div className="social-media">
          <h2 data-aos="zoom-in">Мы в соц. сетях</h2>
          <div
            data-aos="swirl-in"
            className="fb-page"
            data-href="https://www.facebook.com/bozeswiatlolublin/"
            data-tabs=""
            data-width=""
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/bozeswiatlolublin/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/bozeswiatlolublin/">
                Церква &quot;Боже світло&quot;/Kościół Chrześcijański &quot;Boże
                Światło&quot;
              </a>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}
