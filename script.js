let result = document.getElementById("result");
let input = document.getElementById("chatbox");
let button = document.getElementById("button");

button.addEventListener("click",message)

function message() {
    if (isValidURL(input.value)) {
        
        if (isValidimage(input.value) != false) {
    
            let image = document.createElement("img")
            image.classList.add('img')
            image.src = input.value;
            result.appendChild(image)
        
        } else {
            let anchor = document.createElement("a");
            anchor.href = input.value;
            anchor.textContent = input.value;
            result.appendChild(anchor);
        }
    }

    else {

        let div1 = document.createElement("div");
        div1.textContent = input.value;
        result.appendChild(div1);
    }



}
function isValidURL(url) {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
}

function isValidimage(url) {
    // Define a regular expression to match common image file extensions
    const imageExtensions = /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i;
    return imageExtensions.test(url);
}

