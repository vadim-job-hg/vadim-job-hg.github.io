Vue.component('app-nav', {
    template: `<aside id="colorlib-aside" role="complementary" class="border js-fullheight">
        <h1 id="colorlib-logo"><a href="index.html"><span>Wo</span><span>rk</span></a></h1>
        <nav id="colorlib-main-menu" role="navigation">
            <ul>
               <!-- class="colorlib-active"-->
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/work">Work</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>

        <div class="colorlib-footer">
            <p><small>Copyright &copy;{{year}} All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</span> <span>Demo Images: <a href="http://nothingtochance.co/" target="_blank">nothingtochance.co</a></span></small></p>
<ul>
    <li><a href="#"><i class="icon-facebook2"></i></a></li>
    <li><a href="#"><i class="icon-twitter2"></i></a></li>
    <li><a href="#"><i class="icon-instagram"></i></a></li>
    <li><a href="#"><i class="icon-linkedin2"></i></a></li>
</ul>
</div>
</aside>`,
    data: function () {
        return {
            year: new Date().getFullYear()
        }
    }
});

Vue.component('app-side', {
    template: '<div><a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a><app-nav></app-nav></div>'
});

Vue.component('app-work', {
    template: `<div class="colorlib-work">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-md-pull-3">
					<span class="heading-meta">Portfolio</span>
					<h2 class="colorlib-heading animate-box" data-animate-effect="fadeInLeft">My Work</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="project" style="background-image: url(images/work-1.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work-single.html">Work 01</a></h3>
								<span>Branding, Ilustration</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="project" style="background-image: url(images/work-2.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work-single.html">Work 02</a></h3>
								<span>Logo, Web, Branding</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="project" style="background-image: url(images/work-3.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work-single.html">Work 03</a></h3>
								<span>Illustration, Logo</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="project" style="background-image: url(images/work-4.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work-single.html">Work 04</a></h3>
								<span>Web, Logo, Branding</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="project" style="background-image: url(images/work-5.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work-single.html">Work 05</a></h3>
								<span>Illustration, Logo</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="project" style="background-image: url(images/work-6.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work-single.html">Work 06</a></h3>
								<span>Web, Logo, Branding</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="project" style="background-image: url(images/work-7.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work-single.html">Work 07</a></h3>
								<span>Illustration, Logo</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="project" style="background-image: url(images/work-8.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work-single.html">Work 08</a></h3>
								<span>Web, Logo, Branding</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
					<ul class="pagination">
						<li class="disabled"><a href="#">&laquo;</a></li>
						<li class="active"><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">&raquo;</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>`
});

Vue.component('app-about', {
    template: `<div class="colorlib-about">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6">
					<div class="about-img animate-box" data-animate-effect="fadeInLeft" style="background-image: url(images/img_bg_2.jpg);">
						<div class="about-img-2 animate-box" data-animate-effect="fadeInRight" style="background-image: url(/images/profile/myphoto.jpg);"></div>
					</div>
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<div class="about-desc">
						<span class="heading-meta">Welcome &amp; Introduce</span>
						<h3>Vadym Kuznetsov</h3>
						<p>I am a developer of web platforms in PHP and Python languages.</p>
					</div>
					<div class="fancy-collapse-panel">
						<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
							<div class="panel panel-default">
								<div class="panel-heading" role="tab" id="headingOne">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Why choose me?
										</a>
									</h4>
								</div>
								<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									 <div class="panel-body">
										<div class="row">
											<div class="col-md-6">
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
											</div>
											<div class="col-md-6">
												<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
											</div>
										</div>
									 </div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading" role="tab" id="headingTwo">
									<h4 class="panel-title">
										<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What I do?
										</a>
									</h4>
								</div>
								<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
									<div class="panel-body">
										<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
											<ul>
												<li>Separated they live in Bookmarksgrove right</li>
												<li>Separated they live in Bookmarksgrove right</li>
											</ul>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading" role="tab" id="headingThree">
									<h4 class="panel-title">
										<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">My Specialties
										</a>
									</h4>
								</div>
								<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
									<div class="panel-body">
										<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`
});

Vue.component('app-services', {
    template: `<div class="colorlib-services">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-md-pull-3">
					<span class="heading-meta">What I do?</span>
					<h2 class="colorlib-heading animate-box" data-animate-effect="fadeInLeft">Here are some of my expertise</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-tag"></i>
						</div>
						<div class="colorlib-text">
							<h3>Branding</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>

					<div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-pen2"></i>
						</div>
						<div class="colorlib-text">
							<h3>Web Design</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>

					<div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-search3"></i>
						</div>
						<div class="colorlib-text">
							<h3>Search engine optimization</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-paperplane"></i>
						</div>
						<div class="colorlib-text">
							<h3>Web Development</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>

					<div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-device-desktop"></i>
						</div>
						<div class="colorlib-text">
							<h3>User Interface</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>

					<div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-help"></i>
						</div>
						<div class="colorlib-text">
							<h3>Help &amp; Support</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
`
});

Vue.component('app-blog', {
    template: `<div class="colorlib-blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3">
                    <span class="heading-meta">Read</span>
                    <h2 class="colorlib-heading animate-box" data-animate-effect="fadeInLeft">Blog</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-1.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">18 Awesome sites</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-2.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-3.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">Make website from scratch</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-4.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">18 Awesome sites</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-5.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-6.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">Make website from scratch</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-7.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">18 Awesome sites</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-8.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                        <a href="blog.html" class="blog-img"><img src="images/img-9.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
                        <div class="desc">
                            <span><small>Feb 07, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                            <h3><a href="blog.html">Make website from scratch</a></h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="blog.html" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <ul class="pagination">
                        <li class="disabled"><a href="#">&laquo;</a></li>
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
});

Vue.component('app-contact', {
    template: '<div id="get-in-touch" class="colorlib-bg-color"><div class="colorlib-narrow-content"><div class="row"><div data-animate-effect="fadeInLeft" class="col-md-6 animate-box fadeInLeft animated"><h2>Get in Touch!</h2></div></div> <div class="row"><div data-animate-effect="fadeInLeft" class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"><p class="colorlib-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> <p><router-link to="/contact">Contact me!</router-link></p></div></div></div></div>'
});

Vue.component('app-contact-page', {
    template: `<div id="colorlib-main">
    <div class="colorlib-contact">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <span class="heading-meta">Read</span>
                    <h2 class="colorlib-heading animate-box" data-animate-effect="fadeInLeft">Get in Touch</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5 col-md-push-6">
                    <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div class="colorlib-icon">
                            <i class="icon-mail6"></i>
                        </div>
                        <div class="colorlib-text">
                            <p><a href="mailto::vadimjobhg86@gmail.com">vadimjobhg86@gmail.com</a></p>
                        </div>
                    </div>

                    <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div class="colorlib-icon">
                            <i class="icon-map"></i>
                        </div>
                        <div class="colorlib-text">
                            <p>Ukraine Kharkiv</p>
                        </div>
                    </div>

                    <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div class="colorlib-icon">
                            <i class="icon-social-skype"></i>
                        </div>
                        <div class="colorlib-text">
                            <p><a href="skype:vadimus_hg?chat">vadimus_hg</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 col-md-pull-5">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInLeft">
                            <form action="https://formspree.io/vadimjobhg86@gmail.com" method="POST">
                                <div class="form-group">
                                    <input type="text" name = "" class="form-control" placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <input type="email" name="_replyto" class="form-control" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                </div>
                                <div class="form-group">                                
                                    <input type="submit" class="btn btn-primary btn-send-message" value="Send Message">
                                    <input type="hidden" name="_subject" value="contact_me" />
                                    <input type="hidden" name="_next" value="http://vadim-job-hg.github.io/#/thanks" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="map"></div>
</div>`});

