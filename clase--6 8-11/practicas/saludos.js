
const buenDia = () => {
    console.log("Buen dia!"); 
}

const buenasTardes = () => {
    console.log("Buenas tardes!");
}

const buenasNoches = () => {
    console.log("Buenas noches!");
}

//Exportar usando Common JS: 

// module.exports = {
//     buenDia,
//     buenasTardes,
//     buenasNoches
// }

//Exportamos ES Modules: 

export default {
    buenDia, 
    buenasTardes,
    buenasNoches
}