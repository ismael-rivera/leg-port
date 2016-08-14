function goTo(x){
	var z = 17990;
	TweenLite.to(window, 2, {scrollTo:{y:(z/9)*x}, ease:Power2.easeOut});
}
