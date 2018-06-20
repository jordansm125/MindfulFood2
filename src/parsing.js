d3.csv("./images3.csv",function (data) {
   	var URL = data.map(function(d) {return d.imageUrl});
   	document.write('<img src="' + URL[0] + '" width = 350 height = 300>');
   	//console.log(URL);
   		/*var i;
   		for (i = 0; i < URL.length; i++){
			document.write('<img src="' + URL[i] + '"/>');
			}*/
		});


//document.getElementById("imageLocation").innerHTML = (document.write('<img src="' + URL[0] + '" width = 350 height = 300>'));
document.getElementById("imageLocation").innerHTML = ('<img src="' + URL[0] + '">');
