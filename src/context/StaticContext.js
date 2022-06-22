import React from 'react'

// tiene dos partes, proveedor y consumidor.
// los valores por defecto es por si un consumidor intenta usar el contexto y no tiene acceso.
// cuando se utiliza el provider estamos oblicagos a pasarle un value.
const Context = React.createContext({ 
    name: 'sin-provider',
    suscribeteAlCanal: true
});

export default Context;