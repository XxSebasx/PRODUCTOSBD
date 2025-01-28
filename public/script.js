
document.getElementById("addFormP").addEventListener("submit", addProduct)
document.getElementById("addFormM").addEventListener("submit", addMark)
document.getElementById("viewMarks").addEventListener("click", getMark)

async function addProduct(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const markName = document.getElementById("mark").value;

    const response = await fetch("/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            category,
            markName,
        }),
    });

    const newProduct = await response.json();

    console.log(newProduct);

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("mark").value = "";
}

async function addMark(e) {
    e.preventDefault();

    const CIF = document.getElementById("CIF").value;
    const markName = document.getElementById("nameMark").value;
    const country = document.getElementById("country").value;

    const response = await fetch("/marks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            CIF,
            markName,
            country,
        }),
    });
    const newMark = await response.json();
    console.log(newMark);

    document.getElementById("CIF").value = "";
}

async function getMark() {
    const CIF = document.getElementById("CIFSearch").value;
    const response = await fetch(`/mark/${CIF}`);
    const mark = await response.json();
}