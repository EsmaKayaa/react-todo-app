import { useState } from 'react';

function GorevListesi({ gorevler, setGorevler }) {
  // Düzenleme işlemleri için tutacağımız yeni durumlar
  const [duzenlenenId, setDuzenlenenId] = useState(null);
  const [duzenlenenMetin, setDuzenlenenMetin] = useState('');

  // 1. Silme İşlemi
  const sil = (silinecekId) => {
    const guncelListe = gorevler.filter(gorev => gorev.id !== silinecekId);
    setGorevler(guncelListe);
  };

  // 2. Düzenleme modunu açan fonksiyon
  const duzenlemeyiBaslat = (gorev) => {
    setDuzenlenenId(gorev.id);
    setDuzenlenenMetin(gorev.metin);
  };

  // 3. Düzenlemeyi kaydeden fonksiyon (Güncelleme İşlemi)
  const guncelle = (id) => {
    if (duzenlenenMetin.trim() === '') return; // Boş bırakılırsa kaydetmeyi engelle

    const guncellenmisListe = gorevler.map((gorev) => {
      // Eğer id eşleşiyorsa, eski metni yeni metinle değiştiriyoruz
      if (gorev.id === id) {
        return { ...gorev, metin: duzenlenenMetin };
      }
      return gorev;
    });
    
    setGorevler(guncellenmisListe); // Listeyi güncelle
    setDuzenlenenId(null); // Düzenleme modunu kapat
  };

  if (gorevler.length === 0) {
    return <p className="text-center text-muted mt-4">Henüz bir görev eklenmedi. Hadi başlayalım!</p>;
  }

  return (
    <ul className="list-group shadow-sm mt-3">
      {gorevler.map((gorev) => (
        <li 
          key={gorev.id} 
          className="list-group-item d-flex justify-content-between align-items-center border-success-subtle mb-2 rounded gap-3"
        >
          {/* Eğer bu görev düzenleme modundaysa bir Input göster, değilse normal metni göster */}
          {duzenlenenId === gorev.id ? (
            <input 
              type="text" 
              className="form-control border-primary" 
              value={duzenlenenMetin} 
              onChange={(e) => setDuzenlenenMetin(e.target.value)} 
              autoFocus
            />
          ) : (
            <span className="text-break">{gorev.metin}</span>
          )}
          
          {/* Butonlar: Düzenleme moduna göre dinamik değişecek */}
          <div className="d-flex gap-2 flex-shrink-0">
            {duzenlenenId === gorev.id ? (
              <>
                <button onClick={() => guncelle(gorev.id)} className="btn btn-sm btn-success rounded-3 px-3">Kaydet</button>
                <button onClick={() => setDuzenlenenId(null)} className="btn btn-sm btn-outline-secondary rounded-3 px-3">İptal</button>
              </>
            ) : (
              <>
                <button onClick={() => duzenlemeyiBaslat(gorev)} className="btn btn-sm btn-outline-primary rounded-3 px-3">Düzenle</button>
                <button onClick={() => sil(gorev.id)} className="btn btn-sm btn-outline-danger rounded-3 px-3">Sil</button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default GorevListesi;