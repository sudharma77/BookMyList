var submitButton = document.getElementById('submitButton')


document.getElementById('myform').addEventListener('submit' , savebookMark)
function savebookMark(e){
    var inputName = document.getElementById('inputSite').value 
    var inputURL = document.getElementById('inputURL').value
    var isb = document.getElementById('isb').value
    var bookMarkes = {
        name: inputName ,
        Url: inputURL,
        isb:isb
    }
    if(bookMarkes.Url==="" || bookMarkes.name === ""){
        window.alert('Please Fill All Require Field...')
        return false ;
    }
    if(localStorage.getItem('bookMarkArray') === null){
        var bookMarkArray = [];
        bookMarkArray.push(bookMarkes);
        localStorage.setItem('bookMarkArray' , JSON.stringify(bookMarkArray));
    }else{
        var bookMarkArray = JSON.parse(localStorage.getItem('bookMarkArray'))
        bookMarkArray.push(bookMarkes) ;
        localStorage.setItem('bookMarkArray',JSON.stringify(bookMarkArray))
    }
    document.getElementById('myform').reset()
    contentStorage()
    e.preventDefault()
}



function DeleteLink(Url){
    var bookMarkArray = JSON.parse(localStorage.getItem('bookMarkArray'))
    for(var i = 0 ; i <bookMarkArray.length ;  i++){
        if(bookMarkArray[i].Url == Url){
            bookMarkArray.splice(i, 1);
        }
    }
    localStorage.setItem('bookMarkArray' ,JSON.stringify(bookMarkArray))
    contentStorage()    
}



function contentStorage(){
    var bookMarkArray = JSON.parse(localStorage.getItem('bookMarkArray'))
    var storageList = document.getElementById('storage')
    storageList.innerHTML = '';
    for(var i = 0 ; i <bookMarkArray.length  ; i++){
       var Url = bookMarkArray[i].Url
       var name = bookMarkArray[i].name
       var isb = bookMarkArray[i].isb
       console.log(isb)
        storageList.innerHTML += '<div class = "whole">' /// important point
            +'<a class = "btn" href="#">'+name+'</a>'
            +Url+'<a class = "btn" href="'+Url+'">'+isb+'</a>'
            + '<button class = "btn1" onclick = "DeleteLink(\''+Url+'\')" href = "#">Delete</button>'
            +'</div>' ;
    }
    
    
}


