import Avaliacao from "./Avaliacao";
export default function FullAvaliacao({ filename }) {

    function sec() {
        // console.log(filename);
        const vetUser = []
        while (vetUser.length < 3) {
            const aleatorio = Math.floor(Math.random() * 5);
            if (!vetUser.includes(aleatorio)) vetUser.push(aleatorio);
        }



        return vetUser.map(e => <Avaliacao
            foto={filename[e].foto}
            nome={filename[e].nome}
            avaliacao1={filename[e].avaliacao1}
            avaliacao2={filename[e].avaliacao2}
        />)
    }




    return (
        <div className="flex">
            {sec()}
        </div>
    )
}