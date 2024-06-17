import './style.css';

const data = [
  {
    text: 'Search Data',
    detail:
      'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.',
    img: '/features-img1.svg',
    bg: '68C9BA',
  },
  {
    text: '24 Hours Access',
    detail:
      'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
    img: '/features-img2.svg',
    bg: '9C69E2',
  },
  {
    text: 'Print Out',
    detail:
      'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
    img: '/features-img3.svg',
    bg: 'F063B8',
  },
  {
    text: 'Security Code',
    detail:
      'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.',
    img: '/features-img4.svg',
    bg: '2D9CDB',
  },
];

const container = document.getElementById('features-container');

data.forEach((item) => {
  const div = document.createElement('div');

  div.innerHTML = `
  <img class='feature-img' src='${item.img}' alt=''>
  <svg xmlns="http://www.w3.org/2000/svg" width="434" height="358" viewBox="0 0 434 358" fill="none">
  <path opacity="0.1" d="M44.2904 41.7355C48.3276 17.6466 69.1778 0.00012207 93.6026 0.00012207H383.285C410.899 0.00012207 433.285 22.3859 433.285 50.0001V308C433.285 335.614 410.899 358 383.285 358H50.3624C19.4471 358 -4.05989 330.226 1.05018 299.736L44.2904 41.7355Z" fill="#${item.bg}" />
</svg>
<div class='feature-text-side'>
<div>
<h4>${item.text}</h2>
<p>${item.detail}</p>
</div>
<button>Learn more 
<img src='/arrow-right.svg' alt='arrow icon'>
</button>
</div>
`;

  div.className = 'feature';

  container.appendChild(div);
});

document
  .getElementById('about-nav')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
    });
  });

document
  .getElementById('features-nav')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('features').scrollIntoView({
      behavior: 'smooth',
    });
  });
document
  .getElementById('help-nav')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('help').scrollIntoView({
      behavior: 'smooth',
    });
  });
