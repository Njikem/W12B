

   let button = document.getElementById('activity'); 
   let h_tag = document.getElementById('h-activity'); 
  
    button.addEventListener('click', clickButton);
     
   

     function clickButton(event){
      
        console.log(button);

        axios.request({
         url: 'http://www.boredapi.com/api/activity/'
        }).then(sucessfunction).catch(failurefunction)
       
 } 


     function sucessfunction(response){
        console.log(response);
        if(response.status === 200){
            let data = response.data
            console.log(data.activity);
            h_tag.innerText = data.activity

        
        }
     }

     function failurefunction(error){
        console.log(error);
     }



