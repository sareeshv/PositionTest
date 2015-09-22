/**
 * Created by sareesh on 9/21/15.
 */
(function(){

	var onScrollfn = function(e){
		console.log('scrolling' + e);
		var scroll = document.body.scrollTop;
		if(scroll > 2060) {
			document.querySelector('.circle').style.right="-100px";
		}
		else{
			document.querySelector('.circle').style.right="-0px";
		}
	};
	window.addEventListener('scroll', onScrollfn, false );
})();