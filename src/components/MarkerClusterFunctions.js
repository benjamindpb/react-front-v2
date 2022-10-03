export function getLinkHTML(e){
    var url = e.entity
    var id = url.split('Q')[1]
    return `<a href='${url}' target="_blank" rel="noreferrer noopener">Q${id} 
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
              </svg></a>`
  }

export function getImageHTML(e){
    var image = e.image
    var thumb = e.thumbnail
    return `<a href='${image}' target="_blank" rel="noreferrer noopener">
      <img class='img-thumbnail mx-auto d-block mt-2' src='${thumb}' alt=''></a>` 
  }

export function getEntityInfo(e) {
    return (
      `<div>
        <b>${e.label}</b> (${getLinkHTML(e)})</br>
        ${e.description}</br>
        ${getImageHTML(e)}
      </div>
      `
    )
  }