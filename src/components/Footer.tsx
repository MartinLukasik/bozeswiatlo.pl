import React from 'react'
import { Link } from 'gatsby'

export function Footer() {
  return (
    <footer>
      <div className="main-footer row center-xs">
        <div className="footer-logo col-xs-12 col-sm-6 col-lg-5">
          <Link to="/">
            <img src="/img/logo/logo-white.webp" alt="" />
          </Link>
          <p className="align-center">
            Наша цель: Достигать. Учить. Вдохновлять.
          </p>
        </div>
        <div className="footer-contact col-xs-12 col-sm-6 col-lg-5">
          <h4>Свяжитесь с нами</h4>
          <ul className="contact-info">
            <li className="icon-pop">
              <span>
                <svg
                  className="svg-left"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#df2f2f"
                    d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                  />
                </svg>
                Lubartowska 39, Lublin
              </span>
            </li>
            <li className="icon-pop">
              <a href="tel:+38093093390">
                <svg
                  className="svg-left"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#df2f2f"
                    d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                  />
                </svg>
                +48 796 922 453
              </a>
            </li>
            <li className="icon-pop">
              <a href="mailto:bozeswiatlolublin@gmail.com">
                <svg
                  className="svg-left"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#df2f2f"
                    d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                  />
                </svg>
                bozeswiatlolublin@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2022.</div>
    </footer>
  )
}
