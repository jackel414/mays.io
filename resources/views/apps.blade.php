<html>
    <head>
        <title>mays | io</title>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- <link rel="stylesheet" href="stylesheets/bootstrap.css"> -->
        <link rel="stylesheet" href="css/app.css">

        <script src="https://use.fontawesome.com/841cc2785d.js"></script>
    </head>
    <body>
        <div id="header" class="col-sm-12 text-center">
            <div class="nav collapse">
                <li class="transition" title="home"><a href="#">HOME</a></li>
                <li class="transition" title="projects"><a href="#">PROJECTS</a></li>
                <li class="transition" title="contact"><a href="#">CONTACT</a></li>
            </div>
        </div>

        <div id="home" class="col-sm-12 text-center content-section show">
                <h1 id="title"><a href="/">mays | io</a></h1>
                <p id="sub-title">PROJECTS</p>
                <div id="app">
                    <div class="icon-row row">
                        <div class="icon-container">
                            <div class="project-logo"><a href="http://url-inspector.mays.io"><img src="/images/url_inspector_logo.png"></a></div>
                        </div>
                    </div>
                </div>

                <div id="projects" class="row collapse">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-3">
                                <h2>Section coming soon.</h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div id="projects" class="col-sm-12 text-center content-section collapse">
            <h2>Projects</h2>
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1">
                    <div class="project-panel col-sm-4 col-sm-offset-1">
                        <h3>Freelance Hero</h3>
                        <div class="individual-project" title="http://freelance-hero.com"></div>
                    </div>
                    <div class="project-panel col-sm-4 col-sm-offset-2">
                        <h3>The Bibliophile's Fancy</h3>
                        <div class="individual-project" title="#"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1">
                    <div class="project-panel col-sm-4 col-sm-offset-1">
                        <h3>URL Inspector</h3>
                        <div class="individual-project" title="http://url-inspector.mays.io"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <script type="text/javascript" src="scripts/jquery-3.1.0.min.js"></script> -->
        <!-- <script type="text/javascript" src="scripts/jquery-ui-1.10.4.custom.min.js"></script> -->
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>