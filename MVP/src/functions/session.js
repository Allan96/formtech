import Cookies from 'js-cookie';
import router from '../router/index';

export function login() {
    const vs = this.$vs;
    vs.loading({ type: 'corners', });
    this.$http.post('http://localhost:3333/login', {
            email: this.email,
            password: this.senha,
        })
        .then(function(res) {
            if (res.body.auth) {
                setTimeout(() => {
                    Cookies.set('token', res.body.token);
                    Cookies.set('id', res.body.users.id);
                    router.push('/dashboard');
                    vs.loading.close();

                }, 1000)
            } else {
                setTimeout(() => {
                    vs.notify({ title: 'Erro ao acessar a conta', text: 'Ops, parece que sua senha está errada ou essa conta não existe.', color: 'warning', icon: 'error', position: 'top-left' });
                    vs.loading.close();
                }, 1000);
            }
        })
        .catch((error) => console.log(error))
}
export function sair() {
    Cookies.remove('token');
    Cookies.remove('id');
    router.push('/');
}