export default function Item( {itemObj} ){

    let {name, quantity, category} = itemObj;


    return(
        <div className="bg-blue-400 m-4 p-4 rounded-2xl w-80 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
            <ul className="space-y-1 text-white text-base">
                <li>Purchase {quantity}</li>
                <li>Located in {category}</li>
            </ul>
        </div>
    );
}