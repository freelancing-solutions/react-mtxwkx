import React, { useEffect } from 'react'
import { auth,uiConfig } from '../../init/auth/init'
import 'firebaseui/dist/firebaseui.css'
const firebase = require('firebase')
const firebaseui = require('firebaseui')
// TODO add custom css here

export default function Auth(){
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    useEffect( () => {
        ui.start('#fire-ui', uiConfig)
    },[])

    return (
        <div>
            <h2>Login </h2>
            <div id='fire-ui'> </div>
        </div>)
}