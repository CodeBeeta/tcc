<?php
function money_format($formato, $valor) {

    if (setlocale(LC_MONETARY, 0) == 'C') {
        return number_format($valor, 2);
    }

    $locale = localeconv();

    $regex = '/^'.             // Inicio da Expressao
             '%'.              // Caractere %
             '(?:'.            // Inicio das Flags opcionais
             '\=([\w\040])'.   // Flag =f
             '|'.
             '([\^])'.         // Flag ^
             '|'.
             '(\+|\()'.        // Flag + ou (
             '|'.
             '(!)'.            // Flag !
             '|'.
             '(-)'.            // Flag -
             ')*'.             // Fim das flags opcionais
             '(?:([\d]+)?)'.   // W  Largura de campos
             '(?:#([\d]+))?'.  // #n Precisao esquerda
             '(?:\.([\d]+))?'. // .p Precisao direita
             '([in%])'.        // Caractere de conversao
             '$/';             // Fim da Expressao

    if (!preg_match($regex, $formato, $matches)) {
        trigger_error('Formato invalido: '.$formato, E_USER_WARNING);
        return $valor;
    }

    $opcoes = array(
        'preenchimento'   => ($matches[1] !== '') ? $matches[1] : ' ',
        'nao_agrupar'     => ($matches[2] == '^'),
        'usar_sinal'      => ($matches[3] == '+'),
        'usar_parenteses' => ($matches[3] == '('),
        'ignorar_simbolo' => ($matches[4] == '!'),
        'alinhamento_esq' => ($matches[5] == '-'),
        'largura_campo'   => ($matches[6] !== '') ? (int)$matches[6] : 0,
        'precisao_esq'    => ($matches[7] !== '') ? (int)$matches[7] : false,
        'precisao_dir'    => ($matches[8] !== '') ? (int)$matches[8] : $locale['int_frac_digits'],
        'conversao'       => $matches[9]
    );

    if ($opcoes['usar_sinal'] && $locale['n_sign_posn'] == 0) {
        $locale['n_sign_posn'] = 1;
    } elseif ($opcoes['usar_parenteses']) {
        $locale['n_sign_posn'] = 0;
    }
    if ($opcoes['precisao_dir']) {
        $locale['frac_digits'] = $opcoes['precisao_dir'];
    }
    if ($opcoes['nao_agrupar']) {
        $locale['mon_thousands_sep'] = '';
    }

    $tipo_sinal = $valor >= 0 ? 'p' : 'n';
    if ($opcoes['ignorar_simbolo']) {
        $simbolo = '';
    } else {
        $simbolo = $opcoes['conversao'] == 'n' ? $locale['currency_symbol']
                                               : $locale['int_curr_symbol'];
    }
    $numero = number_format(abs($valor), $locale['frac_digits'], $locale['mon_decimal_point'], $locale['mon_thousands_sep']);


    $sinal = $valor >= 0 ? $locale['positive_sign'] : $locale['negative_sign'];
    $simbolo_antes = $locale[$tipo_sinal.'_cs_precedes'];

    $espaco1 = $locale[$tipo_sinal.'_sep_by_space'] == 1 ? ' ' : '';

    $espaco2 = $locale[$tipo_sinal.'_sep_by_space'] == 2 ? ' ' : '';

    $formatado = '';
    switch ($locale[$tipo_sinal.'_sign_posn']) {
    case 0:
        if ($simbolo_antes) {
            $formatado = '('.$simbolo.$espaco1.$numero.')';
        } else {
            $formatado = '('.$numero.$espaco1.$simbolo.')';
        }
        break;
    case 1:
        if ($simbolo_antes) {
            $formatado = $sinal.$espaco2.$simbolo.$espaco1.$numero;
        } else {
            $formatado = $sinal.$numero.$espaco1.$simbolo;
        }
        break;
    case 2:
        if ($simbolo_antes) {
            $formatado = $simbolo.$espaco1.$numero.$sinal;
        } else {
            $formatado = $numero.$espaco1.$simbolo.$espaco2.$sinal;
        }
        break;
    case 3:
        if ($simbolo_antes) {
            $formatado = $sinal.$espaco2.$simbolo.$espaco1.$numero;
        } else {
            $formatado = $numero.$espaco1.$sinal.$espaco2.$simbolo;
        }
        break;
    case 4:
        if ($simbolo_antes) {
            $formatado = $simbolo.$espaco2.$sinal.$espaco1.$numero;
        } else {
            $formatado = $numero.$espaco1.$simbolo.$espaco2.$sinal;
        }
        break;
    }

    if ($opcoes['largura_campo'] > 0 && strlen($formatado) < $opcoes['largura_campo']) {
        $alinhamento = $opcoes['alinhamento_esq'] ? STR_PAD_RIGHT : STR_PAD_LEFT;
        $formatado = str_pad($formatado, $opcoes['largura_campo'], $opcoes['preenchimento'], $alinhamento);
    }

    return $formatado;
}

setlocale(LC_MONETARY, "pt_BR", "ptb");
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<script src="jquery-3.4.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>


	<link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.min.css">
	<script src="bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.6.1/sweetalert2.min.js" integrity="sha512-mFlAlOUcf3ib0f5F3YU1izX0u9fTzHAnOxrms9iEtAGzSZ8psAi2x1YPtMtdal698/oMIQakfNUM/h73WfFtOA==" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.6.1/sweetalert2.min.css" integrity="sha512-+pGmJ3i6OuNjIlRy/REXeyodbWbqEAkHNCCeabR4Jsm46v6eGh4tlWb2h3TKpXQXZgsK1I9HwNYA3dbohQHkJA==" crossorigin="anonymous" />
	<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> -->
	<link rel="stylesheet" href="style.css">
	<script src="script.js"></script>
	<script src="../Back/js/classes.js"></script>
	<script src="../Back/js/ajax_select.js"></script>
	<script src="../Back/js/ajax_cadastrar.js"></script>
	<script src="../Back/js/ajax_alterar.js"></script>
	<script src="../Back/js/ajax_deletar.js"></script>
	<script src="../Back/js/validators.js"></script>

	<script src="../Back/js/_jsUtils.js"></script>
	<script src="../Back/js/script_index.js"></script>
	<meta name="google-signin-client_id" content="72254345021-2hh5bmbasppfha3ek36kspjcb7sl2ba9.apps.googleusercontent.com">
	<meta name="google-signin-cookiepolicy" content="single_host_origin" />
	<meta name="google-signin-requestvisibleactions" content="https://schema.org/AddAction" />
	<meta name="google-signin-scope" content="https://www.googleapis.com/auth/plus.login" />

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>LancheonNet</title>
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<script>
		window.onbeforeunload = function(e) {
			signOut();
		};

		window.onSignIn = function(googleUser) {
			var profile = googleUser.getBasicProfile();
			console.log("window.onSignIn -> profile", profile)
			// console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
			// console.log('Name: ' + profile.getName());
			// console.log('Image URL: ' + profile.getImageUrl());
			// console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

			let cliente = new Cliente(null, profile.getName(), null, profile.getEmail(), null, null);
			selectUserGoogle(cliente);
		}

		window.signOut = function() {
			var auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut().then(function() {
				console.log('User signed out.');
			});
		}
	</script>

	<script src="https://apis.google.com/js/platform.js?hl=pt" async defer></script>

</head>

<body>
	<header>
		<div class="container">
			<nav class="navbar navbar-expand-sm navbar-light">
				<a class="navbar-brand area-imagem" href="">
					<div class="logo">
						<img src="Icones/Logo.png">
					</div>
				</a>
				<!-- <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" style="background-color: #d61f31">
					<span class="navbar-toggler-icon"></span>
				</button> -->
				<div class="collapse navbar-collapse linha-itens-menu" id="collapsibleNavId" style="text-align: center">
					<!-- <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
						<li class="nav-item active">
							<a class="nav-link item-menu" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link item-menu" href="#">Cadastrar</a>
						</ul> -->
					</li>
				</div>
				<a href="admin.php">
					<button type="button" class="btn btn-dark ml-auto">
						<h6 class="menu-header">Administrativo</h6>
					</button>
				</a>
			</nav>
		</div>
	</header>