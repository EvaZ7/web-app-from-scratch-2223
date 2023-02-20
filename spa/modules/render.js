var daily = document.querySelector("section:first-of-type q");

var authorOne = document.querySelector("section:nth-of-type(2) p:first-of-type");
var authorTwo = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(2) button p");
var authorThree = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(3) button p");
var authorFour = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(4) button p");
var authorFive = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(5) button p");

var authorQuote = document.querySelector("section:nth-of-type(2) q");

export function changeDaily (data){
    daily.textContent = data[0].quote;
}

export function loadAuthor (data){
    authorOne.textContent = data[1].author;
    authorTwo.textContent = data[2].author;
    authorThree.textContent = data[3].author;
    authorFour.textContent = data[4].author;
    authorFive.textContent = data[5].author;

    authorQuote.textContent = data[1].quote;
}

// export { changeDaily };