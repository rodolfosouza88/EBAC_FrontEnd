$(document).ready(function () {
    $('#cep').mask('00000-000'); // Adiciona a máscara no CEP

    $('#btn-buscar-cep').click(async function () { // Requisição via Fetch com async/await e try/catch
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        try {
            const resposta = await fetch(endpoint);

            if (!resposta.ok) {
                throw new Error('Erro ao buscar o CEP');
            }

            const json = await resposta.json();

            if (json.erro) {
                throw new Error('CEP não encontrado');
            }

            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade}, ${estado}`;

            $('#endereco').val(endereco);
        } catch (erro) {
            alert(erro.message);
        } finally {
            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
        }
    });

    $('#formulario-pedido').submit(function (evento) {
        evento.preventDefault();

        const nome = $('#nome').val();
        const sobrenome = $('#sobrenome').val();
        const email = $('#email').val();

        if (nome.length === 0 || sobrenome.length === 0 || email.length === 0) {
            alert('Todos os campos devem ser preenchidos.');
            return;
        }

        // Enviar os dados via fetch
        const dados = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            endereco: $('#endereco').val(),
            cep: $('#cep').val()
        };

        // Exemplo de requisição POST com fetch
        fetch('https://sua-api.com/enviar-dados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
            .then(response => response.json())
            .then(data => {
                alert('Pedido enviado com sucesso!');
                console.log(data); // Exibe a resposta no console
            })
            .catch(error => {
                alert('Erro ao enviar o pedido');
                console.error(error);
            });
    });
});
