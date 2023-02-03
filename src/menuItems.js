export const menuItems = [{
    title: "Inicio",
    cName: "bar menu-items",
    ruta:"/",
},
{
    title: "El Hospital ",
    cName: "bar menu-items",
    submenu: [{
            title: "Historia ",
            cName: "bar",
            ruta:"/historiaHSL",
        },
        {
            title: "Autoridades",
            cName: "bar",
            ruta:"/autoridades",
        },
        {
            title: "Cuerpo médico",
            ruta:"/cuerpoMedico",
        },
    ],
},
{
    title: "Especialidades",
    cName: "bar menu-items",
    submenu: [{
            title: "Servicios medicos",
            ruta:"/servicios-medicos",
        },
        {
            title: "Diagnostico por imágenes",
            ruta:"/diagnostico-por-imagenes",
        },
        {
            title: "Servicio de laboratorio",
            ruta:"/laboratorio",
        },
        {
            title: "Servicio de hemodinamia",
            ruta:"/hemodinamia",
        },
        {
            title: "Telemedicina",
            ruta:"/telemedicina",
        },
    ],
},
{
    title: "Coberturas Médicas",
    cName: "bar menu-items",
    ruta:"/coberturas",
},
{
    title: "Consultorios Externos",
    cName: "bar menu-items",
    submenu: [{
            title: "Argentina",
            submenu: [{
                    title: "V. Devoto (CABA)",  
                    ruta:"/consultorio-externo-vdevoto",
                },
                {
                    title: "Consultorio Alto Palermo (CABA)",
                    ruta:"/consultorio-externo-alto-palermo",
                },
                {
                    title: "Rio Grande (TIERRA DEL FUEGO)",
                    ruta:"/consultorio-externo-rio-grande",
                },
            ],    
        },
        {
            title: "Paraguay",
            ruta:"/paraguay",    
        },
    ],
},
{
    title: "Enfermería",
    cName: "bar menu-items",
    ruta:"./16",
    submenu: [
        {
            title: "Tecnicatura en Enfermería",
            ruta:"/tecnicatura-en-enfermeria",  
        },
        {
            title: "Inscripcion de Enfermería",  
            ruta:"/inscripcion-enfermeria",
        },
        {
            title: "Salida laboral",  
            ruta:"/salida-laboral",
        },
        ],
},
{
    title: "Docencia",
    cName: "bar menu-items",
        submenu: [{
            title: "Campus Virtual", 
            ruta:"/campus-virtual", 
        },
        {
            title: "Residencia",
            ruta:"/residencia",
        },
    ],    
},
{
        title: "Novedades",
        cName: "bar menu-items",
        ruta:"/novedades",
    },
    {
        title: "Contacto",
        cName: "bar menu-items",
        ruta:"/contacto",
    },
    {
        title: "Intranet",
        cName: "menu-items intranet",
            submenu: [{
                title: "Portal Financiadores", 
                ruta:"/portal-financiadores", 
            },
            {
                title: "WebMail",
                ruta:"/webmail",
            },
        ],    
    },
    
];