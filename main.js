const rightArrow = document.getElementById("right-arrow")
const leftArrow = document.getElementById("left-arrow")

const img0 = document.getElementById("img0")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const images = [img0, img1, img2, img3, img4]
rightArrow.addEventListener("click", () => {
    images.forEach((img) => {
        const index = img.id[3];
        if(parseInt(index) === 4){
            return img.id = "img0";
        }
        img.id = "img" + (parseInt(index) + 1);
    });
})
leftArrow.addEventListener("click", () => {
    images.forEach((img) => {
        const index = img.id[3];
        if(parseInt(index) === 0){
            return img.id = "img4";
        }
        img.id = "img" + (parseInt(index) - 1);
    });
})

images.forEach((img, index) => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault()
    })
    img.addEventListener('touchstart', touchStart(index))
    img.addEventListener('touchend', touchEnd)
    img.addEventListener('touchmove', touchMove)
    // mouse events
    img.addEventListener('mousedown', touchStart(index))
    img.addEventListener('mouseup', touchEnd)
    img.addEventListener('mousemove', touchMove)
    img.addEventListener('mouseleave', touchEnd)
});

function touchStart(index) {
    return function (event) {
      console.log('start')
    }
  }
  
  function touchMove(event) {
    console.log("move")
  }
  function touchEnd() {
    
  }