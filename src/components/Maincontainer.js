import React,{ useState } from 'react'
import { Link } from 'react-router-dom' 
import { SwipeImage,ButtonLink,Tabli,Prev,Next} from './styledComp'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { tabmenuContents } from '../utilities/tabmenuContents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight,faCircle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import img01 from '../styles/img/img01.png'
import img02 from '../styles/img/img02.png'
import img03 from '../styles/img/img03.jpg'
import img04 from '../styles/img/img04.jpg'

import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"


library.add(faAngleLeft,faAngleRight,faCircle)
SwiperCore.use([Pagination, Autoplay])

function Maincontainer(){
    const [id, SetId] = useState(0)

    const [menufColor, SetmenufColor] = useState('#009223')
    const [menusColor, SetmenusColor] = useState('#666666')
    const [menutColor, SetmenutColor] = useState('#666666')
    const [menufoColor, SetmenufoColor] = useState('#666666')

    const [prevBackColor, SetprevBackcolor] = useState("#ffffff")
    const [nextBackColor, SetnextBackcolor] = useState("#ffffff")
    
    return <>
      <Swiper 
         slidesPerView={1}
         pagination={{
             type : 'bullets',
             clickable : true
         }}
         loop = {true}
         autoplay={{
             delay: 3000
         }}
         allowTouchMove = {false}
         >
          <SwiperSlide>
              <Link to="/"><SwipeImage url={img01}/></Link>
          </SwiperSlide>
          <SwiperSlide>
              <Link to="/"><SwipeImage url={img02}/></Link>
          </SwiperSlide>
          <SwiperSlide>
              <Link to="/"><SwipeImage url={img03}/></Link>
          </SwiperSlide>
          <SwiperSlide>
              <Link to="/"><SwipeImage url={img04}/></Link>
          </SwiperSlide>
      </Swiper>

      <div className="buttonPosi">
          <div style={{ width: '600px' }}>
              <span className="findSpan">
                <ButtonLink to="/find">
                    <span className="iconfind">매장찾기</span>
                </ButtonLink>
              </span>
              <span className="subscri">
                <ButtonLink to="/subscription">
                    <span className="iconsubs">가맹신청ㆍ문의</span>
                </ButtonLink>
              </span>
          </div>
      </div>

      <div id="subwayContent">
          <div style={{ margin: '0px 50px' }}>
              <p className="menuP">Subway's Menu</p>
              <div className="tab">
                  <ul>
                      <Tabli menufColor={menufColor} id={id} 
                      onClick={() => {SetId(0); SetmenufColor('#009223')}}>클래식</Tabli>
                      <Tabli menusColor={menusColor} id={id}
                      onClick={() => {SetId(1); SetmenusColor('#009223')}}>프레쉬&amp;라이트</Tabli>
                      <Tabli menutColor={menutColor} id={id}
                      onClick={() => {SetId(2); SetmenutColor('#009223')}}>프리미엄</Tabli>
                      <Tabli menufoColor={menufoColor} id={id}
                      onClick={() => {SetId(3); SetmenufoColor('#009223')}}>아침메뉴</Tabli>
                  </ul>
              </div>
              <div className="tabCon">
                  {tabmenuContents[id].content}
              </div>
              <Next className="swiper-button-next" nextBackColor={nextBackColor}>
                  <FontAwesomeIcon icon={faAngleRight} size="2x" onMouseUp = {() => {SetnextBackcolor("#ffce32")}}
               onMouseOver={() => {SetnextBackcolor("#ffce32")}} onMouseOut={() => {SetnextBackcolor("#ffffff")}}/>
              </Next>

              <Prev className="swiper-button-prev" prevBackColor={prevBackColor}>
                  <FontAwesomeIcon icon={faAngleLeft} size="2x" onMouseUp = {() => {SetprevBackcolor("#ffce32")}}
              onMouseOver={() => {SetprevBackcolor("#ffce32")}} onMouseOut={() => {SetprevBackcolor("#ffffff")}}/>
              </Prev>
          </div>
      </div>

      <div className="content_second">
          <div className="second_f">
              <div className="enjoyCon">
                  <p>써브웨이를 <br/>제대로 즐기는 방법!</p>
                  <Link to="/" className="enjoyLink">이용방법</Link>
              </div>
              <div className="subwayHis">
                  <p>50년 역사를 가진 <br/>No.1 프랜차이즈의 성장기</p>
                  <Link to="/" className="HisLink">써브웨이 역사</Link>
              </div>
          </div>

          <div className="second_s">
              <div className="news">
                  <span>
                      <p>What's New</p>
                      <p>써브웨이의 다양한 소식을<br/>빠르게 전달해드립니다.</p>
                  </span>
                  <span>
                      <ul>
                          <li><Link to="/" className="newsli">일부매장 샐러드 일시 판매 중단 안내</Link></li>
                          <li><Link to="/" className="newsli">로스트 치킨,로티세리 바비큐 치킨 판매 재개 안내</Link></li>
                          <li><Link to="/" className="newsli">로티세리 바비큐 치킨 일시 판매 중단 안내</Link></li>
                      </ul>
                      <Link to="/" className="newsMore">more</Link>
                  </span>
              </div>
              <div className="ad"></div>
          </div>
      </div>

      <div className="quickmenu">
          <ul>
              <li>
                  <Link to="/" className="quicklink" >
                      <div className="quick1"></div>
                      <span>
                          <b>프랜차이즈</b>
                          <p>개설절차/투자비용 정보</p>
                      </span>
                  </Link>
              </li>
              <li>
                  <Link to="/" className="quicklink">
                      <div className="quick2"></div>
                      <span>
                          <b>지사안내</b>
                          <p>수도권/지방 지사정보</p>
                      </span>
                  </Link>
              </li>
              <li>
                  <Link to="/" className="quicklink">
                      <div className="quick3"></div>
                      <span>
                          <b>광고영상</b>
                          <p>TV광고/동영상</p>
                      </span>
                  </Link>
              </li>
              <li>
                  <Link to="/" className="quicklink">
                      <div className="quick4"></div>
                      <span>
                          <b>고객문의</b>
                          <p>자주하는 질문/1:1문의</p>
                      </span>
                  </Link>
              </li>
          </ul>
      </div>
    </>
}
export default Maincontainer