function movedp()
	{
		var i=1;
		window.setInterval(function move(){
											if(i<50)
											{
												i++;
												var x = document.getElementById('dp');
												x.style.left = (i) + 'px';
												x.style.opacity = (i / 100) * 2;
											}
											else
												clearInterval();
											}, 10);
	}
	function movename()
	{
		var i=-10;
		window.setInterval(function move(){
											if(i<70)
											{
												i++;
												var x = document.getElementById('Name');
												x.style.top = (i) + 'px';
												x.style.opacity = (i / 100)*2;
											}
											else
												clearInterval();
											}, 10);
	}
	function myFormAppear()
	{
		var i=0;
		document.getElementById('myForm').style.opacity = 1;
		document.getElementById('myForm').style.left = 0 + 'px';
		document.getElementById('myForm').style.top = 675 + 'px';
		window.setInterval(function scrollDownP(){
												if(i<6)
												{
													i++;
													scrollDown();
												}
												else
													clearInterval();
												},50);
	}
	
	function scrollDown()
	{
		window.scrollBy(0,50);
	}
	
	movedp();
	movename();