const imgProject = document.querySelectorAll('.img-project');
randomImg.map(item => {
    imgProject.src = item.img;
});

console.log(imgProject)