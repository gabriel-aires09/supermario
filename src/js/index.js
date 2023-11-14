const buttonTrailer = document.querySelector(".button-trailer");
const buttonCloseModal = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

const linkVideo = video.src;

function toggleModal() {
    modal.classList.toggle("open");
}

buttonTrailer.addEventListener("click", () => {
    toggleModal();
    video.setAttribute("src", linkVideo)
})

buttonCloseModal.addEventListener("click", () => {
    toggleModal();
    video.setAttribute("src", "")
})

modal.addEventListener("click", (event) => {
    const isClickInside = video.contains(event.target) || buttonCloseModal.contains(event.target);

    if (!isClickInside){
        toggleModal();
        video.setAttribute("src", "");
    }
}) 