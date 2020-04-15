(function(t) {
    function e(e) { for (var s, r, i = e[0], l = e[1], c = e[2], p = 0, d = []; p < i.length; p++) r = i[p], Object.prototype.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]), n[r] = 0; for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        u && u(e); while (d.length) d.shift()(); return o.push.apply(o, c || []), a() }

    function a() { for (var t, e = 0; e < o.length; e++) { for (var a = o[e], s = !0, i = 1; i < a.length; i++) { var l = a[i];
                0 !== n[l] && (s = !1) }
            s && (o.splice(e--, 1), t = r(r.s = a[0])) } return t } var s = {},
        n = { app: 0 },
        o = [];

    function r(e) { if (s[e]) return s[e].exports; var a = s[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports }
    r.m = t, r.c = s, r.d = function(t, e, a) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }) }, r.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var a = Object.create(null); if (r.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var s in t) r.d(a, s, function(e) { return t[e] }.bind(null, s)); return a }, r.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "/"; var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = i.push.bind(i);
    i.push = e, i = i.slice(); for (var c = 0; c < i.length; c++) e(i[c]); var u = l;
    o.push([0, "chunk-vendors"]), a() })({ 0: function(t, e, a) { t.exports = a("56d7") }, "034f": function(t, e, a) { "use strict"; var s = a("85ec"),
            n = a.n(s);
        n.a }, 1: function(t, e) {}, "191e": function(t, e, a) {}, "32cf": function(t, e, a) {}, "33d5": function(t, e, a) { t.exports = a.p + "img/wave-1.9a2780e1.svg" }, 3771: function(t, e, a) {}, 5244: function(t, e, a) { "use strict"; var s = a("191e"),
            n = a.n(s);
        n.a }, "56d7": function(t, e, a) { "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d"); var s = a("2b0e"),
            n = a("28dd"),
            o = a("fb9a"),
            r = a.n(o),
            i = (a("04f2"), function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("router-view") }),
            l = [],
            c = { name: "App" },
            u = c,
            p = (a("034f"), a("2877")),
            d = Object(p["a"])(u, i, l, !1, null, null, null),
            m = d.exports,
            v = a("8c4f"),
            f = a("a78e"),
            b = a.n(f),
            h = function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { staticClass: "container-fluid py-5" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-2 mb-5" }, [a("router-link", { attrs: { to: "/dashboard" } }, [t._v(" Voltar para o dashboard a")])], 1), a("div", { staticClass: "col-4 mb-5" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: t.addInput } }, [t._v("Adicionar")])]), a("div", { staticClass: "col-4 mb-5" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: t.save } }, [t._v("Salvar")]), t.id ? a("a", { staticClass: "btn btn-primary", attrs: { href: t.demo, target: "_blank" } }, [t._v("Ver chat")]) : t._e()]), a("div", { staticClass: "col-2 mb-5" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: t.resetChat } }, [t._v("Reload")])]), a("div", { staticClass: "col-4" }, [a("div", { staticClass: "form-group" }, [a("input", { directives: [{ name: "model", rawName: "v-model", value: t.nome, expression: "nome" }], staticClass: "form-control", attrs: { type: "text", "aria-describedby": "helpId", placeholder: "" }, domProps: { value: t.nome }, on: { input: function(e) { e.target.composing || (t.nome = e.target.value) } } })]), t._l(t.perguntas, (function(e, s) { return a("div", { key: s, staticClass: "form-group" }, [a("div", { staticClass: "form-group" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function(e) { return t.deleteInput(s) } } }, [t._v("Apagar")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: e.pergunta, expression: "per.pergunta" }], staticClass: "form-control mb-2", attrs: { type: "text", "aria-describedby": "helpId", placeholder: "" }, domProps: { value: e.pergunta }, on: { input: function(a) { a.target.composing || t.$set(e, "pergunta", a.target.value) } } }), a("select", { directives: [{ name: "model", rawName: "v-model", value: e.type, expression: "per.type" }], staticClass: "form-control", on: { change: function(a) { var s = Array.prototype.filter.call(a.target.options, (function(t) { return t.selected })).map((function(t) { var e = "_value" in t ? t._value : t.value; return e }));
                                t.$set(e, "type", a.target.multiple ? s : s[0]) } } }, [a("option", { attrs: { value: "null" } }, [t._v("Selecione um tipo de input")]), a("option", { attrs: { value: "button" } }, [t._v("Botão")]), a("option", { attrs: { value: "text" } }, [t._v("Texto")])]), "button" == e.type ? a("div", { staticClass: "p-2" }, [t._l(e.buttons, (function(e, n) { return a("div", { key: n, staticClass: "form-group" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function(e) { return t.deleteButton(n, s) } } }, [t._v("Apagar")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: e.name, expression: "button.name" }], staticClass: "form-control", attrs: { type: "text", "aria-describedby": "helpId", placeholder: "" }, domProps: { value: e.name }, on: { input: function(a) { a.target.composing || t.$set(e, "name", a.target.value) } } })]) })), a("button", { staticClass: "btn btn-secondary w-100", attrs: { type: "button" }, on: { click: function(e) { return t.addButton(s) } } }, [t._v("Adicionar Botões")])], 2) : t._e()])]) }))], 2), a("div", { staticClass: "offset-1 col-7" }, t._l(t.perguntas.slice(0, t.perguntaId), (function(e, s) { return a("div", { key: s, staticClass: "form-group mb-3" }, [a("span", { staticClass: "p-2 d-block mb-1", staticStyle: { border: "1px solid black" } }, [t._v(" " + t._s(e.pergunta) + " ")]), e.resposta && s != t.indexValue ? a("span", { staticClass: "p-2 d-block text-right", staticStyle: { border: "1px solid red" } }, [t._v(t._s(e.resposta))]) : t._e(), s == t.indexValue && "text" == e.type ? a("input", { directives: [{ name: "model", rawName: "v-model", value: e.resposta, expression: "falas.resposta" }], staticClass: "form-control", attrs: { type: "text", placeholder: "Insira sua reposta" }, domProps: { value: e.resposta }, on: { keyup: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.next(e) }, input: function(a) { a.target.composing || t.$set(e, "resposta", a.target.value) } } }) : t._e(), s == t.indexValue && "button" == e.type ? a("div", t._l(e.buttons, (function(s, n) { return a("div", { key: n, staticClass: "form-group" }, [a("input", { directives: [{ name: "model", rawName: "v-model", value: s.name, expression: "button.name" }], staticClass: "btn btn-primary", attrs: { name: "", id: "", type: "button" }, domProps: { value: s.name }, on: { click: function(a) { e.resposta += s.name, t.next() }, input: function(e) { e.target.composing || t.$set(s, "name", e.target.value) } } })]) })), 0) : t._e()]) })), 0)])]) },
            g = [];
        a("a434");

        function y() { this.perguntas.push({ type: "null", pergunta: "", resposta: "", buttons: [] }) }

        function _(t) { this.perguntas[t].buttons.length < 3 && this.perguntas[t].buttons.push({ name: "Botão" }) }

        function C(t) { this.perguntas.splice(t, 1) }

        function x(t, e) { console.log(this.perguntas[e].buttons.splice(t, 1)) }

        function k() { var t = this;
            this.$http.post("http://localhost:3333/chat", { perguntas: this.perguntas }, { params: { id: this.id, nome: this.nome, user_id: b.a.get("id") }, headers: { "x-access-token": b.a.get("token") } }).then((function(e) { e.body.id && (t.demo = "./chat/".concat(e.body.id), t.id = e.body.id) })).catch((function(t) { var e = t.body.auth;
                e || bt.push("/") })) }

        function w() { this.perguntaId++, this.indexValue++; var t = 0,
                e = []; while (t < this.perguntas.length) e.push({ resposta: this.perguntas[t].resposta, pergunta: this.perguntas[t].pergunta }), t++;
            this.perguntaId > this.perguntas.length && this.$http.post("http://localhost:3333/resposta", { resposta: e, chat_id: this.$route.params.id }).then((function(t) { var e = t.body.id;
                e && console.log("SUCESSO") })).catch((function(t) { return console.log(t) })) }

        function $() { this.indexValue = 0, this.perguntaId = 1; var t = 0; while (t < this.perguntas.length) this.perguntas[t].resposta = "", t++ } var I = { data: function() { return { id: "", demo: "", nome: "Meu formulário", indexValue: 0, perguntaId: 1, perguntas: [{ type: "text", pergunta: "Oi, estou aqui para te ajudar! Para comeÃ§ar, qual Ã© o seu nome?", resposta: "", buttons: [] }] } }, methods: { addInput: y, addButton: _, deleteInput: C, deleteButton: x, save: k, next: w, resetChat: $ } },
            O = I,
            E = Object(p["a"])(O, h, g, !1, null, null, null),
            S = E.exports,
            P = function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { staticClass: "container-fluid py-5" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-2 mb-5" }, [a("router-link", { attrs: { to: "/dashboard" } }, [t._v(" Voltar para o dashboard")])], 1), a("div", { staticClass: "col-4 mb-5" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: t.addInput } }, [t._v("Adicionar")])]), a("div", { staticClass: "col-4 mb-5" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: t.save } }, [t._v("Salvar")])]), a("div", { staticClass: "col-2 mb-5" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: t.resetChat } }, [t._v("Reload")])]), a("div", { staticClass: "col-4" }, [a("div", { staticClass: "form-group" }, [a("input", { directives: [{ name: "model", rawName: "v-model", value: t.nome, expression: "nome" }], staticClass: "form-control", attrs: { type: "text", "aria-describedby": "helpId", placeholder: "" }, domProps: { value: t.nome }, on: { input: function(e) { e.target.composing || (t.nome = e.target.value) } } })]), t._l(t.perguntas, (function(e, s) { return a("div", { key: s, staticClass: "form-group" }, [a("div", { staticClass: "form-group" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function(e) { return t.deleteInput(s) } } }, [t._v("Apagar")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: e.pergunta, expression: "per.pergunta" }], staticClass: "form-control mb-2", attrs: { type: "text", "aria-describedby": "helpId", placeholder: "" }, domProps: { value: e.pergunta }, on: { input: function(a) { a.target.composing || t.$set(e, "pergunta", a.target.value) } } }), a("select", { directives: [{ name: "model", rawName: "v-model", value: e.type, expression: "per.type" }], staticClass: "form-control", on: { change: function(a) { var s = Array.prototype.filter.call(a.target.options, (function(t) { return t.selected })).map((function(t) { var e = "_value" in t ? t._value : t.value; return e }));
                                t.$set(e, "type", a.target.multiple ? s : s[0]) } } }, [a("option", { attrs: { value: "null" } }, [t._v("Selecione um tipo de input")]), a("option", { attrs: { value: "button" } }, [t._v("Botão")]), a("option", { attrs: { value: "text" } }, [t._v("Texto")])]), "button" == e.type ? a("div", { staticClass: "p-2" }, [t._l(e.buttons, (function(e, n) { return a("div", { key: n, staticClass: "form-group" }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: function(e) { return t.deleteButton(n, s) } } }, [t._v("Apagar")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: e.name, expression: "button.name" }], staticClass: "form-control", attrs: { type: "text", "aria-describedby": "helpId", placeholder: "" }, domProps: { value: e.name }, on: { input: function(a) { a.target.composing || t.$set(e, "name", a.target.value) } } })]) })), a("button", { staticClass: "btn btn-secondary w-100", attrs: { type: "button" }, on: { click: function(e) { return t.addButton(s) } } }, [t._v("Adicionar Botões")])], 2) : t._e()])]) }))], 2), a("div", { staticClass: "offset-1 col-7" }, t._l(t.perguntas.slice(0, t.perguntaId), (function(e, s) { return a("div", { key: s, staticClass: "form-group mb-3" }, [a("span", { staticClass: "p-2 d-block mb-1", staticStyle: { border: "1px solid black" } }, [t._v(" " + t._s(e.pergunta) + " ")]), e.resposta && s != t.indexValue ? a("span", { staticClass: "p-2 d-block text-right", staticStyle: { border: "1px solid red" } }, [t._v(t._s(e.resposta))]) : t._e(), s == t.indexValue && "text" == e.type ? a("input", { directives: [{ name: "model", rawName: "v-model", value: e.resposta, expression: "falas.resposta" }], staticClass: "form-control", attrs: { type: "text", placeholder: "Insira sua reposta" }, domProps: { value: e.resposta }, on: { keyup: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.next(e) }, input: function(a) { a.target.composing || t.$set(e, "resposta", a.target.value) } } }) : t._e(), s == t.indexValue && "button" == e.type ? a("div", t._l(e.buttons, (function(s, n) { return a("div", { key: n, staticClass: "form-group" }, [a("input", { directives: [{ name: "model", rawName: "v-model", value: s.name, expression: "button.name" }], staticClass: "btn btn-primary", attrs: { name: "", id: "", type: "button" }, domProps: { value: s.name }, on: { click: function(a) { e.resposta += s.name, t.next() }, input: function(e) { e.target.composing || t.$set(s, "name", e.target.value) } } })]) })), 0) : t._e()]) })), 0)])]) },
            j = [],
            N = { data: function() { return { id: "", demo: "", nome: "Meu formulário", indexValue: 0, perguntaId: 1, perguntas: [] } }, methods: { addInput: y, addButton: _, deleteInput: C, deleteButton: x, save: k, next: w, resetChat: $ }, created: function() { var t = this;
                    this.$http.get("http://localhost:3333/chat", { params: { id: this.$route.params.id }, headers: { "x-access-token": b.a.get("token") } }).then((function(e) { t.id = e.body.id, t.nome = e.body.nome, t.perguntas = JSON.parse(e.body), console.log(t.perguntas) })).catch((function(t) { var e = t.body.auth;
                        e || bt.push("/") })) } },
            V = N,
            A = Object(p["a"])(V, P, j, !1, null, null, null),
            B = A.exports,
            T = function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { staticClass: "container py-5" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-12" }, t._l(t.perguntas.slice(0, t.perguntaId), (function(e, s) { return a("div", { key: s, staticClass: "form-group mb-3 row" }, [a("div", { staticClass: "p-2 col-7  d-flex align-self-start", staticStyle: { border: "1px solid black" } }, [t._v(" " + t._s(e.pergunta) + " ")]), e.resposta && s != t.indexValue ? a("div", { staticClass: "p-2 d-block text-right col-7 offset-5 my-3", staticStyle: { border: "1px solid red" } }, [t._v(t._s(e.resposta))]) : t._e(), s == t.indexValue && "text" == e.type ? a("input", { directives: [{ name: "model", rawName: "v-model", value: e.resposta, expression: "falas.resposta" }], staticClass: "form-control", attrs: { type: "text", placeholder: "Insira sua reposta" }, domProps: { value: e.resposta }, on: { keyup: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.next(e) }, input: function(a) { a.target.composing || t.$set(e, "resposta", a.target.value) } } }) : t._e(), s == t.indexValue && "button" == e.type ? a("div", t._l(e.buttons, (function(s, n) { return a("div", { key: n, staticClass: "form-group" }, [a("input", { directives: [{ name: "model", rawName: "v-model", value: s.name, expression: "button.name" }], staticClass: "btn btn-primary", attrs: { name: "", id: "", type: "button" }, domProps: { value: s.name }, on: { click: function(a) { e.resposta += s.name, t.next() }, input: function(e) { e.target.composing || t.$set(s, "name", e.target.value) } } })]) })), 0) : t._e()]) })), 0)])]) },
            q = [],
            M = { data: function() { return { indexValue: 0, perguntaId: 1, perguntas: [] } }, created: function() { var t = this;
                    this.$http.get("http://localhost:3333/view/chat", { params: { id: this.$route.params.id } }).then((function(e) { t.perguntas = JSON.parse(e.body.perguntas) })).catch((function(t) { return console.log(t) })) }, methods: { next: w } },
            J = M,
            z = (a("adad"), Object(p["a"])(J, T, q, !1, null, "1f531842", null)),
            R = z.exports,
            D = function() { var t = this,
                    e = t.$createElement,
                    s = t._self._c || e; return s("div", [s("Navbar"), s("header", [s("div", { staticClass: "container-fluid" }, [s("div", { staticClass: "row d-flex align-content-center" }, [s("div", { staticClass: "col-12 offset-md-1 col-md-4 align-self-center order-md-1 order-2 mt-5 mt-md-0" }, [s("legend", [t._v(" formtech ")]), t._m(0), s("p", [t._v(" viemos para transformarmos formulários super complexos e com diversos passos em uma simples conversa com nosso bot. ")]), s("vs-button", { attrs: { color: "primary", type: "filled" } }, [t._v("conheça a plataforma")])], 1), t._m(1)])])]), s("section", { attrs: { id: "duvida" } }, [s("div", { staticClass: "container-fluid" }, [s("div", { staticClass: "row d-flex align-content-center" }, [t._m(2), s("div", { staticClass: "col-12 col-md-4 offset-md-1 align-self-center mt-5 mt-sm-0" }, [t._m(3), s("p", [t._v(" faça seu cliente ter a sensação de estar conversando com um amigo próximo, é 3 vezes mais provável que os clientes chegue até o fim do seu formulário quando a experiência é mais humanizada e envolvente. ")]), s("vs-button", { attrs: { color: "primary", type: "filled" } }, [t._v("conheça a plataforma")])], 1)])])]), s("img", { staticClass: "w-100 img-fluid", staticStyle: { "margin-top": "-2px" }, attrs: { src: a("33d5"), alt: "" } }), s("section", { attrs: { id: "bot" } }, [s("div", { staticClass: "container-fluid" }, [s("div", { staticClass: "row d-flex align-content-center" }, [s("div", { staticClass: "col-12 col-md-4 offset-md-1 align-self-center" }, [t._m(4), s("p", [t._v(" esta é uma ferramenta que vem mudando a maneira como as empresas se relacionam com seus clientes, transformamos formulários complexos usando o melhor que a tecnologia tem a oferecer. ")]), s("vs-button", { attrs: { color: "primary", type: "filled" } }, [t._v("conheça a plataforma")])], 1), t._m(5)])])]), s("section", { attrs: { id: "newsletter" } }, [s("div", { staticClass: "container-fluid" }, [s("div", { staticClass: "row d-flex align-content-center" }, [t._m(6), s("div", { staticClass: "col-12 col-md-4  offset-md-1 align-self-center d-flex align-items-start" }, [s("vs-input", { staticClass: "w-100 mr-3 my-0", attrs: { color: "#fff", icon: "email", "label-placeholder": "insira seu email" } }), s("vs-button", [t._v("enviar")])], 1)])])]), t._m(7)], 1) },
            F = [function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("h1", [a("b", [t._v(" transforme seu formulário")]), t._v(" em uma conversa. ")]) }, function() { var t = this,
                    e = t.$createElement,
                    s = t._self._c || e; return s("div", { staticClass: "col-12 col-md-6 offset-md-1 order-md-2 order-1  mt-5 mt-md-0" }, [s("img", { staticClass: "img-fluid", attrs: { src: a("7e46"), alt: "" } })]) }, function() { var t = this,
                    e = t.$createElement,
                    s = t._self._c || e; return s("div", { staticClass: "col-12 col-md-4 align-self-center offset-md-1" }, [s("img", { staticClass: "img-fluid", attrs: { src: a("e78a"), alt: "" } })]) }, function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("h2", [a("b", [t._v("expanda seu negócio")]), t._v(", potencialize suas vendas. ")]) }, function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("h2", [t._v(" o fututo é "), a("br"), t._v(" "), a("b", [t._v("conversacional")]), t._v(". ")]) }, function() { var t = this,
                    e = t.$createElement,
                    s = t._self._c || e; return s("div", { staticClass: "col-12 col-md-4  offset-md-1" }, [s("img", { staticClass: "img-fluid", attrs: { src: a("c839"), alt: "" } })]) }, function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { staticClass: "col-12 col-md-4 offset-md-1 align-self-center" }, [a("h4", [t._v(" entre para nossa lista e receba "), a("b", [t._v("conteúdos exclusivos")]), t._v(" e com prioridade ")])]) }, function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("footer", { staticClass: "py-4" }, [a("div", { staticClass: "container-fluid" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-12 col-sm-5 offset-sm-1" }, [a("p", { staticClass: "m-0" }, [a("b", [t._v("formtech")]), t._v(" © 2020 - Todos os direitos reservados ")])]), a("div", { staticClass: "col-12 col-sm-4 text-right" }, [a("p", { staticClass: "m-0" }, [t._v(" Todos os direitos reservados. ")])])])])]) }],
            U = function() { var t = this,
                    e = t.$createElement,
                    s = t._self._c || e; return s("div", [s("vs-navbar", { staticClass: "nabarx", attrs: { color: "transparent" } }, [s("div", { attrs: { slot: "title" }, slot: "title" }, [s("vs-navbar-title", [s("img", { attrs: { src: a("9b19") } })])], 1), s("vs-navbar-item", { attrs: { index: "0" } }, [s("vs-dropdown", { attrs: { "vs-custom-content": "", "vs-trigger-click": "" } }, [s("a", { staticClass: "a-icon", attrs: { "href.prevent": "" } }, [s("vs-button", { staticClass: "registro", attrs: { color: "white", type: "filled" } }, [t._v("registre-se")])], 1), s("vs-dropdown-menu", { staticClass: "loginx" }, [s("h3", [t._v("registre-se agora")]), s("vs-input", { attrs: { icon: "person", type: "text", "label-placeholder": "insira seu nome" } }), s("vs-input", { attrs: { icon: "email", type: "text", "label-placeholder": "insira seu e-mail" } }), s("vs-input", { attrs: { icon: "lock", type: "password", "label-placeholder": "insira sua senha" } }), s("vs-input", { attrs: { icon: "lock", type: "password", "label-placeholder": "confirme sua senha" } }), s("vs-button", { staticClass: "entrar", attrs: { width: "100%", color: "#0060FE" } }, [t._v("finalizar cadastro")])], 1)], 1)], 1), s("vs-navbar-item", { attrs: { index: "1" } }, [s("vs-dropdown", { attrs: { "vs-custom-content": "", "vs-trigger-click": "" } }, [s("a", { staticClass: "a-icon", attrs: { "href.prevent": "" } }, [s("vs-button", { attrs: { color: "white", type: "border" } }, [t._v("entrar")])], 1), s("vs-dropdown-menu", { staticClass: "loginx" }, [s("h3", [t._v("acesse sua conta")]), s("form", { on: { submit: function(e) { return e.preventDefault(), t.login(e) } } }, [s("vs-input", { attrs: { icon: "person", type: "text", "label-placeholder": "insira seu e-mail" }, model: { value: t.email, callback: function(e) { t.email = e }, expression: "email" } }), s("vs-input", { attrs: { icon: "lock", type: "password", "label-placeholder": "insira sua senha" }, model: { value: t.senha, callback: function(e) { t.senha = e }, expression: "senha" } }), s("button", { staticClass: "vs-button entrar", attrs: { type: "submit" } }, [t._v("continuar")])], 1)])], 1)], 1)], 1)], 1) },
            G = [];

        function H() { var t = this.$vs;
            t.loading({ type: "corners" }), this.$http.post("http://localhost:3333/login", { email: this.email, password: this.senha }).then((function(e) { e.body.auth ? setTimeout((function() { b.a.set("token", e.body.token), b.a.set("id", e.body.users.id), bt.push("/dashboard"), t.loading.close() }), 1e3) : setTimeout((function() { t.notify({ title: "Erro ao acessar a conta", text: "Ops, parece que sua senha está errada ou essa conta não existe.", color: "warning", icon: "error", position: "top-left" }), t.loading.close() }), 1e3) })).catch((function(t) { return console.log(t) })) }

        function K() { b.a.remove("token"), b.a.remove("id"), bt.push("/") } var L = { data: function() { return { email: "", senha: "" } }, methods: { login: H } },
            Q = L,
            W = (a("b98a"), Object(p["a"])(Q, U, G, !1, null, "062b4e4d", null)),
            X = W.exports,
            Y = { components: { Navbar: X }, data: function() { return {} }, methods: {} },
            Z = Y,
            tt = (a("5244"), Object(p["a"])(Z, D, F, !1, null, "dbbf81e4", null)),
            et = tt.exports,
            at = function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { staticClass: "container" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-12 pt-5" }, [a("router-link", { staticClass: "btn btn-primary", attrs: { to: "/chat" } }, [t._v("Criar chat")]), a("button", { staticClass: "btn btn-primary", attrs: { type: "button" }, on: { click: t.sair } }, [t._v(" Sair")])], 1), a("div", { staticClass: "col-12 py-4" }, t._l(t.perguntasAll, (function(e, s) { return a("div", { key: s, staticClass: "mb-3" }, [t._v(" " + t._s(e.nome) + " "), a("a", { attrs: { target: "_blank", href: "/chat/" + e.id } }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" } }, [t._v("Ver chat")])]), a("router-link", { attrs: { to: "/chat/edit/" + e.id } }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" } }, [t._v("Editar chat")])]), a("router-link", { attrs: { to: "/respostas/" + e.id } }, [a("button", { staticClass: "btn btn-primary", attrs: { type: "button" } }, [t._v("Ver respostas")])])], 1) })), 0)])]) },
            st = [],
            nt = { data: function() { return { perguntasAll: [], user_id: b.a.get("id") } }, methods: { sair: K }, created: function() { var t = this;
                    this.$http.get("http://localhost:3333/list", { params: { user_id: b.a.get("id") }, headers: { "x-access-token": b.a.get("token") } }).then((function(e) { console.log(e.body), t.perguntasAll = e.body })).catch((function(t) { var e = t.body.auth;
                        e || bt.push("/") })) } },
            ot = nt,
            rt = (a("c121"), Object(p["a"])(ot, at, st, !1, null, "8562d980", null)),
            it = rt.exports,
            lt = function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", t._l(t.respostas, (function(e, s) { return a("div", { key: s, staticClass: "form-group" }, t._l(JSON.parse(e.resposta), (function(e, s) { return a("div", { key: s, staticClass: "form-group" }, [t._v(" " + t._s(e.pergunta) + " : " + t._s(e.resposta) + " ")]) })), 0) })), 0) },
            ct = [],
            ut = { data: function() { return { respostas: [] } }, created: function() { var t = this;
                    this.$http.get("http://localhost:3333/resposta", { params: { chat_id: this.$route.params.chat_id } }).then((function(e) { t.respostas = e.body.respostas, console.log(t.respostas) })).catch((function(t) { console.log(t) })) } },
            pt = ut,
            dt = Object(p["a"])(pt, lt, ct, !1, null, null, null),
            mt = dt.exports;
        s["default"].use(v["a"]); var vt = [{ path: "/login", component: et }, { path: "*", component: et }, { path: "/dashboard", component: it, beforeEnter: function(t, e, a) { var s = b.a.get("id");
                    s ? a() : ft.push("/") } }, { path: "/chat", component: S, beforeEnter: function(t, e, a) { var s = b.a.get("id");
                    s && a() } }, { path: "/chat/:id", component: R, props: !0 }, { path: "/chat/edit/:id", component: B, props: !0, beforeEnter: function(t, e, a) { var s = b.a.get("id");
                    s && a() } }, { path: "/respostas/:chat_id", component: mt, props: !0, beforeEnter: function(t, e, a) { var s = b.a.get("id");
                    s && a() } }],
            ft = new v["a"]({ routes: vt, mode: "history" }),
            bt = ft,
            ht = a("2f62"),
            gt = a("0e44");
        s["default"].use(ht["a"]); var yt = new ht["a"].Store({ state: { id: null }, mutations: {}, plugins: [Object(gt["a"])({ storage: { getItem: function(t) { return b.a.get(t) }, setItem: function(t, e) { return b.a.set(t, e, { expires: 3, secure: !0 }) }, removeItem: function(t) { return b.a.remove(t) } } })] }),
            _t = yt;
        s["default"].use(n["a"]), s["default"].use(r.a, {}), new s["default"]({ el: "#app", router: bt, store: _t, render: function(t) { return t(m) } }) }, "60b3": function(t, e, a) {}, "7e46": function(t, e, a) { t.exports = a.p + "img/header.4355d748.svg" }, "85ec": function(t, e, a) {}, "9b19": function(t, e, a) { t.exports = a.p + "img/logo.96437b51.svg" }, adad: function(t, e, a) { "use strict"; var s = a("3771"),
            n = a.n(s);
        n.a }, b98a: function(t, e, a) { "use strict"; var s = a("32cf"),
            n = a.n(s);
        n.a }, c121: function(t, e, a) { "use strict"; var s = a("60b3"),
            n = a.n(s);
        n.a }, c839: function(t, e, a) { t.exports = a.p + "img/bot.d9441205.svg" }, e78a: function(t, e, a) { t.exports = a.p + "img/sucesso.f4389987.svg" } });
//# sourceMappingURL=app.ced4fb45.js.map