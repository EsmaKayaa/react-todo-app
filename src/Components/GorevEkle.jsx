import { useState } from 'react';

function GorevEkle({ gorevler, setGorevler }) {
  // Input alanındaki yazıyı tutan durum
  const [yeniGorev, setYeniGorev] = useState('');

  const ekle = (e) => {
    e.preventDefault(); // Butona basıldığında sayfanın yenilenmesini engeller
    
    if (yeniGorev.trim() === '') return; // Boş görev eklenmesini önler

    // Yeni görevin şekli (Benzersiz id ve metin)
    const yeniOge = {
      id: Date.now(), 
      metin: yeniGorev
    };

    // Eski görevleri (...gorevler) koruyup yenisini ekliyoruz
    setGorevler([...gorevler, yeniOge]);
    setYeniGorev(''); // Ekleme bitince inputun içini temizle
  };

  return (
    <form onSubmit={ekle} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2 border-success-subtle shadow-sm"
        placeholder="Ne yapmak istersin?"
        value={yeniGorev}
        onChange={(e) => setYeniGorev(e.target.value)}
      />
      <button type="submit" className="btn btn-success shadow-sm px-4 rounded-3">
        Ekle
      </button>
    </form>
  );
}

export default GorevEkle;