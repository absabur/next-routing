import style from "./loader.module.css";

const LoadingPage = () => {
  return (
    <div className={style.loading}>
      <div className={style.outside}></div>
      <div className={style.inside}></div>
      <div className={style.dot1}></div>
      <div className={style.dot2}></div>
    </div>
  )
}

export default LoadingPage