import './modules/resonsive-nav';
import photoSrcs from './gallery-souces';

const gallery = document.getElementById('gallery');
const pager = document.querySelector('.pager');
const select = document.getElementById('gallery-select');

select.addEventListener('change', console.log);

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
    window.scrollTo({ top: 0 });
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
