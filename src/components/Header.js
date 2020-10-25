import React, { useState, useEffect } from 'react';
import './Header.css';

export default () => {
    
    const [blackHeader, setBlackHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showLang, setShowLang] = useState(false)

    useEffect(()=>{
        const scrollListener = () => {
          if(window.scrollY > 10) {
            setBlackHeader(true);
          } else {
            setBlackHeader(false);
          }
        }
    
        window.addEventListener('scroll', scrollListener);
        return () => {
          window.removeEventListener('scroll', scrollListener);
        }
      }, []);

      function setLang(lang){
          sessionStorage.setItem('lang', lang)
          alert(`mudou para o idioma ${lang}`);
      }

    return (
        <header className={blackHeader ? 'black' : (showMenu ? 'black' : '')}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user" onMouseLeave={()=>{
                setShowMenu(false);
                setShowLang(false);
            }}>
                <div className="header--user-img" onClick={()=>setShowMenu(true)} >
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                </div>
                <div className="header--user-menu">
                    <ul className={`header--user-main-menu ${showMenu ? 'show' : ''}`} >
                        <li>Minha Lista</li>
                        <li onClick={()=>setShowLang(true)}>Idiomas</li>
                    </ul>
                    <ul className={`header--user-lang-menu ${showLang ? 'show' : ''}`} >
                        <li onClick={()=> setLang('pt-BR') }>Português</li>
                        <li onClick={()=> setLang('en')  }>Inglês</li>
                        <li onClick={()=> setLang('es') }>Espanhol</li>
                        <li onClick={()=> setLang('fr') }>Francês</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}