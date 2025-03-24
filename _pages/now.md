---
title: What We Do
layout: default
permalink: /now
---
<main role="main">
  <!-- main heading-->
  <section class="mainheading mb-5">
    <div class="container">
      <div class="wrap">
        <h1 class="mb-5">What we do <span class="green">Now</span></h1>
        <h3>
          We list here all the running projects and where we are focusing right now.
        </h3>
      </div>
    </div>
  </section>
  <section class="my-5 pt-4">
    <div class="container">
      {% for project in site.data.now %}
      <div class="row mb-5">
        <div class="col col-md-3 col-12">
          <h4 class="pt-1">{{ project.title }}</h4>
        </div>
        <div class="col col-md-9 col-12">
          <p class="mb-2">{{ project.description }}</p>
          {% if project.link %}
          <a href="{{ project.link }}" target="_blank" class="learn-more">Learn more</a>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </section>
  <section class="past-section mb-5">
    <div class="container">
      <div class="wrap">
        <h1 class="mb-5">Past Projects</h1>
      </div>
    </div>
  </section>
  <section class="my-5 pt-4">
    <div class="container">
      {% for project in site.data.past %}
      <div class="row mb-5">
        <div class="col col-md-3 col-12">
          <h4 class="pt-1">{{ project.title }}</h4>
        </div>
        <div class="col col-md-9 col-12">
          <p class="mb-2">{{ project.description }}</p>
          {% if project.link %}
          <a href="{{ project.link }}" target="_blank" class="learn-more">Learn more</a>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </section>
  <section class="home-calltoaction">
    <div class="container">
      <!-- heading-->
      <div class="text">
        <h2>
          Discover how you can embrace your data, explore <span class="green">new insights</span>
          and drive <span class="green">new value</span> for your organization
        </h2>
        <p>
          We are a group of  researchers,  software developers, ontology engineers,
          and Artificial Intelligence experts with
          long experience on applying cutting-edge research findings and technology on real-world applications.
          <!-- working with standards and have contributed in the RDF,
          OWL and SKOS Working Groups of W3C.-->
        </p>
        <a href="{{ site.baseurl }}/contact">Let's Work Together</a>
      </div>
      <!-- character-->
      <img class="character" src="{{ site.baseurl }}/assets/img/img-character-3.png">
    </div>
  </section>
</main>
