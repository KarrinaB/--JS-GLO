'use strict';

const books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    bookHead = document.getElementsByTagName('a')[4],
    bookHeadClone = bookHead.cloneNode(true),
    adv = document.querySelector('.adv'),
    elemsAll = document.querySelectorAll ('ul'),
    elems = document.querySelectorAll('li'),
    newElems = document.createElement('li');

books[0].append(book[1]);
books[0].append(book[0]);
books[0].append(book[4]);
books[0].append(book[3]);
books[0].append(book[5]);
books[0].append(book[2]);

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

bookHeadClone.innerHTML = 'Книга 3. this и Прототипы Объектов';

bookHead.replaceWith(bookHeadClone);

adv.remove();

elemsAll[0].append(elems[0]);
elemsAll[0].append(elems[1]);
elemsAll[0].append(elems[3]);
elemsAll[0].append(elems[6]);
elemsAll[0].append(elems[8]);
elemsAll[0].append(elems[4]);
elemsAll[0].append(elems[5]);
elemsAll[0].append(elems[7]);
elemsAll[0].append(elems[9]);
elemsAll[0].append(elems[2]);
elemsAll[0].append(elems[10]);

elemsAll[5].append(elems[46]);
elemsAll[5].append(elems[47]);
elemsAll[5].append(elems[55]);
elemsAll[5].append(elems[49]);
elemsAll[5].append(elems[50]);
elemsAll[5].append(elems[48]);
elemsAll[5].append(elems[52]);
elemsAll[5].append(elems[53]);
elemsAll[5].append(elems[51]);
elemsAll[5].append(elems[54]);
elemsAll[5].append(elems[56]);


newElems.textContent = 'Глава 8: За пределами ES6';
elemsAll[2].append(newElems);













