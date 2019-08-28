// news API creating paragraphs

var url ='https://newsapi.org/v2/everything?q=design&from=2019-08-28&sortBy=publishedAt&apiKey=ce05bd2a212b4fdb9f8416fe7cfe48de';

function setup() {
noCanvas();
loadJSON(url, gotData);

}
function gotData(data){
   console.log(data);
   var articles = data.articles
   for (var i=0; i<articles.length; i++)
    // createCanvas(100%, 100%);
    createP(articles[i].title)
}
