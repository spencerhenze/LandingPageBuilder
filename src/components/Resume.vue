<template>
    <div class="resume">
        <v-layout row wrap>
            <v-flex xs12 md3 offset-md1 class="brief-column">
                <h1 class="text-xs-center brief-heading">Spencer Henze</h1>
                <img src="http://res.cloudinary.com/dvh7zccln/image/upload/v1500728010/DSC_5330-Cropped_c8nvge.jpg" class="img-circle img-responsive profile-image"
                    alt="Picture of Spencer Henze">
                <h3 class="brief-heading">Contact</h3>
                <ul class="no-bullets">
                    <li>
                        <i class="fa fa-phone" aria-hidden="true"></i>&nbsp&nbsp <a href="tel:2088715839">(208) 871-5839</a>
                    </li>
                    <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp&nbsp<a href="mailto:spencerhenze@gmail.com">spencerhenze@gmail.com</a>
                    </li>
                    <li>
                        <i class="fa fa-github" aria-hidden="true"></i>&nbsp&nbsp <a href="https://github.com/spencerhenze"
                            target="_blank">/spencerhenze</a>
                    </li>
                    <li></li>
                </ul>
                <hr>
            </v-flex>

            <!--main content column  -->
            <v-flex xs12 md7>

                <h2 class="resume-section-heading">Skills</h2>
                <div class="row center-columns-in-row">
                    <!--IT Skills  -->
                    <div class="col-xs-12 col-sm-4 col-md-3">
                        <h3>
                            <i class="fa fa-database" aria-hidden="true"></i>&nbsp IT
                        </h3>
                        <ul>
                            <li>Systems Architecture</li>
                            <li>Enterprise Networks</li>
                            <li>SQL and Relational Database</li>
                        </ul>
                    </div>

                    <!--Front-end Skills  -->
                    <div id="front-end-skills" class="col-xs-12 col-sm-4 col-md-3">
                        <h3>
                            <i class="fa fa-code" aria-hidden="true"></i>&nbsp Front-End Web
                        </h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Vue.js</li>
                            <li>AngularJS 1.x</li>
                        </ul>
                    </div>

                    <!--Back-end Skills  -->
                    <div class="col-xs-12 col-sm-4 col-md-3">
                        <h3>
                            <i class="fa fa-cogs" aria-hidden="true"></i>&nbsp Back-End Web
                        </h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>C#</li>
                            <li>ASP.NET Core</li>
                        </ul>
                    </div>

                </div>

                <hr>

                <div class="education-wrapper">
                    <h2 class="resume-section-heading">Education</h2>
                    <!--Education item 1  -->
                    <h3>
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp Boise CodeWorks
                    </h3>
                    <ul class="no-bullets">
                        <li>Immersive Full Stack</li>
                        <li>Summer 2017</li>
                    </ul>
                    <!--education item 2  -->
                    <h3>
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp Boise State University
                    </h3>
                    <ul class="no-bullets">
                        <li>2013 - 2017</li>
                        <li>Bachelor of Business Administration in IT Management</li>
                        <li>3.5 GPA</li>
                    </ul>
                    <!--education item 3  -->
                    <h3>
                        <i class="fa fa-certificate" aria-hidden="true"></i>&nbsp Boise State University
                    </h3>
                    <ul class="no-bullets">
                        <li>2013 - 2017</li>
                        <li>Intermediate Spanish Certificate</li>
                        <li>4.0 GPA</li>
                    </ul>

                </div>

                <hr>

                <div class="work-history-wrapper">
                    <h2 class="resume-section-heading">Work History</h2>
                    <!--work item 1  -->
                    <h3>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp IT Consultant
                    </h3>
                    <div class="row work-detail-row">
                        <div class="col-xs-12 col-sm-4">
                            <ul class="no-bullets">
                                <li>Henze Chiropractic & Wellness</li>
                                <li>April 2015 - Present</li>
                                <li>Boise, Idaho</li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8">
                            <ul>
                                <li>Set up and configure computers and software</li>
                                <li>Manage password security for staff</li>
                                <li>Created new clinic <a href="https://chiropractic-works-boise.com" target="_blak">website</a></li>
                                <li>Produced multi-media content displayed on clinic-wide monitors</li>
                            </ul>
                        </div>
                    </div>
                    <!--Work item 2  -->
                    <h3>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp Owner / Photographer
                    </h3>
                    <div class="row work-detail-row">
                        <div class="col-xs-12 col-sm-4">
                            <ul class="no-bullets">
                                <li>Spencer Henze Photography</li>
                                <li>August 2013 - Present</li>
                                <li>Boise, Idaho</li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8">
                            <ul>
                                <li>Plan, produce, and deliver professional photographs and videos</li>
                                <li>Developed business plan, pricing, and package offerings</li>
                                <li>Manage multiple projects at one time</li>
                                <li>Coordinate projects from concept to completion</li>
                            </ul>
                        </div>
                    </div>
                    <!--Work item 3  -->
                    <h3>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp Maintenance Specialist
                    </h3>
                    <div class="row work-detail-row">
                        <div class="col-xs-12 col-sm-4">
                            <ul class="no-bullets">
                                <li>Henze Chiropractic & Wellness</li>
                                <li>April 2008 - Present</li>
                                <li>Boise, Idaho</li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8">
                            <ul>
                                <li>Provide commercial interior and exterior cleaning and maintenance services</li>
                                <li>Developed strong work ethic working graveyard hours</li>
                            </ul>
                        </div>
                    </div>

                    <!--Work item 4  -->
                    <h3>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp Outside Sales Representitive
                    </h3>
                    <div class="row work-detail-row">
                        <div class="col-xs-12 col-sm-4">
                            <ul class="no-bullets">
                                <li>Vivint Inc.</li>
                                <li>May 2013 - August 2013</li>
                                <li>Tyler, Texas</li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8">
                            <ul>
                                <li>Sold home security and home automation systems door-to-door</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'resume',
        data() {
            return {
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* h1,
    h2 {
        font-weight: normal;
    }
 */
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .brief-column {
        margin-right: 15px;
    }

    .profile-image {
        max-height: 350px;
        max-width: auto;
        margin-left: auto;
        margin-right: auto;
    }

    .brief-heading {
        text-align: center;
        margin-bottom: 2rem;
    }

    .resume-section-heading {
        text-align: center;
        font-weight: bold;
        letter-spacing: 4px;
    }

    .center-columns-in-row {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .no-bullets {
        list-style: none;
    }
</style>