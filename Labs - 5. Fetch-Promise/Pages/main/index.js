import {ProductCardComponent} from "../../Components/product-card/index.js";
import {ProductPage} from "../products/index.js";
import {ajax} from "../../Modules/ajax.js";
import {urls} from "../../Modules/urls.js";
import {groupId, sortVk} from "../../Modules/consts.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    getData() {
        ajax.post(urls.getGroupMembers(groupId, sortVk), (data) => {
            this.renderData(data.response.items)
        })
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        this.getData()
    }
    
}