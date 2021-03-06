// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// let topicState;

// select div.topics
const topics = document.querySelector('.topics');

axios
  .get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((res) => {
    // console.log(res);
    topics.appendChild(Topic('All'));
    res.data.topics.map((e) => {
      topics.appendChild(Topic(e));
    })
  })
  .catch((err) => {
    console.log(`Error: `, err);
  })

  function Topic(data) {
    const topic = document.createElement('div');

    topic.classList.add('tab');

    topic.textContent = data;

    // topic.addEventListener('click', (e) => {
    //   console.log(e.target.textContent);
    //   topicState = e.target.textContent;
    //   // axios
    //   //   .get(`https://lambda-times-api.herokuapp.com/articles`)
    //   //   .then((res) => {
    //   //     console.log(res.data.articles);
    //   //   })
    //   return topicState;
    // })


    return topic;
  }