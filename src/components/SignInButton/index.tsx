import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'

export function SignInButton(){
    const isUserLoggedIn = true;
    return isUserLoggedIn ? (
        <button type="button" className={styles.singInButton}>
            <FaGithub color="#eba417"/>
            Sign in with Github
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ): (
        <button type="button" className={styles.singInButton}>
        <FaGithub color="#04d361"/>
        Sign in with Github
    </button>
    );
}