---
title: Tools &amp; Projects
layout: default
permalink: /tools/debias
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
            <img class="logo" src="{{ site.baseurl }}/assets/img/ic-logo-debias-white.png">
            <!-- label-->
            <div class="lbl">DOMAIN KNOWLEDGE</div>
            <ul>
              <li>
                Data Transformation
              </li>
              <li>
                Linked Data Integration
              </li>
            </ul>
          </div>
        </div>
        <!-- col-->
        <div class="col-xl-9 col-lg-9 col-md-9 right">
          <div class="lbl">TOOLS</div>
          <h1>DE-BIAS</h1>
          <p>
            The DE-BIAS Tool detects outdated and potentially harmful language in descriptions of cultural heritage collections. It was developed by the <a href="https://pro.europeana.eu/project/de-bias" target="_blank">DE-BIAS project</a>.
          </p>
          <a href="https://pro.europeana.eu/files/Europeana_Professional/Projects/debias/DE-BIAS_tool_technical_documentation.pdf" target="_blank">Learn more about DE-BIAS</a>
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
                Discover how Datoptron can help organisation to enhance the value
                of their data and become partner in their data journey.
              </p>
              <a href="{{ site.baseurl }}/services">Learn More</a>
            </div>
          </div>
        </div>
        <!-- col-->
        <div class="col-xl-9 col-lg-9 col-md-12 right">
          <img class="thumbnail" src="{{ site.baseurl }}/assets/img/tools/debias_1.webp">
          <!-- content-->
          <h3>About the Tool</h3>
          <p>
          The DE-BIAS tool was developed by the <a href="https://pro.europeana.eu/project/de-bias" target="_blank">DE-BIAS project</a> which aimed to promote a more inclusive and respectful approach to describing digital collections. It builds on the <a href="https://pro.europeana.eu/page/the-de-bias-vocabulary" target="_blank">DE-BIAS vocabulary</a> and utilises a series of Natural Language Processing (NLP) methods to detect and contextualise outdated or potentially harmful terms in object descriptions from cultural heritage institutions.
		      </p>
          <p>
          Through the tool, you can create statistics of biassed terms found in the collections you work with as a basis for next steps, annotate those terms with contextual information and, where appropriate, suggestions for alternative wording.
          </p>
          <h3>Benefits of the tool</h3>
          <p>
            The DE-BIAS tool allows users to:
          </p>
          <ul>
            <li>Quickly check individual object descriptions where they suspect bias</li>
            <li>Collectively analyse smaller batches of object descriptions for contentious terms</li>
            <li>Repeatedly run large-scale bias detection on object descriptions in their own systems or in the context of preparing data for submission to Europeana.eu</li>
            <li>Get statistics and a general overview of detected bias to start discussing and deciding on next steps to address harmful language in their object descriptions</li>
            <li>Create annotations for detected bias terms linking to the DE-BIAS vocabulary for further contextualisation</li>
          </ul>
          <p>
          It should be noted that, while some of these functions are available independent of the application context of the tool, some are only available either in the standalone version or in the API endpoint (see more below under ‘Technical information’). Furthermore, making the most of the tool in one’s own context will require some software development capacity and skills.
          </p>
          <h3>Technical information</h3>
          <p>
          The tool is available as a <a href="https://debias-tool.ails.ece.ntua.gr/" target="_blank">standalone application</a> accessible via a web interface and as an <a href="https://debias-api.ails.ece.ntua.gr/" target="_blank">API endpoint</a> allowing users to connect to the tool in the context of their own workflows and systems. The API endpoint has also been integrated into the <a href="https://pro.europeana.eu/post/how-the-sandbox-is-evolving-to-meet-the-needs-of-the-data-space-for-cultural-heritage" target="_blank">Metis Sandbox</a> and can as such be used when preparing data for submission to Europeana.eu.
          </p>
          <p>
          When using the standalone tool, data to be analysed can either be provided as a copy/paste into free text fields or in the form of .txt files, which will need to be uploaded in .zip format. When using the API endpoint integrated into the Metis Sandbox, data can be submitted in any of the formats that the Sandbox currently supports; the bias detection will become available once the data has been processed as usual and will then be applied to the EDM records in the Sandbox.
          </p>
          <p>
          Building on the DE-BIAS vocabulary, which names and contextualises close to 700 outdated and harmful terms across five languages (Dutch, English, French, German and Italian), the tool applies a series of NLP methods to detect whether these terms can be found in the data to be analysed:
          </p>
          <ul>
          <li><strong>Tokenization</strong>, splitting the plain input text into words, phrases or other meaningful elements for analysis, including the splitting of compound words in Dutch and in German;</li>
          <li><strong>Lemmatization</strong>, identifying the lemma of a word to match a word from the vocabulary to a word in the analysed text, including different inflections;</li>
          <li><strong>Named Entity Recognition (NER)</strong>, analysing a word’s context and positioning within the text to determine whether a term qualifies as a proper noun (e.g. a person's name or a place name), which may then be excluded from the tagging process;</li>
          <li><strong>Large Language Models (LLM)</strong>, determining whether a term that can be contentious in one context, but appropriate in another is to be flagged.</li>
          </ul>
          <h3>How to use it</h3>
          <p>
          Access the standalone version of the <a href="https://debias-tool.ails.ece.ntua.gr/" target="_blank">DE-BIAS tool</a>, the <a href="https://debias-api.ails.ece.ntua.gr/" target="_blank">API endpoint</a> and the <a href="https://github.com/ails-lab/de-bias" target="_blank">code for the API endpoint</a>.
          </p>
          <p>
          An introduction to the development of the tool, its main functionalities, and the workflow of the standalone version and of the tool’s integration in the Metis Sandbox are included in these slides. Alternatively, rewatch the <a href="https://www.youtube.com/watch?v=UNq8m2ORGfM&ab_channel=MichaelCultureAssociation" target="_blank">recording from the Europeana Aggregators’ Forum’s Autumn Meeting 2024</a>, which includes a live demonstration.
          </p>
          <p>
          More details can be found in the <a href="https://pro.europeana.eu/files/Europeana_Professional/Projects/debias/DE-BIAS_tool_technical_documentation.pdf" target="_blank">full manual</a> of the tool and in the detailed description of the <a href="https://pro.europeana.eu/files/Europeana_Professional/Projects/debias/DE-BIAS_tool_technical_documentation_API.pdf" target="_blank">direct use of the API endpoint</a>.
          </p>
          <p>
          For comments and further information about the DE-BIAS tool, please contact <a href="mailto:project.debias@gmail.com">project.debias@gmail.com</a>
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
            We are a group of talented people including researchers,
          software developers, ontology engineers and machine learning experts with
          long experience on applying cutting-edge research findings and technology on real-world applications.
          <!--We are a group of talented people including researchers, software developers, ontology engineers, and machine learning experts with a long experience working with standards, having contributed in the RDF, OWL and SKOS Working Groups of W3C.-->
        </p>
        <a href="{{ site.baseurl }}/contact">Let's Work Together</a>
      </div>
      <!-- character-->
      <img class="character" src="{{ site.baseurl }}/assets/img/img-character-3.png">
    </div>
  </section>
</main>