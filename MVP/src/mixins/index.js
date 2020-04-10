import Cookies from 'js-cookie';
import router from '../router/index';
export default {
    methods: {
        addInput: function() {
            this.perguntas.push({
                type: "null",
                pergunta: "",
                resposta: "",
                buttons: []
            });
        },
        addButton: function(val) {
            if (this.perguntas[val].buttons.length < 3) {
                this.perguntas[val].buttons.push({
                    name: 'Botão'
                });
                console.log(this.perguntas);
            } else {
                console.log('Muito botão');
            }

        },
        deleteInput: function(index) {
            this.perguntas.splice(index, 1);
        },
        deleteButton: function(children, index) {
            console.log(this.perguntas[index].buttons.splice(children, 1));
        },
        next: function() {
            this.perguntaId++;
            this.indexValue++;
            console.log(this.perguntas);
        },
        resetChat: function() {
            this.indexValue = 0;
            this.perguntaId = 1;
            let i = 0;
            while (i < this.perguntas.length) {
                this.perguntas[i].resposta = "";
                i++;
            }
            console.log(this.perguntas);

        },
        save: function() {
            this.$http.post('http://localhost:3333/chat', {
                    perguntas: this.perguntas
                }, { params: { id: this.id, nome: this.nome, user_id: Cookies.get('id') }, headers: { 'x-access-token': Cookies.get('token') } })
                .then(res => {
                    console.log(res.body);
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
        },
        sair: function() {
            Cookies.remove('id');
            router.push('/');
            console.log('aaaaaa')
            console.log(Cookies.get('id'))
        },
        login() {
            this.$http.post('http://localhost:3333/login', {
                    email: this.email,
                    password: this.senha,
                })
                .then(function(res) {
                    if (res.body.auth) {
                        Cookies.set('token', res.body.token);
                        Cookies.set('id', res.body.users.id);
                        router.push('/dashboard');
                    }
                })
                .catch((error) => console.log(error))
        }
    }
}