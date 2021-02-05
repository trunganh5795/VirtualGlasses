import { Glasses } from '../modules/Glasses.js';
import { Model } from '../modules/Model.js';

let arrGlasses = [];
let getData = async () => {
    try {
        let result = await axios({
            url: './data/data.json',
            method: 'GET',
            responeType: 'json',
        })
        arrGlasses = result.data;
        console.log('get data thành công', arrGlasses)

        renderData(arrGlasses);
        // renderGlasses(arrGlasses);
    } catch (err) {
        console.log(err)
    }

}

const renderData = (arrayGlasses) => {
    let contentGlasses = arrayGlasses.reduce((content, items, index) => {
        return content += `
        <div class="col-4">
       
        <img src="${items.src}" style="width: 100%;height: 100%;cursor:pointer;" alt="" onclick="changeGlasses('${items.id}')"> 
        </div>
        `
    }, '');
    // console.log(conte)
    document.getElementById('vglassesList').innerHTML = contentGlasses;
}

getData();


let model = new Model;
window.changeGlasses = (id) => {
    let glasses = arrGlasses.find((items) => items.id === id)
    let index = arrGlasses.findIndex((items) => items.id === id)
    model.changeGlasses(glasses);
    document.querySelector('#avatar').innerHTML = `
    <img
                id="glassesDetail"
                style="
                  position: absolute;
                  top: 150px;
                  left: 80px;
                  height: 125px;
                  width: 320px;
                  opacity:0.8;
                "
                src="${model.GlassesDeteil.virtualImg}"
              />
    `
    document.querySelector('#glassesInfo').innerHTML = `
    <p>
    Code : ${model.GlassesDeteil.id}<br>
    Name : ${model.GlassesDeteil.name}<br>
    Brand: ${model.GlassesDeteil.brand}
    </p>
    `
    document.querySelector('#glassesInfo').style = `display:block;`
    document.getElementById('previous').innerHTML = `
    <button class="btn btn-warning" id="before" onclick="previousBefore(${index})">
    Before
  </button>
  <button class="btn btn-warning" onclick="previousAfter(${index})">
    After
  </button>
    `
}



window.previousBefore = (index) => {
    model.before(index,arrGlasses);
    changeGlasses(model.GlassesDeteil.id)
}
window.previousAfter = (index) => {
    model.after(index,arrGlasses);
    changeGlasses(model.GlassesDeteil.id)
}

