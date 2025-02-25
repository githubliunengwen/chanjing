import styles from "./page.module.css";
import { ChevronLeft, MoreHorizontal, Minus, Target } from 'lucide-react';

export default function Login() {
  return (
    <>
    <nav className={styles.navbar}>
      <button className={styles.back_button}>
        <ChevronLeft size={20} />
      </button>
      <div className={styles.title}>验证码登录</div>
      <div className={styles.right_icons}>
        <MoreHorizontal size={20} />
        <Minus size={20} />
        <Target size={20} />
      </div>
    </nav>
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.h1}>验证码登录</h1>
        <h3 className={styles.h3}>未注册手机号验证通过后自动注册</h3>
        <div className={styles.ctas}>
          <div className={styles.input}>
            <div className={styles.input_label}>
            <input className={styles.input_phone} type="text" placeholder="请输入手机号" />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.input_label}>
              <input className={styles.input_code} type="text" placeholder="请输入验证码" />
              <button className={styles.get_code}>获取验证码</button>
            </div>
          </div>
          <button className={styles.login}>登录</button>
          <button className={styles.password}>密码登录</button>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer_text}>
          <input type="checkbox" className={styles.footer_checkbox} />
          <span>我已阅读并同意</span>
          <a href="#">用户协议</a>
          <span>和</span> 
          <a href="#">隐私政策</a>
        </div>
      </footer>
    </div>
    </>
  );
}
