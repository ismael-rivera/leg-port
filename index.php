<!DOCTYPE html>
<html class="full" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Crowdorchid Studio: Design and Development for Mobile Web</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/css/libs/bootstrap/bootstrap.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="assets/css/libs/bootstrap/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/css/libs/bootstrap/starter-template.css" rel="stylesheet">



     <!-- Custom styles for the website -->
<!-- <link rel="stylesheet" href="assets/css/demos/normalize.css" type="text/css">
<link rel="stylesheet" href="assets/css/demos/style.css" type="text/css">
<link rel="stylesheet" href="assets/css/demos/examples.css" type="text/css"> -->
    <link href="assets/css/site.css" rel="stylesheet">
    <link href="assets/css/sections.css" rel="stylesheet">
    <link href="assets/css/forms.css" rel="stylesheet">
    <link href="assets/css/footer.css" rel="stylesheet">
   
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script type="text/javascript" src="assets/js/libs/jquery-1.12.0.min.js"></script>
    <script type="text/javascript" src="assets/js/libs/greensock/TweenMax.min.js"></script>
    <script type="text/javascript" src="assets/js/libs/scrollmagic/ScrollMagic.js"></script>
    <script type="text/javascript" src="assets/js/libs/scrollmagic/plugins/animation.gsap.min.js"></script>
    <script type="text/javascript" src="assets/js/libs/scrollmagic/plugins/debug.addIndicators.js"></script>
    <script type="text/javascript" src="assets/js/libs/greensock/plugins/ScrollToPlugin.min.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

<!--     <div class="container-fluid" id="site_wrapper_3" data-stellar-background-ratio="0.1">   -->
 <!--      <div class="row">
          <div class="container-fluid" id="site_wrapper_2">  
      <div class="row">
          <div class="container-fluid" id="bg1" data-stellar-background-ratio="0.5">  
            <div class="row"></div>
          </div>  --> 
    <nav class="nav navbar-static-top navbar">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
              <img alt="Crowdorchid Studio" src="...">
          </a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>    
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a class="fa fa-home" href="#aboutme">About Me</a></li>
            <li class="dropdown">
                  <a class="fa fa-info dropdown-toggle" data-toggle="dropdown" href="#">
                  Portfolio<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="fa fa-info" href="#projects">Client Work</a></li>
                  <li><a class="fa fa-info" href="#demos">Disciplines</a></li>
                  <li><a class="fa fa-info" href="#projects">Projects</a></li>
                </ul>
            </li>
            <li><a class="fa fa-info" href="#demos">Demos</a></li>
            <li><a class="fa fa-info" href="#projects">Projects</a></li>
            <li><a class="fa fa-folder" href="#mystory">My Story</a></li>
            <li><a class="fa fa-file-text" href="#cvresume">CV/Resume</a></li>
            <li><a class="fa fa-info" href="#contsctme">Contact Me</a></li>
            <li><a class="fa fa-info" href="#blog">Blog</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!-- /.container -->
    </nav><!-- /nav -->
<div id="scrollto-map">
    <span onclick="goTo(0)">0</span>
    <span onclick="goTo(1)">1</span>
    <span onclick="goTo(2)">2</span>
    <span onclick="goTo(3)">3</span>
    <span onclick="goTo(4)">4</span>
    <span onclick="goTo(5)">5</span>
    <span onclick="goTo(6)">6</span>
    <span onclick="goTo(7)">7</span>
    <span onclick="goTo(8)">8</span>
    <span onclick="goTo(9)">9</span>
</div>
    <div class="container-fluid" id="gamezone">
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div class="container-fluid">
              <section class="row section" id="section-0">
                <div class="hidden-xs col-sm-5 col-md-5 tracer"></div>
                <div class="col-sm-2 col-md-2 tracer"><div id="progress">section-0: debugger</div></div>
                <div class="hidden-xs col-sm-5 col-md-5 tracer"></div>
              </section>
              <section class="row section" id="section-1">
                <div class="col-sm-12 col-md-12 mount-tops tracer">
                  <div id="hero" class="frame0"><p>section-2: hero</p></div>
                </div>
              </section>
              <section class="row section" id="section-2">
                <div class="col-sm-6 col-md-3 tracer"><h3>Mountain Tops section-2</h3></div>
                <div class="hidden-xs col-md-6 tracer">Mountain Tops section-2</div>
                <div class="col-sm-6 col-md-3 tracer"><h3>Mountain Tops section-2</h3></div>
              </section>
              <section class="row section" id="section-3">
                <div class="hidden-xs col-md-4 tracer"><h3>section-3</h3></div>
                <div class="hidden-xs col-md-4 tracer">section-3</div>
                <div class="hidden-xs col-md-4 tracer"><h3>section-3</h3></div>
              </section>
              <section class="row section" id="section-4">
                <div class="col-sm-6 col-md-4 tracer"><h3>section-4</h3></div>
                <div class="hidden-xs col-md-4 tracer">section-4</div>
                <div class="col-sm-6 col-md-4 tracer"><h3>section-4</h3></div>
              </section>
              <section class="row section" id="section-5">
                <div class="col-sm-6 col-md-5 tracer"><h3>section-5</h3></div>
                <div class="hidden-xs col-md-2 tracer">section-5</div>
                <div class="col-sm-6 col-md-5 tracer"><h3>section-5</h3></div>
              </section>
              <section class="row section" id="section-6">
                <div class="col-sm-6 col-md-5 tracer"><h3>section-6</h3></div>
                <div class="hidden-xs col-md-2 tracer">section-6</div>
                <div class="col-sm-6 col-md-5 tracer"><h3>section-6</h3></div>
              </section>
              <section class="row section" id="section-7">
                <div class="col-sm-6 col-md-5 tracer"><h3>section-7</h3></div>
                <div class="hidden-xs col-md-2 tracer">section-7</div>
                <div class="col-sm-6 col-md-5 tracer"><h3>section-7</h3></div>
              </section>
              <section class="row section" id="section-8">
                <div class="col-sm-6 col-md-5 tracer"><h3>section-8</h3></div>
                <div class="hidden-xs col-md-2 tracer">section-8</div>
                <div class="col-sm-6 col-md-5 tracer"><h3>section-8</h3></div>
              </section>
          </div>  
        </div>
      </div>
    </div>

    


    

   

   <!-- </div>
 </div>  -->
 <!--  </div> --><!-- site /.row -->
<!-- </div> --><!-- /#site_wrapper -->
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script type="text/javascript" src="assets/js/scrolling.js"></script>
    <script type="text/javascript" src="assets/js/hero.js"></script> 
    <script src="assets/js/compiled/compiled.js"></script>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!-- <script src="assets/js/libs/bootstrap/ie10-viewport-bug-workaround.js"></script>-->

    <script src="//localhost:35729/livereload.js"></script>
  </body>
</html>
