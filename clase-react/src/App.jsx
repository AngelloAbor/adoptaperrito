import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MyCard from './components/Card'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header title='Adopta un Perrito'/>
            <div className='galeria'>
                <MyCard 
                    image = 'https://images.pexels.com/photos/220974/pexels-photo-220974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    nombre = 'Topo'
                    descripcion = 'Topo es un perro fiel y jugeton en busqueda de un hogar para el'
                    raza = 'Husky'
                    colorFondo = 'success'
                />
                <MyCard 
                    image = 'https://images.pexels.com/photos/1485726/pexels-photo-1485726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    nombre = 'Roble'
                    descripcion = 'Roble es un perro en busqueda de una familia que lo ame y es apto para acompañar tanto a niños como a personas de tercera edad'
                    raza = 'Poodle'
                    colorFondo = 'primary'
                />
                <MyCard 
                    image = 'https://images.pexels.com/photos/7790405/pexels-photo-7790405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    nombre = 'Maipo'
                    descripcion = 'Maipo es un perro grande en busqueda de una familia grande con quien jugar haz parte de tu familia a este lindo cachorro'
                    raza = 'Shar Pei'
                    colorFondo = 'danger'
                />
                <MyCard 
                    image = 'https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    nombre = 'Juli'
                    descripcion = 'Juli es una cachorra que busca una familia hermosa que le entregue amor y busca llenar de amor su futuro hogar'
                    raza = 'Beagle'
                    colorFondo = 'warning'
                />
            </div>
            <Footer 
                textoFooter = "En adopta un perrito buscamos dar un hogar a esos perros que fueron abandonados o rescatados de diversos lugares del pais, como organizacion buscamos rescatar y encontrar un hogar a cada uno de los perritos que se quedaron sin hogar">
              
            </Footer>
        </>
    )
}

export default App
