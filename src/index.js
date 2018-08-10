import './css/main.css';

const badFunc = () => {
  const image = document.createElement('img');
  image.src = '../assets/images/react_logo.png';

  document.body.appendChild(image);
};

const funcB = x => x;
funcB(1);

badFunc();
