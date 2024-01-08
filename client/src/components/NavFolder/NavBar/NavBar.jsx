'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [showStockOptions, setShowStockOptions] = useState(false);

  const toggleStockOptions = () => {
    setShowStockOptions(!showStockOptions);
  };

  return (
    <div className="w-full bg-blue-700 p-2">
      <nav className="flex  items-center">
        <div className=''>

        <div className="cursor-pointer ml-5" onClick={toggleStockOptions}>
        <h2 className=" hover:underline">
          Stock <span style={{ fontSize: '0.4em' }}>▼</span>
        </h2>
          {showStockOptions && (
            <div className=" absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/stock/raw-material">
                <p className=" hover:underline cursor-pointer text-xs">Materia Prima</p>
              </Link>
              <Link href="/stock/production">
                <p className=" hover:underline cursor-pointer text-xs">Producción</p>
              </Link>
            </div>
          )}
        </div>
        </div>

        <Link href="/shopping">
          <h2 className=" hover:underline cursor-pointer ml-5">Compras</h2>
        </Link>
        <Link href="/sales">
          <h2 className=" hover:underline cursor-pointer ml-5">Ventas</h2>
        </Link>
        <Link href="/accounting">
          <h2 className=" hover:underline cursor-pointer ml-5">Contabilidad</h2>
        </Link>
      </nav>
    </div>
  );
}
