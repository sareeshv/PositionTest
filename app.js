/**
 * Created by sareesh on 9/21/15.
 * This scroll event added to show how we can change the CSS on the fly to give some UI effect
 * The logo or any image can be placed according to the requirement when the user scrolls
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
