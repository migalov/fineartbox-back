

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  console.log(body);
  
 const img = document.createElement("img");
  img.classList.add("image-preview");

  body.addEventListener('mouseover', function(event) {
    let x = event.pageX;
    let y = event.pageY;
    // console.log(event);
    if(event.target.nodeName == "SPAN" && event.target.innerText.includes("https://static0")) {
      console.log(event.target.innerText);
      img.src = event.target.innerText;
    }
  });



  img.addEventListener("click", () => {
    img.classList.toggle("image-preview--scale");
  })
  body.append(img);
  body.insertAdjacentHTML("afterbegin", `
    <style>
      .image-preview {
        position: absolute;
        top: 0;
        right: 200px;
        width: 200px;
        aspect-ratio: 1/1;
        transform-origin: top;
        cursor: pointer;
      }
        .image-preview--scale {
          transform: scale(3);
        }
    </style>
    `)
});


