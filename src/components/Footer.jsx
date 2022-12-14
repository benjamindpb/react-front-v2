function Footer() {
  const date = new Date().getFullYear();
    return (
      <div class="container mt-5">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center text-muted">
      
      <span class="mb-3 mb-md-0 fs-6">© {date} Wikidata Atlas <i class="bi bi-globe-americas"></i> by <a href="https://linktr.ee/benjamindelpinob?utm_source=linktree_profile_share&ltsid=8995045a-9f0e-4108-a74e-f1d5f52cf504" target="_blank" rel="noopener noreferrer">Benjamín del Pino</a></span>
    </div>

    <div className="col d-flex justify-content-center">
    <a href="https://www.wikidata.org/wiki/Wikidata:Main_Page" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Powered_by_WIKIDATA_%28plain%29.svg/110px-Powered_by_WIKIDATA_%28plain%29.svg.png" alt="" />
      </a>
    </div>

    <div className="col d-flex justify-content-end">
      <a class="text-dark" href="https://github.com/benjamindpb" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-github fs-1"></i>
      </a>
    </div>
  </footer>
</div>


     );
}

export default Footer;