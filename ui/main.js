// Counter code
var button = document.getElementById('counter');

button.onclick = function(){

    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // take some action
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
            }
        }
        // not done
    };
    
    //Make the request
    request.open('GET','http://prasad8897.imad.hasura-app.io/counter',true);
    request.send(null);
};

// submit name
var submit=document.getElementById('submit_btn');
submit.onclick = function(){
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // take some action
            if(request.status == 200){
                //capture a list of name and render it as a list
                var names = request.responseText;
                names=JSON.parse(names);
                var list = '';
                for( var i=0;i<names.length;i++){
                    list=list+'<li>'+names[i]+'</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
        // not done
    };
    
    //Make the request
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET','http://prasad8897.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);

};






