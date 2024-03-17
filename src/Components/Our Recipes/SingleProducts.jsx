const SingleProducts = ({ card, handleCart }) => {
  const {image, name, description, time, ingredients, caloric} = card;
  return (
   
      <div className="card  bg-base-100 shadow-xl rounded-xl border mb-2 p-[24px]">
        <figure>
          <img  src={image} alt="Food-Image" className="rounded-xl h-[250px] w-full object-cover"/>
        </figure>
        <div className="card-body p-8">
          <div className="card-details">
            <h2 className="card-title  mb-1 text-[22px]">{name}</h2>
            <p className="text-[16px]  mb-[10px]">{description}</p>
            <hr />
          </div>
          <div className="card-item">
            <h2 className="text-[18px] mt-4">Ingredients: {ingredients.length}</h2>
            <p className="pt-2 mb-2">
              {
                ingredients.map(cardList => <li key={cardList.id}>{cardList}</li>)
              }  
            </p>
            <hr />
          </div>
          <div className="flex gap-14 mt-3 mb-3">
            <div className="flex  gap-1">
            <img src="time-logo.png" alt="" />
              <p>{time}</p>
            </div>
            <div className="flex gap-1">
            <img src="Frame.png" alt="" />
              <p>{caloric} calories</p>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={(e) => handleCart(card)} className="text-[#150B2B] text-[18px] bg-[#0BE58A] px-[24px] py-[13px] rounded-[50px]">Want to Cook</button>
           
          </div>
        </div>
      </div>

  );
};

export default SingleProducts;
