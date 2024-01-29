
function displaynews(news){
    const div1 = document.getElementById("para");
    const h1=document.createElement("h1");

    h1.textContent=news;
    div1.append(h1);
}

const URL = 'https://newsapi.org/v2/everything?q=tesla&from=2023-11-10&sortBy=publishedAt&apiKey=1f18c728f93d4c45b890bdddac4ed4b3';

fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        const news = `${data.articles[0].author} ${data.articles[0].content} ${data.articles[0].description}`;
        displaynews(news);
        console.log(data);
    })
    .catch((error) => console.error('Error', error));