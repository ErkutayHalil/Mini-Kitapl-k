function AramaCubugu({ aramaMetni, onAramaChange }) {
    return (
      <input 
        className="arama-cubugu"
        type="text" 
        placeholder="Başlık veya yazar ara..."
        value={aramaMetni}
        onChange={(e) => onAramaChange(e.target.value)}
      />
    );
  }
  export default AramaCubugu;