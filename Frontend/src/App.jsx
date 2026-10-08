import React, { useState } from 'react';
import Login from './Login';
import avatarOsito from './assets/osito-avatar.png';

function App() {
    const [autenticado, setAutenticado] = useState(false);
    const [seccionActiva, setSeccionActiva] = useState('inicio');

    // Si el usuario no ha iniciado sesión, se muestra la pantalla de Login con el OTP
    if (!autenticado) {
        return <Login onLoginExitoso={() => setAutenticado(true)} />;
    }

    // Si ya está autenticado, se muestra la aplicación completa de la biblioteca
    return (
        <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800">

            {/* 1. BARRA LATERAL (SIDEBAR) */}
            <aside className="w-64 bg-blue-900 text-white flex flex-col justify-between hidden md:flex shadow-xl">
                <div>
                    <div className="p-6 text-2xl font-bold tracking-wider flex items-center gap-2 border-b border-blue-800">
                        <span>📚 SinergiaLab</span>
                    </div>
                    <nav className="p-4 space-y-2">
                        <button
                            onClick={() => setSeccionActiva('inicio')}
                            className={`w-full text-left px-4 py-3 rounded-xl transition ${seccionActiva === 'inicio' ? 'bg-blue-600 shadow-md font-semibold' : 'hover:bg-blue-800'}`}
                        >
                            🏠 Inicio / Resumen
                        </button>
                        <button
                            onClick={() => setSeccionActiva('noticias')}
                            className={`w-full text-left px-4 py-3 rounded-xl transition ${seccionActiva === 'noticias' ? 'bg-blue-600 shadow-md font-semibold' : 'hover:bg-blue-800'}`}
                        >
                            📢 Noticias Empresariales
                        </button>
                        <button
                            onClick={() => setSeccionActiva('documentos')}
                            className={`w-full text-left px-4 py-3 rounded-xl transition ${seccionActiva === 'documentos' ? 'bg-blue-600 shadow-md font-semibold' : 'hover:bg-blue-800'}`}
                        >
                            📁 Documentos & Políticas
                        </button>
                    </nav>
                </div>

                {/* ACCESOS RÁPIDOS A APLICATIVOS ALTERNOS */}
                <div className="p-4 border-t border-blue-800 space-y-2.5">
                    <p className="text-xs uppercase tracking-wider text-blue-300 font-bold px-1">Aplicativos</p>

                    <a
                        href="CertificadosLaborales.aspx"
                        className="block text-center bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold py-2 px-3 rounded-xl text-xs shadow transition"
                    >
                        📄 Certificados Laborales
                    </a>

                    <a
                        href="https://share.hsforms.com/1B_iGBPTVRwuXSAse2jnQZQceyyo"
                        className="block text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-3 rounded-xl text-xs shadow transition"
                    >
                        💻 Soporte Tecnologías
                    </a>

                    <a
                        href="http://10.254.35.16:8085/login"
                        className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-xl text-xs shadow transition"
                    >
                        🏢 Reserva de Salas
                    </a>
                </div>
            </aside>

            {/* 2. CONTENIDO PRINCIPAL */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto">

                {/* Cabecera superior */}
                <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center border-b">
                    <h1 className="text-xl font-bold text-blue-950">Biblioteca de Conocimiento Empresarial</h1>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-600">¡Hola, Colaborador!</span>
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">SC</div>
                        <button
                            onClick={() => setAutenticado(false)}
                            className="ml-4 text-xs bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-3 rounded-xl transition"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </header>

                {/* Cuerpo dinámico */}
                <div className="p-8 max-w-6xl w-full mx-auto flex-1">

                    {/* SECCIÓN DE BIENVENIDA CON EL AVATAR */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                        <div className="z-10 max-w-xl">
                            <span className="bg-blue-500/50 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">Asistente Sinergia</span>
                            <h2 className="text-3xl font-extrabold mt-2 mb-2">¡Bienvenido a tu espacio de aprendizaje!</h2>
                            <p className="text-blue-100 text-sm md:text-base">
                                Aquí encontrarás manuales actualizados, comunicados oficiales y todo lo que necesitas saber para tu día a día en la empresa. ¡Estoy aquí para ayudarte a explorar!
                            </p>
                        </div>

                        {/* AVATAR INTERACTIVO */}
                        <div className="mt-6 md:mt-0 z-10 flex items-center gap-4">
                            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-xs max-w-[180px] shadow-lg animate-bounce">
                                💡 <span className="font-semibold">¡Tip del día!</span> Revisa la nueva política de trabajo en el módulo de documentos.
                            </div>
                            <img
                                src={avatarOsito}
                                alt="Avatar Osito Sinergia"
                                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl hover:scale-105 transition transform duration-300"
                            />
                        </div>
                    </div>

                    {/* TARJETAS DE CONTENIDO */}
                    {seccionActiva === 'inicio' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                                <h3 className="text-lg font-bold text-blue-900 mb-2">📢 Últimas Noticias</h3>
                                <p className="text-sm text-slate-600 mb-4">Entérate de los acontecimientos más recientes y avisos importantes de la compañía.</p>
                                <button onClick={() => setSeccionActiva('noticias')} className="text-blue-600 font-semibold text-sm hover:underline">Ver todas las noticias &rarr;</button>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                                <h3 className="text-lg font-bold text-blue-900 mb-2">📁 Documentos Destacados</h3>
                                <p className="text-sm text-slate-600 mb-4">Accede rápidamente a manuales de funciones, reglamentos y formatos oficiales.</p>
                                <button onClick={() => setSeccionActiva('documentos')} className="text-blue-600 font-semibold text-sm hover:underline">Explorar biblioteca &rarr;</button>
                            </div>
                        </div>
                    )}

                    {seccionActiva === 'noticias' && (
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="text-xl font-bold text-blue-950 mb-4">Tablero de Noticias</h3>
                            <div className="space-y-4">
                                <div className="p-4 border-l-4 border-blue-600 bg-slate-50 rounded-r-xl">
                                    <span className="text-xs text-slate-400 font-bold">07 de Octubre, 2026</span>
                                    <h4 className="font-bold text-blue-900">Lanzamiento del nuevo portal de conocimiento</h4>
                                    <p className="text-sm text-slate-600">Hemos renovado nuestras herramientas para ofrecerte una experiencia más intuitiva y centralizada.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {seccionActiva === 'documentos' && (
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="text-xl font-bold text-blue-950 mb-4">Repositorio de Documentos</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-xl flex flex-col justify-between">
                                    <div>
                                        <h5 className="font-bold text-blue-900 text-sm">Reglamento Interno</h5>
                                        <p className="text-xs text-slate-500 mt-1">Normativa vigente de la empresa.</p>
                                    </div>
                                    <button className="mt-4 bg-blue-50 text-blue-600 py-1.5 px-3 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition">Descargar PDF</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>

        </div>
    );
}

export default App;