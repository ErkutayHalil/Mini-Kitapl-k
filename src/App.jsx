import { useState, useEffect } from 'react';
import './App.css'; 


import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPaneli from './components/FavoriPaneli';


const INITAL_KITAPLAR = [
  { id: 1, baslik: "React'e Giriş", yazar: "D. Usta", kategori: "Web", favorideMi: false },
  { id: 2, baslik: "İleri JavaScript", yazar: "S. Kılıç", kategori: "Web", favorideMi: false },
  { id: 3, baslik: "Veri Yapıları", yazar: "A. Demir", kategori: "CS", favorideMi: false },
  { id: 4, baslik: "Algoritmalar", yazar: "E. Kaya", kategori: "CS", favorideMi: false },
  { id: 5, baslik: "UI/UX Temelleri", yazar: "N. Akın", kategori: "Tasarım", favorideMi: false }
];

function App() {

  

  const [kitaplar, setKitaplar] = useState(INITAL_KITAPLAR);


  const [aramaMetni, setAramaMetni] = useState(
    () => localStorage.getItem('aramaMetni') || ''
  );

  const [favoriler, setFavoriler] = useState(
    () => JSON.parse(localStorage.getItem('favoriler')) || []
  );

  const [seciliKategori, setSeciliKategori] = useState('Tümü');


  useEffect(() => {
    localStorage.setItem('aramaMetni', aramaMetni);
  }, [aramaMetni]);


  useEffect(() => {
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [favoriler]);



  const kategoriler = ['Tümü', ...new Set(INITAL_KITAPLAR.map(k => k.kategori))];

  const filtrelenmisKitaplar = kitaplar
    .filter(kitap => 
      seciliKategori === 'Tümü' || kitap.kategori === seciliKategori
    )
    .filter(kitap => 
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase())
    );

  const favoriKitaplar = kitaplar.filter(kitap => favoriler.includes(kitap.id));


  

  const handleFavoriToggle = (kitapId) => {
    const zatenFavoride = favoriler.includes(kitapId);
    if (zatenFavoride) {
      setFavoriler(favoriler.filter(id => id !== kitapId)); 
    } else {
      setFavoriler([...favoriler, kitapId]); 
    }
  };


  const handleFavoriKaldir = (kitapId) => {
    setFavoriler(favoriler.filter(id => id !== kitapId));
  };


  
  return (
    <div className="uygulama">
      <header>
        <h1>Mini Kitaplık</h1>
      </header>
      
      <div className="filtre-alani">
        <AramaCubugu 
          aramaMetni={aramaMetni} 
          onAramaChange={setAramaMetni} 
        />
        <KategoriFiltre 
          kategoriler={kategoriler}
          seciliKategori={seciliKategori}
          onKategoriChange={setSeciliKategori}
        />
      </div>

      <main className="icerik-alani">
        <div className="kitap-listesi-wrapper">
          <KitapListe 
            kitaplar={filtrelenmisKitaplar} 
            favoriler={favoriler}
            onFavoriToggle={handleFavoriToggle} 
          />
        </div>
        <div className="favori-paneli-wrapper">
          <FavoriPaneli 
            favoriKitaplar={favoriKitaplar}
            onFavoriKaldir={handleFavoriKaldir} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;