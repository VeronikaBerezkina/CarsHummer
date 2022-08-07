function showNav() {
  const nav = document.querySelector('nav');
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  } else {
    nav.classList.add('active');
  }
}

/**
 *
 *
 *
 */

const nums = document.querySelector('.numbers');

function generateDiv(obj) {
  //
  const div = document.createElement('div');
  div.classList.add('number');

  //
  const h4 = document.createElement('h4');
  h4.append(obj.h4);
  //
  const p = document.createElement('p');
  p.append(obj.p);

  //
  div.append(h4, p);
  return div;
}

const array = [
  {
    h4: 50,
    p: 'Салонов',
  },
  {
    h4: 10,
    p: 'Партнёров',
  },
  {
    h4: '10+',
    p: 'Звонков в день',
  },
  {
    h4: 50,
    p: 'Тест-драйвов',
  },
];
/**
 *
 */

array.forEach(function (obj) {
  nums.append(generateDiv(obj));
});
