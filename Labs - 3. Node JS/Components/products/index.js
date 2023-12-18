

export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div class="card mb-3" style="display: flex; flex-direction: column; background-color: transparent;">
                        <img src="${data.src}" class="img-fluid" alt="картинка" style="width=25vh; height=25vh;">
                        <button type="button" style="background-color: rgba(0, 0, 0, 0.05); border-color: gray; margin:10px; color: gray;" class="btn btn-lg btn-danger" data-toggle="popover" data-bs-title="Стоимость: 3300$" data-bs-content="В высокобюджетном черно-белом дизайне царит атмосфера роскоши и утонченности. Использование дорогих материалов и изысканных оттенков ч/б создает впечатление исключительной элегантности. Каждая деталь, будь то мебель или элементы декора, внимательно подобрана для создания гармонии и баланса. Оттенки черного и белого не просто контрастируют, они взаимодействуют, создавая визуальную симфонию роскоши.">Эклектика Сдержанной Элегантности</button>
                        <button type="button" style="background-color: rgba(0, 0, 0, 0.05); border-color: gray; margin:10px; margin-top:0px; margin-bottom:0px; color: gray;" class="btn btn-lg btn-danger" data-toggle="popover" data-bs-title="Стоимость: 2500$" data-bs-content="Среднебюджетный черно-белый дизайн вдохновлен принципами минимализма. Простые формы и четкие линии создают современный и стильный облик, сохраняя при этом функциональность пространства. Элементы мебели и декора могут быть более доступными, но внимание к деталям остается ключевым аспектом. Этот дизайн подчеркивает красоту простоты, добавляя утонченность через гармоничные композиции и стремление к функциональности.">Минимализм Черных Линий</button>
                        <button type="button" style="background-color: rgba(0, 0, 0, 0.05); border-color: gray; margin:10px; color: gray;" class="btn btn-lg btn-danger" data-toggle="popover" data-bs-title="Стоимость: 1200$" data-bs-content="В черно-белом дизайне с низким бюджетом акцент делается на индустриальном стиле. Сырые, недорогие материалы, такие как металл и бетон, создают неформальную, современную атмосферу. Этот стиль часто включает в себя открытые конструкции, подчеркивая их функциональность. Мебель и декор могут быть простыми и практичными, но вместе они создают стильное пространство, где грубость становится частью дизайнерского замысла.">Индустриальная Сущность</button>
            </div>
            `
        );
    }
    

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        $(function() {
          // Включаем поповер везде, где есть атрибут data-toggle="popover"
          $('[data-toggle="popover"]').popover({
          trigger: 'focus'
          }); 
        })
    }
}