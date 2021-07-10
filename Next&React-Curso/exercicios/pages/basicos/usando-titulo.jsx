import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo principal="Página de Cadastro" secundario="Incluir, alterar e excluir coisas!"/>
            <br></br>
            <Titulo principal="Página de Login" secundario="Informe seu email e senha" pequeno/>
        </div>
    )
} 