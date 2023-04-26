import tippy from 'tippy.js';

function getLinkHTML(e){
    var url = e.entity
    var id = url.split('Q')[1]
    return `<a href='${url}' target="_blank" rel="noreferrer noopener">Q${id}<i class="bi bi-box-arrow-in-up-right"></i></a>`
  }

function getImageHTML(e){
    var image = e.image
    var thumb = String(e.thumbnail)
    if (image === "no-image.png") {
      return `<img class='img-thumbnail mx-auto d-block mt-2' src='${thumb}' alt=''></img>`
    }
    else{
      if(thumb.includes('.svg', 8)){
        var splitURL = thumb.split("/thumb/")
        var words = splitURL[1].split("/")
        var imgName = splitURL[0] + "/" + words[0] + "/" + words[1] + "/" + words[2]
        return `<a href='${imgName}' target="_blank" rel="noreferrer noopener">
          <img class='img-thumbnail mx-auto d-block mt-2' src='${imgName}' alt=''></a>`
      }
      else{
        return `<a href='${image}' target="_blank" rel="noreferrer noopener">
          <img class='img-thumbnail mx-auto d-block mt-2' src='${thumb}' alt=''></a>` 

      }

    }
  }


function getCountryImg(e) {
  return `<span class="c-flag fi fi-${e.countryCode}"></span>`
  
}

export function getEntityInfo(e) {
    return (
      `<div>
        <b>${e.label}</b> ${getCountryImg(e)} </br>
        ${getLinkHTML(e)}</br></br>
        <span className='fs-7'>${e.description}</span></br>
        <p><i class="bi bi-geo-alt"></i><a target="_blank" rel="noreferrer noopener" class="external text" href="//www.google.com/maps?ll=${e.lat},${e.lon}&amp;q=${e.lat},${e.lon}&amp;hl=en&amp;t=h&amp;z=11">(${e.lat}, ${e.lon})</a></p>
        ${getImageHTML(e)}
      </div>
      `
    )
  }