import style from "./style.module.scss";
export function SubscribeButton() {
    return(
        <>
            <button 
            type="button"
            className={style.subscribeButton}
            >
                Subscribe Now
            </button>
        </>
    );
}