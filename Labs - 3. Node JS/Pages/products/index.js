import {ProductComponent} from "../../Components/products/index.js";
import {BackButtonComponent} from "../../Components/back-button/index.js";
import {MainPage} from "../main/index.js";



export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return {
            id: 1,
            src: "2.avif",
            title: ``,
            text: ""
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"><div/>
            `
        )
    }
    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}