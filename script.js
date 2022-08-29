var urlInput=document.getElementById('urlInput')
var submit=document.getElementById('btn')

submit.addEventListener("click",function(){
   

    
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
        .then(response => {output.textContent=response['result_url']
    
        /* this line will check to see if output was set to value and if it is not then it asssumed the url is not actually a shortenable url */
            if(output.textContent==""){
                alert("could not shorten. Try again")
            }
    
            }
        )
        .catch(err =>alert("Error: Try again"))
 
        
    
    urlInput.value=""
}
)

