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
                    <span className="iconfind">????????????</span>
                </ButtonLink>
              </span>
              <span className="subscri">
                <ButtonLink to="/subscription">
                    <span className="iconsubs">?????????????????????</span>
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
                      onClick={() => {SetId(0); SetmenufColor('#009223')}}>?????????</Tabli>
                      <Tabli menusColor={menusColor} id={id}
                      onClick={() => {SetId(1); SetmenusColor('#009223')}}>?????????&amp;?????????</Tabli>
                      <Tabli menutColor={menutColor} id={id}
                      onClick={() => {SetId(2); SetmenutColor('#009223')}}>????????????</Tabli>
                      <Tabli menufoColor={menufoColor} id={id}
                      onClick={() => {SetId(3); SetmenufoColor('#009223')}}>????????????</Tabli>
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
                  <p>??????????????? <br/>????????? ????????? ??????!</p>
                  <Link to="/" className="enjoyLink">????????????</Link>
              </div>
              <div className="subwayHis">
                  <p>50??? ????????? ?????? <br/>No.1 ?????????????????? ?????????</p>
                  <Link to="/" className="HisLink">???????????? ??????</Link>
              </div>
          </div>

          <div className="second_s">
              <div className="news">
                  <span>
                      <p>What's New</p>
                      <p>??????????????? ????????? ?????????<br/>????????? ?????????????????????.</p>
                  </span>
                  <span>
                      <ul>
                          <li><Link to="/" className="newsli">???????????? ????????? ?????? ?????? ?????? ??????</Link></li>
                          <li><Link to="/" className="newsli">????????? ??????,???????????? ????????? ?????? ?????? ?????? ??????</Link></li>
                          <li><Link to="/" className="newsli">???????????? ????????? ?????? ?????? ?????? ?????? ??????</Link></li>
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
                          <b>???????????????</b>
                          <p>????????????/???????????? ??????</p>
                      </span>
                  </Link>
              </li>
              <li>
                  <Link to="/" className="quicklink">
                      <div className="quick2"></div>
                      <span>
                          <b>????????????</b>
                          <p>?????????/?????? ????????????</p>
                      </span>
                  </Link>
              </li>
              <li>
                  <Link to="/" className="quicklink">
                      <div className="quick3"></div>
                      <span>
                          <b>????????????</b>
                          <p>TV??????/?????????</p>
                      </span>
                  </Link>
              </li>
              <li>
                  <Link to="/" className="quicklink">
                      <div className="quick4"></div>
                      <span>
                          <b>????????????</b>
                          <p>???????????? ??????/1:1??????</p>
                      </span>
                  </Link>
              </li>
          </ul>
      </div>
    </>
}
export default Maincontainer