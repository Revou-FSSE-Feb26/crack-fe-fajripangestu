import { useEffect, useState } from 'react';
import { getProducts } from '../lib/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.name} - Rp{p.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
