import Cookies from 'js-cookie';
import router from '../router/index';

export function login() {
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
export function sair() {
    Cookies.remove('id');
    router.push('/');
    console.log('aaaaaa')
    console.log(Cookies.get('id'))
}