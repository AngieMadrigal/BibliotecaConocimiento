import React, { useState } from 'react';
import avatarOsito from './assets/osito-avatar.png';

function Login({ onLoginExitoso }) {
    const [paso, setPaso] = useState(1); // Paso 1: Pedir correo | Paso 2: Pedir código OTP

    // Correo quemado por defecto para pruebas
    const [correo, setCorreo] = useState('amadrigal@sura.com.co');

    // Código OTP quemado por defecto para pruebas
    const [codigoOtp, setCodigoOtp] = useState('123456');

    const [cargando, setCargando] = useState(false);
    const [mensajeError, setMensajeError] = useState('');

    // 1. Función para solicitar el código OTP al Backend
    const manejarSolicitarOtp = async (e) => {
        e.preventDefault();
        setMensajeError('');

        setCargando(true);
        try {
            // Simulación de éxito mientras conectas el Backend:
            setTimeout(() => {
                setCargando(false);
                setPaso(2); // Pasamos a la pantalla de ingresar código
            }, 1000);

        } catch (error) {
            setCargando(false);
            setMensajeError('Error al conectar con el servidor o el usuario no existe/está inactivo.');
        }
    };

    // 2. Función para validar el código OTP ingresado
    const manejarValidarOtp = async (e) => {
        e.preventDefault();
        setMensajeError('');
        setCargando(true);

        try {
            // Validación local con los datos de prueba
            setTimeout(() => {
                setCargando(false);
                if (codigoOtp === '123456' && correo === 'amadrigal@sura.com.co') {
                    onLoginExitoso(); // Deja pasar a la app principal
                } else {
                    setMensajeError('Correo o código OTP incorrecto.');
                }
            }, 1000);

        } catch (error) {
            setCargando(false);
            setMensajeError('Error al validar el código.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center relative overflow-hidden">

                {/* Avatar del osito saludando en el login */}
                <img src={avatarOsito} alt="Osito Sinergia" className="w-24 h-24 object-contain mb-2 animate-bounce" />

                <h2 className="text-2xl font-bold text-blue-950 mb-1">Biblioteca Sinergia</h2>
                <p className="text-sm text-slate-500 mb-6 text-center">
                    {paso === 1 ? 'Ingresa tu correo corporativo para recibir el código de acceso' : `Hemos enviado un código a ${correo}`}
                </p>

                {mensajeError && (
                    <div className="w-full bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-xl mb-4 text-center">
                        {mensajeError}
                    </div>
                )}

                {paso === 1 ? (
                    /* PASO 1: Formulario de Correo */
                    <form onSubmit={manejarSolicitarOtp} className="w-full space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Correo Corporativo</label>
                            <input
                                type="email"
                                required
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                placeholder="colaborador@tuempresa.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={cargando}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition duration-200 mt-2 flex items-center justify-center"
                        >
                            {cargando ? 'Verificando usuario...' : 'Enviar Código OTP'}
                        </button>
                    </form>
                ) : (
                    /* PASO 2: Formulario de Código OTP */
                    <form onSubmit={manejarValidarOtp} className="w-full space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Código OTP (6 dígitos)</label>
                            <input
                                type="text"
                                required
                                maxLength={6}
                                value={codigoOtp}
                                onChange={(e) => setCodigoOtp(e.target.value)}
                                placeholder="123456"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-center tracking-widest text-lg font-bold"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={cargando}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition duration-200 mt-2 flex items-center justify-center"
                        >
                            {cargando ? 'Validando código...' : 'Ingresar al Sistema'}
                        </button>

                        <button
                            type="button"
                            onClick={() => setPaso(1)}
                            className="w-full text-slate-500 hover:text-blue-600 text-xs font-semibold py-1 transition"
                        >
                            &larr; Volver a ingresar el correo
                        </button>
                    </form>
                )}

            </div>
        </div>
    );
}

export default Login;