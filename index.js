// document.addEventListener('DOMContentLoaded', function() {
//     let foxImagesContainer = document.getElementById('fox-images');
//     let newFoxBtn = document.getElementById('new-fox-btn');
//     let foxForm = document.querySelector('form');
//     // let deletefoxButton = document.getElementById('delete-fox')
    
//     function addDescription(){
//     }

//     function fetchFoxImage() {

//         fetch('https://randomfox.ca/floof/')
//             .then(response => response.json())
//             .then(data => {
//                 let imageUrl = data.image;
//                 let imgElement = document.createElement('img');
//                 imgElement.src = imageUrl;
//                 // foxImagesContainer.innerText = '';
//                 foxImagesContainer.appendChild(imgElement);
    
//             })
//             .catch(error => console.error('Error fetching fox image:', error));

//             foxForm.addEventListener('submit', (e) => {
//                 e.preventDefault();
//                 let foxDescription = foxForm.querySelector("#desc").value
            
//             let par = document.createElement("span");
//             par.textContent = foxDescription
//             // par.append.innerText = foxDescription;
//             foxImagesContainer.appendChild(par);
//             });
//             foxForm.reset();
    
//     }

//     newFoxBtn.addEventListener('click', fetchFoxImage);
    
//     newFoxBtn.addEventListener('mouseover', {
//         handleEvent: (event) => {
//             event.preventDefault();
//             // event.target.style.backgroundColor = 'blue';
//         }
//     })
//     // newFoxBtn.addEventListener('mouseOver', {
//     //     handleEvent: (event) => {
//     //         event.target.foxImagesContainer.innerText = '';
//     //     },
//     // });


//     // Initial load
//     fetchFoxImage();
//     addDescription();
//     // par.appendChild()
// });

