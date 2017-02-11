console.log('Loaded!');
// Counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    
    
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            // take some action
            console.log(request.status);
            if(request.status == 200){
                var counter = request.respondText;
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
                console.log(counter.toString());
            }
        }
        // not done
    };
    
    request.open('GET','http://prasad8897.imad.hasura-app.io/counter',true);
    request.send(null);
};