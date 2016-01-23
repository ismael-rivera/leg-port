var slamdown = false;
var inout = "outside";

$(function () { // wait for document ready

							
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
							var scene1 = new ScrollMagic.Scene({triggerHook: 0.3, triggerElement: "#trigger", duration: 2520, offset: 0});
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

							var scene3 = new ScrollMagic.Scene({triggerHook: 0.3, triggerElement: "#trigger", duration: 7880, offset: 8210});
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
							var scene4 = new ScrollMagic.Scene({triggerHook: 0.3, triggerElement: "#trigger", duration: 200, offset: 16190});
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


					    