class Ajax {
    async post(url, callback) {
        try { 
            //Делаем GET запрос на указанный урл
            const response = await fetch(url, { method: 'POST'});
            // возвращаем результат в случае успеха
            if (response.ok) { // если HTTP-статус в диапазоне 200-299
                let json = await response.json();
                callback(json);
                return json;
            } else {
                console.error("Ошибка HTTP: " + response.status);
            }
        } catch (e) {
            console.error(e);
        }
 }


    // post(url, callback) {
    //     fetch(url, {
    //         method: 'POST'
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         callback(data);
    //     })
    //     .catch(error => {
    //         // Обработка ошибок при запросе
    //         console.error('There has been a problem with your fetch operation:', error);
    //     });
    // }
}
export const ajax = new Ajax();