function About() {
    return ( 
        <div class='container'>
            <h1 className="text-center my-4 border-bottom">About</h1>
            <div class="row">
  <div class="col-3">
    <div id="list-example" class="list-group">
    <a class="list-group-item list-group-item-action" href="#list-item-1"><b>Wikidata Atlas<i class="bi bi-globe-americas mx-2"></i></b></a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Semantic Web</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Wikidata</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Wikidata Query Service</a>
      <a class="list-group-item list-group-item-action" href="#list-item-5">MediaWiki API </a>
      
    </div>
  </div>
  <div class="col-9">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example border p-3" tabindex="0" style={{'height': '80vh', 'overflow-y': 'scroll'}}>
    <h3 id="list-item-1"><b>Wikidata Atlas<i class="bi bi-globe-americas mx-2"></i></b></h3>
      <p>Wikidata Atlas is a platform that allows Wikidata entities that have geographic coordinate properties to be displayed on a world map.</p>
        <p>The entities that are displayed correspond to <a href="https://www.wikidata.org/wiki/Property:P31" target="_blank" rel="noopener noreferrer">instances of (P31)</a> types that have the property of  <a href="https://www.wikidata.org/wiki/Property:P625" target="_blank" rel="noopener noreferrer">coordinate location (P625)</a>.</p>
        <p>In addition to the location, the main characteristics of the entity are obtained, such as its label, <a href="https://www.w3.org/wiki/URI" target="_blank" rel="noopener noreferrer">URI</a>, description, country to which it belongs and image, if any.</p>
        <b><p class='fs-4'>How to use?</p></b>
        <p>In the following example you can see the results of searching for entities that are <a href="https://www.wikidata.org/wiki/Q483110" target="_blank" rel="noopener noreferrer">stadium (Q483110)</a> instances:</p>
        <p><img src="demo\img\home1.png" alt="home" class='img-fluid p-2 border'/></p>
        <p>You can see on the map that there are many <b>clusters</b> that are generated when entities are relatively close to each other and when the zoom is not that high, you can also see some <b>markers</b>. If a marker is clicked, a popup is displayed with information about the entity such as its label, description, country to which it belongs, location and image (if it has one). On the other hand, if you click on a cluster, you zoom in on the map to better visualize the entities. It can also be seen that a box appears below the map with the <b>Results</b> of the search and information about the type that was searched for.</p>
        <p>In the following image you can see the visualization of the entities on the map after applying zoom.</p>
        <p><img src="demo\img\zoom.png" alt="zoom" class='img-fluid p-2 border'/></p>
        <p>Below are some of the most important concepts and tools to develop this project.</p>
        
      <h3 id="list-item-2">Semantic Web</h3>
      <p>The Semantic Web is a set of activities developed at the core of the <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">World Wide Web Consortium</a> (W3C) with a tendency to create technologies to publish data readable by computer applications (machines). It adds structure to meaningful content on web pages, creating an environment in which software agents moving from one page to another can easily perform sophisticated tasks for users. The Semantic Web is not a web separated from the one already known, but rather is an extension of it, in which a well-defined meaning is given to the information, which allows computers or machines and also people to work better in cooperation. This extension of the web occurs through standards that promote common data formats and exchange protocols on the web, some of which are <a href="https://www.w3.org/RDF/" target="_blank" rel="noopener noreferrer">RDF</a>, <a href="https://www.w3.org/wiki/RDFS" target="_blank" rel="noopener noreferrer">RDFS</a>, <a href="http://" target="_blank" rel="noopener noreferrer">OWL</a>, and <a href="http://" target="_blank" rel="noopener noreferrer">SPARQL</a>.</p>
      <h3 id="list-item-3">Wikidata</h3>
      <p><a href="https://www.wikidata.org/wiki/Wikidata:Main_Page" target="_blank" rel="noopener noreferrer">Wikidata</a> is a free, collaborative, multilingual database, serving as a secondary database and collecting structured data to support Wikipedia, Wikimedia Commons, as well as other wikis of the Wikimedia movement and anyone in the world.</p>
      <p>Wikidata is currently based on the Wikibase software, which consists of a set of extensions to the MediaWiki software for storing and managing data. MediaWiki on the other hand is the most popular wiki software, it is easy to use, has powerful features, is highly configurable and can scale to millions of users. More than 2 thousand wikis use MediaWiki as the engine for their operation, including the famous Wikipedia.</p>
      <p>Wikidata provides different ways to access information about the entities that make up its database, it also allows you to search by keywords. For example, if we search for the entity label "Alan Turing" <a href="https://www.wikidata.org/wiki/Q7251" target="_blank" rel="noopener noreferrer">(Q7251)</a> , some of the results that Wikidata gives us about this item are a description, his nationality, cause of death, occupation, influences, number of Erdös, among many other properties.</p>
      <h3 id="list-item-4">Wikidata Query Service</h3>
      <p><a class="external text" href="https://query.wikidata.org/" target="_blank" rel="noopener noreferrer">Wikidata Query Service</a> (WDQS) is Wikidata's own SPARQL endpoint. It returns the results of queries made in the SPARQL query language: <code><a class="external free" href="https://query.wikidata.org">https://query.wikidata.org</a></code></p>
      <p>You can query the data in Wikidata through our SPARQL endpoint, the WDQS. The service can be used both as an interactive web interface, or programmatically by submitting <code>GET</code> or <code>POST</code> requests to <code><a class="external free" target="_blank" rel="noopener noreferrer" href="https://query.wikidata.org/sparql">https://query.wikidata.org/sparql</a></code></p>.

      <h3 id="list-item-5">MediaWiki API</h3>
      <p>The MediaWiki Action API is a web service that allows access to some wiki features like authentication, page operations, and search. It can provide meta information about the wiki and the logged-in user.</p>
      <p>This service, like the previous one, can also be used to send <code>GET</code> or <code>POST</code> requests to <code><a class="external free" target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/w/api.php">https://www.wikidata.org/w/api.php</a></code> endpoint.</p>
      
    </div>
  </div>
</div>
        </div>
     );
}

export default About;