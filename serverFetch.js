// const Http = new XMLHttpRequest()
const url = "https://jsonplaceholder.typicode.com/posts"

// Http.open ("GET", url);
// Http.send();

// Http.onreadystatechange = () => {
//     console.log(Http.responseText);
// }

const arrayData = [];

fetch ("https://jsonplaceholder.typicode.com/posts")
    .then ((response) =>
    response.json()
    )
    .then ((data) => {
        arrayData.push(data)
        info_data(arrayData)
        Filtre_data(arrayData, "sunt")
    });


function info_data(array_respons) {
    array_respons.forEach(element => {
        element.forEach(item => {
            const body = document.querySelector("body")
            const tag_h1 = document.createElement("h1")
            tag_h1.innerHTML = item.title
            tag_h1.className = "title"
            const tag_p = document.createElement("p")
            tag_p.innerHTML = item.body
            tag_p.className = "info_content"

            const div = document.createElement("div")
            div.className = "container"
            div.appendChild(tag_h1)
            div.appendChild(tag_p)
            body.append(div)

        })
    });
}


const arr = [
    [
    {body: "aaa", title: "Salut"},
    {body: "dadad", title: "Hello"},
    {body: "fdfdf", title: "Privet"}
    
    ]
]
info_data(arr)
function Filtre_data(params, data_info) {
    params.forEach(element => {
        element.forEach(item =>{
            if (item.title.includes(data_info)) {
                console.log(item);
            } 
            else {
                console.log("nu-i");
            }
        })
           
        })
    };

// Filtre_data(arr, "Salut")

