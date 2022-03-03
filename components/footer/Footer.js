import React from 'react';

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <>
        <div className={styles.footer__main}>
            <p>Des questions ? Appelez le (+33) 0805-543-063</p>
            <div>
            <ul>
             <li>Faq</li>
             <li>Centre d'aide</li>
             <li>Conditions d'utilisation</li>
             <li>Confidentialité</li>
            </ul>
             <ul>
             <li>Préférences de cookies</li>
             <li>Mentions légales</li>
             </ul>
            <select name="langue">
  <option>Français</option>

  <option>Anglais</option>

</select>
</div>
</div>
         
         </>
    );
}

export default Footer;

//display: flex
//
