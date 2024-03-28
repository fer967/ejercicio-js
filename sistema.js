
class Sistema {
    constructor() {              
        this.servicios = [
            { servicio: "corte", precio: 100 },
            { servicio: "lavado", precio: 120 },
            {servicio : "nutricion", precio: 140 },
            { servicio: "manicuria", precio: 130 },
            {servicio : "pedicuria", precio: 110 },
            { servicio: "depilacion", precio: 150 },
        ];
        
    }
    // metodos
    mostrar_servicio() {
        for( const servicio of this.servicios){
            const servi = JSON.stringify(servicio);
            alert("Servicio " + servi);
        }
        const resultado = this.servicios.find((el) => el.servicio === "corte")
        const resul = JSON.stringify(resultado);
        alert("Servicio seleccionado es : " + resul);
    };
    
    mostrar_precio_conIva() {
        const precioConIva = this.servicios.map((el) => {
            return {
                servicio: el.servicio,
                precio: el.precio * 1.21
            }
        })
        const precio_total = JSON.stringify(precioConIva);
        alert("El precio mas IVA es :" + precio_total);            
    }
}



