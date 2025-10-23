function KitapKarti({ id, baslik, yazar, kategori, favorideMi, onFavoriToggle }) {

    return (
      <div className="kitap-karti">
        <div className="kitap-bilgisi">
          <h3>{baslik}</h3>
          <p>{yazar} - {kategori}</p>
        </div>
        <button 
          className={`favori-buton ${favorideMi ? 'favori' : ''}`}
          onClick={() => onFavoriToggle(id)}
        >
          {favorideMi ? '★ Favori' : '☆ Favori Ekle'}
        </button>
      </div>
    );
  }
  export default KitapKarti;