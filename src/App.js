import React, { Component } from 'react';
import './AppStyling/default.css';
// import header from './header.jpg'
// import logo from './logo.svg';
// import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="header-wrapper">
            <div id="header" class="container">
              <div id="menu">
                <ul>
                  <li class="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
                  <li><a href="#" accesskey="2" title="">About Me</a></li>
            			<li><a href="#" accesskey="3" title="">My Projects</a></li>
            			<li><a href="#" accesskey="5" title="">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="logo">
            <h1><a href="#">Sasha Milenkovic</a></h1>
            <span>Developer (Not for Poker Apps tho)</span>
          </div>
          <div id="wrapper1">
          	<div id="welcome" class="container">
          		<div class="title">
          			<h2>Welcome to My Website</h2>
              </div>
          		<div class="content">
          			<p>This is <strong>Veridical</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
          			<a href="#" class="button">Etiam posuere</a> </div>
          	</div>
          </div>
          <div id="wrapper3">
          	<div id="portfolio" class="container">
          		<div class="title">
          			<h2>Design Portfolio</h2>
          			<span class="byline">Integer sit amet pede vel arcu aliquet pretium</span> </div>
          		<div class="pbox1">
          			<div class="column1">
          				<div class="box"> <span class="icon icon-comments"></span>
          					<h3>Vestibulum venenatis</h3>
          					<p>Fermentum nibh augue praesent a lacus at urna congue rutrum.</p>
          				</div>
          			</div>
          			<div class="column2">
          				<div class="box"> <span class="icon icon-cogs"></span>
          					<h3>Praesent scelerisque</h3>
          					<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
          				</div>
          			</div>
          			<div class="column3">
          				<div class="box"> <span class="icon icon-coffee"></span>
          					<h3>Donec dictum metus</h3>
          					<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
          				</div>
          			</div>
          			<div class="column4">
          				<div class="box"> <span class="icon icon-cloud"></span>
          					<h3>Mauris vulputate dolor</h3>
          					<p>Rutrum fermentum nibh in augue praesent urna congue rutrum.</p>
          				</div>
          			</div>
          		</div>
          		<div class="pbox2">
          			<div class="column1">
          				<div class="box"> <span class="icon icon-asterisk"></span>
          					<h3>Rhoncus volutpat</h3>
          					<p>Fermentum nibh augue praesent a lacus at urna congue rutrum.</p>
          				</div>
          			</div>
          			<div class="column2">
          				<div class="box"> <span class="icon icon-headphones"></span>
          					<h3>Sed odio sagittis</h3>
          					<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
          				</div>
          			</div>
          			<div class="column3">
          				<div class="box"> <span class="icon icon-user"></span>
          					<h3>Aenean elementum</h3>
          					<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
          				</div>
          			</div>
          			<div class="column4">
          				<div class="box"> <span class="icon icon-signal"></span>
          					<h3>Etiam posuere augue</h3>
          					<p>Rutrum fermentum nibh in augue praesent urna congue rutrum.</p>
          				</div>
          			</div>
          		</div>
          	</div>
          </div>
          <div id="wrapper2">
          	<div id="featured" class="container">
          		<div class="box1">
          			<h2><span class="icon icon-group"></span>Fusce ultrices fringilla</h2>
          			<p>Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh. Suspendisse dictum porta lectus. Donec placerat odio vel elit. Nullam ante orci, pellentesque eget, tempus quis, ultrices in, est. Curabitur sit amet nulla. Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum.</p>
          		</div>
          		<div class="box2">
          			<h2><span class="icon icon-briefcase"></span>Etiam posuere augue</h2>
          			<p>Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh. Suspendisse dictum porta lectus. Donec placerat odio vel elit. Nullam ante orci, pellentesque eget, tempus quis, ultrices in, est. Curabitur sit amet nulla. Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum.</p>
          		</div>
          	</div>
          </div>
          <div id="copyright">
          	<div class="title">
          		<h2>Get in touch</h2>
              <br></br>
          		<span class="byline">sashamilenkovic2@gmail.com</span>
              <br></br>
              <br></br>
              <span class="byline">https://github.com/SashaMil</span>

            </div>
          	<ul class="contact">
          		<li><a href="#" class="icon icon-twitter"><span>Twitter</span></a></li>
          		<li><a href="#" class="icon icon-facebook"><span></span></a></li>
          		<li><a href="#" class="icon icon-dribbble"><span>Pinterest</span></a></li>
          		<li><a href="#" class="icon icon-tumblr"><span>Google+</span></a></li>
          		<li><a href="#" class="icon icon-rss"><span>Pinterest</span></a></li>
          	</ul>
          	<p>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a> | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
          </div>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;