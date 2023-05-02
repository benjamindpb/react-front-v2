function Footer() {
  const date = new Date().getFullYear();
    return (
      <div class="container mt-5">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center text-muted">
      
      <span class="mb-3 mb-md-0 fs-6">© {date} Wikidata Atlas <i class="bi bi-globe-americas"></i> by <a href="https://linktr.ee/benjamindelpinob?utm_source=linktree_profile_share&ltsid=8995045a-9f0e-4108-a74e-f1d5f52cf504" target="_blank" rel="noopener noreferrer">Benjamín del Pino</a></span>
    </div>

    <div className="col-md-3 mx-4 d-flex justify-content-center">
    <a href="https://www.wikidata.org/wiki/Wikidata:Main_Page" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Powered_by_WIKIDATA_%28plain%29.svg/125px-Powered_by_WIKIDATA_%28plain%29.svg.png" alt="" />
      </a>
      
    </div>

    <div className="col d-flex justify-content-end">
    
      
      <a class="text-dark mx-2" href="https://github.com/benjamindpb/wdatlas" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-github fs-1"></i>
      </a>
      
    </div>
    
  </footer>
  <div className="row mb-2 p-3">
      <div className="col d-flex justify-content-center">
      <a href="https://imfd.cl/en/" class="me-5 mb-md-0 text-muted text-decoration-none lh-1" target="_blank" rel="noopener noreferrer">
        <img src="imfd.png" alt="imfd" style={{height: '45px'}}/>
      </a>
    <a href="https://www.dcc.uchile.cl" class="me-5 mb-md-0 text-muted text-decoration-none lh-1" target="_blank" rel="noopener noreferrer">
        <img src="logo-dcc.png" alt="dcc-uchile" style={{height: '45px'}}/>
      </a>
      </div>
    </div>
</div>


     );
}

export default Footer;
