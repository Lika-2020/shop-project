
function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
            <span className="card-title">{name}</span>
                {description}
            </div>
            <div className="card-action">
                <button className="btn  #2196f3 blue"  onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }>Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price} руб.</span>
            </div>
        </div>
    )
}

export { GoodsItem }