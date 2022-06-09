---
title: Tools &amp; Projects
layout: default
permalink: /mint
logoSrc: /assets/img/ic-logo-white.png
bodyClass: tools
---
<main role="main">
  <!-- tools header-->
  <section class="tools-header">
    <div class="container">
      <!-- row-->
      <div class="row">
        <!-- col-->
        <div class="col-xl-3 col-lg-3 col-md-3 left">
          <!-- wrap-->
          <div class="wrap">
            <!-- oval-->
            <img class="oval" src="{{ site.baseurl }}/assets/img/ic-oval-6.png">
            <!-- logo-->
            <img class="logo" src="{{ site.baseurl }}/assets/img/ic-logo-mint-white.png">
            <!-- label-->
            <div class="lbl">DOMAIN KNOWLEDGE</div>
            <ul>
              <li>
                <a href="{{ site.baseurl }}/datatransformation">Data Transformation</a>
              </li>
              <li>
                <a href="{{ site.baseurl }}/datatransformation">Linked Data Integration</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- col-->
        <div class="col-xl-9 col-lg-9 col-md-9 right">
          <div class="lbl">TOOLS</div>
          <h1>SAGE</h1>
          <p>
            SAGE is a semantic enrichment and validation platform developed by datoptron under the Europeana Generic Services project Europeana XX: Century of Change.
          </p>
          <a href="#">Visit Project Site</a>
        </div>
      </div>
    </div>
  </section>
  <!-- tools header-->
  <section class="tools-detail">
    <div class="container">
      <!-- row-->
      <div class="row">
        <!-- col-->
        <div class="col-xl-3 col-lg-3 col-md-12 left">
          <!-- testimonial-->
          <img class="testi" src="{{ site.baseurl }}/assets/img/ic-testimonial.png">
          <!-- footnote-->
          <p class="footnote">
            Since 2015, Datoptron has participated in 15+ projects for the count of the
            Service Centre de Législation (SCL) and the Chancellerie Fédérale Suisse (ChF)
            aimed at describing, organizing and publishing legislative data in a meaningful
            way to be easily interpreted by humans and machines alike
          </p>
          <!-- banner-->
          <div class="banner-wrap">
            <div class="banner">
              <!-- oval-->
              <img class="oval" src="{{ site.baseurl }}/assets/img/ic-oval-6.png">
              <!-- text-->
              <h2>Successful Data Strategy</h2>
              <p>
                Discover how Datoptron can help organisation to enhance the value
                of their data and become partner in their data journey.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
        <!-- col-->
        <div class="col-xl-9 col-lg-9 col-md-12 right">
          <!-- content-->
          <h3>About</h3>
          <p>
           The lack of rich, descriptive metadata can affect the searchability and usability of digital content from museums, libraries and archives and on Europeana. SAGE is an online system which seeks to address this issue by allowing the manipulation of metadata in the Europeana Data Model (EDM) and other formats and models (including CSV, XML, JSON, RDF) so that it can be automatically enriched through external services that employ state-of-the-art AI and web semantic technologies. 

          </p>
          <p>
            The system is able to produce enrichments in the form of URIs linked to selected metadata fields, or even harvest additional information from external sources like Wikidata. The enrichments can then be manually validated through an integrated validation sub-system that allows bulk validations through text grouping and text frequency sorting. This means that the user only has to validate each text once and the changes will be applied to all the respective records, giving priority to texts that appear in more records in case a complete validation of a dataset is not feasible.
          </p>
          
          <p>
            Via this tool, all relevant keywords can be translated to various languages through the respective Wikidata and Getty links, in order to create a multilingual vocabulary to fit the project’s needs.
          </p>
        
          <p>
            The Sage tool was used in Europeana CEF Telecom project Pagode-Europeana China to automatically semantically enrich more than 20,000 records. It will also be used in the Europeana CEF Telecom project CRAFTED to analyse metadata fields and text extracted from AI content analysis tools in order to identify and remove uncertainty from named entities. The ultimate aim is to enrich more than 100,000 records and enable user validation and assessment of automatically extracted entities. 
          </p>
          <h3>Benefits</h3>
          <p>
            The platform allows cultural heritage institutions to: 
          </p>
          <p>
            Integrate different types of data from multiple sources into a single Resource Description Framework (RDF) record or collection.
            Improve searchability and indexing.
            Access a clear overview of the results through the validation procedure which involves validation from a person.
          </p>
          <h3>Technical Information</h3>
          <p>
            The system transforms data to the Resource Description Framework (RDF) and stores them in a Virtuoso triple store, using SPARQL to retrieve and manipulate them. The external annotator services that are used for the enrichment of the metadata employ state-of-the-art technologies like BERT (an attention-based transformer deep neural network), lemmatisation, and named entity recognition and disambiguation techniques.
          </p>
          <p>
            SAGE is an open-source platform under the Apache Licence 2.0. More details and link to the source code will be made publicly available upon completion of the Europeana XX: Century of Change project.


          </p>
          <!-- oval-->
          <img class="thumbnail" src="{{ site.baseurl }}/assets/img/img-content-pic1.png">
          <img class="thumbnail" src="{{ site.baseurl }}/assets/img/img-content-pic2.png">
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
          Discover how you can embrace your data, explore <span class="green">new insights </span>and drive <span class="green">new value </span>for your organization
        </h2>
        <p>
          We are a group of talented people including researchers, project managers,
          software developers, ontology engineers and machine learning experts with
          long experience working with standards and have contributed in the RDF, OWL
          and SKOS Working Groups of W3C.
        </p>
        <a href="{{ site.baseurl }}/contact">Let's Work Together</a>
      </div>
      <!-- character-->
      <img class="character" src="{{ site.baseurl }}/assets/img/tool_sage.png">
    </div>
  </section>
</main>
