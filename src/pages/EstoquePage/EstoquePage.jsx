import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';



export default function EstoquePage() {

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDeleteClick = (id) => {
        setItemToDelete(id);
        setShowConfirmation(true);
    };


    const handleConfirmDelete = (id) => {
        // Aqui você pode enviar uma solicitação para a API para excluir o item com o ID
        // Lembre-se de tratar a exclusão e redirecionamento de acordo com a lógica da sua aplicação.

        // Após a exclusão e redirecionamento, você pode fechar a caixa de confirmação.
        console.log(itemToDelete)
        setShowConfirmation(false);
    };
    return (
        <>
            <div>
                <ButtonContainer>
                    <Link to={"/estoque/adicionar"}>
                        <Button>Adicionar Produto</Button>
                    </Link>
                    <Link to={"/estoque/novacompra"}>
                        <Button>Adicionar Compra</Button>
                    </Link>

                </ButtonContainer>
                <Table>
                    <thead>
                        <tr>
                            <Th>Descrição</Th>
                            <Th>Categoria</Th>
                            <Th>Quantidade</Th>
                            <Th>Valor</Th>
                            <Th>Editar</Th>
                            <Th>Excluir</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>Brahma</Td>
                            <Td>Bebida</Td>
                            <Td>10</Td>
                            <Td>R$ 5.00</Td>
                            <Td>
                                <Link to={"/estoque/1"}>
                                    <EditIcon icon={faEdit} />
                                </Link>

                            </Td>
                            <Td>
                                <button onClick={() => handleDeleteClick(170792)}>
                                    <DeleteIcon icon={faTrashAlt} />
                                </button>
                            </Td>
                        </tr>
                        <tr>
                            <Td>Heineken</Td>
                            <Td>Bebida</Td>
                            <Td>20</Td>
                            <Td>R$ 9.00</Td>
                            <Td>
                                <EditIcon icon={faEdit} />
                            </Td>
                            <Td>
                                <DeleteIcon icon={faTrashAlt} />
                            </Td>
                        </tr>
                        <tr>
                            <Td>Pomada Capilar</Td>
                            <Td>Cremes</Td>
                            <Td>8</Td>
                            <Td>R$ 20.00</Td>
                            <Td>
                                <EditIcon icon={faEdit} />
                            </Td>
                            <Td>
                                <DeleteIcon icon={faTrashAlt} />
                            </Td>
                        </tr>
                        <tr>
                            <Td>Ficha</Td>
                            <Td>Sinuca</Td>
                            <Td>180</Td>
                            <Td>R$ 2.00</Td>
                            <Td>
                                <EditIcon icon={faEdit} />
                            </Td>
                            <Td>
                                <DeleteIcon icon={faTrashAlt} />
                            </Td>
                        </tr>

                    </tbody>
                </Table>
                {showConfirmation && (
                    <div>
                        <p>Tem certeza de que deseja excluir este item?</p>
                        <button onClick={handleConfirmDelete}>Confirmar</button>
                        <button onClick={() => setShowConfirmation(false)}>Cancelar</button>
                    </div>
                )}
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

const EditIcon = styled(FontAwesomeIcon)`
  color: #007bff; 
  cursor: pointer;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  color: #ff0000; 
  cursor: pointer;
`;