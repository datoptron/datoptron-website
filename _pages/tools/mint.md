---
title: Tools &amp; Projects
layout: default
permalink: /tools/mint
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
          <h1>MINT</h1>
          <p>
            <!--The MINT tool facilitates upload of arbitrary record shaped data in JSON, OLW/RDF, XML or CSV; mapping into a defined xml-schema; transformation of the data into that XML and export to various targets.!-->
            MINT is a web-based platform that facilitates initiatives for the aggregation of cultural heritage data across Europe. It is used by more than 550 cultural organisations for the ingestion, data transformation, and aggregation of their metadata records and  is one of the main components used to transform and ublish data to the Europeana platform.
          </p>
          <a href="http://mint-wordpress.image.ntua.gr/">Visit the tool</a>
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
              The  Datoptron team has participated in more than 30 European research and development projects, contributing with their leading expertise in  knowledge representation and reasoning, semantic web technologies, and machine learning. The team has been one of the main technical partners in the development of the European Digital Library - Europeana and offers tools used by hundreds of organisations.
          </p>
          <!-- banner-->
          <div class="banner-wrap">
            <div class="banner">
              <!-- oval-->
              <img class="oval" src="{{ site.baseurl }}/assets/img/ic-oval-6.png">
              <!-- text-->
               <h2>Successful Data Strategy</h2>
              <p>
                Discover how Datoptron can become a partner in your data journey and help your organisation to enhance the value of their data.
              </p>
              <a href="{{ site.baseurl }}/services">Learn More</a>
            </div>
          </div>
        </div>
        <!-- col-->
        <div class="col-xl-9 col-lg-9 col-md-12 right">
          <!-- content-->
          <p>
          <!--MINT participates is used in aggregation, digitization and technology-enabling projects and initiatives for digital cultural heritage.
           It supports the design, implementation and execution of a metadata (and/or content) ingestion strategy, according to or respective domain(s) and scope, the participating institutions and, available resources and time. MINT services compose a web based platform that is employed from the first steps of such workflows, corresponding to the ingestion, mapping, transformation and enrichment of metadata records.  According to the architecture,
           MINT implements a variety of remediation approaches for the resulting repository that allow for the storage, delivery, access and retrieval of metadata records. Deployment and integration also involve other systems and services, such as a portal and search engine, collection management and long term preservation systems, repositories etc.
           </p>
          <p>-->
          MINT handles metadata records from the content provider's delivery up to the aggregation repository(-ies), publication mechanism(s) and front-end(s). It makes data interoperable  through the use of well-defined metadata models and the alignment of the providers' records with certain requirements and schemata. MINT uses a visual mapping editor for the XSL language to implement crosswalks to the reference metadata model. It is being used by a growing number of providers that align proprietary data structures to a variety of standard or aggregation- specific models and in that way establish and maintain interoperability with other providers and Europeana.
          </p>
         <!-- <h3>Key functionalities include:</h3>
          <ul>
  <li>Organization and user level access rights and role assignment.</li>
  <li>Collection and record management (XML serialisation).</li>
  <li>Direct import and validation according to registered schemas (XSD).</li>
  <li>OAI-PMH based harvesting and publishing.</li>
  <li>Visual mapping editor for the XSLT language.</li>
  <li>Transformation and previewing (XML and HTML).</li>
  <li>Repository deployment and remediation interfaces.</li>
</ul>-->
          <p>
          <!-- oval-->
          <img class="thumbnail" src="{{ site.baseurl }}/assets/img/mintInterface.png">
          </p>
        <!-- <h3>MINT Technical Specifications </h3>
          <p>
            MINT handles metadata records from the content provider's delivery up to the aggregation repository(-ies), publication mechanism(s) and front-end(s).
It is written in JAVA, JSP, HTML and Javascript. It uses PostgreSQL as an object-relational database with Hibernate as the data persistence framework, and mongoDB as a document-oriented database. MINT is also reusing other open source development frameworks and libraries according to specific deployments and customizations. Mint source code versions (usually project-based) are released under a free software license (GNU Affero GPL).
The platform offers a user and organization management system that allows the deployment and operation of different aggregation schemes with corresponding user roles and access rights. An authenticated Restful web service is currently being designed to interoperate with other user identity & authentication systems.
          </p>-->
          <h3>Ingest </h3>
          <p>
            Registered users can upload their metadata records in JSOM, OWL/RDF, XML or CSV serialization, using the HTTP, FTP and OAI-PMH protocols. Users can also directly upload and validate records in a range of supported metadata standards (XSD). XML records are stored and indexed for statistics, previews, access from the mapping tool and subsequent services.
<!--Current developments aim to support relational database schemata and OWL/RDFS ontologies as input. -->
          </p>
           <h3>Processing </h3>
          <p>
            Handling of metadata records includes indexing, retrieval, update and transformation of XML files and records. XML processors <!--(Apache Xerces, SAXON, Nux)--> are used for validation and transformation tasks as well as for visualisation purposes<!--the visualization of XML and XSLT-->. For issues of scalability with respect to the amount of data and concurrent heavy processing tasks, parts of the services are multi-threaded and queue processing mechanisms are implemented.
          </p>
           <h3>Align & Normalize  </h3>
          <p>
            MINT offers a visual mapping editor that enables users to map their dataset records to a desired XML target schema. Mapping is performed through drag-and- drop and input operations which are translated to the corresponding code. The editor visualizes the input and target XSDs, providing access and navigation of the structure and data of the input schema, and the structure, documentation and restrictions of the target one. It supports string manipulation functions for input elements in order to perform 1-n and m-1 (with the option between concatenation and element repetition) mappings between the two models. Additionally, structural element mappings are supported, as well as constant or controlled value (target schema enumerations) assignment, conditional mappings (with a complex condition editor) and value mappings between input and target value lists. Mappings can be applied to ingested records, edited, downloaded and shared as templates.
          </p>

          <!-- oval-->

          <img class="thumbnail" src="{{ site.baseurl }}/assets/img/mappingInterface.png">
          <p>
          Preview interfaces present the steps of the aggregation such as the current input xml record, the XSLT code of mappings, the transformed record in the target schema, subsequent transformations from the target schema to other models of interest (e.g. Europeana's metadata schema), and available html renderings of each xml record. Users can transform their selected collections using complete and validated mappings in order to publish them in available target schemas for the required aggregation and remediation steps.
           </p>
          <p>
          Various additional resources such as terminologies, vocabularies, authority files and dictionaries are used to reinforce an aggregation's homogeneity and interoperability with external data sources. A typical usage scenario is the connection of a local (server) or online resource with a metadata element in order to be used during mapping/normalization. These resources can be XML, RDF/OWL, SKOS or even proprietary systems accessed through APIs.
          </p>
          <p>
          Normalization services such as group editing and value mapping are currently being implemented as standalone tasks for direct imports
          </p>

          <!--<h3>Link & Enrich </h3>
          <p>
          Semantic web technologies are used to transform metadata records to web resources in order to participate in the emerging web of data that promotes transparency and interoperability between trusted sources. Currently, a lot of aggregations are already taking advantage of the rapidly growing linked data sources published worldwide.
           </p>
          <p>
          MINT uses Virtuoso for RDFS/OWL storage and processing, and links data sources to external SPARQL endpoints using string-based and knowledge-assisted matching strategies. Entity/term extraction and/or natural language processing frameworks are evaluated to expand the number of suggested links. RabbitMQ is used to allow for a reliable, scalable and portable messaging and processing system, used in and between different services.
          </p>-->

           <h3>Remediate </h3>
          <p>
          MINT is being used to publish metadata in XML, JSON or RDFS/OWL according to the mechanism and usage. Typical scenarios include an OAI-PMH repository for XML records, SPARQL endpoints for triple stores, Lucene-based indexes for search engines and RESTful APIs for third party services.
          </p>

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
