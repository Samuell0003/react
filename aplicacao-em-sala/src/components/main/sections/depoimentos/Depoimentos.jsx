import TituloSection from "../TituloSection";
import Avaliacao from "./Avaliacao";

export default function Depoimentos() {

    const avaliacao = [
        {
            foto: "foto01.jpg",
            nome: "Ana Bruck",
            avaliacao1: "Estou muito feliz...",
            avaliacao2: "Recomendo essa corretora para todos..."
        },
        {
            foto: "foto02.jpg",
            nome: "Dani Shutz",
            avaliacao1: "Foi uma satisfação tão grande...",
            avaliacao2: "Adorei a minha aquisição..."
        },
        {
            foto: "foto03.jpg",
            nome: "Bia Wolf",
            avaliacao1: "nao poderia ser uma compra melhor",
            avaliacao2: "Recomendo essa corretora para todos..."
        }
    ]

    function showAvaliacoes() {
        return avaliacao.map(e => 
             <Avaliacao
                foto={e.foto}
                nome={e.nome}
                avaliacao1={e.avaliacao1}
                avaliacao2={e.avaliacao2}
            />
        );


    }

    return (
        <section>
            <TituloSection
                titulo="Clientes felizes. Novos amigos ;)"
                subtitulo="(DEPOIMENTOS DE ALGUNS CLIENTES REAIS)"
            />
            <div className="flex">
                {showAvaliacoes()}
            </div>

        </section>
    )
}