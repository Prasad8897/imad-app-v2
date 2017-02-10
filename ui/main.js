console.log('Loaded!');
// Counter code
var counter = 0;
var button = document.getElementById('counter');

button.onClick = function(){
    
    // make a request to the counter end point
    
    // Capture the response and store it in a variable
    
    //Render the variable in the correct the span
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML= counter.toString();
    console.log(counter.toString());
};