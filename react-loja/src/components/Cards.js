import React from "react";

export default function Cards({produto}) {

    return (
      <div className="Cards">
        <div className="img_produto">
            {produto.foto_produto}
        </div>
        <div className="descricao_produto">
          <p>Nome: {produto.nome_produto}</p>
          <p>Tamanho: {produto.tamanho_produto}</p>
          <p>Tipo: {produto.tipo_produto}</p>
          <p>Preco: {produto.valor_produto}</p>
        </div>
      </div>
    );
}