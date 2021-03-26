import { template } from './template'
import data from '../products.json'
import {checkActiveElement, clearStyle, counter} from './pureFunctions'





const productArea = document.querySelector('.product__area')

const productSectionArray = []

for (let i = 0; i < data.length; i++) {
    productArea.insertAdjacentHTML('beforeend', template(data[i]))
    const productSection = document.getElementById('products_section_' + data[i].code)
    productSectionArray.push(productSection)



}
productSectionArray.map(el => {
    const priceElements = Array.from(el.querySelectorAll('.unit--select'))
    counter(el,'.stepper-input')

    priceElements.map(element => {

        element.addEventListener('click', () => {
            clearStyle(priceElements, 'unit--active')
            element.classList.add('unit--active')
            checkActiveElement(el, priceElements, 'unit--active', 'За м. кв.', 'За упаковку')


        })
    })
})
