<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">
<!-- <script src="assets/js/libs/jquery-1.12.0.min.js"></script>	 -->
<style>

  * {
    margin:0;
    padding:0;
  }

  body {
    font: 100% / 1.5 Arial;
    background: url('assets/img/bg_02.png') repeat;
  }

  .parallax_wrapper {
    font-size: 200%;
  }

   /* add some padding to force scrollbars */
  .parallax__layer {
    padding: 300vh 0;
  }

   /* centre the content in the parallax layers */
  .title {
    position: absolute;
    left: 0%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
.parallax_wrapper {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.parallax__layer--front {
  transform: translateZ(0);
  z-index:10;
  left: 0px;
}
.parallax__layer--back {
  background: url('assets/img/bg_02.png');
  transform: translateZ(-2px);
  z-index:3;
  top: 275vh;

}
.paraleft {
 background: url('assets/img/fg_01L.png');
 background-repeat: no-repeat;
 background-position: center; 
float: left;
z-index:10;
}

.pararight {
  background: url('assets/img/fg_01R.png');
  background-repeat: no-repeat;
  background-position: center;
  float: right;
  z-index:12;
}

</style>
</head>
<body>
<div class="parallax_wrapper">
  <div class="parallax__layer parallax__layer--front paraleft">
    <!-- This is the foreground -->
  </div>
  <div class="parallax__layer parallax__layer--front pararight">
    <!-- This is the background -->
  </div>
  <div class="parallax__layer parallax__layer--back">
    <!-- This is the background -->
  </div>
  
</div>	
</body>

</html>