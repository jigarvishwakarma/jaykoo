var listQuotes = [
    {quote: "These roses are just a means to say how precious you are to me.", author: "Happy rose day!"},
    {quote: "Sending you yellow, white, red, pink, etc roses to let you know how you add colours to my life every day. ", author: "Happy Rose Day beautiful!"},
    {quote: "Sending you rose plant instead of a flower, I wish you stay in my life forever and ever just like this plant.", author: " Happy Rose Day Nicole!"},
    {quote: "I chose the best red roses to express my love for you because you are the best, my soul mate. ", author: "Happy Rose Day, My love!"},
    {quote: "Sending you the most beautiful roses in the world today.", author: " Happy Rose Day Dear!"},
    {quote: "May God make our love life more beautiful than the most beautiful rose in the world", author: "Happy Rose Day my love!"},
    {quote: "Your soul is as beautiful as a rose", author: " Happy Rose Day to my rose!"},
    {quote: "No matter which day comes our love for each other will remain the same forever", author: "Happy rose day my darling!"},
    {quote: "I can achieve anything in this world if I have you beside me", author: "Wishing you happy Rose Day!"},
    {quote: "Our relationship is just like these beautiful roses, full of fragrance, tenderness, love, and life.", author: "Happy Rose Day, My Cute Little Nicole!!"},
    {quote: "I feel happy every moment since you entered my life. Sending this bouquet of red roses to say I love you my life. I present to you my intense love and affection that makes my world complete..", author: "uwu"},
    {quote: "Just like a rose blooms in thorns, you are the most precious person who taught me to stand tall like a rose among thorns of life.", author: "Happy Rose Day!"},
    {quote: "When I have you by my side, I do not care about the world.", author: "Happy Rose Day to the love of my life!"},
    {quote: "Wishing you a very happy, lovely, cheerful, and colourful rose day!", author: "* you cute cute *"},
    {quote: "For me, you are the most precious flower of life", author: "Happy Rose Day!"},
    {quote: "Sending you a bunch of handpicked roses on this day to express my love for you which is eternal", author: "Happy Rose Day!!!!!!!!"},
    {quote: "You are the rose of my life!", author: "Happy Rose Day u.u"}
];

var currentQuote = 0;
var progress = setInterval(timerProgress, 10);
var progressWidth = 0;

function timerProgress() {
  $(".quote-progress").width(progressWidth + "%");
  if(progressWidth < 100) {
    progressWidth += 0.1;
  } else {
    changeQuote();
    progressWidth = 0;
    return 0;
  }
}

function setQuote() {
  $(".quote").html('"' + listQuotes[currentQuote].quote + '"');
  $(".author-name").html(listQuotes[currentQuote].author);
}

function getRandomQuote() {
  currentQuote = Math.round(Math.random() * (listQuotes.length));
  setQuote();
}

function changeQuote() {
  if(currentQuote < listQuotes.length - 1){
    currentQuote++;
  } else {
    currentQuote = 0;
  }
  setQuote();
}

$(".previous").click(function() {
  if(currentQuote > 0){
    currentQuote--;
  } else {
    currentQuote = listQuotes.length - 1;
  }
  setQuote();
  progressWidth = 0;
});

$(".next").click(function() {
  changeQuote();
  progressWidth = 0;
});

$(".random").click(function() {
  getRandomQuote();
  progressWidth = 0;
});

getRandomQuote();