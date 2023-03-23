function imprimir(){
    let tododata = (document.querySelector(".our"));


    //PARA DOS PARAMETROS SE CIERRAN ENTRE PARENTESIS
    data.forEach((element, indice) => {
        let todo = document.createElement("div");
        todo.innerHTML = product(indice); // item es un método que vive en otra hoja, con paremtesis se vuelve funcion * indice = elemnt.id
        tododata.appendChild(todo)
    });


}
imprimir()
