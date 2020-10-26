<?php
session_start();
if ((!isset($_SESSION['login']) == true) and (!isset($_SESSION['senha']) == true)) {
	unset($_SESSION['login']);
	unset($_SESSION['senha']);
	header('location:admin-login.php');
}
include('header-adm.php'); ?>
<style>
	body {
		background-color: #93a6a8;
	}
</style>
<section id="area-blocos">
	<div class="container h-100 my-3">
		<div class="row h-100">
			<div class="col-xs-12 h-100">
				<div class="d-flex h-100 justify-content-around align-items-center w-100 flex-wrap">
					<a href="dados-lanchonete.php">
						<div class="d-inline-flex flex-column align-items-center justify-content-center text-white my-2 mx-3 box-item2" style="background-color:#cb2025;">
							<img src="./Icones/garfo.png" class="img-fluid">
							<p class="text-bloco mt-3">Dados da Lanchonete</p>
						</div>
					</a>
					<a href="gerencia-usuario.php">
						<div class="d-inline-flex flex-column align-items-center justify-content-center text-white my-2 mx-3 box-item2" style=" background-color:#f8b334;">
							<img src="./Icones/usuarios.png" class="img-fluid">
							<p class="text-bloco mt-3">Gerenciar Usuarios</p>
						</div>
					</a>
					<a href="gerencia-prato.php">
						<div class="d-inline-flex flex-column align-items-center justify-content-center text-white my-2 mx-3 box-item2" style="background-color:#97bf0d;">
							<img src="./Icones/pratos.png" class="img-fluid">
							<p class="text-bloco mt-3">Gerenciar Pratos</p>
						</div>
					</a>
					<a href="visualiza-cliente.php">
						<div class="d-inline-flex flex-column align-items-center justify-content-center text-white my-2 mx-3 box-item2" style="background-color:#cb2025;">
							<img src="./Icones/cliente.png" class="img-fluid">
							<p class="text-bloco mt-3">Ver Clientes</p>
						</div>
					</a>
					<a href="gerencia-reserva.php">
						<div class="d-inline-flex flex-column align-items-center justify-content-center text-white my-2 mx-3 box-item2" style="background-color:#f8b334;">
							<img src="./Icones/reserva.png" class="img-fluid">
							<p class="text-bloco mt-3">Gerenciar Reservas</p>
						</div>
					</a>
					<a href="gerencia-mesa.php">
						<div class="d-inline-flex flex-column align-items-center justify-content-center text-white my-2 mx-3 box-item2" style=" background-color:#97bf0d;">
							<img src="./Icones/mesas.png" class="img-fluid">
							<p class="text-bloco mt-3">Gerenciar Mesas</p>
						</div>
					</a>
					<a href="gerencia-promocao.php">
						<div class="d-inline-flex flex-column align-items-center justify-content-center text-white my-2 mx-3 box-item2" style="background-color:#cb2025;">
							<img src="./Icones/promocao.png" class="img-fluix">
							<p class="text-bloco mt-3">Lançar Promoção</p>
						</div>
					</a>
					<a href="sair-painel.php">
						<div class="d-inline-flex flex-column align-items-center justify-content-center text-white my-2 mx-3 box-item2" style=" background-color:#f8b334;">
							<img src="./Icones/sair.png" class="img-fluid">
							<p class="text-bloco mt-3">Sair do Painel</p>
						</div>
					</a>
				</div>
			</div>
			<!-- <div align="center" class="fond">
				<div style="width:1000px;">

					<a href="dados-lanchonete.php">
						<div class="box-item" style="background-color:#cb2025;">
							<img src="./Icones/garfo.png" class="img-fluid">
							<p class="text-bloco mt-3">Dados da Lanchonete</p>
						</div>
					</a>
					<a href="gerencia-usuario.php">
						<div class="box-item" style="background-color:#f8b334;">
							<img src="./Icones/usuarios.png" class="img-fluid">
							<p class="text-bloco mt-3">Gerenciar Usuarios</p>
						</div>
					</a>
					<a href="gerencia-prato.php">
						<div class="box-item" style="background-color:#97bf0d;">
							<img src="./Icones/pratos.png" class="img-fluid">
							<p class="text-bloco mt-3">Gerenciar Pratos</p>
						</div>
					</a>

					<hr>

					<a href="visualiza-cliente.php">
						<div class="box-item" style="background-color:#97bf0d;">
							<img src="./Icones/cliente.png" class="img-fluid">
							<p class="text-bloco mt-3">Ver Clientes</p>
						</div>
					</a>
					<a href="gerencia-reserva.php">
						<div class="box-item" style="background-color:#cb2025;">
							<img src="./Icones/reserva.png" class="img-fluid">
							<p class="text-bloco mt-3">Gerenciar Reservas</p>
						</div>
					</a>
					<a href="gerencia-mesa.php">
						<div class="box-item" style="background-color:#f8b334;">
							<img src="./Icones/mesas.png" class="img-fluid">
							<p class="text-bloco mt-3">Gerenciar Mesas</p>
						</div>
					</a>
					<hr>
					<a href="gerencia-promocao.php">
						<div class="box-item" style="background-color:#cb2025;">
							<img src="./Icones/promocao.png" class="img-fluid">
							<p class="text-bloco mt-3">Lançar Promoção</p>
						</div>
					</a>
					<a href="sair-painel.php">
						<div class="box-item" style="background-color:#f8b334;">
							<img src="./Icones/sair.png" class="img-fluid">
							<p class="text-bloco mt-3">Sair do Painel</p>
						</div>
					</a>
				</div>
			</div> -->
		</div>
	</div>
</section>

</body>

</html>