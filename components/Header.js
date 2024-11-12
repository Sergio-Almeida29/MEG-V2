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
        <a href="/"><img src="/logo.png" alt="FRAC" className={styles.logo} /></a>
      </div>

      <div className={styles.titleContainer}>
        <h1>Frente Revolucionária de Aprendizes e Caloiros</h1>
      </div>

      {/* Rotating menu icon */}
      <div className={styles.menuContainer} onClick={toggleMenu}>
        <div className={`${styles.menuIcon} ${isMenuOpen ? styles.rotate : ''}`}>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
        </div>
      </div>

      {/* Dropdown menu */}
      <div className={`${styles.dropdownMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="/historia">História</a></li>
          <li><a href="/atualmente">Atualmente</a></li>
          <li><a href="/antigos_caloiros">Antigos Caloiros</a></li>
          <li><a href="/premios">Prémios</a></li>
          <li><a href="/ficheiros">Ficheiros</a></li>
          <li><a href="/discografia">Discografia</a></li>
        </ul>
      </div>

    </header>
  );
}
