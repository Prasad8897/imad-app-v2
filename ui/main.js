console.log('Loaded!');
// Counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    var a = 1;
    request.onreadystatechange = function(){
        console.log(a.toString()+" "+request.status);
        if(request.readyState === XMLHttpRequest.DONE){
            // take some action
            if(request.status == 200){
                var counter = request.respondText;
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
                console.log(counter.toString());
            }
        }
        else{
            console.log("not done yet");
        }
        
        // not done
    };
    
    request.open('GET','http://prasad8897.imad.hasura-app.io/counter',true);
    request.send(null);
    a=a+1;
};