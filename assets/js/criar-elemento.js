function criarImagem(){
    const imagem = document.createElement("img");
    imagem.setAttribute("alt", "pico de blumenau");
    imagem.setAttribute("src", "https://media-cdn.tripadvisor.com/media/photo-s/0e/34/4c/c1/vista-do-spitzkopf.jpg")

    const body = document.querySelector("body");
    body.appendChild(imagem);
}