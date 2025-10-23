import KitapKarti from './KitapKarti';

function KitapListe({ kitaplar, favoriler, onFavoriToggle }) {
  return (
    <div className="kitap-liste">
      {kitaplar.map(kitap => (
        <KitapKarti 
          key={kitap.id}
          {...kitap} 
          favorideMi={favoriler.includes(kitap.id)}
          onFavoriToggle={onFavoriToggle}
        />
      ))}
    </div>
  );
}
export default KitapListe;