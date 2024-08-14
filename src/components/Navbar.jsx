import React from 'react';
import Icono from '../images/iconoGlobo.png'
import BanderaParaguay from '../images/iconoParaguay.png'

function Navbar() {
    return (
        <nav>
					<img src={Icono} />
					<h3 className='nav--titulo'>diario de viajes</h3>
                    <img src={BanderaParaguay} className='banderaParaguay' />
        </nav>
    );
}

export default Navbar;