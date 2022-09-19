const div = document.createElement("div");
const ul = document.createElement("ul");
const li_1 = document.createElement("li");
const li_2 = document.createElement("li");
const a_1 = document.createElement("a");
const a_2 = document.createElement("a");

div.append(ul);
ul.append(li_1, li_2);
li_1.append(a_1);
li_2.append(a_2);

a_1.setAttribute("href", "https://instagram.com/intocode");
a_1.textContent = "Наш инстаграм";

a_2.setAttribute("href", "https://intocode.ru");
a_2.textContent = "Наш сайт";

document.body.append(div);

console.log(document.body);
