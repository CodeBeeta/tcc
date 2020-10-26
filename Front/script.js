$(document).ready(function () {
	// url onde esta o controller
	window.urlController = window.location.origin + "/lanchonnet/Back/controller.php";
	window.urlSessao = window.location.origin + "/lanchonnet/Back/sessao.php";

	$("#clienteContato").mask("(00) 0000-00009");

	$('#lanche-login').click(function () {
		$("#etapa-escolha-login").fadeOut();
		setTimeout(function () {
			$("#etapa-realiza-login").fadeIn();
			$("#etapa-realiza-login").css('display', 'flex');
			$("#container-acao").css('background-image', 'url(Icones/background_etapas_genericas.png)').fadeIn();
		}, 500);
	});

	$('#novo-membro').click(function (e) {
		e.preventDefault();
		$("#etapa-realiza-login").fadeOut();
		setTimeout(function () {
			$("#etapa-realiza-cadastro").fadeIn();
			$("#etapa-realiza-cadastro").css('display', 'flex');
		}, 500);
	});

	$('#btn-pessoas').click(function () {
		$("#etapa-pessoas").fadeOut();
		setTimeout(function () {
			$("#etapa-mesas").fadeIn();
			$("#etapa-mesas").css('display', 'flex');
		}, 500);

		var quantidade = $('#pessoas').val();
		console.log("quantidade", quantidade)
		$('#pessoas').val(quantidade);
	});

	$('#escolhe-prato').click(function () {

		var urlSessao = "../Back/reserva.php";
		var mesa = $('#escolheMesa').val();

		//verifica se tem prato selecionado
		var saida = 0;
		$(".input-prato").each(function (index, element) {
			// element == this
			if ($(element).val() != "") {
				saida = $(element).val();
				return false;
			}
		});
		if (saida == "") {
			//todos pratos vazios
			Swal.fire({
				title: 'Alerta',
				text: "Por favor, selecione algum prato para continuar!",
				icon: 'warning',
			})
		} else {
			//algum prato foi selecionado
			$.ajax({
				type: 'POST',
				url: urlSessao,
				async: true,
				data: {
					mesa: mesa
				},
				success: function (reserva) {

					if (reserva != "ERROR") {
						console.log("reserva", reserva)
						Swal.fire({
							title: 'Carregando...',
							timerProgressBar: true,
							allowOutsideClick: false,
							willOpen: () => {
								Swal.showLoading();
								setTimeout(() => {
									Swal.close();
								}, 1000);
							},

						}).then((result) => {
							Swal.fire({
								title: 'Pedido realizado com sucesso!',
								icon: "success",
								showCancelButton: false,
								confirmButtonText: 'Obrigado!',
								showLoaderOnConfirm: true,
								preConfirm: () => {
									adicionarpratos(reserva).then((data) => {
										pegarPedido(reserva).then(() => {
											$("#etapa-pratos").fadeOut();
											setTimeout(function () {
												$("#etapa-checkout").fadeIn();
											}, 500);
										}).catch((reason) => {
											Swal.fire({
												icon: 'error',
												text: reason
											});
										});
									}).catch((reason) => {
										console.log("reason", reason)
										Swal.showValidationMessage(reason);
									});
								}
							});
						});
					} else {
						alert('Um erro ocorreu, tente novamente mais tarde');
					}

				}
			});
		}


		// $("#etapa-mesas").fadeOut();
		// setTimeout(function(){
		//     $("#etapa-pratos").fadeIn();
		//     $("#etapa-pratos").css('display','flex');
		// }, 500);

	});

	function adicionarpratos(reserva) {
		return new Promise((resolve, reject) => {
			var urlAdiciona = "../Back/create/adicionarReservaPrato.php";
			var qtd = JSON.parse($('#qtdPrato').val());
			var prato;
			var verifica;
			// var reserva = reserva;
			var pratoId;
			var quantidade;
			console.log("adicionarpratos -> qtd", qtd)
			for (var i = 0; i <= qtd.length; i++) {
				prato = "#qtd-prato-" + qtd[i];
				verifica = "#ver-prato-" + qtd[i];

				if (!($(verifica).hasClass('desativado'))) {
					pratoId = $(verifica).data('id');
					quantidade = $(prato).val();
					if (pratoId && quantidade) {
						$.ajax({
							type: 'POST',
							url: urlAdiciona,
							async: false,
							data: {
								prato: pratoId,
								reserva: reserva,
								quantidade: quantidade
							},
							success: function (reservado) {
								if (reservado.includes("ERROR")) {
									reject('Um erro ocorreu, por favor tente novamente');
								}
							}
						});
					}
				}
			}
			resolve();
		});

	}

	function pegarPedido(reserva) {
		return new Promise((resolve, reject) => {
			$.ajax({
				type: 'POST',
				url: "../Back/select/selectDadosReserva.php",
				data: {
					reserva: reserva
				},
				success: function (dados) {
					dados = JSON.parse(dados);
					console.log("pegarPedido -> dados", dados)

					if (dados.result == "ERROR") {
						console.log("pegarPedido -> dados.result", dados.result)
						reject('Um erro ocorreu, por favor tente novamente');
					} else {
						montarPedido(dados).then(() => {
							resolve(dados);
						});
					}
				}
			});
		});
	}

	function montarPedido(dados) {
		return new Promise(function (resolve, reject) {
			$('#num_mesa').html(dados.mesa.cd_numero_mesa);
			$('#qtd_mesa').html('?????');
			$('#desc_mesa').html(dados.mesa.ds_mesa);

			Object.keys(dados.pratos).forEach(index => {
				let elemento = dados.pratos[index];
				let output = `
				<tr>
					<th class="align-middle" scope="row">${parseFloat(index)+1}</th>
					<td class="align-middle">${elemento.nm_prato}</td>
					<td class="align-middle">${parseFloat(elemento.vl_prato).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
					<td class="align-middle text-center">${elemento.quantidade}</td>
					<td class="align-middle">${(parseFloat(elemento.vl_prato)*parseFloat(elemento.quantidade)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
				</tr>
				`;
				$("#pratos-body").append(output);
			});

			resolve();
		});
	}

	$('.verPratos').click(function () {
		var urlListaPratos = "../Back/verPratos.php";
		var id = $(this).data('verificador');
		$.ajax({
			type: 'POST',
			url: urlListaPratos,
			async: true,
			data: {
				reserva: id
			},
			success: function (pratos) {
				if (pratos != "ERROR") {
					result = jQuery.parseJSON(pratos);
					for (var i = 0; i < result.length; i++) {
						$('.modal-body').empty().append('<p><span>' + result[i].quantidade + 'x </span> - ' + result[i].prato + '</p>');
					}

				} else {
					alert('Um erro ocorreu, tente novamente mais tarde');
				}

			}
		});


		$('#modalPratos').modal('show');
	});

	$('.escolhe-mesa').click(function () {
		$("#etapa-mesas").fadeOut();
		setTimeout(function () {
			$("#etapa-pratos").fadeIn();
			$("#etapa-pratos").css('display', 'flex');
		}, 500);

		var mesa = $(this).data('id');
		$('#escolheMesa').val(mesa);

	});


	$('#validar-log-admin').validate({
		rules: {
			login: {
				required: true,
				minlength: 2
			},
			senha: {
				required: true,
				minlength: 6
			}
		},
		messages: {
			login: {
				required: 'Preencha o seu Login',
				minlength: 'No mínimo 2 letras'
			},
			senha: {
				required: 'Informe a sua senha',
				minlength: 'Tamanho mínimo: 06 dígitos'
			}
		},
		submitHandler: function (form) {
			var dados = $(form).serialize();
			$.ajax({
				type: 'POST',
				url: '../Front/php/admin/login.php',
				async: true,
				data: dados,
				success: function (data) {
					if (data == '1') {
						alert('sucesso! Redirecionando...');
						window.location.href = "admin.php";
					} else {
						alert('Acesso Negado');
					}
				}
			});
		}
	});

	$('#owl-mesas').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		items: 1,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
	});

	$('#owl-prato').owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsiveClass: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		responsive: {
			0: {
				items: 1,
				stagePadding: 10
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			}
		},
	});
	// $('.owl-prev span').html('< Mesa Anterior');
	// $('.owl-next span').html('Próxima Mesa >');


	$('#lanchonete-form').validate({
		rules: {
			fantasia: {
				required: true,
				minlength: 2
			},
			cnpj: {
				required: true
			},
			email: {
				required: true
			},
			endereco: {
				required: true
			}

		},
		messages: {
			fantasia: {
				required: 'Preencha o seu Login',
				minlength: 'No mínimo 2 letras'
			},
			cnpj: {
				required: 'Campo obrigatório'
			},
			email: {
				required: 'Campo obrigatório'
			},
			endereco: {
				required: 'Campo obrigatório'
			}
		},
		submitHandler: function (form) {
			var dados = $(form).serialize();
			$.ajax({
				type: 'POST',
				url: document.location.origin + '/Front/php/admin/atualiza-lanchonete.php',
				async: true,
				data: dados,
				success: function (data) {
					if (data == '1') {
						alert('Atualizado com Sucesso!');
						location.reload();
					} else {
						alert('Acesso Negado');
					}
				}
			});
		}
	});

	$('.seleciona-prato').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('desativado')) {
			//fluxo ativar
			var pai = $(this).parent().parent();
			var seletor = '#qtd-prato-' + $(this).data('id');
			var tag = '#seleciona-' + $(this).data('id');

			$(pai).addClass("selecionado");
			$(seletor).removeAttr("disabled").val('1').focus();
			$(tag).fadeIn(100);
			$(this).removeClass('desativado');
		} else {
			//fluxo desativar
			var pai = $(this).parent().parent();
			var seletor = '#qtd-prato-' + $(this).data('id');
			var tag = '#seleciona-' + $(this).data('id');

			$(pai).removeClass("selecionado");
			$(seletor).val('').attr("disabled", "disabled");
			$(tag).fadeOut(100);
			$(this).addClass('desativado');
		}


	});

	$('.retornar').click(function () {
		window.location.href = window.location.origin + "/lanchonnet/Front/admin.php";
	});

	$('.atualizar').click(function () {
		console.log($(this).hasClass('fechar'));
		if ($('#formulario-edicao').hasClass('aberto')) {
			$('#formulario-edicao').removeClass('aberto');
			if ($(this).hasClass('fechar') == false) {
				$('#formulario-edicao').fadeOut(0);
				$('#formulario-edicao').addClass('aberto');
				$('#formulario-edicao').fadeIn();

				$(".fechar").each(function (index, element) {
					// element == this
					$(element).removeClass("fechar");
				});
			} else {
				$('#formulario-edicao').fadeOut();
			}
		} else {
			$('#formulario-edicao').addClass('aberto');
			$('#formulario-edicao').fadeIn();
		}
		if ($(this).hasClass('fechar') == false) {
			$(this).addClass('fechar');
		} else {
			$(this).removeClass("fechar");
		}

	});

	$('.inserir').click(function () {
		if ($('#formulario-insercao').hasClass('aberto')) {
			$('#formulario-insercao').removeClass('aberto');
			$('#formulario-insercao').fadeOut();
		} else {
			$('#formulario-insercao').addClass('aberto');
			$('#formulario-insercao').fadeIn();
		}
	});

	$('.emBreve').click(function () {
		alert('[EM BREVE] - Conteúdo Indisponível no momento');
	});

	$("#pagar-online").click(function (e) {
		e.preventDefault();
		Swal.fire({
			title: 'Em breve',
			icon: 'info',
			text: 'Em breve teremos pagamento online!',
			focusConfirm: true,
		});
	});

	$("#pagar-loja").click(function (e) {
		e.preventDefault();
		$("#etapa-checkout").fadeOut(400, function () {
			$("#etapa-final").fadeIn();
		});
	});

});