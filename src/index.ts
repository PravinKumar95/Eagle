import  _ from "lodash"
import './index.css'
import icon from './Eagle.png'

(function main(){
    let el = document.createElement('div');
    el.innerHTML = _.join(["Hello", "world"]);
    document.body.appendChild(el);

    const image = new Image();
    image.src = icon;
    document.body.appendChild(image)
})()
