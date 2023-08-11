import bookListInfo from './booklist.js';

console.log(bookListInfo)

let books = document.querySelector("#books")
let listUl = "<ul>"

let bookInfo = document.querySelector("#bookInfo")
let infoDiv = "<div>"

function initList(){

    for(let i in bookListInfo){

        listUl += `<li class="book${[i]}"><div><img src="./css/images/${bookListInfo[i].photo}" onerror="this.src='./css/images/noimage.gif'" alt="ㅇㅇ"></div><p>${bookListInfo[i].subject}</p></li>`
    }

    listUl +="</ul>"
    books.innerHTML = listUl;
}

initList()

function initInfo(){

    for(let i in bookListInfo){

        infoDiv += `<div class="infoBook${[i]}"><h2>${bookListInfo[i].subject}</h2><div class="pannel"><div class="pannel1"><img src="./css/images/${bookListInfo[i].photo}" onerror="this.src='./css/images/noimage.gif'" alt="ㅇㅇ"></div><div class="pannel2"><ul><li><span>저자</span><p>${bookListInfo[i].author}</p></li><li><span>출판사</span><p>${bookListInfo[i].publisher}</p></li><li><span>발행일</span><p>${bookListInfo[i].date}</p></li><li><span>가격</span><p>${bookListInfo[i].price}</p></li><li><span>내용</span><p class="summary">${bookListInfo[i].summary}</p></li></ul><div class="del">리스트에서 제외하기</div></div></div></div>`
    }
    infoDiv +="</div>"
    bookInfo.innerHTML = infoDiv;
}

initInfo()