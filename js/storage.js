localStorage.clear();


var dishes = {
    "menu": [
        {
            "id": 1,
            "category": 1,
            "name": "Суши",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "photo": 0,
            "price": 200
        },
        {
            "id": 2,
            "category": 1,
            "name": "Ещё одни Суши",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "photo": 0,
            "price": 250
        },
        {
            "id": 3,
            "category": 2,
            "name": "Ещё одни Суши",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "photo": 0,
            "price": 250
        }
    ]
};

downloadMenu();

//сериализация меню в строку
//localStorage ['dishes'] = JSON.stringify(dishes);

//десериализация и берём массив объектов с блюдами
//var arr = JSON.parse(localStorage ['dishes']).menu;


//возвращает массив объектов с блюдами
function loadMenu()
{
    return JSON.parse(localStorage['dishes']).menu;
}

function downloadMenu()
{
    localStorage ['dishes'] = JSON.stringify(dishes);
}
