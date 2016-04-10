

// Testing Module 0 - Vanilla Jquery

		 

// Testing Module 1 - Set Pin

// init controller
// init controller
						// var controller = new ScrollMagic.Controller({loglevel: 3});

						// // build scene
						// var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 15450, offset: 230})
						// 				.setPin("#pin1")
						// 				.addTo(controller)
						// 				.addIndicators() // add indicators (requires plugin)
						// 				.on("update", function (e) {
						// 					$("#scrollDirection").text(e.target.controller().info("scrollDirection"));
						// 				})
						// 				.on("enter leave", function (e) {
						// 					$("#state").text(e.type == "enter" ? "inside" : "outside");
						// 				})
						// 				.on("start end", function (e) {
						// 					$("#lastHit").text(e.type == "start" ? "top" : "bottom");
						// 				})
						// 				.on("progress", function (e) {
						// 					$("#progress").text(e.progress.toFixed(3));
						// 				});


// Testin Module 2 - TriggerHook and Friends


					// $(function () { // wait for document ready
					// 		// init controller
					// 		var controller = new ScrollMagic.Controller();

					// 		// build tween
					// 		var tween = TweenMax.to("#target", 1, {rotation: 360, ease: Linear.easeNone});

					// 		// build scene
					// 		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
					// 						.setTween(tween)
					// 						.setPin("#target", {pushFollowers: false})
					// 						.addIndicators() // add indicators (requires plugin)
					// 						.addTo(controller);
							
					// 		// init options
					// 		$("input#duration").val(scene.duration());
					// 		$("input#offset").val(scene.offset());
					// 		$("input#triggerElement").val("#" + scene.triggerElement().getAttribute("id"));
					// 		$("input#triggerHook").val(scene.triggerHook());
					// 		$("input#reverse").prop("checked", scene.reverse());
					// 		$("input#tweenChanges").prop("checked", scene.tweenChanges());

					// 		$("div.slider+input").change(); // trigger change to init sliders.

					// 		// form actions
					// 		// update on change
					// 		$("form #options input:not(#triggerElement)").on("change", function (e) {
					// 			var
					// 				val = $(this).is("[type=checkbox]") ? $(this).prop("checked") : $(this).val(),
					// 				property = $(this).attr("id");
					// 			scene[property](val);
					// 		});
					// 		// actions
					// 		$("form #actions input[type=checkbox]").on("change", function (e) {
					// 			var
					// 				active = $(this).prop("checked"),
					// 				type = $(this).attr("id");
					// 			if (type == "tween") {
					// 				if (active) {
					// 					scene.setTween(tween);
					// 				} else {
					// 					scene.removeTween(true);
					// 				}
					// 			} else if (type == "pin") {
					// 				if (active) {
					// 					scene.setPin("#target", {pushFollowers: false});
					// 				} else {
					// 					scene.removePin(true);
					// 				}
					// 			} else if (type == "enabled") {
					// 				scene.enabled(active);
					// 			}
					// 		});
					// 		// update triggerElement
					// 		$("form #options button[name=triggerElement]").on("click", function (e) {
					// 			e.preventDefault();
					// 			var
					// 				selector = $.trim($("input#triggerElement").val());
					// 			if (selector === "") {
					// 				scene.triggerElement(null);
					// 			} else if ($(selector).length > 0) {
					// 				scene.triggerElement(selector);
					// 			} else {
					// 				alert("No element was found using the selector \"" + selector + "\".");
					// 				$("input#triggerElement").val("");
					// 				scene.triggerElement(null);
					// 			}
					// 		});
					// 		// triggerHook Buttons
					// 		$("form #options button[name=triggerHook]").on("click", function (e) {
					// 			e.preventDefault();
					// 			$("input#triggerHook")
					// 				.val($(this).val())
					// 				.change();

					// 		});
					// 	});

// Testing Module 3 - Animation


						// var images = [
						// 	"assets/img/example_imagesequence_01.png",
						// 	"assets/img/example_imagesequence_02.png",
						// 	"assets/img/example_imagesequence_03.png",
						// 	"assets/img/example_imagesequence_04.png",
						// 	"assets/img/example_imagesequence_05.png",
						// 	"assets/img/example_imagesequence_06.png",
						// 	"assets/img/example_imagesequence_07.png"
						// ];

						// // TweenMax can tween any property of any object. We use this object to cycle through the array
						// var obj = {curImg: 0};

						// // create tween
						// var tween = TweenMax.to(obj, 0.5,
						// 	{
						// 		curImg: images.length - 1,	// animate propery curImg to number of images
						// 		roundProps: "curImg",				// only integers so it can be used as an array index
						// 		repeat: 3,									// repeat 3 times
						// 		immediateRender: true,			// load first image automatically
						// 		ease: Linear.easeNone,			// show every image the same ammount of time
						// 		onUpdate: function () {
						// 		  $("#myimg").attr("src", images[obj.curImg]); // set the image source
						// 		}
						// 	}
						// );

						// // init controller
						// var controller = new ScrollMagic.Controller();

						// // build scene
						// var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 15000, offset: 150})
						// 				.setTween(tween)
						// 				.setPin("#imagesequence")
						// 				.addIndicators() // add indicators (requires plugin)
						// 				.addTo(controller);

						// // handle form change
						// $("form.move input[name=duration]:radio").change(function () {
						// 	scene.duration($(this).val());
						// });


// Testing Module 4 - Cascading Pins
var slamdown = false;

$(function () { // wait for document ready

							var inout = "outside";
							// init controller
							var controller = new ScrollMagic.Controller();
							

							console.log(inout);
							//$(window).scroll(function(){
							 	if ($(this).scrollTop() < 2520) {
							         // apply effects and animations
							 		$("#pin").addClass("frame0");
							     }
							     if ($(this).scrollTop() > 15890) {
							         // apply effects and animations
							 		$("#pin").removeClass("frame0").addClass("frame3");
							     } 
							// });

							
							// show pin state
							function updateBox1 (e) {
								if (e.type == "enter") {
									inout = "inside";
									//console.log(inout);
								} else {
									inout = "outside";
									//console.log(inout);
								}
							}
							// build scenes
							//Trigger1
							var scene1 = new ScrollMagic.Scene({triggerHook: 0.18, triggerElement: "#trigger", duration: 2520, offset: 0});
								scene1.setPin("#pin");
								scene1.setClassToggle("#pin", "frame0");
								scene1.on("enter leave", updateBox1);
								scene1.addIndicators(); // add indicators (requires plugin)
								//scene1.on("enter", function (e) {
								 	//$("#pin").removeClass("frame0");
								 	//console.log(slamdown);
								// 	if(controller.info("scrollDirection") === "REVERSE"){
								// 		$("#pin").addClass("frame2up")
								// 				 .removeClass("frame2");
								// 	};
								// 	if(controller.info("scrollDirection") === "FORWARD"){
								// 		$("#pin").addClass("frame2")
								// 				 .removeClass("frame2up");
								// 	};
								//})
								// .on("leave", function (e) {
						 	// 		$("#pin").addClass("frame3")
						 	// 				 .removeClass("frame2");
						 	// 		slamdown = true;
						 	// 		console.log(0+1);
						 	// 		//console.log(slamdown);

								// })
								scene1.addTo(controller);
							// build scenes
							//Trigger 2
							
							function updateBox2 (e) {
								if (e.type == "enter") {
									inout = "inside";
									$("#pin").removeClass("frame0");
									console.log(inout + " of scene 2");
								} else {
									inout = "outside";
									console.log(inout);
								}
							}
							var scene2 = new ScrollMagic.Scene({triggerHook: 0.3, triggerElement: "#trigger", duration: 5670, offset: 2530});
								scene2.setPin("#pin");
								scene2.setClassToggle("#pin", "frame1");
								scene2.on("enter leave", updateBox2);
								

								//scene2.on("enter", function (e){
									//this.removeClassToggle(true);
								// 	}
						        //});
								scene2.addIndicators(); // add indicators (requires plugin)
								//.on("enter", function (e){
								// 	if(slamdown === false){
								// 		$("#pin").addClass("frame1")
								// 				 .removeClass("frame0");
								// 	}
								// })
								//scene2.on("enter", function (e) {
								 	//$("#pin").removeClass("frame0");
								 	//console.log(slamdown);
								// 	if(controller.info("scrollDirection") === "REVERSE"){
								// 		$("#pin").addClass("frame2up")
								// 				 .removeClass("frame2");
								// 	};
								// 	if(controller.info("scrollDirection") === "FORWARD"){
								// 		$("#pin").addClass("frame2")
								// 				 .removeClass("frame2up");
								// 	};
								//})
								// .on("leave", function (e) {
						 	// 		$("#pin").addClass("frame3")
						 	// 				 .removeClass("frame2");
						 	// 		slamdown = true;
						 	// 		console.log(0+1);
						 	// 		//console.log(slamdown);

								// })
								scene2.addTo(controller);
							//Trigger 3
							function updateBox3 (e) {
								if (e.type == "enter") {
									inout = "inside";
									$("#pin").removeClass("frame0");
									console.log(inout + " of scene 3");
								} else {
									inout = "outside";
									console.log(inout);
								}
							}

							var scene3 = new ScrollMagic.Scene({triggerHook: 0.5, triggerElement: "#trigger", duration: 7880, offset: 8210});
								scene3.setPin("#pin");
								scene3.setClassToggle("#pin", "frame2");
								scene3.on("enter leave", updateBox3);
								scene3.addIndicators(); // add indicators (requires plugin)
								scene3.addTo(controller);
							//Trigger 4
							// function updateBox4(e){
							// 	if(e.type == "leave"){
							// 		$("#pin").addClass("frame3");
							// 	}
							// }
							var scene4 = new ScrollMagic.Scene({triggerHook: 0.7, triggerElement: "#trigger", duration: 100, offset: 16190});
							 	scene4.setPin("#pin");
							 	scene4.setClassToggle("#pin", "frame3");
							 	//scene4.on("enter leave", updateBox);
							 	scene4.addIndicators(); // add indicators (requires plugin)
							 	scene4.addTo(controller);
								// .on("enter", function (e){
								// 	console.log("enter");
								// 	if(slamdown === true){
								// 		$("#pin").addClass("frame2up")
								// 				 .removeClass("frame3");
								// 	}
								// })
								// .on("update", function (e) {
								// 	//console.log(slamdown);
								// 	if(controller.info("scrollDirection") === "REVERSE"){
								// 		$("#pin").addClass("frame2up")
								// 				 .removeClass("frame2");
								// 	};
								// 	if(controller.info("scrollDirection") === "FORWARD"){
								// 		$("#pin").addClass("frame2")
								// 				 .removeClass("frame2up");
								// 	};
								// })
						});


					    