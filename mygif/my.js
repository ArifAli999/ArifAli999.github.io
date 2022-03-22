document.querySelector("#press").addEventListener("click", function () {
var input = document.querySelector('input').value;
getInput(input)
});

document.querySelector('.input').addEventListener('keyup', function(e){
var input = document.querySelector('input').value;
if (e.key == 'Enter') {
    console.log(input);
    getInput(input)
}

});




/* 2. do the data stuff with the API */

function getInput(item) {

    var query = item.split(' ').join('+');
    var url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    query +
    "&api_key=Dxi4CVbCeNwkLJlUziJx13NU2ChnVJkH";

    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();
  
    GiphyAJAXCall.addEventListener("load", function (e) {
      var data = e.target.response;
      pushToDOM(data);
    });
}
/* 3. Show me the GIFs */

function pushToDOM(input) {
    var response = JSON.parse(input);
    var res_cont = document.querySelector('.results-container');
    var rest_count = document.querySelector('.numbers');

    clear(res_cont);
    clear(rest_count);
   
    var imgUrls = response.data;

    imgUrls.forEach(function(img){
        var src = img.images.fixed_height.url;
  
      console.log(src);
      rest_count.innerHTML = src.length + " gifs found";
      res_cont.innerHTML += `<img class="imgpad" src="${src}">`;
    });

    function clear(item) {
        item.innerHTML = "";
      }

    
 
}
