export function getLinkHTML(e){
    var url = e.entity
    var id = url.split('Q')[1]
    return `<a href='${url}' target="_blank" rel="noreferrer noopener">Q${id} 
    <i class="bi bi-box-arrow-in-up-right"></i></a>`
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