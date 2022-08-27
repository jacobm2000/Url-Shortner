var urlInput=document.getElementById('urlInput')
var submit=document.getElementById('btn')
function isValidUrl(_string){
    const matchPattern =/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    return matchPattern.test(_string);
  }
submit.addEventListener("click",function(){
    if(!isValidUrl(urlInput.value)){
        alert("Url is not Valid please enter a valid url")
    
    }
    else{

    
        const encodedParams = new URLSearchParams();
        console.log(urlInput.value)
        encodedParams.append("url", urlInput.value);
        
        
        
        
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'f164ca32b4msh8c5ccf225fa5bc4p19f05ejsnd4684285c76f',
                'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
            },
            body: encodedParams
        };
    
        fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
        
        .then(response => response.json())
        .then(response => output.textContent=response['result_url'])
        .catch(err =>alert("Error: Try again"))
    


        
    
    }
}
)

