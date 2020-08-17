// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// select cards-container
const cards = document.querySelector('.cards-container');
const errors = document.querySelector('.errors-container');

// Setup Error
axios
  .get(`https://lambda-times-api.herokuapp.com/topicsss`)
  .then((res) => {
    console.log('This should not even work.')
    // let articleTopics;
    // return articleTopics =  res.data.topics;
  })
  .catch((err) => {
    console.log(`Error: `, err);
    errors.appendChild(createError(err));
  });

  // GET articles

axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((res) => {
    // let articleTopics = ['javascript', 'bootstrap', 'technology', 'jquery', 'node'];
    // console.log(res)
    let jsArticles = res.data.articles.javascript;
    let bootstrap = res.data.articles.bootstrap;
    let technology = res.data.articles.technology;
    let jquery = res.data.articles.jquery;
    let node = res.data.articles.node;
    // console.log(articles);
    jsArticles.map((e) => {
      cards.appendChild(createCard(e));
    });
    bootstrap.map((e) => {
      cards.appendChild(createCard(e));
    });
    technology.map((e) => {
      cards.appendChild(createCard(e));
    });
    jquery.map((e) => {
      cards.appendChild(createCard(e));
    });
    node.map((e) => {
      cards.appendChild(createCard(e));
    });

    

  })
  .catch((err) => {
    console.log('Error: ', err);
    errors.appendChild(createError(err));
  })

function createCard(obj) {
  // create elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const byAuthor = document.createElement('span');

  // append to DOM
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(byAuthor);
  imgContainer.appendChild(img);

  // add styling
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // add content
  console.log(obj);
  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  byAuthor.textContent = `By ${obj.authorName}`;

  addEventListener
  card.addEventListener('click', () => {
    console.log(headline.textContent);
  })

  return card;
}

function createError(obj) {
  const error = document.createElement('div');
  const errorContent = document.createElement('h2');

  error.appendChild(errorContent);

  errorContent.textContent = `There was an issue with the request! ${obj}`;

  return error;
}