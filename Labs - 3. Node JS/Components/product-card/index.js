export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }
    getHTML(data) {
        return (
            `
            <div style="margin-right: 10px;"> 
                <div class="card bcard" style="width: 25vw; height: 70vh; background-image: url(${data.src}); background-size: cover;">
                    <div class="card-body" style="background-color: rgba(0, 0, 0, 0.5); bottom: 0; height: fit-content; position: absolute; width: 100%;">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                    </div>
                        
                </div>
                <div class="btn-group">
                            <a href="#" class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Заказать дизайн</a>
                </div>
            `
        )
    }
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }
    
    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}