import { useState } from "react";


export default function Header() {

  const [cruz, setCruz] = useState(false);

    const handleClick = () => {
        setCruz(!cruz);
    };

  return (
    <div className='header'>
      <div className="logo">
        <span>&lt; &gt; </span>
        <h1>Luis Dev</h1>
      </div>
      <div className={`icono-header ${cruz ? 'cruz' : ''}`} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`navegacion-principal ${cruz ? 'cruz' : ''}`}>
        <a href="#">Acerca de mi</a>
        <a href="#">Formación</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
  )
}
