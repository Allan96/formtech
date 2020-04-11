export function next() {
    this.perguntaId++;
    this.indexValue++;
    let j = 0;
    let respostasAPI = [];
    while (j < this.perguntas.length) {
        respostasAPI.push({ resposta: this.perguntas[j].resposta, pergunta: this.perguntas[j].pergunta });
        j++;
    }
    if (this.perguntaId > this.perguntas.length) {
        this.$http.post('http://localhost:3333/resposta', {
                resposta: respostasAPI,
                chat_id: this.$route.params.id
            })
            .then(res => {
                const id = res.body.id;
                if (id) {
                    console.log('SUCESSO');
                }
            })
            .catch((error) => console.log(error));
    }
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