import React, { useState, useEffect } from 'react';
import './Header.css';

export default () => {
    
    const [blackHeader, setBlackHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showLang, setShowLang] = useState(false);
    const [language, setLanguage] = useState({list: 'Minha Lista', lang: 'Idiomas', pt: 'Português', en: 'Inglês', es: 'Espanhol', fr: 'Francês'});

    useEffect(()=>{
        let lang = sessionStorage.getItem('lang');
        switch(lang){
            case('en'):
                setLanguage({list: 'My List ', lang: 'Languages', pt: 'Portuguese', en: 'English', es: 'Spanish', fr: 'French'});
            break;
            case('es'):
                setLanguage({list: 'Mi Lista ', lang: 'Idiomas', pt: 'Portugués', en: 'Inglés', es: 'Español', fr: 'Francés'});
            break;
            case('fr'):
                setLanguage({list: 'Ma Liste ', lang: 'Langues', pt: 'Portugais', en: 'Anglais', es: 'Espagnol', fr: 'Français'});
            break;                        
            default:
                setLanguage( {list: 'Minha Lista', lang: 'Idiomas', pt: 'Português', en: 'Inglês', es: 'Espanhol', fr: 'Francês'});                
        }
    },[])

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
          sessionStorage.setItem('lang', lang);
          window.location.reload();
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
                        <li>{language.list}</li>
                        <li onClick={()=>setShowLang(true)}>{language.lang}</li>
                    </ul>
                    <ul className={`header--user-lang-menu ${showLang ? 'show' : ''}`} >
                        <li onClick={()=> setLang('pt-BR') } className={(sessionStorage.getItem('lang') === 'pt-BR')? 'active' : ''} >{language.pt}</li>
                        <li onClick={()=> setLang('en')  } className={(sessionStorage.getItem('lang') === 'en')? 'active' : ''} >{language.en}</li>
                        <li onClick={()=> setLang('es') } className={(sessionStorage.getItem('lang') === 'es')? 'active' : ''} >{language.es}</li>
                        <li onClick={()=> setLang('fr') } className={(sessionStorage.getItem('lang') === 'fr')? 'active' : ''} >{language.fr}</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}