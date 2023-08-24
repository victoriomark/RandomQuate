const BtnGenerate = document.querySelector('#BtnGenerate');


const Quote = async () => {
const api = `
https://api.quotable.io/random`;
const res = await fetch(api);
const data = await res.json();
 const content = document.querySelector('.content h5');
 const  Author = document.querySelector('.content h6');
 const tags = document.querySelector('.container h5');

   content.innerHTML = data.content
   Author.innerHTML = ` <span> Author:</span> ${data.author} `;
   tags.innerHTML = data.tags
  }


//add event
BtnGenerate.addEventListener("click", () => {
    BtnGenerate.classList.add('animate')
    BtnGenerate.textContent = 'Loading'
   const Timeout = setTimeout( () => {
    Quote();
    BtnGenerate.classList.remove('animate');
    BtnGenerate.textContent = 'Generate Random Quote';
   },2000)
    
})


