import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { LoginDiv } from './styledComp.js'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { vEmail, vPassword } from '../utilities/validation.js'
 
function Login(){
    const [actived, setactived] = useState(false);
    const [isAlertE, setisAlertE] = useState(1);
    const [isAlertP, setisAlertP] = useState(1);

    const errorE = () => {
        setisAlertE(isAlertE + 1);
        if(!(formik.errors.password && formik.touched.password)){
            setisAlertP(0);
        }
        alert(formik.errors.email);
    }

    const errorP = () => {
        setisAlertP(isAlertP + 1);
        if(!(formik.errors.email && formik.touched.email)){
            setisAlertE(0);
            alert(formik.errors.password);
        }
    }

    const init = () => {
        setisAlertE(1);
        setisAlertP(1);
    }

    const formik = useFormik({
      initialValues: {email: "", password: ""},
      validationSchema: Yup.object({
          email: vEmail(), password: vPassword()
      }),
      onSubmit: values => (values.email === "abcd@dddd.com" && values.password === "abcdis4444" ? 
      alert('로그인 성공!'): (alert("아이디 혹은 비밀번호가 잘못되었습니다."), setisAlertE(0), setisAlertP(0))) 
    })
    return <>
    <Header />
    <span className="loginContainer">
        <div className="loginForm">
            <h2>LOGIN</h2>
            <p>써브웨이 회원으로 로그인하시면 제공하는<br/> 다양한 서비스를 이용할 수 있습니다.</p>
            <form onSubmit={formik.handleSubmit}>
                <ul>
                    <LoginDiv actived={actived}>
                        <div className="eidC">
                            <li>이메일 아이디</li>
                            <li><input name="email" type="text" id="emailid" placeholder="이메일 아이디 입력"
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                            onFocus={() => setactived(true)}
                            onBlur={() => setactived(false)} /></li>
                           {formik.touched.email && formik.errors.email && isAlertE === 1 ?
                             errorE(): ""}
                        </div>
                        <div className="pwC">
                            <li>비밀번호</li>
                            <li><input name="password" type="password" id="pw" placeholder="비밀번호 입력"
                            value={formik.values.password} 
                            onChange={formik.handleChange} 
                            onFocus={() => {setactived(true)}}
                            onBlur={() => setactived(false)}/></li>
                            {formik.touched.password && formik.errors.password && isAlertP === 1 ?
                            errorP(): ""}
                        </div>
                    </LoginDiv>
                    <li>
                        <label className="check">
                            <input type="checkBox"/>
                            <span className="icon"></span>
                            <span className="checkWrite">이메일 아이디 저장</span>
                        </label>
                    </li>
                    <li>
                        <button type="submit" onClick = {init}>로그인</button>
                    </li>
                </ul>
            </form>
                    <div className="findSignin">
                        <ul>
                            <li><Link to="/" className="findlink">아이디 찾기</Link></li>
                            <li><Link to="/" className="findlink">비밀번호 찾기</Link></li>
                            <li><Link to="/" className="findlink">회원가입</Link></li>
                        </ul>
                    </div>
        </div>
    </span>
    <Footer/>
    </>
}

export default Login