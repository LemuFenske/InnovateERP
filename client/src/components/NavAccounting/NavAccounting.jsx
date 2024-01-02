import Link from "next/link";





export default function NavAccounting() {


  return (
    <div className="w-full bg-blue-600 p-2">
      <nav className="flex items-center">
        <Link href="/accounting/income">
          <h2 className=" hover:underline cursor-pointer ml-5">Ingresos</h2>
        </Link>
        <Link href="/accounting/departures">
          <h2 className=" hover:underline cursor-pointer ml-5">Egresos</h2>
        </Link>
        <Link href="/accounting/all-movements">
          <h2 className=" hover:underline cursor-pointer ml-5">Todos los Movimientos</h2>
        </Link>
      </nav>
    </div>
  );
}

