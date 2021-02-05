import { Glasses } from './Glasses.js'

export class Model {
    GlassesDeteil = new Glasses;
    constructor() {

    }
    changeGlasses(newItems) {
        this.GlassesDeteil = newItems;
    }
    before(IndexArrGlasses, arr) {
        if (arr[IndexArrGlasses - 1]) {
            this.GlassesDeteil = arr[IndexArrGlasses - 1]
            console.log('ok')
        }

    }
    after(IndexArrGlasses, arr) {
        if (arr[IndexArrGlasses + 1]) {
            this.GlassesDeteil = arr[IndexArrGlasses + 1]
        }
    }
}
