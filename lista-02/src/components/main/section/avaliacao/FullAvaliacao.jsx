import Avaliacao from "./Avaliacao";
export default function FullAvaliacao({filename}) {
 
    function sec() {
        return (
            Object.values(filename).map(e => 
                <Avaliacao
                    foto={e.foto}
                    nome={e.nome}
                    avaliacao1={e.avaliacao1}
                    avaliacao2={e.avaliacao2}
                />
            ));
    }




    return (
            <div className="flex">
                {sec()}
            </div>
    )
}