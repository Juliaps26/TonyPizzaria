// Criando objeto chamado clientes
var clientes = {

    // Propriedade
    cliente:


    // Array para armazenar dados dos clientes 
        [{
            id: 1,
            nome: 'Julia Silva',
            email: 'julia@gmail.com',
            senha: '123',
            telefone: '(11) 91234-5678',
            foto_perfil: '',
            endereco: [{
                cep: '01001001',
                rua: 'Rua São Paulo',
                complemento: 'São Paulo',
                bairro: 'São Paulo',
                estado: 'SP'

            }]
        },

        {
            id: 2,
            nome: 'Kaike Bueno',
            email: 'kaikeb@gmail.com',
            senha: '123',
            telefone: '(11) 98765-4321',
            foto_perfil: '',
            endereco: [{
                cep: '04567-890',
                rua: 'Rua vitória, 123',
                complemento: 'apto 62, Bloco 2',
                bairro: 'Centro',
                estado: 'RJ'
            }]
        },
        {
            id: 3,
            nome: 'Luis Beecker',
            email: 'luisbecker@gmail.com',
            senha: '123',
            telefone: '(11) 99999-9999',
            foto_perfil: '',
            endereco: [{
                cep: '01234-567',
                rua: 'Estrada do Gopiuva, 56',
                complemento: 'casa 78',
                bairro: 'Vila Esperança',
                estado: 'SP'
            }]
        },
        {
            id: 4,
            nome: 'Gustavo Campos',
            email: 'campos@gmail.com',
            senha: '123',
            telefone: '(11) 87654-3210',
            foto_perfil: '',
            endereco: [{
                cep: '09876-543',
                rua: 'Avenida Diniz, 789',
                complemento: 'apto 22, Bloco 4',
                bairro: 'Bela Vista',
                estado: 'AP'
            }]
        },
        {
            id: 5,
            nome: 'André Alencar',
            email: 'dedeco@gmail.com',
            senha: '123',
            telefone: '(11) 98765-4321',
            foto_perfil: '',
            endereco: [{
                cep: '03456-789',
                rua: ', 456',
                complemento: 'casa 33',
                bairro: 'Parque das Flores',
                estado: 'PR'
            }]
        },
        {
            id: 6,
            nome: 'Carla Lima',
            email: 'carla@gmail.com',
            senha: '123',
            telefone: '(11) 98765-4321',
            foto_perfil: '',
            endereco: [{
                cep: '06789-012',
                rua: 'Alameda das Palmeiras, 789',
                complemento: 'apto 55, Bloco 1',
                bairro: 'Jardim Primavera',
                estado: 'SC'
            }]
        }
    ]

}


var categorias = {

    categoria: [{
            id: 1,
            nome_categoria: 'Geral',
            icon: ''
        },

        {
            id: 2,
            nome_categoria: 'Pizza',
            icon: ''
        },

        {
            id: 3,
            nome_categoria: 'Bebida',
            icon: ''
        },

        {
            id: 4,
            nome_categoria: 'Sobremesa',
            icon: ''
        },

        {
            id: 5,
            nome_categoria: 'Favoritos',
            icon: ''
        }

    ]

}

var produtos = {

    produto: [

        {
            id: 1,
            nome_produto: 'Pizza de Calabresa com Queijo',
            valor: 'R$16,00',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 5,
            comentario: [

                {
                    cliente: clientes.cliente[0],
                    texto: 'Deliciosa!',
                    data: '12/09/2022'
                },

                {
                    cliente: clientes.cliente[1],
                    texto: 'Pizza muito boa!',
                    data: '15/03/2022'
                }

            ]


        },

        {
            id: 2,
            nome_produto: 'Pizza de Peperoni com Queijo',
            valor: 'R$19,00',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 4,
            comentario: [

                {
                    cliente: clientes.cliente[2],
                    texto: 'A MELHOR PIZZA QUE COMI NA VIDA',
                    data: '17/10/2022'
                },

                {
                    cliente: clientes.cliente[3],
                    texto: 'Tava muito boa, mas não tanto!',
                    data: '07/02/2022'
                }

            ]
        },

        {
            id: 3,
            nome_produto: 'Coca-Cola',
            valor: 'R$14,99',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[2],
            avaliacao: 5,
            comentario: [

                {
                    cliente: clientes.cliente[2],
                    texto: 'Coca geladinha, hmmmm',
                    data: '17/10/2022'
                }

            ]
        },

        {
            id: 4,
            nome_produto: 'Cerveja Heineken',
            valor: 'R$17,99',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[2],
            avaliacao: 5,
            comentario: [

                {
                    cliente: clientes.cliente[2],
                    texto: 'Muito cremosa!',
                    data: '25/04/2022'
                }

            ]
        },

        {
            id: 5,
            nome_produto: 'Pizza de peperoni com queijo e tomate',
            valor: 'R$21,00',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 5,
            comentario: [

                {
                    cliente: clientes.cliente[2],
                    texto: 'A melhor!!!',
                    data: '21/05/2022'
                }

            ]
        },

        {
            id: 6,
            nome_produto: 'Pizza brotinho com queijo e tomate',
            valor: 'R$12,00',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 5,
            comentario: [

                {
                    cliente: clientes.cliente[2],
                    texto: 'O melhor broto da região',
                    data: '17/10/2023'
                }

            ]
        }




    ]

}

module.exports = {
    clientes,
    categorias,
    produtos
}