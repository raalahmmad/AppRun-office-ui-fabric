import app from 'apprun';
declare var $;

app.on('//', route => {
  const menus = document.querySelectorAll('.navbar-nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('active');
});

app.on('set-page-title', title => (document.getElementById('page-title').innerText = title));



import './Demo';
