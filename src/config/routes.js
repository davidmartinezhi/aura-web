//Layouts

//Public Layout
import LayoutPublic from "../layout/LayoutPublic";

//Public Pages
import Home from "../pages/web/Home";

const routes = [
    //Configuración de rutas admin
/*
    {

        //Dentro de admin Este display es para el administrador de la pagina.
        path: "/admin", //Siempre que la ruta tenga una barra admin, va a cargar este layout
        component: LayoutAdmin,
        exact: false,   //No es exact, porque queremos que con admin, siempre tenga este layout
        routes:[
            
            {
                //Si alguna de estas rutas fueran exact: false. Si se escribe mal el nombre siempre cargaria esa
                //Dentro de admin, siempre nos va a mandar al componente Home
                path: "/admin", //Cuando solo es admin
                component: AdminHome,   //Aparece el home
                exact: true,    //Tiene que ser especifica la ruta para cargar este layout
            },

            //Siempre se pone el error 404 al final de las rutas
            {
                //Si no se cumple ninguna ruta, se despliega este componente
                //No pongo ruta, porque no es posible saber que va a escribir el usuario
                component: Error404,
            }
        ]
    },
*/

    //Rutas de la pagina para el end-user
    {
        //Si alguna de estas rutas fueran exact: false. Si se escribe mal el nombre siempre cargaria esta
        //Dentro de admin, siempre nos mandara al home
        path: "/", //Desde la raíz
        component: LayoutPublic,
        exact: false, //Pueden existir diferentes raices como la de admin. pero esta será la misma siempre
        routes: [
            //home
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/nosotros",
                component: <h1>Sobre Nosotros</h1>,
                exact: true
            },
            {
                path: "/servicios",
                component: <h1>Servicios</h1>,
                exact: true
            },
            {
                path: "/portafolio",
                component: <h1>Portafolio</h1>,
                exact: true
            },
            {
                path: "/clientes",
                component: <h1>Clientes</h1>,
                exact: true
            },
            // {
            //     path: "/sponsors",
            //     component: Sponsors,
            //     exact: true
            // },
            {
                path: "/contacto",
                component: <h1>Contacto</h1>,
                exact: true
            },
            //Error 404
            {
                //Si no se cumple ninguna ruta, se despliega este componente
                //No pongo ruta, porque no es posible saber que va a escribir el usuario
                component: <h1>Error404</h1>
            }
        ]

    }
]

export default routes;
