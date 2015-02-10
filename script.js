function appearresume(){
	var resume = document.getElementById('resumex');
	var offset = window.pageYOffset;
	
	if(offset > 900 && offset < 950)
	{
		var i = 0;
		window.setInterval(function move(){
											if(i<50)
											{
												i++;
												resume.style.opacity = (i / 100) * 2;
											}
											else
												clearInterval();
											}, 10);
		
	}
}
function dance(){
	
	var link = document.getElementById('dancelink');
	
	var status = 0;
	window.setInterval(function move(){
		
		if(status % 2 == 0)
		{
			var j = 0;
			window.setInterval(function moveDown(){
			if(j < 150){
				j++;
				link.style.top = -50 - j + 'px';
			}
			},10)
			status++;
		}
		else
		{
			var j = 0;
			window.setInterval(function moveDown(){
			if(j < 150){
				j++;
				link.style.top = -200 + j + 'px';
			}
			},10)
			status++;
		}
		
	},1990)
	
	
}
window.addEventListener("scroll",appearresume,false);
dance();