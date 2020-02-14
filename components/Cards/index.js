// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    createArticles(response.data.articles);
})
const topicsContainer = document.querySelector('.cards-container');
function createArticles(objArr) {
    for (let articles in objArr) {
        const topic = document.createElement('div');
        topic.classList.add('card');
        topic.innerText = articles.toUpperCase();
        topicsContainer.appendChild(topic);
        let sub = objArr[articles];
        for (let article in sub) {
            const
            headline = document.createElement('div'),
            authorContainer = document.createElement('div'),
            imgContainer = document.createElement('div'),
            img = document.createElement('img'),
            author = document.createElement('span');

            headline.classList.add('headline');
            authorContainer.classList.add('author');
            imgContainer.classList.add('img-container');

            headline.innerText = `${sub[article].headline}`;
            img.src = `${sub[article].authorPhoto}`;
            author.innerText = `By ${sub[article].authorName}`;

            topic.append(headline, authorContainer);
            authorContainer.append(imgContainer, author);
            imgContainer.append(img);
        }
    }
}