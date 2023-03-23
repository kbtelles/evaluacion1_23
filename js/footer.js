function footer(){
    let foo = `
    <footer class="fin">
        <div class="fin1">
            <div class="fo1">
                <h1 class="text10">Logo</h1>
                <button class="bot01">dropdown</button>
            </div>
            <div class="fo2">
                <a class="link" href="./home.html" >
                    <h1 class="textfin">Home</h1>
                </a>
                <a class="link" href="./about1.html">
                    <h1 class="textfin">About</h1>
                </a>
                <a  class="link" href="./contact.html">
                    <h1 class="textfin">Contact</h1>
                </a>
            </div>
        </div>
    </footer>
    `
    
    

    let ultimo = document.querySelector(".footerr")
    ultimo.innerHTML = foo;
}

footer();

