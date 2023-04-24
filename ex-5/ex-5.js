const form = document.querySelector('#form');
         const requestBtn = document.querySelector('#request');
         const imagesContainer = document.querySelector('#images');
         const loading = document.querySelector('#loading');
         const error = document.querySelector('#error');
         
         const min = 1;
         const max = 10;
         
         let currentPage = localStorage.getItem('page') || min;
         let currentLimit = localStorage.getItem('limit') || max;
         
         document.addEventListener('DOMContentLoaded', getImages);
         
         form.addEventListener('submit', (e)=>{
            e.preventDefault();
         });
         
         requestBtn.addEventListener('click', ()=>{
            const page = parseInt(document.querySelector('#page').value);
            const limit = parseInt(document.querySelector('#limit').value);
            
            if(isNaN(page) || page < min || page > max){
               showError('Номер страницы вне диапазона от 1 до 10');
               return;
            }
            
            if(isNaN(limit) || limit < min || limit > max){
               showError('Лимит вне диапазона от 1 до 10');
               return;
            }
            
            currentPage = page;
            currentLimit = limit;
            
            localStorage.setItem('page', currentPage);
            localStorage.setItem('limit', currentLimit);
            
            getImages();
         });
         
         function showError(message){
            error.style.display = 'block';
            error.textContent = message;
         }
         
         function showLoading(){
            loading.style.display = 'block';
         }
         
         function hideLoading(){
            loading.style.display = 'none';
         }
         
         async function getImages(){
            showLoading();
            error.style.display = 'none';
            imagesContainer.innerHTML = '';
            
            try{
               const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=${currentLimit}`);
               const data = await response.json();
               data.forEach((item)=>{
                  const image = document.createElement('img');
                  image.src = item.download_url;
                  imagesContainer.appendChild(image);
                  hideLoading();
               });
            }
            catch(e){
               hideLoading();
               showError('Произошла ошибка. Попробуйте позже');
            }
         }