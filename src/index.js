import './css/main.css';

const badFunc = (x, y, z) => {
  const image = document.createElement('img');
  image.src = '../assets/images/react_logo.png';

  document.body.appendChild(image);
};

console.log('Hello World');

badFunc();
