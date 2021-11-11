import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { LoginDiv } from './styledComp.js'
 
function Login(){
    const [actived, setactived] = useState(false);

    return <>
    <Header />
    <span className="loginContainer">
        <div className="loginForm">
            <h2>LOGIN</h2>
            <p>써브웨이 회원으로 로그인하시면 제공하는<br/> 다양한 서비스를 이용할 수 있습니다.</p>
            <form>
                <ul>
                    <LoginDiv actived={actived}>
                        <div className="eidC">
                            <li>이메일 아이디</li>
                            <li><input type="text" id="emailid" placeholder="이메일 아이디 입력"
                             onFocus={() => setactived(true)}
                             onBlur={() => setactived(false)}/></li>
                        </div>
                        <div className="pwC">
                            <li>비밀번호</li>
                            <li><input type="password" id="pw" placeholder="비밀번호 입력" 
                            onFocus={() => setactived(true)}
                            onBlur={() => setactived(false)}/></li>
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
                        <button>로그인</button>
                    </li>
                    <li className="findSignin">
                        <ul>
                            <li>아이디 찾기</li>
                            <li>비밀번호 찾기</li>
                            <li>회원가입</li>
                        </ul>
                    </li>
                </ul>
            </form>
        </div>
    </span>
    <Footer/>
    </>
}

export default Login