// define images
						var images = [
							"../img/dive_00.png",
							"../img/dive_01.png",
							"../img/dive_02.png",
							"../img/dive_03.png"
						];

						// TweenMax can tween any property of any object. We use this object to cycle through the array
						var obj = {curImg: 0};

						// create tween
						var tween = TweenMax.to(obj, 0.5,
							{
								curImg: images.length - 1,	// animate propery curImg to number of images
								roundProps: "curImg",				// only integers so it can be used as an array index
								repeat: 3,									// repeat 3 times
								immediateRender: true,			// load first image automatically
								ease: Linear.easeNone,			// show every image the same ammount of time
								onUpdate: function () {
								  $("#myimg").attr("src", images[obj.curImg]); // set the image source
								}
							}
						);

						// init controller
						var controller = new ScrollMagic.Controller();

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
										.setTween(tween)
										.addIndicators() // add indicators (requires plugin)
										.addTo(controller);

						// handle form change
						$("form.move input[name=duration]:radio").change(function () {
							scene.duration($(this).val());
						});