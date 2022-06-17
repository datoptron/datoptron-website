---
title: Tools &amp; Projects
layout: default
permalink: /tools/d2rml
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
                <a href="{{ site.baseurl }}/services/datatransformation">Data Transformation</a>
              </li>
              <li>
                <a href="{{ site.baseurl }}/services/datatransformation">Linked Data Integration</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- col-->
        <div class="col-xl-9 col-lg-9 col-md-9 right">
          <div class="lbl">TOOLS</div>
          <h1>D2RML</h1>
          <p>
		  D2RML is a data transformation language for transforming and combining diverse data into custom RDF datasets.
          </p>
          <a href="https://apps.islab.ntua.gr/tools/d2rml" target="_blank">Visit Project Site</a>
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
<!--          <h3>About</h3> -->
          <p>
D2RML (Data to RDF Mapping Language) is a data transformation language for defining complex data transformation workflows that can transform data obtained from diverse data sources and in diverse formats to RDF datasets, in order to be published as linked data.
          </p>
          <p>

A D2RML transformation workflow comes in the form of a D2RML document, which is itself an RDF document, that prescribes an entire data processing workflow, from the description of the data sources and the needed interactions with them so that the desired data may be obtained, to the interpretation of the obtained data, the ways the data obtained from the different data sources should be combined, and to the details of the transformation rules that should be applied to convert data elements to actual RDF triples and form RDF graphs. A D2RML transformation workflow may even be dynamic and determined by the data themselves.
          </p>
          <p>

The current version of D2RML supports several data sources such as relational databases, REST APIs, SPARQL endpoints, as well as local system and remote files, and several commonly used data formats such as XML, JSON, CSV, Excel spreadsheets, plain text, and the several RDF serializations. Data archive formats and inline RDF data are also supported. Data items are extracted from the data sources and files using the relevant standard expression language such as SQL, SPARQL, XPath, JSON path, as well as regular expressions.
          </p>
          <p>

The data elements extracted from the data sources are iterated over so that transformation rules can be applied. A transformation rule, in its simplest form, is a recipe for generating the subject, predicate, object and possibly the named graph of an RDF triple from one or more data elements. Transformations may be complex and may involve conditional or switch statements, function invocations, or even interaction with more data sources. The available functions include standard string, date and numerical manipulation functions, including several relevant XPath functions.. Multiple transformation rules for single data elements as well as value pivoting are supported.
          </p>
          <p>

D2RML is complemented by the D2RML processor, the software that executes a D2RML document, orchestrates the communication, interaction and retrieval of the data from the sources, applies the data transformation rules and produces the final RDF data, that may be either serialized and written to files or inserted directly into a triple store. The D2RML processor has been designed to be scalable, can make use of data caching, and can seamlessly handle data sources providing millions of data elements.
          </p>
<!--
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
-->
          <!-- oval-->
          <img class="thumbnail" src="{{ site.baseurl }}/assets/img/tools/tool_d2rml.webp">

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
      <img class="character" src="{{ site.baseurl }}/assets/img/img-character-3.png">
    </div>
  </section>
</main>
