import { useState } from 'react';
import GorevEkle from '../Components/GorevEkle';
import GorevListesi from '../Components/GorevListesi'; // Yeni yazdığımız listeyi import ettik

function Home() {
  const [gorevler, setGorevler] = useState([]);

  return (
    <div className="container bg-white shadow-sm rounded-4 p-4 border-0 mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4 text-success" style={{ opacity: 0.8 }}>Görev Yöneticisi</h2>
      
      {/* 1. İşlem: Ekleme */}
      <GorevEkle gorevler={gorevler} setGorevler={setGorevler} />
      
      {/* 2. ve 4. İşlem: Listeleme ve Silme */}
      <GorevListesi gorevler={gorevler} setGorevler={setGorevler} />
      
    </div>
  );
}

export default Home;