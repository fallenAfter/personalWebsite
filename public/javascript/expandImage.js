seeImg();
function seeImg(){
	// get button that will expand image
	var showBtn= document.getElementById('seeImg');
	//add event listner for button to be clicked
	showBtn.addEventListener("click", function(evt){
		//prevent default anchor action on click
		evt.preventDefault();
		//get the box that contains the image that will be expanded
		var imgContainer= document.getElementById('imgContainer');
		//check if imgContainer has show full class on it
		if(imgContainer.classList.contains('fullImg')!=true){
			//add class to image container so it expands with css
			imgContainer.className += " fullImg";
		}
		else{
			//get all class names associated with the image container
			var classNames= imgContainer.classList;
			// create variable to hold all class names that are native to the image container
			var nativeClass= '';
			//loop through each class name looking for full image
			for(var counter=0;counter<classNames.length;counter++){
				//check if current class interation is not fullImg
				if (classNames[counter]!= 'fullImg'){
					//check if nativeClass has an existing variable if it does ad a space infront of the new class name being added
					if(nativeClass==''){
						nativeClass= classNames[counter];
					}
					else{
						//if there is alreadya  class name add a space in front
						nativeClass+= " " +classNames[counter];
					}
				}
			}
			//reset imgContainer with existing class names.
			imgContainer.className= nativeClass;
		}
	},false);

}