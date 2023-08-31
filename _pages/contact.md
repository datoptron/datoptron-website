---
title: Contact
layout: default
permalink: /contact
---
<main role="main">
  <!-- main heading-->
  <section class="mainheading">
    <div class="container">
      <!-- wrap-->
      <div class="wrap">
        <h1>Contact <span class="green">Us</span></h1>
        <p>
          Get to know each other and start planning for your Successful Data Strategy
          with Datoptron. You can contact via e-mail or telephone, or by using the following form.
        </p>
      </div>
    </div>
  </section>
  <!-- generic layout-->
  <section class="twocolumns contactus">
    <div class="container">
      <!-- row-->
      <div class="row">
        <!-- left-->
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 left">
          <!-- location-->
          <div class="contact-location">
            <!-- oval-->
            <img class="oval" src="{{ site.baseurl }}/assets/img/ic-oval-6.png">
            <div class="detail">
              <div class="lbl">OUR LOCATION</div>
              <h3>
                 Zografou Campus 9, <br>Iroon Polytechniou str 15780 <br>Zografou Greece
              </h3>
            </div>
            <div class="detail">
              <div class="lbl">GIVE US A CALL </div>
              <h3><a href="tel:+302107721000">210-772-1000</a></h3>
            </div>
            <div class="detail">
              <div class="lbl">EMAIL US </div>
              <h3> <a href="mailto:info@datoptron.gr">info@datoptron.gr</a></h3>
            </div>
          </div>
        </div>
        <!-- right-->
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 right">
          <!-- form-->
          <div class="contact-form form">
            <!-- row-->
            <div class="row">
              <!-- col-->
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 leftform">
                <!-- label-->
                <div class="input">
                  <label class="form-label" for="form-fullname">
                     FULLNAME <span class="mandatory">*</span>
                  </label>
                  <input class="form-control" id="form-fullname" type="text" placeholder="Please fill your fullname">
                </div>
                <!-- label-->
                <div class="input">
                  <label class="form-label" for="form-email">
                     EMAIL <span class="mandatory">*</span>
                  </label>
                  <input class="form-control" id="form-email" type="text" placeholder="Please fill your email">
                </div>
                <!-- label-->
                <div class="input">
                  <label class="form-label" for="form-company">
                     COMPANY <span class="mandatory"></span>
                  </label>
                  <input class="form-control" id="form-company" type="text" placeholder="Please fill your organisation">
                </div>
              </div>
              <!-- col-->
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 rightform">
                <!-- label-->
                <div class="input">
                  <label class="form-label" for="selectCountry">
                     COUNTRY<span class="mandatory"></span>
                  </label>
                  <select class="form-select" id="selectCountry" aria-label="Default select example">
                    <option selected disabled>Select your country</option>
                  </select>
                </div>
                <!-- label-->
                <div class="input">
                  <label class="form-label" for="form-phone">
                     PHONE <span class="mandatory"></span>
                  </label>
                  <input class="form-control" id="form-phone" type="text" placeholder="Please fill your phone number">
                </div>
                <!-- label-->
                <div class="input">
                  <label class="form-label" for="form-phone">
                     JOB TITLE <span class="mandatory"></span>
                  </label>
                  <input class="form-control" id="form-phone" type="text" placeholder="Please fill your job title">
                </div>
              </div>
            </div>
            <!-- row-->
            <div class="row">
              <!-- col-->
              <div class="col-xl-12">
                <!-- label-->
                <div class="input">
                  <label class="form-label" for="form-phone">
                     WHAT CAN WE DO FOR YOU<span class="mandatory">*</span>
                  </label>
                  <textarea class="form-control" rows="5" placeholder="Please fill your inquiries here."></textarea>
                </div>
                <!-- input-->
                <div class="input">
                  <input class="form-check-input" type="checkbox" value="" id="form-privacy">
                  <label class="form-check-label" for="form-privacy">
                    I agree to send my information with you and understand that it will be used
                    as described in the <a href="{{ site.baseurl }}/privacy">Privacy Policy</a>
                  </label>
                </div>
                <!-- input-->
                <div class="input">
                  <button class="btn btn-dark" type="button">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- call to action-->
  <section class="home-calltoaction">
    <div class="container">
      <!-- heading-->
      <div class="text">
        <h2>
          Discover how you can embrace your data, explore <span class="green">new insights</span> and
          drive <span class="green">new value</span> for your organization
        </h2>
        <p>
          We are a group of talented people including researchers, project managers, software developers,
          ontology engineers and machine learning experts with long experience working with standards and
          have contributed in the RDF, OWL and SKOS Working Groups of W3C.
        </p>
        <a href="{{ site.baseurl }}/contact">Let's Work Together</a>
      </div>
      <!-- character-->
      <img class="character" src="{{ site.baseurl }}/assets/img/img-character-3.png">
    </div>
  </section>
</main>

<script src="{{ site.baseurl }}/assets/js/countries.js"></script>
