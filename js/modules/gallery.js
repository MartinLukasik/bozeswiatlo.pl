// Pager Class
class Pager {
  constructor(el, pageCount, changePageCallback) {
    this.pager = el;
    this.currentActive = 1;
    // Initiation
    this.updatePager(pageCount, changePageCallback);
  }

  changeActive(pageNumber) {
    this.pager.firstElementChild.children[this.currentActive].classList.remove(
      'pager__item--active'
    );
    this.currentActive = pageNumber;
    this.pager.firstElementChild.children[this.currentActive].classList.add(
      'pager__item--active'
    );
  }

  updatePager(pageCount, changePageCallback) {
    this.currentActive = 1;
    const ul = document.createElement('ul');
    const prev = document.createElement('li');
    prev.className = 'pager__item pager__item--prev';
    prev.innerHTML = createPagerBtn();
    prev.addEventListener('click', () => {
      const prevPageNumber =
        this.currentActive > 1 ? this.currentActive - 1 : pageCount;
      this.changeActive(prevPageNumber);
      changePageCallback(prevPageNumber);
    });
    ul.appendChild(prev);

    for (let i = 1; i <= pageCount; i++) {
      const pagerBtn = document.createElement('li');
      pagerBtn.className =
        i === 1 ? 'pager__item pager__item--active' : 'pager__item';
      pagerBtn.innerHTML = createPagerBtn(i);
      pagerBtn.addEventListener('click', () => {
        this.changeActive(i);
        changePageCallback(i);
      });
      ul.appendChild(pagerBtn);
    }

    const next = document.createElement('li');
    next.className = 'pager__item pager__item--next';
    next.innerHTML = createPagerBtn();
    next.addEventListener('click', () => {
      const nextPageNumber =
        this.currentActive < pageCount ? this.currentActive + 1 : 1;
      this.changeActive(nextPageNumber);
      changePageCallback(nextPageNumber);
    });
    ul.appendChild(next);
    if (this.pager.firstElementChild) {
      this.pager.replaceChild(ul, this.pager.firstElementChild);
    } else {
      this.pager.appendChild(ul);
    }
  }
}

// Pager Utility functions
function createPagerBtn(pageNumber) {
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

// Gallery Class
class GalleryPager {
  constructor(el, pagerEl, filterEl, photoSrcs, imagesPerPage) {
    // Binding to GalleryPager instance, cause will be called from Pager instance
    this.changePage = this.changePage.bind(this, imagesPerPage);

    // For filter operations
    this.photoSrcs = photoSrcs;
    // For pagination operations
    this.filteredPhotoSrcs = photoSrcs;
    // Initial value
    this._photos = photoSrcs.slice(0, imagesPerPage);
    this.gallery = el;
    this.pager = new Pager(
      pagerEl,
      Math.ceil(photoSrcs.length / imagesPerPage),
      this.changePage
    );

    filterEl.addEventListener('change', e => {
      const value = e.target.value;

      if (value === '*') {
        this.filteredPhotoSrcs = this.photoSrcs;
        this.photos = this.filteredPhotoSrcs.slice(0, imagesPerPage);
      } else {
        this.filteredPhotoSrcs = this.photoSrcs.filter(photo =>
          photo.tags.includes(e.target.value)
        );
        this.photos = this.filteredPhotoSrcs.slice(0, imagesPerPage);
      }
      this.pager.updatePager(
        Math.ceil(this.filteredPhotoSrcs.length / imagesPerPage),
        this.changePage
      );
    });

    // Gallery initiation
    this.updateGallery();
  }

  set photos(filtered) {
    this._photos = filtered;
    this.updateGallery();
  }

  get photos() {
    return this._photos;
  }

  changePage(imagesPerPage, pageNumber) {
    this.photos = this.filteredPhotoSrcs.slice(
      (pageNumber - 1) * imagesPerPage,
      pageNumber * imagesPerPage
    );
    this.updateGallery();
    window.scrollTo({ top: 0 });
  }

  updateGallery() {
    const pagePhotos = this.photos;
    const children = gallery.children;

    const photosLength = pagePhotos.length;
    for (let i = 0; i < photosLength; i++) {
      const src = pagePhotos[i].src;
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

export default GalleryPager;
