let frutas = [];
let vegetais = [];
let congelados = [];
let laticinios = [];
let limpeza = [];
let snacks = [];
let outros = [];

alert(`Vamos começar a sua lista de compras!`)

let continuar = "sim";
while((continuar != 'não' && continuar != 'Não' && continuar != 'nao' && continuar != 'Nao')){
    do{
        adicionar = prompt(`Gostaria de ADICIONAR um item a sua lista? Sim ou Não?`);
        if (adicionar == 'sim' || adicionar == 'Sim'){
            do{
                item = prompt(`Qual item gostaria de adicionar?`);
            }while (item === '' || item === null );
            do {
                categoria = prompt(`Em qual categoria esse item se encaixa?\nFrutas\nVegetais\nCongelados\nLaticinios\nLimpeza\nSnack\nOutros`);
                if(categoria != 'frutas' && categoria != 'vegetais' && categoria != 'congelados' && categoria != 'laticinios' && categoria != 'limpeza' && categoria != 'snacks' && categoria != 'outros'){
                    alert(`Categoria Inxistente`)
                }
            }while (categoria != 'frutas' && categoria != 'vegetais' && categoria != 'congelados' && categoria != 'laticinios' && categoria != 'limpeza' && categoria != 'snacks' && categoria != 'outros');
            
            switch (categoria) {
                case 'frutas':
                    frutas.push(item);
                    break;
                case 'vegetais':
                    vegetais.push(item);
                    break;
                case 'congelados':
                    congelados.push(item);
                    break;
                case 'laticinios':
                    laticinios.push(item);
                    break;
                case 'limpeza':
                    limpeza.push(item);
                    break;
                case 'snacks':
                    snacks.push(item);
                    break;
                case 'outros':
                    outros.push(item);
                    break;
            }
        }    
    } while ((adicionar === '' || adicionar === null) || (adicionar != 'não' && adicionar != 'Não' && adicionar != 'nao' && adicionar != 'Nao'));

    if (adicionar != 'não' || adicionar != 'Não' || adicionar != 'nao' || adicionar != 'Nao'){
        do{
            remover = prompt(`Gostaria de REMOVER algum item da lista? Sim ou Não?`)
            if (remover == 'sim' || remover == 'Sim'){
                do{
                    removeritem = prompt(`Por favor digite qual item deseja remover da Lista:\nFrutas: ${frutas.join(", ")}\nVegetais: ${vegetais.join(", ")}\nCongelados: ${congelados.join(", ")}\nLaticínios: ${laticinios.join(", ")}\nLimpeza: ${limpeza.join(", ")}\nSnacks: ${snacks.join(", ")}\nOutros: ${outros.join(", ")}`);

                    lista = [frutas, vegetais, congelados, laticinios, limpeza, snacks, outros].find(array => array.includes(removeritem));
                
                    if (typeof lista === 'undefined' || !Array.isArray(lista)){
                        alert(`Não foi possível encontrar o item '${removeritem}' dentro da lista!`);
                    }               
                }while (typeof lista === 'undefined' || !Array.isArray(lista));

                pos = lista.indexOf(removeritem);
                lista.splice(pos, 1);
                alert(`O item '${removeritem}' foi removido da lista:\nFrutas: ${frutas.join(", ")}\nVegetais: ${vegetais.join(", ")}\nCongelados: ${congelados.join(", ")}\nLaticínios: ${laticinios.join(", ")}\nLimpeza: ${limpeza.join(", ")}\nSnacks: ${snacks.join(", ")}\nOutros: ${outros.join(", ")}`)
            }
        }while ((remover === '' || remover === null) || (remover != 'não' && remover != 'Não' && remover != 'nao' && remover != 'Nao'));
    }
    
    do{
        continuar = prompt(`Deseja mudar mais alguma coisa na sua lista? Sim ou Não?`)
    }while ((continuar === '' || continuar === null));
}

alert(`Aqui está a sua lista de compras:\nFrutas: ${frutas.join(", ")}\nVegetais: ${vegetais.join(", ")}\nCongelados: ${congelados.join(", ")}\nLaticínios: ${laticinios.join(", ")}\nLimpeza: ${limpeza.join(", ")}\nSnacks: ${snacks.join(", ")}\nOutros: ${outros.join(", ")}`);
