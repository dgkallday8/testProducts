import {correctCode, fixedPrice, imgModified, unit, assocProducts} from './pureFunctions'

const template = dataProduct => {

    return `
        <div id="products_section_${dataProduct.code}">
            <div class="products_page pg_0">
                <div class="product product_horizontal">                                
                    <span class="product_code">Код: ${correctCode(dataProduct.code)}</span>
                    <div class="product_status_tooltip_container">
                        <span class="product_status">Наличие</span>
                    </div>                                
                    <div class="product_photo">
                        <a href="#" class="url--link product__link">
                            <img src="${imgModified(dataProduct.primaryImageUrl)}">
                        </a>                                    
                    </div>
                    <div class="product_description">
                        <a href="#" class="product__link">${dataProduct.title}</a>
                    </div>
                    <div class="product_tags hidden-sm">
                        <p>Могут понадобиться:</p>
                        ${assocProducts(dataProduct.assocProducts)}
                    </div>
                    <div class="product_units">
                        <div class="unit--wrapper">
                            <div class="unit--select unit--active">
                                <p class="ng-binding">За м. кв.</p>
                            </div>
                            <div class="unit--select">
                                <p class="ng-binding">За упаковку</p>
                            </div>
                        </div>
                    </div>
                    
                    <p class="product_price_club_card square">
                        <span class="product_price_club_card_text">По карте<br>клуба</span>
                        <span class="goldPrice">${fixedPrice(dataProduct.priceGoldAlt)}</span>
                        <span class="rouble__i black__i">
                            <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                            </svg>
                         </span>
                    </p>
                    <p class="product_price_default square">
                        <span class="retailPrice">${fixedPrice(dataProduct.priceRetailAlt)}</span>
                        <span class="rouble__i black__i">
                            <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                            </svg>
                         </span>
                    </p>
                    
                    <p class="product_price_club_card pack">
                        <span class="product_price_club_card_text">По карте<br>клуба</span>
                        <span class="goldPrice">${fixedPrice(dataProduct.priceGold)}</span>
                        <span class="rouble__i black__i">
                            <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                            </svg>
                         </span>
                    </p>
                    <p class="product_price_default pack">
                        <span class="retailPrice">${fixedPrice(dataProduct.priceRetail)}</span>
                        <span class="rouble__i black__i">
                            <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                            </svg>
                         </span>
                    </p>
                    
                    <div class="product_price_points">
                        <p class="ng-binding">Можно купить за 231,75 балла</p>
                    </div>
                    <div class="list--unit-padd"></div>
                    <div class="list--unit-desc">
                        <div class="unit--info">
                            <div class="unit--desc-i"></div>
                            <div class="unit--desc-t">
                                <p>
                                    <span class="ng-binding">${unit(dataProduct.unitFull)}</span>
                                    <span class="unit--infoInn">${dataProduct.unitRatio} ${dataProduct.unit} = ${fixedPrice(dataProduct.unitRatioAlt)} ${dataProduct.unitAlt}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="product__wrapper">
                        <div class="product_count_wrapper">
                            <div class="stepper">
                                <input class="product__count stepper-input" type="text" value="1">
                                <span class="stepper-arrow up"></span>
                                <span class="stepper-arrow down"></span>                                            
                            </div>
                        </div>
                        <span class="btn btn_cart" data-url="/cart/" data-product-id="${dataProduct.productId}">
                            <svg class="ic ic_cart">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                            </svg>
                            <span class="ng-binding">В корзину</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `
}
export { template }