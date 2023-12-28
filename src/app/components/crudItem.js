'use client'
import React, {useState,useEffect} from "react";
import BotaoVermelho from "./botao/botao";


const CrudItem= ()=>{

    const [itens,setItens] = useState(null);
    const [itemName,setItemName] = useState('');

    useEffect(() => {
        const storedItens = JSON.parse(localStorage.getItem('itens'));
        if( storedItens !== null){ 
            setItens(storedItens);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('itens', JSON.stringify(itens));
    },[itens])

    const removerItem = (id) =>{
        const updatedItens = itens.filter((item) => item.id !== id);
        console.log(updatedItens)
        setItens(updatedItens)
    }

    const resetList = () =>{
        setItens([])
    }

    const addItem = () => {
        
        const maxId = itens.reduce((max, item) => (item.id > max ? item.id : max), 0);
        const novoId = itens.length > 0 ? maxId + 1:0;
        const novoItem = { id: novoId, nome: itemName };
        console.log(itens)
        const novoArrayDeItens = [...itens, novoItem];
        setItens(novoArrayDeItens)
        setItemName('');
    };


    return (
        <div>
            <hr />
            <div>
                <label className="item-label">
                Nome do Item:
                <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} className="item-input" />
                </label>
                
                <BotaoVermelho actionTitle={'Adicionar Item'} backgroundColor={'Blue'} onClick={ () => addItem()} />
                <BotaoVermelho actionTitle={'Zerar Lista'} backgroundColor={'Green'} onClick={ () => resetList()} />
            </div>

            <h2>Tabela de itens</h2>
            <table>
            <tbody>
            {itens?.map((item) => (
            <tr key={item.id}>
                <td>{item.nome}</td>
                <td> <BotaoVermelho actionTitle={'Remover'} onClick={ () => removerItem(item.id)} /> </td>
            </tr>
            ))}
        </tbody>
        </table>
        
      </div>
    );
}

export default CrudItem;
