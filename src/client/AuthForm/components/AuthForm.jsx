import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../../shared/components/Input'
import Button from '../../../shared/components/Button'
import { fields } from './fields'
import { initialState } from './initialState'
import { ReactComponent as GoggleSvg } from '../../../images/google.svg'
import useForm from '../../../shared/hooks/useForm'
import { logIn, register } from '../../../redux/auth/auth-operations'

import styles from './AuthForm.module.scss'

const AuthForm = () => {
    const [actionType, setActionType] = useState("");
    const dispatch = useDispatch()
    
    const onSubmit = data => {
        const action = (actionType === "login") ? logIn(data) : register(data)
        dispatch(action)
    };
    
    const [data, , handleChange, handleSubmit] = useForm({ initialState,  onSubmit});
    return  (
    <div className={styles.authFormContainer} >
        <div className={styles.formGroup}>
            <p className={styles.formGroupText}>You can use your Google Account to authorize:</p>
            <div className={styles.googleBtnContainer}>
                <Button className={styles.googleBtn}><GoggleSvg className={styles.googleLogo}/>Google</Button> 
            </div>
            
            <p className={styles.formGroupText}>Or login to our app using e-mail and password:</p>
            <form onSubmit={handleSubmit}>
                <Input {...fields.email} value={data.email} onChange={handleChange }/>
                <Input {...fields.password} value={data.password} onChange={handleChange }/>
                <div className={styles.buttonContainer}>
                    <Button className={styles.button } type="submit" onClick={() => setActionType("login")}>Sign in</Button>
                    <Button className={styles.button } type="submit" onClick={() => setActionType("register")}>Sign up</Button>
                </div>
            </form>
        </div>
    </div>
   )
}

export default AuthForm;