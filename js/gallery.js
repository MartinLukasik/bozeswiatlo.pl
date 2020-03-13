import './modules/resonsive-nav';
import GalleryPager from './modules/gallery';
import photoSrcs from './gallery-souces';

const gallery = document.getElementById('gallery');
const pager = document.querySelector('.pager');
const select = document.getElementById('gallery-select');

new GalleryPager(gallery, pager, select, photoSrcs, 12);
