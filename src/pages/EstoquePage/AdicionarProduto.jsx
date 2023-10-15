import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

export default function CreateProduct() {
    
    const createNewProduct = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const productData = {
            description: formData.get('productName'),
            price: formData.get('price'),
            id_category: formData.get('category'),
            quantity: formData.get('quantity'),
            
        };
        console.log(productData)
    };


    return (
        <>
            <div>
                <ButtonContainer>
                    <Link to="/estoque">
                        <Button>Voltar sem criar um produto</Button>
                    </Link>
                </ButtonContainer>
                <form onSubmit={createNewProduct}>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Descrição</Th>
                                <Th>Categoria</Th>
                                <Th>Quantidade</Th>
                                <Th>Valor</Th>
                                <Th>Confirmar</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <EditableCell>
                                    <input type="text" name="productName" placeholder="Nome do Produto" />
                                </EditableCell>
                                <EditableCell>
                                    <select name="category">
                                        <option value="1">Bebida</option>
                                        <option value="2">Cremes</option>
                                        <option value="3">Sinuca</option>
                                    </select>
                                </EditableCell>
                                <EditableCell>
                                    <input type="number" name="quantity" placeholder="Quantidade" />
                                </EditableCell>
                                <EditableCell>
                                    <input type="text" name="price" placeholder="Valor" />
                                </EditableCell>
                                <ActionCell>
                                    <button type="submit">
                                        <SaveIcon icon={faCheck} />
                                    </button>
                                </ActionCell>
                            </tr>
                        </tbody>
                    </Table>
                </form>
            </div>

        </>
    )
}


const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  margin-top: 20px;
`;


const Th = styled.th`
  background-color: #333;
  color: white;
  border: 1px solid #000;
  padding: 8px;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid #000;
  padding: 8px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #000;
  }
`;

const SaveIcon = styled(FontAwesomeIcon)`
  color: #0f0; 
  cursor: pointer;

`;

const EditableCell = styled.td`
  input, select {
    width: 100%;
    padding: 5px;
  }
`;

const ActionCell = styled.td`
  
  text-align: center;
`;