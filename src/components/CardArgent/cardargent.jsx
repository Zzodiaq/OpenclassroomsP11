import '../../styles/card-argent-style/card-argent-style.css';

function CardArgent ({id ,title, money, subtitle}) {

    return (
        <div>
            <div className='cardArgentLeft'>
                <p>{title}</p>
                <p>{money}</p>
                <p>{subtitle}</p>
            </div>
            <div className='cardArgentRight'>
                <button>View transactions</button>
            </div>
        </div>
    ) 
}

export default CardArgent