export default function Avaliacao(props) {

    return (
        <div>
            <img src={`./img/${props.foto}`} alt="" />
            <div>
                <h3 style={{ color: 'red' }}>{props.nome}</h3>
                <p style={{ fontWeight: 'bold' }}>{props.avaliacao1}</p>
                <p>{props.avaliacao2}</p>
            </div>
        </div>
    )
}