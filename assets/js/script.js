


var dropFileForm = document.getElementById("dropFileForm");
var fileLabelText = document.getElementById("fileLabelText");
var uploadStatus = document.getElementById("uploadStatus");
var fileInput = document.getElementById("fileInput");
var droppedFiles;

function overrideDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}

function fileHover() {
  dropFileForm.classList.add("fileHover");
}

function fileHoverEnd() {
  dropFileForm.classList.remove("fileHover");
}

function addFiles(event) {
  droppedFiles = event.target.files || event.dataTransfer.files;
  showFiles(droppedFiles);
}

function showFiles(files) {
  if (files.length > 1) {
    fileLabelText.innerText = files.length + " files selected";
  } else {
    fileLabelText.innerText = files[0].name;
  }
}

function uploadFiles(event) {
  event.preventDefault();
  changeStatus("Uploading...");

  var formData = new FormData();

  for (var i = 0, file; (file = droppedFiles[i]); i++) {
    formData.append(fileInput.name, file, file.name);
  }

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
   
    console.log(xhr.response);
  };
  xhr.open(dropFileForm.method, dropFileForm.action, true);
  xhr.send(formData);
}

function changeStatus(text) {
  uploadStatus.innerText = text;
}



let icon =document.querySelector("i");
icon.addEventListener("click",function(){
    this.nextElementSibling.click();
})


icon.addEventListener("change",function(e){
    for (const file of e.target.files){
        let reader=new FileReader();


        reader.onloadend=(event)=>{

            let fileBase64=event.currentTarget.result;
            document.querySelector("img").setAttribute("scr",fileBase64);




        }
         
        reader.readAsDataURL(file)








    }






})