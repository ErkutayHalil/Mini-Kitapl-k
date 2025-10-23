function KategoriFiltre({ kategoriler, seciliKategori, onKategoriChange }) {
    return (
      <select 
        className="kategori-filtre"
        value={seciliKategori} 
        onChange={(e) => onKategoriChange(e.target.value)}
      >
        {kategoriler.map(kat => (
          <option key={kat} value={kat}>{kat}</option>
        ))}
      </select>
    );
  }
  export default KategoriFiltre;