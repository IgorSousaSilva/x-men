const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem)=> {
    personagem.addEventListener('mouseenter', ()=> {    
        removerPersonagemSelecionado()

     personagem.classList.add('selecionado') 
     
      alterarImagemPersonagemSelecionado(personagem)
     
        
        alterarNomePersonagemSelecionado(personagem)

        alterarDescricaoPersonagem(personagem)
    })
})






function removerPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        
     const idPersonagem = personagem.attributes.id.value

     imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png` 
}

function  alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')

    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem')

    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}
   
        
