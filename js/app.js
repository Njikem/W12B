//create post success function
function post_success(response){
    post_container.insertAdjacentHTML(`beforeend`, `<P>SUCCESS!</p>`);
}


//Create post failure function
  
function post_failure(error){
    let post_container = document.querySelector(`#post_container`);
    post_container.insertAdjacentElement(`beforeend`, `<P>Failed<P>`);
}

//create a post function and axios request

function post_button_click(details){
    let title_input = document.querySelector(`#post_title_input`);
    let title_value = title_input[`value`];
    let body_input = document.querySelector(`#post_body_input`);
    let body_value = body_input[`value`];
    let UserId_input = document.querySelector(`#post_userId_input`);
    let UserId_value = UserId[`value`];
    //creating Axios post request
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title: `title_value`,
            body: `body_value`,
            UserId: `id_value`,
        }
    }).then(post_success).catch(post_failure);
    let post_button = document.querySelector(`#post_container`);

}

//add eventListener
post_button.addEventListener(`click`,post_button_click);





//Create a Patch Request

function post_button_click(details){
    post_container = document.getElementById(`#post_container`);

    //create an axios call for the Patch Request
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `PATCH`,
        data: {
            title: `title_value`,
        }
    }).then(post_success).catch(post_failure);
}

//add event listener on the buttton
post_button.addEventListener(`click`, post_button_click);



//Delete request to delete a post

axios.request({
    url:`https://jsonplaceholder.typicode.com/posts/1`,
    method: `delete`,
});



//creating a post success function using the Get Request
function post_success(response){
  let  post_container = document.querySelector(`#post_container`);
  for(let i=0; i < response[`data`][`url`]; i++){
     post_container.insertAdjacentHTML(`beforeend`, `<h3>${response[`data`][i][`url`]}</h3>`);
  }
}

//creating post failure function using the Get Request
function post_failure(error){
    let post_container = document.querySelector(`#post_container`);
    post_container.insertAdjacentHTML(`beforeend`, `<p>sorry, we can't get your request</p>`);
}


//create function for Get request
function post_button_click(details){
   let  post_input = document.querySelector(`#post_container`);
    let post_input_value = post_input(`value`);
    //creating the axios request for Get
    axios.request({
        url:`https://jsonplaceholder.typicode.com/posts`,
        params: {
            c: posts_input_value
        }
    }).then(post_success).catch(post_failure);
}