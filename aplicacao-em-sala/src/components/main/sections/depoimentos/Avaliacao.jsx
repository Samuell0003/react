export default function Avaliacao(props) {
    return (
        <div>
            <img src={`./img/${props.foto}`} alt="" />
            <p>{props.nome}</p>
            <p>{props.avaliacao1}</p>
            <p>{props.avaliacao2}</p>
        </div>
    )
}