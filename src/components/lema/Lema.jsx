import logo from '../../assets/img/logo.png';
import './about.css'

export const Lema = () => {
    return (
        <div className="flex justify-center bg-gray-100 p-6 mt-4">
            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 bg-violet-300 p-6 rounded shadow-lg glowing-border">
                <div className="w-full md:w-1/2 p-4">
                    <img
                        src={logo}
                        alt="About Us"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4 space-y-2">
                    <h2 className="text-xl font-bold">Misión</h2>
                    <p className="text-gray-700 text-sm text-justify">
                        Nuestra misión es crear una plataforma confiable y accesible donde los usuarios puedan comprar, vender
                        e intercambiar objetos nuevos, seminuevos y usados de manera segura y eficiente, promoviendo la economía
                        circular y el consumo responsable.
                    </p>
                    <h2 className="text-xl font-bold">Visión</h2>
                    <p className="text-gray-700 text-sm text-justify">
                        Nuestra visión es convertirnos en la plataforma líder de comercio colaborativo, reconocida por su compromiso
                        con la sostenibilidad, la innovación y la satisfacción del usuario, ayudando a millones de personas a encontrar
                        valor en cada transacción y a reducir su impacto ambiental.
                    </p>
                    <h2 className="text-xl font-bold">¿Quiénes Somos?</h2>
                    <p className="text-gray-700 text-sm text-justify">
                        Somos un equipo apasionado por el comercio digital y la economía circular, dedicado a ofrecer una experiencia de
                        usuario excepcional en la compra, venta e intercambio de productos. Nuestra plataforma está diseñada para facilitar
                        el acceso a una amplia gama de objetos nuevos, seminuevos y usados, asegurando transacciones seguras y satisfactorias.
                        Nos esforzamos por brindar un servicio de calidad, respaldado por un equipo comprometido con la innovación y la
                        satisfacción de nuestros usuarios.
                    </p>
                </div>
            </div>
        </div>
    );
};
