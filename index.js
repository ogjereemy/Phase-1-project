document.addEventListener('DOMContentLoaded', function() {
    let foxImagesContainer = document.getElementById('fox-images');
    let newFoxBtn = document.getElementById('new-fox-btn');
    let foxForm = document.querySelector('form');
     

    function fetchFoxImage() {

        fetch('https://randomfox.ca/floof/')
            .then(response => response.json())
            .then(data => {
                let imageUrl = data.image;
                let imgElement = document.createElement('img');
                let likeBtn = document.createElement('button')
                likeBtn.id = "like-btn"
                likeBtn.textContent = "Like ♡"
                imgElement.src = imageUrl;
                // foxImagesContainer.innerText = '';
                foxImagesContainer.appendChild(imgElement);
                foxImagesContainer.appendChild(likeBtn)
                likeBtn.addEventListener('click', () => {
                    alert("Fox image has been liked!")
                    likeBtn.textContent = "Liked ♥"
                    likeBtn.style.backgroundColor = "pink"
                })
            })
            .catch(error => console.error('Error fetching fox image:', error));
    
    }
    foxForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let foxDescription = foxForm.querySelector("#desc").value
    
    let par = document.createElement("p");
    par.textContent = foxDescription
    // par.append.innerText = foxDescription;
    foxImagesContainer.appendChild(par);

    foxForm.reset();
    })

    // foxForm.reset();

    newFoxBtn.addEventListener('click', fetchFoxImage);
    newFoxBtn.addEventListener('click', (e) => {
        newFoxBtn.textContent = "Add another fox?"
        alert("Do you want to add another fox?")
        alert("Yaaayy! New cute Fox Added")
    })

    newFoxBtn.addEventListener('mouseover', (e)=> {
        e.target.style.backgroundColor = "green"
    })
    newFoxBtn.addEventListener('mouseout', (e)=> {
        e.target.style.backgroundColor = "#007bff"
    })

    // Initial load
    fetchFoxImage();

});


