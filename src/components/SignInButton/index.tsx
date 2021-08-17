import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

export function SignInButton(){
    const [session] = useSession();
    console.log(session)
    return session ? (
        <button 
            type="button" 
            className={styles.singInButton}
            onClick={() => signOut()}
            >
                <FaGithub color="#eba417"/>
                {session.user.name}
                <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ): (
        <button
         type="button"
         className={styles.singInButton}
         onClick={() => signIn('github')}>
        <FaGithub color="#04d361"/>
        Sign in with Github
    </button>
    );
}