/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

import { SignInButton } from '../SignInButton';
import { useRouter } from 'next/router';
export function Header() {
    const router = useRouter();
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active } onClick={ ()=> router.push('/')} >Home</a>
                    <a onClick={ ()=> router.push('/posts')}>Posts</a>
                </nav>
                <SignInButton /> 
            </div>
        </header>
    );
}