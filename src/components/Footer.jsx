function Footer() {
  const date = new Date().getFullYear();
    return (
      // <div class="row justify-content-center mt-2">
      //   {/* <div class="col-sm-4 text-center float-end">
      //     © 2021 Copyright: Wikidata Atlas
      //   </div> */}
      //   <div class="col-sm-4 text-center p-4">
      //     <a href="http://www.wikidata.org" target="_blank" rel="noreferrer noopener"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wikidata_Stamp_Rec_Dark.svg/150px-Wikidata_Stamp_Rec_Dark.svg.png" alt="powered" /></a>
      //   </div>
      // </div>
      <div class="d-flex flex-column">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">© {date} Wikidata Atlas</p>

    <a class="col-md-4 d-flex align-items-center justify-content-center me-md-auto link-dark text-decoration-none" href="http://www.wikidata.org" target="_blank" rel="noreferrer noopener"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wikidata_Stamp_Rec_Dark.svg/150px-Wikidata_Stamp_Rec_Dark.svg.png" alt="powered" /></a>
     

    <ul class="nav col-md-4 justify-content-end">
      {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li> */}
    </ul>
  </footer>
</div>
     );
}

export default Footer;