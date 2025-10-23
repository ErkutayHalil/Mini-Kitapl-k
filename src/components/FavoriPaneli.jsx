function FavoriPaneli({ favoriKitaplar, onFavoriKaldir }) {
    return (
      <div className="favori-paneli">
        <h3>Favoriler ({favoriKitaplar.length})</h3>
        <ul>
          {favoriKitaplar.length === 0 ? (
            <p>Henüz favori eklenmedi.</p>
          ) : (
            favoriKitaplar.map(kitap => (
              <li key={kitap.id}>
                <span>{kitap.baslik}</span>
                <button 
                  className="kaldir-buton"
                  onClick={() => onFavoriKaldir(kitap.id)}
                >
                  Kaldır
                  
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
  export default FavoriPaneli;