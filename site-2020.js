$('.open').click(function() {
	$(this).toggleClass('active');
	if($(this).hasClass('active')) {
		$('.info').removeClass('active');
		$('#' + this.dataset.target).addClass('active');
	} else {
		$('#' + this.dataset.target).removeClass('active');
	}
});

var normal  = document.getElementById('sidebar-left'),
    reverse = document.getElementById('sidebar-right'),
    nTimer, rTimer, nScroll, rScroll;

normal.addEventListener('scroll', function() {
    clearTimeout(nTimer);
    nTimer = setTimeout(function() {
        nScroll = false;
    }, 100);
    if(!rScroll) {
        reverse.scrollTop = reverse.scrollHeight - reverse.offsetHeight - (reverse.scrollHeight - reverse.offsetHeight) * normal.scrollTop / (normal.scrollHeight - normal.offsetHeight);
        if(!nScroll) nScroll = true;
    }
}, false);

reverse.scrollTop = reverse.scrollHeight - reverse.offsetHeight;

reverse.addEventListener('scroll', function() {
    clearTimeout(rTimer);
    rTimer = setTimeout(function() {
        rScroll = false;
    }, 100);
    if(!nScroll) {
        normal.scrollTop = normal.scrollHeight - normal.offsetHeight - (normal.scrollHeight - normal.offsetHeight) * reverse.scrollTop / (reverse.scrollHeight - reverse.offsetHeight);
        if(!rScroll) rScroll = true;
    }
}, false);


// SON INA
// 1
  var hoverArea = document.getElementById('hoverElement');
    var audio = document.getElementById('audio');
    hoverArea.onmouseover= function(){
        audio.play();
    }
    hoverArea.onmouseout= function(){
        audio.pause();
    }
//2
    var hoverArea = document.getElementById('hoverElement2');
    var audio = document.getElementById('audio2');
    hoverArea.onmouseover= function(){
        audio.play();
    }
    hoverArea.onmouseout= function(){
        audio.pause();
    }  
//3
    var hoverArea = document.getElementById('hoverElement3');
    var audio = document.getElementById('audio');
    hoverArea.onmouseover= function(){
        audio.play();
    }
    hoverArea.onmouseout= function(){
        audio.pause();
    }

