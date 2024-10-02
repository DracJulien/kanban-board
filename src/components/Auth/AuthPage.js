import React from 'react'

import "./AuthPage.css";
import suivCompLogo from '../../assets/Images/image.png';
export default function AuthPage() {
  return (
     <div className='login-wrapper'>
        <div className="login-left"> 
            <div className="login-left-container">
                <div className="center-image">
                    <img style={{maxWidth: "350px", maxHeight:"350px"}} src={suivCompLogo}/>
                    
                </div>
                Kanban Board
            </div>
        </div>
    <div id="index-form-content-ph">
    <div className="login-right" style={{width: "100%"}}>
    <div className="connexion-view-structure">
        <div className="header">
            <div className="title">
                <div className="zone-bouton">
                    <div className="title">Identification</div>
                </div>
            </div>
        </div>
        <div className="connexion-view-structure-row body">
            <form id="formulaire" data-bind="events: { submit: connexion }">
                <div className="struct-login-form-column">
                    <input name="code" placeholder="Identifiant ou email" id="txtCode" data-bind="value: CODE"/>

                </div>
                <div className="struct-login-form-column">
                    <div className="struct-showhide-pwd" id="divPass">
                        <input name="pass" type="password" placeholder="Mot de passe" id="txtPass" className="myInput myInputPwd" data-bind="value: PASS"/>
                        <i id="passShowHide" className="myEye fas fa-eye"></i>
                    </div>
                </div>
                <div className="identification-demande-mdp-zonebuttons">
                    <div className="identification-demande-mdp-backlink">
                        <span className="forgot-pass" style={{width: "auto"}} data-bind="click: perteInfoConnexion">Mot de passe oublié ?</span>
                    </div>
                    <button className="acd-btn acd-btn-secondary" data-bind="disabled: showLoading" type="submit">
                        <span className="connectionText">Se connecter</span>
                        <i className="fal fa-sign-in-alt connectionIcon" style={{height: "100%", lineHeight: "35px", marginRight: "0", marginLeft: "7px"}}></i>
                    </button>
                </div>
            </form>
            <div className="zone-bouton" id="alert">
                <div id="msg-error" data-bind="text: errMessage"></div>
                <div id="msg-loading" data-bind="visible: showLoading" style={{display: "none"}}>Connexion en cours<span>.</span><span>.</span><span>.</span></div>
            </div>
        </div>

    </div>
</div>
</div>
</div> 
  )
}
