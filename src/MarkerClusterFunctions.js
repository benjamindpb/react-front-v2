function getLinkHTML(e){
    var url = e.entity
    var id = url.split('Q')[1]
    return `<a href='${url}' target="_blank" rel="noreferrer noopener">Q${id}<i className="bi bi-box-arrow-in-up-right"></i></a>`
  }

function getImageHTML(e){
    var image = e.image
    var thumb = e.thumbnail
    return `<a href='${image}' target="_blank" rel="noreferrer noopener">
      <img className='img-thumbnail mx-auto d-block mt-2' src='${thumb}' alt=''></a>` 
  }

function getCountryImg(e) {
  return `<span className="fi fi-${e.countryCode}"></span>`
  // <img
  // src="https://flagcdn.com/za.svg"
  // width="30"
  // alt="South Africa">
  
}

export function getEntityInfo(e) {
    return (
      `<div>
        <b>${e.label}</b> ${getCountryImg(e)} </br>
        ${getLinkHTML(e)}</br></br>
        <span className='fs-7'>${e.description}</span></br>
        ${getImageHTML(e)}
      </div>
      `
    )
  }