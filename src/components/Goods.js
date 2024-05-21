function Goods(props) {
   
    return (
        <div className="goods-block">
            <p>{props.title}</p>
            {/* <p>{props.cost}</p> */}
            <input type="checkbox" className="add-to-cart" data-key={props.articul}/>
            
        </div>
        
    );
    
}

export default Goods;