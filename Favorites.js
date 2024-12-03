
import React from "react";



const Favorites =({ favorites, setCity, addFavorite, removeFavorite}) =>{

  return (
    <div className="favorites">
      <h3>Favorite</h3>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>
            {fav.name}
            <button onClick={() => setCity(fav.name)}>View</button><br/>
            <button onClick={() => removeFavorite(fav.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>



    
  )
}

export default Favorites