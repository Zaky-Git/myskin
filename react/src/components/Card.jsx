import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({icon1 , icon2, icon3, title1, title2}) => {
    const cardItems = [
        {
            title: 'Pasien',
            icon: icon1,
            jumlah: 70
        },
        {
            title: title1,
            icon: icon2,
            jumlah: 13
        },
        {
            title: title2,
            icon: icon3,
            jumlah: 57
        }
    ];

    return (
        <div className='card-container'>
            {cardItems.map((item, index) => (
                <div className="card-custom shadow-xl" key={index} style={{ alignItems: 'center' }}>
                    <div className="card-cover">
                        <FontAwesomeIcon icon={item.icon}/>
                    </div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                        <h2 className='card-subtitle text-muted'>{item.jumlah}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
