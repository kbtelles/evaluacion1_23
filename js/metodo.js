

//Se quita el export y se convierte en función.
 function product(e){
    let item = `
    <div class="one">
    <img class="vacio" src="https://freeiconshop.com/wp-content/uploads/edd/image-solid.png" alt="">
    <h2 class="text4${e}"> ${data[e].titulo}</h2>
    <h2 class="text5${e}">${data[e].definicion}</h2>
    </div>

    `

    return item; // Para que sea una funcion que pueda retornar y se encierren las cosas que se quieran devolver
}

