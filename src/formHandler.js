
document.getElementById('surveyFrame').onload = function() {
	if (countLoadTime == 0) {
		var prefilledUrl = getPrefilledUrl();
		document.getElementById('surveyFrame').src = prefilledUrl;
		highlightNext();
		countLoadTime++;
	} else if (loadFlag == 0){
		loadFlag = 1;
	} else {
		var prefilledUrl = getPrefilledUrl();
		highlightNext();
		document.getElementById('surveyFrame').src = prefilledUrl;
		loadFlag = 0;
	}

}


var loadFlag = 0;
var countLoadTime = 0;

