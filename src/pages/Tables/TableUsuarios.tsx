import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

type Usuario = {
    codigocentro: string;
    nombre: string;
    identificacion: string;
    rol: string;
    correo: string;
    telefono: string;
    estado: string;
};

const mockUsuarios: Usuario[] = [
    {
        codigocentro: "9121",
        nombre: "Juan Pérez",
        identificacion: "12345678",
        rol: "Administrador",
        correo: "juan@example.com",
        telefono: "3001234567",
        estado: "Activo"
    },
    {
        codigocentro: "9121",
        nombre: "María López",
        identificacion: "87654321",
        rol: "Usuario",
        correo: "maria@example.com",
        telefono: "3017654321",
        estado: "Inactivo"
    },
    {
        codigocentro: "9122",
        nombre: "Carlos Gómez",
        identificacion: "10234567",
        rol: "Administrador",
        correo: "carlos.gomez@example.com",
        telefono: "3021234567",
        estado: "Activo"
    },
    {
        codigocentro: "9123",
        nombre: "Ana Martínez",
        identificacion: "11223344",
        rol: "Supervisor",
        correo: "ana.martinez@example.com",
        telefono: "3009988776",
        estado: "Activo"
    },
    {
        codigocentro: "9124",
        nombre: "Luis Rodríguez",
        identificacion: "55667788",
        rol: "Usuario",
        correo: "luis.rodriguez@example.com",
        telefono: "3112233445",
        estado: "Inactivo"
    },
    {
        codigocentro: "9125",
        nombre: "Laura Jiménez",
        identificacion: "99887766",
        rol: "Administrador",
        correo: "laura.jimenez@example.com",
        telefono: "3156677889",
        estado: "Activo"
    },
    {
        codigocentro: "9126",
        nombre: "Pedro Torres",
        identificacion: "66778899",
        rol: "Usuario",
        correo: "pedro.torres@example.com",
        telefono: "3188888888",
        estado: "Activo"
    },
    {
        codigocentro: "9127",
        nombre: "Camila Herrera",
        identificacion: "33445566",
        rol: "Supervisor",
        correo: "camila.herrera@example.com",
        telefono: "3194445566",
        estado: "Inactivo"
    },
    {
        codigocentro: "9128",
        nombre: "Andrés Ramírez",
        identificacion: "22334455",
        rol: "Usuario",
        correo: "andres.ramirez@example.com",
        telefono: "3101122334",
        estado: "Activo"
    },
    {
        codigocentro: "9129",
        nombre: "Paula Castro",
        identificacion: "77889900",
        rol: "Administrador",
        correo: "paula.castro@example.com",
        telefono: "3169998877",
        estado: "Activo"
    },
    {
        codigocentro: "9130",
        nombre: "Jorge Díaz",
        identificacion: "44556677",
        rol: "Usuario",
        correo: "jorge.diaz@example.com",
        telefono: "3123456789",
        estado: "Inactivo"
    },
    {
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

export default function TableUsuarios() {
    const [filtroNombre, setFiltroNombre] = useState("");

    const usuariosFiltrados = mockUsuarios.filter((usuario) =>
        usuario.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    );

    const handleVer = (usuario: Usuario) => {
        console.log("Ver usuario:", usuario);
        // Aquí puedes implementar la lógica para ver los detalles del usuario
    };

    const handleEditar = (usuario: Usuario) => {
        console.log("Editar usuario:", usuario);
        // Aquí puedes implementar la lógica para editar el usuario
    };

    const handleEliminar = (usuario: Usuario) => {
        console.log("Eliminar usuario:", usuario);
        // Aquí puedes implementar la lógica para eliminar el usuario
    };

    const handleCrearUsuario = () => {
        console.log("Crear nuevo usuario");
        // Aquí puedes implementar la lógica para crear un nuevo usuario
    };

    return (
        <>
            <PageMeta
                title="Gestión Formación | SENA"
                description="Gestión Formación | SENA"
            />
            <PageBreadcrumb pageTitle="Tabla de Usuarios" />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <div className="mb-2 sm:mb-0">
                        <button
                            onClick={handleCrearUsuario}
                            className="px-4 py-2 bg-[#39A900] text-white rounded-md hover:bg-[#2d8000] transition-colors flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            Crear Usuario
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Filtrar por nombre..."
                        className="border px-3 py-2 rounded-md w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        value={filtroNombre}
                        onChange={(e) => setFiltroNombre(e.target.value)}
                    />
                </div>

                <div className="overflow-auto rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200 bg-white dark:bg-gray-800">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Código Centro</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Nombre</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Identificación</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Rol</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Correo</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Teléfono</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Estado</th>
                                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600 dark:text-gray-200">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {usuariosFiltrados.map((usuario, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                    <td className="px-4 py-2 font-medium text-gray-800 text-theme-sm dark:text-white/90">{usuario.codigocentro}</td>
                                    <td className="px-4 py-2 font-medium text-gray-800 text-theme-sm dark:text-white/90">{usuario.nombre}</td>
                                    <td className="px-4 font-medium text-gray-800 text-theme-sm dark:text-white/90">{usuario.identificacion}</td>
                                    <td className="px-4 font-medium text-gray-800 text-theme-sm dark:text-white/90">{usuario.rol}</td>
                                    <td className="px-4 font-medium text-gray-800 text-theme-sm dark:text-white/90">{usuario.correo}</td>
                                    <td className="px-4 font-medium text-gray-800 text-theme-sm dark:text-white/90">{usuario.telefono}</td>
                                    <td className="px-4 py-2">
                                        <span className={`px-2 py-1 rounded font-medium text-gray-800 text-theme-sm dark:text-white/90 ${
                                            usuario.estado === "Activo" 
                                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                        }`}>
                                            {usuario.estado}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
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
                                    </td>
                                </tr>
                            ))}
                            {usuariosFiltrados.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="text-center py-4 text-gray-400 dark:text-gray-500">
                                        No se encontraron usuarios.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
