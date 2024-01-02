'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function NavShopping() {
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [showPurchaseOptions, setShowPurchaseOptions] = useState(false);
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const [showReceiptOptions, setShowReceiptOptions] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);

  const toggleFileOptions = () => {
    setShowFileOptions(!showFileOptions);
    setShowPurchaseOptions(false);
    setShowOrderOptions(false);
    setShowReceiptOptions(false);
    setShowReportOptions(false);
  };

  const togglePurchaseOptions = () => {
    setShowPurchaseOptions(!showPurchaseOptions);
    setShowFileOptions(false);
    setShowOrderOptions(false);
    setShowReceiptOptions(false);
    setShowReportOptions(false);
  };

  const toggleOrderOptions = () => {
    setShowOrderOptions(!showOrderOptions);
    setShowFileOptions(false);
    setShowPurchaseOptions(false);
    setShowReceiptOptions(false);
    setShowReportOptions(false);
  };

  const toggleReceiptOptions = () => {
    setShowReceiptOptions(!showReceiptOptions);
    setShowFileOptions(false);
    setShowPurchaseOptions(false);
    setShowOrderOptions(false);
    setShowReportOptions(false);
  };

  const toggleReportOptions = () => {
    setShowReportOptions(!showReportOptions);
    setShowFileOptions(false);
    setShowPurchaseOptions(false);
    setShowOrderOptions(false);
    setShowReceiptOptions(false);
  };

  return (
    <div className="w-full bg-blue-600 p-2">
      <nav className="flex items-center">
        <div className="cursor-pointer" onClick={toggleFileOptions}>
          <h2 className="hover:underline ml-5">
            Proveedores <span style={{ fontSize: '0.4em' }}>▼</span>
          </h2>
          {showFileOptions && (
            <div className="absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/shopping/files/update">
                <p className="hover:underline cursor-pointer text-xs">Actualización</p>
              </Link>
              <Link href="/shopping/files/initial-charge">
                <p className="hover:underline cursor-pointer text-xs">Carga Inicial</p>
              </Link>
            </div>
          )}
        </div>

        <div className="cursor-pointer" onClick={togglePurchaseOptions}>
          <h2 className="hover:underline ml-5">
            Solicitudes de Compra <span style={{ fontSize: '0.4em' }}>▼</span>
          </h2>
          {showPurchaseOptions && (
            <div className="absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/shopping/requests/allRequest">
                <p className="hover:underline cursor-pointer text-xs">Todas las Solicitudes</p>
              </Link>
            </div>
          )}
        </div>

        <div className="cursor-pointer" onClick={toggleOrderOptions}>
          <h2 className="hover:underline ml-5">
            Ordenes de Compra <span style={{ fontSize: '0.4em' }}>▼</span>
          </h2>
          {showOrderOptions && (
            <div className="absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/shopping/orders/allOrders">
                <p className="hover:underline cursor-pointer text-xs">Todas las Ordenes</p>
              </Link>
            </div>
          )}
        </div>

        <div className="cursor-pointer" onClick={toggleReceiptOptions}>
          <h2 className="hover:underline ml-5">
            Comprobantes <span style={{ fontSize: '0.4em' }}>▼</span>
          </h2>
          {showReceiptOptions && (
            <div className="absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/shopping/vouchers/billing">
                <p className="hover:underline cursor-pointer text-xs">Facturas</p>
              </Link>
              <Link href="/shopping/vouchers/remito">
                <p className="hover:underline cursor-pointer text-xs">Remitos</p>
              </Link>
            </div>
          )}
        </div>

        <div className="cursor-pointer" onClick={toggleReportOptions}>
          <h2 className="hover:underline ml-5">
            Informes <span style={{ fontSize: '0.4em' }}>▼</span>
          </h2>
          {showReportOptions && (
            <div className="absolute bg-blue-500 p-2 border-black z-10">
              <Link href="/shopping/reports/billing">
                <p className="hover:underline cursor-pointer text-xs">Facturación</p>
              </Link>
              <Link href="/shopping/reports/orders">
                <p className="hover:underline cursor-pointer text-xs">Pedidos</p>
              </Link>
              <Link href="/shopping/reports/shopping">
                <p className="hover:underline cursor-pointer text-xs">Compras Realizadas</p>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

