import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const listaDoces = [
    { id: 1, nome: "Brigadeiro", tipo: "Chocolate", preco: "R$ 1,50"},
    { id: 2, nome: 'Beijinho', tipo: 'Coco', preco: 'R$ 1,50' },
    { id: 3, nome: 'Cajuzinho', tipo: 'Amendoim', preco: 'R$ 1,50' },
    { id: 4, nome: 'Quindim', tipo: 'Coco', preco: 'R$ 3,00' },
    { id: 5, nome: 'Bolo de Rolo', tipo: 'Tradicional', preco: 'R$ 5,00' }
];

export default function TabelaDoces() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Preço</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {listaDoces.map((doce, index) => (
                        <TableRow
                        key={doce.id}
                        >
                            <TableCell>{doce.id}</TableCell>
                            <TableCell>{doce.nome}</TableCell>
                            <TableCell>{doce.tipo}</TableCell>
                            <TableCell>{doce.preco}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    );

}