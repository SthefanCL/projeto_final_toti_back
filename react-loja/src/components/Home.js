import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {

    const URL = "http://localhost:3001/produtos"
    const [state, setState] = useState([])

    const getData = async () => {
        const response = await axios.get(URL);
        return response;
    }

    useEffect(() => {
        getData().then((response) => {
            setState(response.data);
            })
    }, [])

    return (
      <div>
        { state.map( (produto) => (
                    <tr key={produto.id_produto}>
                    <td>{produto.nome_produto}</td>
                    </tr>                    
                ))}
      </div>
    );
}