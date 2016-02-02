<!DOCTYPE html>
<html lang="">
<head>
<script src="assets/js/libs/jquery1.12.0.min.js"></script>	
<style>

  * {
    margin:0;
    padding:0;
  }

  body {
    font: 100% / 1.5 Arial;
  }

  .parallax {
    font-size: 200%;
  }

   /* add some padding to force scrollbars */
  .parallax__layer {
    padding: 100vh 0;
  }

   /* centre the content in the parallax layers */
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
.parallax {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--base {
  transform: translateZ(0);
}
.parallax__layer--back {
  transform: translateZ(-1px);
}
</style>
</head>
<body>
<div class="parallax">
  <div class="parallax__layer parallax__layer--back">
    This is the background
  </div>
  <div class="parallax__layer parallax__layer--base">
    This is the foreground
  </div>
</div>	
</body>

</html>