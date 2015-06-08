// JavaScript Document

/* window.onresize = function() { */

	if (window.innerWidth < 981) {
		
		document.write('<div id="line"><span class="specification">' + window.innerWidth + 'px</span></div>');
		
	} else {
			
		document.write('<div id="line"><span class="specification">980px</span></div>');

	}
		
	document.write('<ul id="columns">');
	
	if (window.innerWidth < 401) {
		
		for (i = 1; i < 3; i++) {
			
			document.write('<li class="column">' + i +'</li>'); // create two columns
				
		}
			
	} else if (window.innerWidth < 601) {
		
		for (i = 1; i < 4; i++) {
			
			document.write('<li class="column">' + i +'</li>'); // create three columns
				
		}
			
	} else if (window.innerWidth < 801) {
		
		for (i = 1; i < 5; i++) {
			
			document.write('<li class="column">' + i +'</li>'); // create four columns
			
		}
				
	} else {
		
		for (i = 1; i < 13; i++) {
			
			document.write('<li class="column">' + i +'</li>'); // create twelve columns
				
		}
		
	}
		
	document.write('</ul>');
	
/* }; */