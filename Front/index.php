<?php
include('header.php');
include('./../Back/chamadas.php');
$base = new Chamadas();
$mesas = $base->verListaMesa();
$pratos = $base->verificaPratos();
// var_dump($pratos);
?>


<section style="background-color: gray;">
    <picture>
        <source media="(max-width: 500px)" srcset="img/banner_500.jpg">
        <source media="(max-width: 991px)" srcset="img/banner_991.jpg">
        <img src="img/banner_1920.jpg" class="img-fluid" alt="Responsive image">
    </picture>
</section>
<section id="chamada">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src="Icones/imagem_galera.png" class="img-fluid img-w100">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="d-block d-sm-none">
                    <h1 class="titulo-chamada">Nós e a Sua Galera</h1>
                    <h2 class="subtitulo-chamada">Contra o chá de cadeira</h2>
                </div>
                <div class="d-none d-sm-block d-lg-none">
                    <h2 class="titulo-chamada text-left">Nós e a Sua Galera</h1>
                        <h3 class="subtitulo-chamada text-right" style="line-height: 1.8rem;">Contra o chá de cadeira
                    </h2>
                </div>
                <div class="d-none d-lg-block">
                    <h1 class="titulo-chamada">Nós e a Sua Galera</h1>
                    <h2 class="subtitulo-chamada text-right">Contra o chá de cadeira</h2>
                </div>


                <p class="text-chamada text-justify pl-lg-5 pl-sm-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</section>
<section id="container-acao" style='position:relative; min-height: 620px; height: 620px;max-height: 620px;'>
    <div class="container h-100">
        <div class="row h-100">
            <article class="h-100" id="etapa-escolha-login" style="display: none; width: 100%;">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 area-logins">
                    <div id="bloco-texto">
                        <h1>Vamos Começar?</h1>
                        <button type="button" name="" id="google-login" class="btn btn-primary btn-log">Logar com a Google</button>
                        <h5>Ou</h5>
                        <button type="button" name="" id="lanche-login" class="btn btn-danger btn-log">Conta Lanche On Net</button>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src="Icones/cadeira_estilizada.png" class="img-fluid img-w100" style="margin-top: 5%;">
                </div>
            </article>
            <article class="h-100" id="etapa-realiza-login" style="display: flex; width: 100%;">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class=" d-flex h-100 justify-content-center align-items-center">
                        <form class="" id="form-login">
                            <h1 class="text-center title-login">Login</h1>
                            <br>
                            <div class="input-group">
                                <i class="fas fa-user input-icon"></i>
                                <input data-lpignore="true" type="text" name="loginCliente" id="loginCliente" class="input-login" autocomplete="off" placeholder="Usuário">
                            </div>
                            <br>
                            <div class="input-group">
                                <i class="fas fa-unlock-alt input-icon"></i>
                                <input data-lpignore="true" type="password" name="senhaCliente" id="senhaCliente" class="input-login" autocomplete="off" placeholder="Senha">
                            </div>
                            <br>
                            <div class="d-flex justify-content-around">
                                <input type="submit" name="logar" id="entrar" value="Entrar" class="btn btn-projeto btn-laranja btn-lg btn-block">
                            </div>
                            <hr class="border-light">
                            <h6 class="text-center text-white">Ou entre usando:</h6>
                            <div class="d-flex justify-content-around">
                                <button class="btn btn-danger text-white rounded-circle" style="width: 50px; height: 50px;background-color: #dd4b39;border-color: #dd4b39;" type="button" id="google_login">
                                    <i class="fab fa-google"></i>
                                </button>
                                <div class="g-signin2" data-onsuccess="onSignIn"></div>
                            </div>
                            <hr class="border-light">
                            <div class="d-flex justify-content-around">
                                <a href="#" id="novo-membro" class="btn btn-projeto btn-laranja">Quero me cadastrar</a>
                            </div>
                        </form>
                    </div>
                    <div id="bloco-login" class="mt-auto">
                    </div>
                </div>
            </article>
            <article class="h-100" id="etapa-realiza-cadastro" style="display: none; width: 100%;">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div id="bloco-cadastro" class="d-flex h-100 justify-content-center align-items-center">
                        <form id="form-cadastro">
                            <h1 class="text-center title-login mb-sm-4">Cadastro</h1>
                            <div class="row my-sm-3">
                                <div class="col-xs-6 mr-sm-1 mb-2 mb-sm-0">
                                    <div class="input-group">
                                        <i class="fas fa-id-badge input-icon"></i>
                                        <input type="text" name="nome" id="clienteNome" class="input-login" placeholder="Nome" autocomplete="off" data-lpignore="true">
                                    </div>
                                </div>
                                <div class="col-xs-6 ml-sm-1 mt-3 mt-sm-0">
                                    <div class="input-group">
                                        <i class="fas fa-at input-icon"></i>
                                        <input type="email" name="email" id="clienteEmail" class="input-login" placeholder="E-mail" autocomplete="off" data-lpignore="true">
                                    </div>
                                </div>
                            </div>
                            <div class="row my-sm-3">
                                <div class="col-12 p-0">
                                    <div class="input-group">
                                        <i class="fas fa-phone-alt input-icon"></i>
                                        <input type="text" name="contato" id="clienteContato" class="input-login" placeholder="Tel. de contato" autocomplete="off" data-lpignore="true">
                                    </div>
                                </div>
                            </div>
                            <div class="row my-sm-3">
                                <div class="col-12 p-0">
                                    <div class="input-group">
                                        <i class="fas fa-user input-icon"></i>
                                        <input type="login" name="login" id="clienteLogin" class="input-login" placeholder="Login" autocomplete="off" data-lpignore="true">
                                    </div>
                                </div>
                            </div>
                            <div class="row my-sm-3">
                                <div class="col-12 p-0">
                                    <div class="input-group">
                                        <i class="fas fa-unlock-alt input-icon"></i>
                                        <input type="password" name="senha" id="clienteSenha" class="input-login" placeholder="Senha" autocomplete="off" data-lpignore="true">
                                    </div>
                                </div>
                            </div>
                            <div class="row my-sm-3">
                                <div class="col-12 p-0">
                                    <input type="submit" name="cadastrar" id="cadastrar" value="Concluir cadastro" class="btn btn-projeto btn-laranja btn-lg btn-block">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
            <article class="h-100" id="etapa-pessoas" style="display: none; width: 100%;">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div id="area-pessoas" class=" d-flex h-100 justify-content-center align-items-center">
                        <div class="">
                            <div class="d-none d-sm-block">
                                <p class="display-3 font-weight-normal">Uma mesa para</p>
                                <h2 class="display-3 font-weight-bolder text-right">QUANTOS?</h2>
                            </div>

                            <div class="d-block d-sm-none">
                                <p class="h2 font-weight-normal">Uma mesa para</p>
                                <h2 class="h2 font-weight-bolder text-right">QUANTOS?</h2>
                            </div>

                            <div class="d-flex h-100 justify-content-center my-3">
                                <div class="input-group mr-2 w-auto">
                                    <i class="fas fa-user input-icon"></i>
                                    <input type="number" name="pessoas" id="pessoas" min="1" max="6" value="1" style="padding-left: 35px;">
                                </div>
                                <label class="text-white h4 font-weight-normal">Pessoas</label>
                            </div>

                            <br>

                            <button id="btn-pessoas" class="btn btn-projeto btn-vermelho btn-lg btn-block">Próxima Etapa</button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="h-100" id="etapa-mesas" style="display: none; width: 100%;">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="d-flex h-100 justify-content-center align-items-center">
                        <div class="owl-carousel owl-theme" id="owl-mesas">
                            <?php foreach ($mesas as $mesa) { ?>
                                <div class="item h-100">
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 fl-lft d-none d-md-block">
                                        <img src="Icones/mesa.png" class="img-fluid img-w100 ml-3" style="margin-top: 25%;">
                                        <p class="placa-mesa ml-3">Mesa <?php echo $mesa['numero'] ?></p>
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 fl-lft ">
                                        <div class="d-none d-md-block">
                                            <p class="titulo-mesa ml-md-5 font-weight-bolder h1">Informações <br><b> da mesa</b></p>
                                            <p class="descricao-mesa mr-md-3"> <?php echo $mesa['descricao'] ?></p>
                                            <button class="escolhe-mesa btn btn-projeto btn-vermelho btn-lg float-right mr-3" data-id="<?php echo $mesa['id'] ?>">ESCOLHER MESA</button>
                                        </div>

                                        <div class="d-block d-md-none">
                                            <p class="titulo-mesa ml-md-5 font-weight-bolder h3">Informações <br><b> da mesa</b></p>
                                            <p class="descricao-mesa mr-md-3"> <?php echo $mesa['descricao'] ?></p>
                                            <button class="escolhe-mesa btn btn-projeto btn-vermelho btn-lg btn-block" data-id="<?php echo $mesa['id'] ?>">ESCOLHER MESA</button>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                        <input type="hidden" name="escolheMesa" id="escolheMesa">
                    </div>
                </div>
            </article>
            <article class="h-100" id="etapa-pratos" style="display: none; width: 100%;">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="d-flex h-100 justify-content-center align-items-center flex-column">
                        <div class="owl-carousel owl-theme" id="owl-prato">
                            <?php $count = []; ?>
                            <?php foreach ($pratos as $prato) {
                                array_push($count, $prato['id_prato']);
                                // $count++;
                            ?>
                                <div class="item item-prato h-100">
                                    <p class="nome-prato pt-2"><?php echo $prato['nm_prato']; ?></p>
                                    <div class="decorativa d-flex h-100 justify-content-center align-items-center py-2">
                                        <img src="Icones/prato-icon.png" class="chef">
                                    </div>
                                    <p class="descricao-prato"><?php echo $prato['ds_prato']; ?></p>
                                    <p class="preco-prato">
                                        <a href="#" class="seleciona-prato desativado" id="ver-prato-<?php echo $prato['id_prato'] ?>" data-id="<?php echo $prato['id_prato'] ?>"> <?php echo money_format('%n', $prato['vl_prato']); ?></a>
                                    </p>
                                    <label for="qtd-prato"> Quantidade: </label>
                                    <br>
                                    <input type="number" class="input-prato" min='1' name="qtd-prato-<?php echo $prato['id_prato'] ?>" id="qtd-prato-<?php echo $prato['id_prato'] ?>" disabled>
                                    <div class="label-selecionado text-success ml-2 mt-2" id="seleciona-<?php echo $prato['id_prato'] ?>" style="display: none;">
                                        <i class="fas fa-check fa-1x"></i>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                        <div class="d-block w-75">
                            <button id="escolhe-prato" class="btn btn-projeto btn-vermelho btn-lg btn-block">CONTINUAR</button>
                            <input type="hidden" name="qtdPrato" id='qtdPrato' value="<?php echo json_encode($count); ?>">
                        </div>
                    </div>
                </div>
            </article>
            <article class="h-100" id="etapa-checkout" style="display: none; width: 100%;">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 h-100">
                    <div class="d-flex h-100 justify-content-center align-items-center flex-column">
                        <div class="d-block w-100">
                            <h4 class="text-white font-weight-bolder w-100">
                                Informações da mesa
                            </h4>
                        </div>
                        <div class="w-100 mb-3 my-custom-scrollbar" style="max-height: 180px;overflow-y: scroll;">
                            <table class="d-table table table-striped table-dark mb-0 table-responsive">
                                <thead>
                                    <tr>
                                        <th class="align-middle" scope="col">Número da mesa</th>
                                        <th class="align-middle" scope="col">Quantidade de pessoas</th>
                                        <th class="align-middle" scope="col">Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="align-middle" scope="row" id="num_mesa">1</th>
                                        <td class="align-middle" id="qtd_mesa">Mark</td>
                                        <td class="align-middle" id="desc_mesa">Otto</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-block w-100">
                            <h4 class="text-white font-weight-bolder w-100">
                                Informações do pedido
                            </h4>
                        </div>
                        <div class="w-100 mb-3 my-custom-scrollbar" style="max-height: 180px;overflow-y: scroll;">
                            <table class="d-table table table-striped table-dark mb-0 table-responsive">
                                <thead>
                                    <tr>
                                        <th class="align-middle" scope="col">#</th>
                                        <th class="align-middle" scope="col">Prato</th>
                                        <th class="align-middle" scope="col">Valor</th>
                                        <th class="align-middle text-center" scope="col">Quantidade</th>
                                        <th class="align-middle" scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody id="pratos-body">
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-center align-items-center w-100 mt-2">
                            <button id="pagar-online" class="btn btn-projeto btn-verde btn-lg w-100 mx-1">
                                <i class="fas fa-credit-card"></i>
                                Pagar online
                            </button>
                            <button id="pagar-loja" class="btn btn-projeto btn-vermelho btn-lg w-100 mx-1">
                                <i class="fas fa-receipt"></i>
                                Pagar na loja
                            </button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="h-100" id="etapa-final" style="display: none; width: 100%;">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 h-100">
                    <div class="d-flex h-100 justify-content-center align-items-center flex-column">
                        <div class="d-none d-md-block">
                            <p class="thanks text-center display-4 font-weight-bolder">
                                Muito Obrigado! <br>
                                Estamos preparando sua mesa e Aguardando por você!
                            </p>
                            <p class="text-white text-center h5">
                                Em caso de cancelamentos ligue <mark>(13) 6767-4545</mark>
                            </p>
                        </div>
                        <div class="d-block d-md-none">
                            <p class="thanks text-center h4 font-weight-bolder">
                                Muito Obrigado! <br>
                                Estamos preparando sua mesa e Aguardando por você!
                            </p>
                            <p class="text-white text-center">
                                Em caso de cancelamentos ligue <mark>(13) 6767-4545</mark>
                            </p>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    </div>
</section>
</body>

</html>