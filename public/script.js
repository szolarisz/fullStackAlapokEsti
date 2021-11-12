document.getElementById("szinek-megjelenitese").onclick = listAndRenderColors;

async function listAndRenderColors(){
    const response = await fetch("/colors");
    const colors = await response.json();

    let htmlResult = "<h2>A kedvenc színeim JSON állományból</h2>";
    for( const szin of colors){
        htmlResult += `<div class="card" style="width: 18rem;">
        <div class="card-body" style="background-color:${szin.code}">
          <h5 class="card-title">${szin.name}</h5>
          <h6 class="card-text">${szin.code}</h6>
        </div>
      </div>`;
    }
    document.getElementById('color-list-component').innerHTML = htmlResult;
}

/*
async / await
*/