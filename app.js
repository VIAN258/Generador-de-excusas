let who = ['the dog', 'my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when i finished','during my lunch','while i was praying'];

window.onload =  function (){
    let randomWho = Math.floor(Math.random() * 3);
    let randomWhat = Math.floor(Math.random() * 3);
    let randomWhen = Math.floor(Math.random() * 4);

    document.querySelector('body').innerHTML = "<h1>" + who[randomWho] + " " + what[randomWhat]+ " " + when[randomWhen] + "</h1>"
}