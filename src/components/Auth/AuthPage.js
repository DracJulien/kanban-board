import React from 'react'

import "./AuthPage.scss";
import suivCompLogo from '../../assets/Images/image.png';

import LoginIcon from '../Icons/LoginIcon/LoginIcon';
export default function AuthPage() {
  return (
     <div className='login-wrapper'>
        <div className="login-left"> 
            <div className="login-left-container">
                <div className="center-image">
                    <img alt='Oui' style={{maxWidth: "350px", maxHeight:"350px"}} src={suivCompLogo}/>
                    
                </div>
                Kanban Board
            </div>
        </div>
    <div className="loginRight">
    <div className="Login">
        <div className="headerLogin">
            <div className="header">
                    <div className="">Identification</div>
            </div>
        </div>
        <div className="FormLogin">
            <form id="formulaire" data-bind="events: { submit: connexion }">
                <div className="inputLoginMail">
                    <input name="code" placeholder="Identifiant ou email" id="txtCode" data-bind="value: CODE"className='input'/>
                </div>
                <div className="inputLoginPassword">
                        <input name="pass" type="password" placeholder="Mot de passe" id="txtPass" className="input" data-bind="value: PASS"/>
                        <LoginIcon icon={"eye"} pStyle={"password"}/>
                </div>
                <div className="">
                    <div className="">
                        <div className="forgot-pass" style={{width: "auto"}} data-bind="click: perteInfoConnexion">Mot de passe oublié ?</div>
                    </div>
                    <button className="" data-bind="disabled: showLoading" type="submit">
                        <div className="connectionText">Se connecter</div>
                        <LoginIcon icon={"login"} pStyle={"Hidden"}></LoginIcon>
                    </button>
                </div>
            </form>
            <div className="" id="alert">
                <div id="msg-error" data-bind="text: errMessage"></div>
                <div id="msg-loading" data-bind="visible: showLoading" style={{display: "none"}}>Connexion en cours<span>.</span><span>.</span><span>.</span></div>
            </div>
        </div>

    </div>
</div>
</div>
  )
}
