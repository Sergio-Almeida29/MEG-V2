import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>

      <div className={styles.logoContainer}>
        <a href="/" ><img src="/logo.png" alt="FRAC" className={styles.logo}/></a>
      </div>

      <div className={styles.titleContainer}><h1>Frente Revolucionária de Aprendizes e Caloiros</h1></div>

      <div className={styles.menuContainer} onClick={toggleMenu}>
        ☰
      </div>

      {/* Apply conditional rendering for the dropdown menu */}
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <ul>
            <li><a href="/historia">Historia</a></li>
            <li><a href="/atualmente">Atualmente</a></li>
            <li><a href="/antigos_caloiros">Antigos Caloiros</a></li>
            <li><a href="/premios">Prémios</a></li>
            <li><a href="/ficheiros">Ficheiros</a></li>
            <li><a href="/discografia">Discografia</a></li>
          </ul>
        </div>
      )}

    </header>
  );
}
