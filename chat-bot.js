// Palavras fundados

export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
}

export const papoFurado={
    probablyWords: [
     "estado","futebol","governo","bola"

    ],
    matched: 0,

}
//Exportando todos os bancos 
export const todosBancos=
[palavrasEscolaFundador,palavrasCursosTecnicos,palavrasMatricula,papoFurado]


function showAnswer(index) {
    switch(index){
        case 0: 
            return "Quem fundou a escola foi João"
        case 1:
            return "Oferecemos os cursos técnicos "
        case 2:
            return  "Matricula do meu filho"
        default:
            return "Não sei responder a essa pergunta, ligar para a instituição"

    }

}

export function mostProbablyQuestion() {
    let matches=[
        palavrasEscolaFundador.matched,
        palavrasCursosTecnicos.matched,
        palavrasMatricula.matched,
        papoFurado.matched,

    ]
    console.log(matches)
    return showAnswer (matches.indexOf(Math.max(...matches)))


}
// Aumentamos o banco com papoFurado.