
window.onoffline = function () {
    window.alert("It's seems  You are offline ! Please check")
}

// smtp accestoken 94DAF66E-4DF6-4E8E-AF96-D094A8D21DF3
 function submit_it() {
    let name = document.querySelector('#name').value;
    let _subject = document.querySelector('#subject').value;
    let _message = document.querySelector('#message').value;

if(name===undefined) {name='';}
if(_subject===undefined|| _subject=='') {_subject='Unknown';}  

    let url = `https://script.google.com/macros/s/AKfycbzo5cWJZbXwdSPXSsUKZEsLR5S9eKCP4LxZttyArSzdEAFKabc/exec?subject=${_subject + ':by:' +name}&message=${_message}`;
   
   
    let elNode = document.createElement('a');
    elNode.setAttribute('target','blank');
    elNode.setAttribute('href',url);
     
    

    let container = document.querySelector('.info');
    container.appendChild(elNode);

   elNode.click();
   
   container.removeChild(elNode);
   

}