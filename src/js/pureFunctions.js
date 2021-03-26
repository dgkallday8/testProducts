function clearStyle(nodeList, nameStyle) {
    return Array.from(nodeList).map(el => el.classList.remove(nameStyle))
}
function correctCode(num) {
    return num.slice(5)
}

function fixedPrice(value) {
    return value - Math.floor(value) === 0 ? value : value.toFixed(2)
}

function unit(value) {
    return value === 'штука' ? 'Продается штуками:' : 'Продается упаковками:'
}

function checkActiveElement(divElement, nodeList, nameStyle, valueOne, valueTwo) {
    const packEl = Array.from(divElement.querySelectorAll('.pack'))
    const squareEl = Array.from(divElement.querySelectorAll('.square'))
    nodeList.forEach(element => {
        if (element.textContent.trim() === valueOne && element.classList.contains(nameStyle)) {
            packEl.map(el => el.style.display = 'none')
            squareEl.map(el => el.style.display = 'block')
        }
        if (element.textContent.trim() === valueTwo && element.classList.contains(nameStyle)) {
            squareEl.map(el => el.style.display = 'none')
            packEl.map(el => el.style.display = 'block')
        }
    })
}



function imgModified (url) {
    const urlArr = url.split('.')
    const exp = urlArr.pop()
    return urlArr.join('.') + '_220x220_1' + `.${exp}`
}
function assocProducts(productList) {
    const productsArray = productList.split(';\n')
    const lastEl = productsArray.pop().replace(';', '')
    productsArray.push(lastEl)
    return productsArray.map(el => {
        return `
            <a href="#" class="url--link">${el}</a>
        `
    })
}

function counter(divEl, inputSelector) {
    const up = divEl.querySelector('.up')
    const down = divEl.querySelector('.down')
    up.addEventListener('click', () => {
        const input = divEl.querySelector(inputSelector)
        return input.value++
    })
    down.addEventListener('click', () => {
        const input = divEl.querySelector(inputSelector)
        return input.value <= 1 ? 1 : input.value--
    })
}


export { clearStyle, checkActiveElement, fixedPrice, correctCode, unit, imgModified, assocProducts, counter }