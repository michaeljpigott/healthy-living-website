import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
	return (
    <Container>

      <div class="row footer">
<div class="col-4"><h5>Footer goes here.</h5>
<ul>
  <li>link</li>
  <li>link</li>
  <li>link</li>
  <li>link</li></ul>
  </div>
  <div class="col-4"><h5>Footer goes here.</h5>
<ul>
  <li>link</li>
  <li>link</li>
  <li>link</li>
  <li>link</li></ul>
  </div>
  <div class="col-4"><h5>Footer goes here.</h5>
<ul>
  <li>link</li>
  <li>link</li>
  <li>link</li>
  <li>link</li></ul>
  </div>
  </div>



    </Container>
  )};

  export default FooterComponent;