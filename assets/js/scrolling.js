function goTo(x){
	var z = 16800;
	TweenLite.to(window, 2, {scrollTo:{y:(z/9)*x}, ease:Power2.easeOut});
}
