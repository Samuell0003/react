export default function Avaliacao() {

    function ava() {
        var vetAvaliacao = [];

        for (let index = 0; index < 3; index++) {
            vetAvaliacao.push(
                <div>
                    <img src={`./img/foto01.jpg`} alt="" />
                    <h3 style={{ color: 'red' }}>Samuel</h3>
                    <p style={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est enim sunt soluta quia vitae omnis ea! Hic delectus fugiat, labore minima impedit assumenda similique perferendis ipsum sapiente, facilis expedita ea.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ducimus asperiores obcaecati natus voluptate aspernatur quo corporis. Numquam consequatur vero, repellendus quo eveniet voluptatibus recusandae molestias, non ab est praesentium.</p>
                </div>
            );
        }

        return vetAvaliacao;
    }
    return (
        <div className="flex">
            {ava()};
        </div>
    )
}