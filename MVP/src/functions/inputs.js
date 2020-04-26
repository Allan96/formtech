import Cookies from 'js-cookie';
import router from '../router/index';

export function addInput() {
    this.perguntas.push({
        type: "text",
        pergunta: "Insira aqui a fala do seu bot",
        resposta: "",
        buttons: []
    });
}

export function addButton(val) {
    if (this.perguntas[val].buttons.length < 3) {
        this.perguntas[val].buttons.push({
            name: 'Botão'
        });
        // console.log(this.perguntas);
    } else {
        // console.log('Muito botão');
    }

}

export function deleteInput(index) {
    this.perguntas.splice(index, 1);
}

export function deleteButton(children, index) {
    console.log(this.perguntas[index].buttons.splice(children, 1));
}

export function save() {
    this.$http.post('http://localhost:3333/chat', {
            perguntas: this.perguntas
        }, { params: { id: this.id, nome: this.nome, user_id: Cookies.get('id') }, headers: { 'x-access-token': Cookies.get('token') } })
        .then(res => {
            // console.log(res.body);
            if (res.body.id) {
                this.demo = `./chat/${ res.body.id }`,
                    this.id = res.body.id;
            }
        })
        .catch((error) => {
            const auth = error.body.auth
            if (!auth) {
                router.push('/');
            }
        });
}