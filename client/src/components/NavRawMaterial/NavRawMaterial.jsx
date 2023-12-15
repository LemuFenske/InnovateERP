'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function NavRawMaterial() {
  const [showStockOptions, setShowStockOptions] = useState(false);
  const [showFilesOptions, setShowFilesOptions] = useState(false);
  const [showMovementsOptions, setShowMovementsOptions] = useState(false);
  const [showReportsOptions, setShowReportsOptions] = useState(false);


  const toggleFilesOptions = () => {
    setShowFilesOptions(!showFilesOptions);
    // Ocultar otras opciones cuando se hace clic en "Archivos"
    setShowStockOptions(false);
    setShowMovementsOptions(false);
    setShowReportsOptions(false);
  };

  const toggleMovementsOptions = () => {
    setShowMovementsOptions(!showMovementsOptions);
    // Ocultar otras opciones cuando se hace clic en "Movimientos"
    setShowStockOptions(false);
    setShowFilesOptions(false);
    setShowReportsOptions(false);
  };

  const toggleReportsOptions = () => {
    setShowReportsOptions(!showReportsOptions);
    // Ocultar otras opciones cuando se hace clic en "Informes"
    setShowStockOptions(false);
    setShowFilesOptions(false);
    setShowMovementsOptions(false);
  };

  return (
    <div className="w-full bg-blue-700 p-2">
      <nav className="flex items-center">
        <div className="cursor-pointer" onClick={toggleFilesOptions}>
          <h2 className="hover:underline ml-5">
            Archivos <span style={{ fontSize: '0.4em' }}>▼</span>
          </h2>
          {showFilesOptions && (
            <div className="absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/stock/raw-material/files/update">
                <p className="hover:underline cursor-pointer text-xs">Actualización</p>
              </Link>
              <Link href="/stock/raw-material/files/initial-charge">
                <p className="hover:underline cursor-pointer text-xs">Carga Inicial</p>
              </Link>
            </div>
          )}
        </div>

        <div className="cursor-pointer" onClick={toggleMovementsOptions}>
          <h2 className="hover:underline ml-5">
            Movimientos <span style={{ fontSize: '0.4em' }}>▼</span>
          </h2>
          {showMovementsOptions && (
            <div className="absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/stock/raw-material/movements/income">
                <p className="hover:underline cursor-pointer text-xs">Ingresos de Stock</p>
              </Link>
              <Link href="/stock/raw-material/movements/departures">
                <p className="hover:underline cursor-pointer text-xs">Egresos de Stock</p>
              </Link>
            </div>
          )}
        </div>

        <div className="cursor-pointer" onClick={toggleReportsOptions}>
          <h2 className="hover:underline ml-5">
            Informes <span style={{ fontSize: '0.4em' }}>▼</span>
          </h2>
          {showReportsOptions && (
            <div className="absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/stock/raw-material/reports/movements">
                <p className="hover:underline cursor-pointer text-xs">Movimientos</p>
              </Link>
              <Link href="/stock/raw-material/reports/income">
                <p className="hover:underline cursor-pointer text-xs">Ingresos de Stock</p>
              </Link>
              <Link href="/stock/raw-material/reports/departures">
                <p className="hover:underline cursor-pointer text-xs">Egresos de Stock</p>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
