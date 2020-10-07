// Validation
/*
  _|      _|            _|  _|        _|              _|      _|
  _|      _|    _|_|_|  _|        _|_|_|    _|_|_|  _|_|_|_|        _|_|    _|_|_|
  _|      _|  _|    _|  _|  _|  _|    _|  _|    _|    _|      _|  _|    _|  _|    _|
    _|  _|    _|    _|  _|  _|  _|    _|  _|    _|    _|      _|  _|    _|  _|    _|
      _|        _|_|_|  _|  _|    _|_|_|    _|_|_|      _|_|  _|    _|_|    _|    _|
*/
$(function () {
    $('#form-cadastro').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 2,
                email: true
            },
            contato: {
                required: true,
                minlength: 14
            },
            login: {
                required: true,
                minlength: 3
            },
            senha: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            nome: {
                required: 'Nome é um campo obrigatório',
                minlength: 'No mínimo 2 letras'
            },
            email: {
                required: 'E-mail é um campo obrigatório',
                minlength: 'No mínimo 2 letras',
                email: "Digite um e-mail valido"
            },
            contato: {
                required: 'Telefone é um campo obrigatório',
                minlength: 'No mínimo 14 dígitos'
            },
            login: {
                required: 'Login é um campo obrigatório',
                minlength: 'No mínimo 3 letras'
            },
            senha: {
                required: 'Telefone é um campo obrigatório',
                minlength: 'A senha deve ter 6 dígitos'
            }
        },
        submitHandler: function (form) {
            var dados = $(form).serialize();
            cadastrarCliente();
        }
    });

    $('#form-login').validate({
        rules: {
            loginCliente: {
                required: true,
                minlength: 2
            },
            senhaCliente: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            loginCliente: {
                required: 'Preencha o seu Login',
                minlength: 'No mínimo 2 letras'
            },
            senhaCliente: {
                required: 'Informe a sua senha',
                minlength: 'Tamanho mínimo: 06 dígitos'
            }
        },
        submitHandler: function (form) {
            let login = $("#loginCliente").val();
            let senha = $("#senhaCliente").val();
            let cliente = new Cliente(null, null, null, null, login, senha);
            $.ajax({
                    method: "POST",
                    url: urlSessao,
                    data: {
                        data: JSON.stringify(cliente)
                    },
                    success: function (response) {
                        if (response == "1") {
                            $("#etapa-realiza-login").slideUp();
                            setTimeout(function () {
                                $("#etapa-pessoas").slideDown();
                                $("#etapa-pessoas").css('display', 'flex');
                            }, 500);
                        } else {
                            alert('Oops! Usuário ou senha incorreto. verifique seu cadastro para continuar!');
                        }

                    }
                })
                .fail(function (response) {
                    console.log(response);
                })
        }
    });

});