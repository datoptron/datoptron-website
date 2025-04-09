---
title: STIRData
layout: default
permalink: /tools/stirdata
logoSrc: /assets/img/ic-logo-white-alt.png
bodyClass: tools platform
---
<main role="main">
  <!-- tools header-->
    <section class="tools-header platform">
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
              <img class="logo" src="{{ site.baseurl }}/assets/img/ic-logo-stirdata-white.png">
              <!-- label-->
              <div class="lbl">DOMAIN KNOWLEDGE</div>
              <ul>
                <!--<li><a href="{{ site.baseurl }}/services/datatransformation">Platform Development</a></li>-->
                <li>Platform Development</li>
                <li>Linked Data Integration</li>
                <li>User Engagement</li>
              </ul>
            </div>
          </div>
          <!-- col-->
          <div class="col-xl-9 col-lg-9 col-md-9 right">
            <div class="lbl">PLATFORM</div>
            <h1>STIRData</h1>
            <p>
			STIRData is an online platform for searching, navigating, synthetically analysing, and visualising company-related open data content coming from different sources in a homogeneous, supporting a number of cross-border and cross-domain reuse scenarios. These sources include company registries, sources discoverable via the European Data Portal (EDP) and other open data platforms. The offered functionalities are exposed via an open Application Programming Interface (API), so that they can be reused by other digital public services or applications developed by data and ICT companies.
            </p>
            <a href="https://portal.stirdata.eu">Learn more about STIRData</a>
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
           The tools and platforms developed by Datoptron have been successfully used in the cultural heritage and public administration domains by hundreds of organisations.
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
          STIRData provides a user-friendly interface to explore in a uniform manner business registry data from 13 European countries.
          </p>
          <p>
          The STIRData approach to technical interoperability is based on linked data, and the approach to semantic interoperability is based on a common data specification that reuses the European Core Vocabularies. 
          </p>
          <img class="thumbnail" src="{{ site.baseurl }}/assets/img/tools/stirdata_1.webp">
          <p>
          The platform adopts a fully decentralised architecture. It assumes that each dataset resides in a separate remote SPARQL endpoint. Apart from some basic information about each dataset, it also centrally stores copies of the shared NUTS, LAU and NACE vocabularies. In addition, to improve performance of the user facing platform, centrally stored precomputed statistics data and indexes have been added as extensions to the basic platform architecture, making it less dependent on the performance characteristics of the source SPARQL endpoints.
          </p>
          <p>
          For most of the supported countries, the business registry data have been transformed to the common linked data based representation using the <a href="https://datoptron.com/tools/sage" target="_blank">SAGE</a> tool, which retrieves the data in their original format from the business registries, maps them to the common model, enriches them using the NUTS, LAU and NACE vocabularies, and finally publishes the resulting linked data representation in the SPARQL endpoints.
          </p>
          <p>
          The STIRData compliant business registry datasets offered by the platform are discovered automatically by scheduled tasks that periodically check for new datasets in the Official portal for European data, as well as for updates of already included datasets. Datasets not yet available in the official portal for European data can be registered manually; in either case, the only required information is a link to the respective SPARQL endpoint. 
          </p>
          <p>
          The platform enables the end user to make complex search queries to retrieve lists of companies that satisfy conditions based on location, economic activity, and registration date. For example, a user may request all companies registered in the Oslo area in Norway and in the Prague area in Czechia after a certain date that perform one of a specific set of economic activities.
          </p>
          <p>
          Statistical views are also provided, showcasing an analysis of the distribution of companies in the subregions and subactivities specified in a query. Statistics provide useful, compact overviews of the underlying data and allow users to browse through the location and/or the economic activity hierarchies, displaying the corresponding statistical information.
          </p>
          <!-- oval-->
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
          We are a group of talented people including researchers,
          software developers, ontology engineers and machine learning experts with
          long experience on applying cutting-edge research findings and technology on real-world applications.
        </p>
        <a href="{{ site.baseurl }}/contact">Let's Work Together</a>
      </div>
      <!-- character-->
      <img class="character" src="{{ site.baseurl }}/assets/img/img-character-3.png">
    </div>
  </section>
</main>
