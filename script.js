const desafios=[
    "resolver problemas de lógica",
    "aprender novas funções",
    "aprener novas funções",
    "criar novas soluções",
    "aprender padroes",
    "criar uma invemção"
];
function iniciarDesafio(){
    const name=document.getElementById("name")
    if(name ===""){
        alert("digite seu nome para começar!");
        return;
    }

    const numero=Math.floor(Math.random()*desafios.length)
    const desafio=desafios[numero];

    document.getElementById("resultado").innerHTML=
    "<h2>Olá ${name}</h2>"
    "<p>Seu desafio é: ${desafio}</p>"    
}
