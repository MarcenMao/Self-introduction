//照片播放
	var img = ["pic/DSC01573.jpg","pic/99D39C10-B8FC-4710-8FFB-13DE46649502.JPG", "pic/DSC00076.JPG", "pic/DSC00653.JPG","pic/DSC00889.jpg",
		   "pic/DSC01062.JPG","pic/DSC01273.JPG","pic/DSC01621.jpg","pic/IMG_0809.jpg","pic/IMG_5898.JPG","pic/IMG_8227.jpg","pic/IMG_6323.JPG"];
	var x=0;
	var length = img.length-1;
	var im = document.getElementById("p");
	var xr = setInterval('changebutton()',1500);
	function changebutton(){
		var im = document.getElementById("p");
		if(x<length){
			im.src=img[x+1];
			x=x+1;
		}
		else{
			im.src=img[0];
			x=0;
		}
	}
	function start(){
		 xr = setInterval('changebutton()',1500);
	}
	function stopb(){
		  clearInterval(xr);
	}
	function left(){
		var im = document.getElementById("p");
		if(x>0){
			im.src=img[x-1];
			x=x-1;
		}
		else{
			 alert("這是第一張!!!");
		}
	}
	function right(){
		var im = document.getElementById("p");
		if(x<length){
			im.src=img[x+1];
			x=x+1;
		}
		else{
			alert("最後一張!!!");
		}
	}
