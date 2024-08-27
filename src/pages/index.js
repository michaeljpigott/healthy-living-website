// Filename - pages/index.js

import React from "react";
import images from '../images';
import { Helmet } from "react-helmet-async";


const Home = () => {
	return (
		<div class="container-fluid">
<Helmet>
        <title>Home</title>
        <meta name="The homepage for the test site." />
        </Helmet>
<main id="home">

  <div class="row primary">
    <div class="col-12 pt-5 pb-5">
			<h1 class="text-center">Get moving, get healthy: your path to an active lifestyle</h1>
      </div>
      </div>
      <div class="row secondary">
      <div class="col-12 pt-3 pb-3">
			<h2 class="text-center">Challenge yourself to get more active, try new things, meet new people and have fun.</h2>
      </div>
      </div>

<div class="row justify-content-center align-items-center mt-4 mb-4">
<div class="col-md-4">
      <div class="image-container">
    <img class="constrained-image" alt="Youth lying on the soccer field" src={images.soccer_img}/>
</div>
</div>
<div class="col-md-4">
  <h3>Sign up to the HealthyLiving App today and start your journey towards a healthier you!</h3>
  <button type="button" class="btn btn-primary btn-lg mt-3">Sign up</button>
</div>
</div>
<div id="about" class="row benefit-summary pt-5 pb-5 justify-content-center">
  <div class="col-8"><p>HealthyLiving is your partner in achieving a more active and healthier lifestyle. Designed for the Belconnen community, our app motivates and tracks your physical activity, helping you meet your fitness goals with ease. Join us in making a difference, one step at a time. </p></div>
</div>
<div class="row benefits pb-3 pt-5">
  <div class="col-12"><h2>What are the benefits?</h2></div>
</div>
<div class="row mb-5 benefits pb-3">
<div class="col-md-3"><p><strong>Track Your Progress:</strong><br />Easily monitor your activity levels, set personal goals, and see your progress over time.</p>
  </div>
  <div class="col-md-3"><p><strong>Community Engagement:</strong><br />Participate in local challenges, share your achievements, and motivate others in your community to stay active.</p>
  </div>
  <div class="col-md-3"><p><strong>Safe and Secure:</strong><br />We prioritize your privacy and safety, ensuring a secure environment for all users, especially younger audiences.</p>
  </div>
  <div class="col-md-3"><p><strong>Freemium Model:</strong><br />Start with our free version, with the option to upgrade to premium features as you advance in your fitness journey.</p>
  </div>
</div>
<div class="row customers justify-content-center pt-5 pb-5">
  <div class="col-5 border-left border-primary testimonial pr-5"><blockquote>"<strong>Since joining HealthyLiving, I feel so much happier and more connected!</strong>" <br />- Hawk, 15 years old</blockquote></div>

  <div class="col-2"><h3>Jayden's story</h3>
  <img class="constrained-image rounded-circle" alt="Jayden" src={images.jayden_img}/>
  </div>
  <div class="col-2"><h3>Dahlia's story</h3>
  <img class="constrained-image rounded-circle" alt="Dahlia" src={images.dahlia_img}/></div>

  <div class="col-2"><h3>Tiffany's story</h3>
  <img class="constrained-image rounded-circle" alt="Tiffany" src={images.tiffany_img}/></div>

  </div>





      </main>
		</div>

	);
};

export default Home;
