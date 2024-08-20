// Filename - pages/index.js

import React from "react";
import images from '../images';
import { Helmet } from "react-helmet-async";


const Home = () => {
	return (
		<div class="container">
<Helmet>
        <title>Home</title>
        <meta name="The homepage for the test site." />
        </Helmet>
<main id="home">
<div class="jumbotron p-3 p-md-5 text-white-rounded vision">
  <div class="row">
    <div class="col-6">
			<h1 class="mb-5">Main headline</h1>
      <button class="btn btn-primary" type="button"><strong>Buy product</strong></button>
      </div>
      <div class="col-6">
      <div class="image-container">
    <img class="constrained-image" alt="family eating" src={images.family_img}/>
</div>
</div>
      </div>
      </div>
      <div class="jumbotron p-3 p-md-5 secondary-statement">
      <h2 class="mb-3">Supporting heading</h2>
      </div>
      <div id="about" class="mt-3">
        <h2>Why name of product?</h2>
        <ul class="reason">
          <li>Reason one</li>
          <li>Reason two</li>
          <li>Reason three</li>
          <li>Reason four</li>
        </ul>
      </div>
      <div id="buy" class="jumbotron p-3 p-md-5 text-white-rounded vision">
        <div class="row">
          <div class="col-4">Call to action one</div>
          <div class="col-4">Call to action two</div>
          <div class="col-4">Call to action three</div>
        </div>
      </div>

      </main>
		</div>

	);
};

export default Home;
