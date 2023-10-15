import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function ServicosPage() {
    return (
        <>
             <div>
                <ButtonContainer>
                    <Button>Adicionar novo serviço</Button>
                   
                </ButtonContainer>
                <Table>
                    <thead>
                        <tr>
                            <Th>Descrição</Th>
                            <Th>Valor</Th>
                            <Th>Editar</Th>
                            <Th>Excluir</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>Corte Maquina</Td>
                            <Td>R$ 15,00</Td>
                            <Td>
                                <EditIcon icon={faEdit} />
                            </Td>
                            <Td>
                                <DeleteIcon icon={faTrashAlt} />
                            </Td>
                        </tr>
                        <tr>
                        <Td>Corte Degradê</Td>
                            <Td>R$ 25,00</Td>
                            <Td>
                                <EditIcon icon={faEdit} />
                            </Td>
                            <Td>
                                <DeleteIcon icon={faTrashAlt} />
                            </Td>
                        </tr>
                        <tr>
                        <Td>Limpeza de pele</Td>
                            <Td>R$ 20,00</Td>
                            <Td>
                                <EditIcon icon={faEdit} />
                            </Td>
                            <Td>
                                <DeleteIcon icon={faTrashAlt} />
                            </Td>
                        </tr>
                        <tr>
                        <Td>Platinado</Td>
                            <Td>R$ 80,00</Td>
                            <Td>
                                <EditIcon icon={faEdit} />
                            </Td>
                            <Td>
                                <DeleteIcon icon={faTrashAlt} />
                            </Td>
                        </tr>
                        <tr>
                        <Td>Barba Máquina</Td>
                            <Td>R$ 10,00</Td>
                            <Td>
                                <EditIcon icon={faEdit} />
                            </Td>
                            <Td>
                                <DeleteIcon icon={faTrashAlt} />
                            </Td>
                        </tr>

                    </tbody>
                </Table>
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