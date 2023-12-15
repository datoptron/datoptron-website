---
title: Home
layout: default
permalink: /
---
<main role="main">
  <!-- banner-->
  <section class="home-banner">
    <div class="container">
      <!-- left-->
      <div class="left">
        <!-- heading-->
        <h1>
           Give Meaning to your <span class="green">Data</span>
        </h1>
        <h3 class="mt-3">
          We leverage 20 years experience in Semantic Technologies, Machine Learning, and Crowdsourcing.
          Datoptron is a spinoff company of the National Technical University of Athens in the area of Artificial Intelligence and Data Management.
        </h3>
        <a href="{{ site.baseurl }}/aboutus" class="mt-3">Learn More</a>
      </div>
      <!-- right-->
      <div class="right">
        <!-- banner text-->
        <div class="banner-text">
          <div class="line connectright"><span class="connect">DATA </span><span>TRANSFORMATION </span></div>
          <div class="line connectleft"><span class="connect">LINKED </span><span class="invert">DATA </span></div>
          <div class="line connectright"><span class="invert">INTEGRATION </span></div>
          <div class="line"><span>PUBLICATION</span></div>
          <div class="comment"><img src="{{ site.baseurl }}/assets/img/ic-comment.png"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- services-->
  <section class="home-services">
    <div class="container">
      <!-- character-->
      <img class="character" src="{{ site.baseurl }}/assets/img/img-character-1.png">
      <!-- label-->
      <div class="lbl">TESTIMONIALS</div>
      <h2>
        <span class="green">Datoptron</span> has helped teams gain value from their data across a wide array of countries and domains.
      </h2>
      <h3>
        Datoptron team has participated in more than 30 European research and development projects.
      </h3>
      <!-- testimonials -->
      <div class="row testimonials-carousel">
        {% include testimonial-carousel.html %}
      </div>
      <a href="{{ site.baseurl }}/services" class="button-link mt-5">What We Do</a>
    </div>
  </section>
  <!-- projects-->
  <section class="home-projects">
    <!-- character-->
    <img class="oval" src="{{ site.baseurl }}/assets/img/ic-oval-2.png">
    <!-- container-->
    <div class="container">
      <!-- row-->
      <div class="row">
        <!-- left-->
        <div class="col-xl-5 col-lg-5 left">
          <!-- character-->
          <img class="character" src="{{ site.baseurl }}/assets/img/img-character-2.png">
          <h2>Datoptron <span class="green">Tools</span></h2>
          <p>Leveraging the experience of 20 years working in the fields of Semantic Technologies and Machine Learning, as well as the participation in more than 30 R&D European-funded projects, Datoptron has developed a number of tools.</p>
          <!-- navigation-->
          <a href="{{ site.baseurl }}/tools">View More</a>
        </div>
        <!-- right-->
        <div class="col-xl-7 col-lg-7 right">
          <!-- ul-->
          <ul>
            <li>
              <a href="{{ site.baseurl }}/tools/mint">
                <img src="{{ site.baseurl }}/assets/img/ic-logo-with.png">
                <div class="text">
                  <h3>MINT </h3>
                  <p>
                    Metadata Interoperability Platform (MINT) was designed and developed to facilitate aggregation initiatives for cultural heritage content and metadata in Europe. More than 15 million cultural records have been aggregated to Europeana through MINT
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="{{ site.baseurl }}/tools/sage">
                <img src="{{ site.baseurl }}/assets/img/ic-logo-sage.png">
                <div class="text">
                  <h3>SAGE </h3>
                  <p>
                    SAGE (Semantic Annotation &amp; Generation of Enrichments) is a web-based tool for generating, enriching, validating, searching and publishing data as a knowledge graph.
                    <!--SAGE is a semantic enrichment and validation platform developed
                    to automatically enrich metadata and link them to external web resources using Natural Language Processing techniques.-->
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="{{ site.baseurl }}/tools/d2rml">
                <img src="{{ site.baseurl }}/assets/img/ic-logo-d2.png">
                <div class="text">
                  <h3>D2RML </h3>
                  <p> Is a mapping language, developed inhouse, and is used to transform any kind of data to RDF. D2RML has been used in many European R&D projects that work with Linked Data technologies.
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="{{ site.baseurl }}/tools/crowdheritage">
                <img src="{{ site.baseurl }}/assets/img/ic-logo-crowd.png">
                <div class="text">
                  <h3>CrowdHeritage </h3>
                  <p>
                    CrowdHeritage is an open platform where cultural heritage institutions can share their collections’ metadata that need a fix or enrichment, and everybody can contribute to the effort of improving them. 
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- call to action-->
  <section class="home-calltoaction">
    <div class="container">
      <!-- heading-->
      <div class="text">
        <h2>Discover how you can embrace your data, explore <span class="green">new insights </span>and drive <span class="green">new value </span>for your organization</h2>
        <p>
          We are a group of talented people including researchers, software developers,
          ontology engineers and machine learning experts with long experience in working with standards.
        </p>
        <a href="{{ site.baseurl }}/contact">Let's Work Together</a>
      </div>
      <!-- character-->
      <img class="character" src="{{ site.baseurl }}/assets/img/img-character-3.png">
    </div>
  </section>
</main>
