const testData = document.getElementById("test");

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let listHtml = "<ul>";
            data.forEach(element => {
                listHtml += `
                            <li>${element.id} - ${element.title}</li>
                        `;
            });
            listHtml += "</ul>"
            testData.innerHTML = listHtml;
        })
}
loadData();
function putData() {
    fetch("https://jsonplaceholder.typicode.com/albums/2", {
        method: "PUT",
        body: JSON.stringify({
            userId: 1,
            id: 2,
            title: "Đ",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        });
}
putData()