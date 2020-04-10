export function next() {
    this.perguntaId++;
    this.indexValue++;
    // console.log(this.perguntas);
}
export function resetChat() {
    this.indexValue = 0;
    this.perguntaId = 1;
    let i = 0;
    while (i < this.perguntas.length) {
        this.perguntas[i].resposta = "";
        i++;
    }
    // console.log(this.perguntas);

}