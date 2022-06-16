---
title: About Us
layout: default
permalink: /aboutus
---
<main role="main">
  <!-- main heading-->
  <section class="mainheading">
    <div class="container">
      <div class="wrap">
        <h1>What is <span class="green">Datoptron</span>?</h1>
        <p>
          Datoptron comes from the combination of words &ldquo;data&rdquo; and &ldquo;catoptron&rdquo;, the Greek word for a reflecting optical instrument. Data through the looking glass or data <i>as</i> a looking glass, that is. We aggregate, structure, analyze, link, enrich, and query data to uncover new perspectives and understandings. We complement data with context and meaning. Whether in culture, in business or any other domain, our methods and tools can drive you through the data looking glass.
        </p>
      </div>
    </div>
  </section>
  <!-- about us narrative-->
  <section class="about-narrative">
    <div class="container">
      <!-- img-->
      <img class="character" src="{{ site.baseurl }}/assets/img/img-character-all.png">
      <!-- description-->
      <div class="description">
        <h3>
           We are a group of  <span class="green">researchers</span>,
            <span class="green">software developers</span>,
           <span class="green">ontology engineers </span>, and <span class="green">Artificial Intelligence </span>experts.
         </h3>
      </div>
    </div>
  </section>
  <!-- our teams-->
  <section class="about-team">
    <div class="container">
      <!-- row-->
      <div class="row">
        {% for person in site.data.team %}
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            {% include person-card.html
              image = person.image
              name = person.name
              role = person.role
              description = person.description
              linkedin = person.linkedin
              modalId = person.modalId
            %}
          </div>
        {% endfor %}
      </div>
    </div>
  </section>
  <!-- call to action-->
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
