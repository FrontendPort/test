// Получение элементов 
// найти элемент по его идентификатору 
document.getElementById("id");
// найти элементы по их классу
document.getElementsByClassName("class");
// найти элементы по значению атрибута name 
document.getElementsByName("name");
// найти элементы по их имени тегу 
document.getElementsByTagName("tag");
// найти первый элемент, соответствующий селектору
document.querySelector("selector");
// найти все элементы, соответствующие селектору
document.querySelectorAll("selector");

// создание/добавление/удаление элементов
// создать элемент
document.createElement('tagName');
// создать текстовую ноду
document.createTextNode('text');
// добавить child в конец elem
elem.appendChild(child);
// удалить child у elem
elem.removeChild(child);
// заменить child на выбранный элемент
elem.replaceChild(newChild, oldChild);
// удалить элемент
elem.remove()

// модификация элементов
// изменение содержимого
elem.outerHTML = "<h2>OuterHTML</h2>";
elem.innerHTML = "New <strong>inner</strong>";
// изменение текстового содержимого
elem.textContent = "New textContent";
// изменение стилей
elem.style = "color: blue;";

// доступ к родителю, детям, соседям
// поулучить дочерние элементы
elem.children; elem.childNodes;
// получить первого потомка
elem.firstChildElement; elem.firstChild;
// получить последнего потомка
elem.lastChildElement; elem.lastChild;
// получить родителя
elem.parentELement; elem.parentNode;
// предущий элемент/узел
elem.previousElementSibling; elem.previousSibling;
// следующий элемент/узел
elem.previousElementSibling; elem.previousSibling;


// Модификация атрибутов
// получить значение атрибута
elem.getAttribute('title');
// установить новый атрибут/значение
elem.setAttribute('title', 'value');
// является атрибутом элемента true/false
elem.hasAttribute('title');
// удалить атрибут с элемента
elem.removeAttribute('title');

// Модификация классов
elem.classList; // доступ к классам в виде списка
elem.classList.add('class'); // добавить класс
elem.classList.remove('class'); // удаление класса
// добавить/удалить класс, если он есть
elem.classList.toggle('class');
// проверить содержит ли элемент класс true/false
elem.classList.contains('class');