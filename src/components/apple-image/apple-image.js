import Apple from './apple.jpeg';
import './apple-image.scss';

class AppleImage {
  render() {
    const img = document.createElement('img');
    img.src = Apple;
    img.alt = 'Apple';
    img.classList.add('apple-image');

    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default AppleImage;
