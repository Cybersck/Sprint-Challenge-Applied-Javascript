// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const 
    head = document.createElement('div'),
    date = document.createElement('span'),
    title = document.createElement('h1'),
    temp = document.createElement('span');

    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.innerText = 'MARCH, 28, 2019';
    title.innerText = 'Lambda Times';
    temp.innerText = '98°';

    head.append(date, title, temp);

    return head;
}

const container = document.querySelector('.header-container');

container.appendChild(Header());