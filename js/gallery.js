import './modules/resonsive-nav';
import src1 from '../img/gallery/1.jpg';
import src2 from '../img/gallery/2.jpg';
import src3 from '../img/gallery/3.jpg';
import src4 from '../img/gallery/4.jpg';
import src5 from '../img/gallery/5.jpg';
import src6 from '../img/gallery/6.jpg';
import src7 from '../img/gallery/7.jpg';
import src8 from '../img/gallery/8.jpg';
import src9 from '../img/gallery/9.jpg';
import src10 from '../img/gallery/10.jpg';
import src11 from '../img/gallery/11.jpg';
import src12 from '../img/gallery/12.jpg';
import src13 from '../img/gallery/13.jpg';
import src14 from '../img/gallery/14.jpg';
import src15 from '../img/gallery/15.jpg';
import src16 from '../img/gallery/16.jpg';
import src17 from '../img/gallery/17.jpg';
import src18 from '../img/gallery/18.jpg';
import src19 from '../img/gallery/19.jpg';
import src20 from '../img/gallery/20.jpg';
import src21 from '../img/gallery/21.jpg';
import src22 from '../img/gallery/22.jpg';
import src23 from '../img/gallery/23.jpg';
import src24 from '../img/gallery/24.jpg';
import src25 from '../img/gallery/25.jpg';
import src26 from '../img/gallery/26.jpg';
import src27 from '../img/gallery/27.jpg';
import src28 from '../img/gallery/28.jpg';
import src29 from '../img/gallery/29.jpg';
import src30 from '../img/gallery/30.jpg';

const photoSrcs = [
  [
    src1,
    src2,
    src3,
    src4,
    src5,
    src6,
    src7,
    src8,
    src9,
    src10,
    src11,
    src12,
    src13,
    src14,
    src15,
    src16,
  ],
  [
    src17,
    src18,
    src19,
    src20,
    src21,
    src22,
    src23,
    src24,
    src25,
    src26,
    src27,
    src28,
    src29,
    src30,
  ],
];

const gallery = document.getElementById('gallery');
const pager = document.querySelector('.pager');

class Pager {
  constructor(pager, pageCount, changePageCallback) {
    this.pager = pager;
    this.pageCount = pageCount;
    this.changePageCallback = changePageCallback;
    this.currentActive = 1;
    // Initiation
    this.init();
  }

  changeActive(pageNumber) {
    this.pager.children[this.currentActive].classList.remove(
      'pager__item--active'
    );
    this.currentActive = pageNumber;
    this.pager.children[this.currentActive].classList.add(
      'pager__item--active'
    );
  }

  createPagerBtn(pageNumber) {
    if (pageNumber) {
      return `<a class="pager__link">${pageNumber}</a>`;
    }
    return `
    <a class="pager__link"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="12"
        viewbox="0 0 8 12"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#33313C"
            d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
          ></path>
        </g></svg
      ></a>`;
  }

  init() {
    const prev = document.createElement('li');
    prev.className = 'pager__item pager__item--prev';
    prev.innerHTML = this.createPagerBtn();
    prev.addEventListener('click', () => {
      const prevPageNumber =
        this.currentActive > 1 ? this.currentActive - 1 : this.pageCount;
      this.changeActive(prevPageNumber);
      this.changePageCallback(prevPageNumber);
    });
    this.pager.appendChild(prev);
    for (let i = 1; i <= this.pageCount; i++) {
      const pagerBtn = document.createElement('li');
      pagerBtn.className =
        i === 1 ? 'pager__item pager__item--active' : 'pager__item';
      pagerBtn.innerHTML = this.createPagerBtn(i);
      pagerBtn.addEventListener('click', () => {
        this.changeActive(i);
        this.changePageCallback(i);
      });
      this.pager.appendChild(pagerBtn);
    }
    const next = document.createElement('li');
    next.className = 'pager__item pager__item--next';
    next.innerHTML = this.createPagerBtn();
    next.addEventListener('click', () => {
      const nextPageNumber =
        this.currentActive < this.pageCount ? this.currentActive + 1 : 1;
      this.changeActive(nextPageNumber);
      this.changePageCallback(nextPageNumber);
    });
    this.pager.appendChild(next);
  }
}

class GalleryPager {
  constructor(galleryEl, pager, photoSrcs) {
    // Binding to GalleryPager instance, cause will be called from Pager instance
    this.changePage = this.changePage.bind(this);
    // this.updateGallery = this.updateGallery.bind(this);

    this.pager = new Pager(pager, photoSrcs.length, this.changePage);
    this.gallery = galleryEl;
    this.photos = photoSrcs;
    // Gallery initiation
    this.updateGallery();
  }

  changePage(pageNumber) {
    this.updateGallery();
  }

  updateGallery() {
    const pagePhotos = this.photos[this.pager.currentActive - 1];
    const children = gallery.children;

    const photosLength = pagePhotos.length;
    for (let i = 0; i < photosLength; i++) {
      const src = pagePhotos[i];
      if (children[i]) {
        children[i].href = src;
        children[i].firstElementChild.src = src;
      } else {
        const a = document.createElement('a');
        const img = new Image();
        a.href = src;
        img.src = src;
        img.height = 300;
        img.alt = 'gallery-photo';
        a.appendChild(img);
        gallery.appendChild(a);
      }
    }

    const galleryLength = gallery.childElementCount;
    if (galleryLength > photosLength) {
      // Starting from end
      for (let i = galleryLength - 1; i >= photosLength; i--) {
        gallery.removeChild(children[i]);
      }
    }

    lightGallery(document.getElementById('gallery'), {
      thumbnail: true,
      showThumbByDefault: false,
    });
  }
}

new GalleryPager(gallery, pager, photoSrcs);
