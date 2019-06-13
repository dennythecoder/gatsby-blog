require("prismjs/themes/prism-tomorrow.css");
(function(){

    function forEach(iterable, fn){
        for(var i = 0; i < iterable.length; i++){
            fn(iterable[i]);
        }
    }
    
    document.addEventListener("DOMContentLoaded", function(){
        var tries = 0;
        var interval = setInterval(function(){
            var blockQuotes = document.getElementsByTagName('blockquote');
            forEach(blockQuotes, function(el){
                el.style.backgroundColor = '#eee';
                el.style.borderLeft = '10px solid #2b2b2b';
                el.style.paddingLeft = '10px';
                el.style.fontStyle = 'italic';
            });
            if(tries > 5){
                clearInterval(interval);
            }
            tries++;
        },500);
    });
})()