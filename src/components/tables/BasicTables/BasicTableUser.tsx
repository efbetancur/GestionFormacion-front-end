import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";

import { useState } from "react";
import Badge from "../../ui/badge/Badge";

interface Usuario {
    id_usuario: number;
    codigocentro: string;
    nombre: string;
    identificacion: string;
    rol: string;
    correo: string;
    telefono: string;
    estado: string;
}

// Define the table data using the interface
const mockUsuarios: Usuario[] = [
    {
        id_usuario: 1,
        codigocentro: "9121",
        nombre: "Juan Pérez",
        identificacion: "12345678",
        rol: "Administrador",
        correo: "juan@example.com",
        telefono: "3001234567",
        estado: "Activo"
    },
    {   
        id_usuario: 2,
        codigocentro: "9121",
        nombre: "María López",
        identificacion: "87654321",
        rol: "Usuario",
        correo: "maria@example.com",
        telefono: "3017654321",
        estado: "Inactivo"
    },
    {   
        id_usuario: 3,
        codigocentro: "9122",
        nombre: "Carlos Gómez",
        identificacion: "10234567",
        rol: "Administrador",
        correo: "carlos.gomez@example.com",
        telefono: "3021234567",
        estado: "Activo"
    },
    {       
        id_usuario: 4,
        codigocentro: "9123",
        nombre: "Ana Martínez",
        identificacion: "11223344",
        rol: "Supervisor",
        correo: "ana.martinez@example.com",
        telefono: "3009988776",
        estado: "Activo"
    },
    {
        id_usuario: 5,
        codigocentro: "9124",
        nombre: "Luis Rodríguez",
        identificacion: "55667788",
        rol: "Usuario",
        correo: "luis.rodriguez@example.com",
        telefono: "3112233445",
        estado: "Inactivo"
    },
    {
        id_usuario: 6,
        codigocentro: "9125",
        nombre: "Laura Jiménez",
        identificacion: "99887766",
        rol: "Administrador",
        correo: "laura.jimenez@example.com",
        telefono: "3156677889",
        estado: "Activo"
    },
    {
        id_usuario: 7,
        codigocentro: "9126",
        nombre: "Pedro Torres",
        identificacion: "66778899",
        rol: "Usuario",
        correo: "pedro.torres@example.com",
        telefono: "3188888888",
        estado: "Activo"
    },
    {
        id_usuario: 8,
        codigocentro: "9127",
        nombre: "Camila Herrera",
        identificacion: "33445566",
        rol: "Supervisor",
        correo: "camila.herrera@example.com",
        telefono: "3194445566",
        estado: "Inactivo"
    },
    {
        id_usuario: 9,
        codigocentro: "9128",
        nombre: "Andrés Ramírez",
        identificacion: "22334455",
        rol: "Usuario",
        correo: "andres.ramirez@example.com",
        telefono: "3101122334",
        estado: "Activo"
    },
    {
        id_usuario: 10,
        codigocentro: "9129",
        nombre: "Paula Castro",
        identificacion: "77889900",
        rol: "Administrador",
        correo: "paula.castro@example.com",
        telefono: "3169998877",
        estado: "Activo"
    },
    {
        id_usuario: 11,
        codigocentro: "9130",
        nombre: "Jorge Díaz",
        identificacion: "44556677",
        rol: "Usuario",
        correo: "jorge.diaz@example.com",
        telefono: "3123456789",
        estado: "Inactivo"
    },
    {
        id_usuario: 12,
        codigocentro: "9131",
        nombre: "Natalia Vega",
        identificacion: "88990011",
        rol: "Supervisor",
        correo: "natalia.vega@example.com",
        telefono: "3171231234",
        estado: "Activo"
    },
    {
        id_usuario: 13,
        codigocentro: "9131",
        nombre: "Natalia Vega",
        identificacion: "88990011",
        rol: "Supervisor",
        correo: "natalia.vega@example.com",
        telefono: "3171231234",
        estado: "Activo"
    },
    {
        id_usuario: 14,
        codigocentro: "9131",
        nombre: "Natalia Vega",
        identificacion: "88990011",
        rol: "Supervisor",
        correo: "natalia.vega@example.com",
        telefono: "3171231234",
        estado: "Activo"
    },
    {
        id_usuario: 15,
        codigocentro: "9131",
        nombre: "Natalia Vega",
        identificacion: "88990011",
        rol: "Supervisor",
        correo: "natalia.vega@example.com",
        telefono: "3171231234",
        estado: "Activo"
    },
    {
        id_usuario: 16,
        codigocentro: "9131",
        nombre: "Natalia Vega",
        identificacion: "88990011",
        rol: "Supervisor",
        correo: "natalia.vega@example.com",
        telefono: "3171231234",
        estado: "Activo"
    }
    
    // ...puedes agregar más
];

export default function BasicTableUser() {
    const [filtroNombre, setFiltroNombre] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);
    const usuariosPorPagina = 10;

    const usuariosFiltrados = mockUsuarios.filter((usuario) =>
        usuario.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    );

    // Calcular el total de páginas
    const totalPaginas = Math.ceil(usuariosFiltrados.length / usuariosPorPagina);

    // Obtener los usuarios de la página actual
    const usuariosPaginados = usuariosFiltrados.slice(
        (paginaActual - 1) * usuariosPorPagina,
        paginaActual * usuariosPorPagina
    );

    const handleVer = (usuario: Usuario) => {
        console.log("Ver usuario:", usuario);
    };

    const handleEditar = (usuario: Usuario) => {
        console.log("Editar usuario:", usuario);
    };

    const handleEliminar = (usuario: Usuario) => {
        console.log("Eliminar usuario:", usuario);
    };

    const handleCrearUsuario = () => {
        console.log("Crear nuevo usuario");
    };

    const handleExportar = () => {
        console.log("Exportar datos");
        // Aquí puedes implementar la lógica para exportar a Excel, CSV, etc.
    };

    const handleImportar = () => {
        console.log("Importar datos");
        // Aquí puedes implementar la lógica para importar desde un archivo
    };

    const handleCambiarPagina = (nuevaPagina: number) => {
        setPaginaActual(nuevaPagina);
    };

    return (
        <div className="space-y-4">
            {/* Barra de búsqueda y botón crear */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                <div className="relative w-full sm:w-64">
                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        value={filtroNombre}
                        onChange={(e) => setFiltroNombre(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                    <svg
                        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <button
                    onClick={handleCrearUsuario}
                    className="w-full sm:w-auto px-4 py-2 bg-[#39A900] text-white rounded-md hover:bg-[#2d8000] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                    title="Crear Usuario"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="xs:inline sm:hidden md:inline">Crear Usuario</span>
                    <span className="hidden sm:inline md:hidden">Crear</span>
                </button>
                <div className="flex justify-center gap-2">
                    <button
                        onClick={handleExportar}
                        className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Exportar
                    </button>
                    <button
                        onClick={handleImportar}
                        className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Importar
                    </button>
                </div>
            </div>

            {/* Tabla */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Código Centro
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Nombre
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Identificación
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Rol
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Correo
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Teléfono
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Estado
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Acciones
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {usuariosPaginados.map((usuario) => (
                                <TableRow key={usuario.id_usuario}>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                            {usuario.codigocentro}
                                        </span>
                                    </TableCell>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                            {usuario.nombre}
                                        </span>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {usuario.identificacion}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {usuario.rol}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {usuario.correo}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {usuario.telefono}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <Badge
                                            size="sm"
                                            color={
                                                usuario.estado === "Activo"
                                                    ? "success"
                                                    : "error"
                                            }
                                        >
                                            {usuario.estado}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <div className="flex justify-center space-x-2">
                                            <button
                                                onClick={() => handleVer(usuario)}
                                                className="p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                                title="Ver detalles"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleEditar(usuario)}
                                                className="p-1 text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
                                                title="Editar usuario"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleEliminar(usuario)}
                                                className="p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                                                title="Eliminar usuario"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Paginación */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6 dark:bg-gray-900 dark:border-gray-800">
                <div className="flex justify-between flex-1 sm:hidden">
                    <button
                        onClick={() => handleCambiarPagina(paginaActual - 1)}
                        disabled={paginaActual === 1}
                        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => handleCambiarPagina(paginaActual + 1)}
                        disabled={paginaActual === totalPaginas}
                        className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Siguiente
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                            Mostrando <span className="font-medium">{(paginaActual - 1) * usuariosPorPagina + 1}</span> a{" "}
                            <span className="font-medium">
                                {Math.min(paginaActual * usuariosPorPagina, usuariosFiltrados.length)}
                            </span>{" "}
                            de <span className="font-medium">{usuariosFiltrados.length}</span> resultados
                        </p>
                    </div>
                    <div>
                        <nav className="inline-flex -space-x-px rounded-md shadow-sm isolate" aria-label="Pagination">
                            <button
                                onClick={() => handleCambiarPagina(paginaActual - 1)}
                                disabled={paginaActual === 1}
                                className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="sr-only">Anterior</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {[...Array(totalPaginas)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handleCambiarPagina(index + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                                        paginaActual === index + 1
                                            ? "z-10 bg-[#39A900] text-white"
                                            : "text-gray-900 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                                    } border border-gray-300 dark:border-gray-700`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handleCambiarPagina(paginaActual + 1)}
                                disabled={paginaActual === totalPaginas}
                                className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="sr-only">Siguiente</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}