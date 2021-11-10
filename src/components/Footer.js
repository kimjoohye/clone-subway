import React from 'react'
import { Link } from 'react-router-dom'

function Footer(){
    return <div className="footer">
        <div className="content">
            <ul>
                <li><Link to="/" className="Fcontentli">이용약관</Link></li>
                <li><Link to="/" className="Fcontentli"><b>개인정보처리방침</b></Link></li>
                <li><Link to="/" className="Fcontentli">써브카드</Link></li>
                <li><Link to="/" className="Fcontentli">점주관리자</Link></li>
                <li><Link to="/" className="Fcontentli">Subway Listens</Link></li>
            </ul>

            <ul>
                <li>서울시 서초구 강남대로 535 프린스빌딩 15층</li>
                <li>대표 : 콜린클락</li>
                <li>전화 : 02-797-5036</li>
                <li>사업자등록번호 : 101-84-04143</li>
            </ul>
            <span>Subway&reg;is a Registered Trademark of Subway IP LLC. &#169;2021 Subway IP LLC. All Rights Reserved.</span>
            <button onClick={()=>{window.open('https://www.instagram.com/subwaykorea/','_blank')}} className="insta"></button>
            <button onClick={()=>{window.open('https://www.facebook.com/Subwaykr','_blank')}} className="facebook"></button>

        </div>
    </div>
}

export default Footer