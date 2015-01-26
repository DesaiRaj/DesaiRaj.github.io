function movedp()
	{
		var i=1;
		//var x = document.getElementById('dp');
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
		//var x = document.getElementById('dp');
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
		document.getElementById('myForm').style.opacity = 1;
	}
	
	movedp();
	movename();