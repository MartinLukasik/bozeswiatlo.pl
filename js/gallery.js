import './modules/resonsive-nav';
import GalleryPager from './modules/gallery';
import photoSrcs from './gallery-souces';

new GalleryPager(
  document.getElementById('gallery'),
  document.querySelector('.pager'),
  document.getElementById('gallery-select'),
  photoSrcs,
  12
);
