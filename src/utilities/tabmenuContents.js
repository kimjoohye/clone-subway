import React from 'react'
import { Link } from 'react-router-dom' 
// import { Swili } from '../components/styledComp';
import '../styles/styles.scss';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import "swiper/components/navigation/navigation.scss"
SwiperCore.use([Navigation])

const ConLi = {
    width: '290px'
}

const ConA = {
    textDecoration: 'none', textAlign: 'center',
    display: 'inline-block', height: '320px'
}
const Contentstro = {
    display: 'inline-block', width: '290px',
    margin: '3px 0px 10px', textAlign: 'center',
    color: '#292929', fontSize: '18px'
} 
const ConP = {
    fontSize: '13px', lineHeight: '20px', margin: '0 auto',
    width: '290px', letterSpacing: '-0.03em'
}

export const tabmenuContents = [{
    tabTitle: "클래식",
    id: 0,
    content: <Swiper 
    className="classic"
    initialSlide={0}
    slidesPerView={4}
    spaceBetween={5}
    slidesPerGroup={4}
    observer={true}
    observeParents={true}
    allowTouchMove = {false}
    navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }}
    >
          <SwiperSlide>
              <li style={ConLi}>
                  <Link to="/" style={ConA} >
                      <span className="swicontent">
                          <img src="https://www.subway.co.kr/images/menu/sandwich_cl06.jpg" alt="에그마요"/>
                          <b style={Contentstro}>에그마요</b>
                          <p style={ConP}>부드러운 달걀과 고소한 마요네즈가 만나<br/> 더 부드러운 스테디셀러</p>
                      </span>

                  </Link>
              </li>
          </SwiperSlide>
          <SwiperSlide>
               <li style={ConLi}>
                  <Link to="/" style={ConA}>
                      <span className="swicontent">
                          <img src="https://www.subway.co.kr/images/menu/sandwich_cl01.jpg" alt="이탈리안 비엠티"/>
                          <b style={Contentstro}>이탈리안 비엠티</b>
                          <p style={ConP}>페퍼로니, 살라미 그리고 햄이 만들어내는 최상의<br/> 조화!
                           전세계가 사랑하는 써브웨이의 베스트셀러!<br/> Biggest Meatiest Tastiest, its' B.M.T!</p>
                      </span>

                 </Link>
              </li>
          </SwiperSlide>
          <SwiperSlide>
               <li style={ConLi}>
                  <Link to="/" style={ConA}>
                      <span className="swicontent">
                          <img src="https://www.subway.co.kr/images/menu/sandwich_cl02.jpg" alt="비엘티"/>
                          <b style={Contentstro}>비엘티</b>
                          <p style={ConP}>오리지널 아메리칸 스타일 베이컨의<br/> 풍미와 바삭함 그대로</p>                          
                     </span>

                  </Link>
               </li>
          </SwiperSlide>
          <SwiperSlide>
               <li style={ConLi}>
                  <Link to="/" style={ConA}>
                      <span className="swicontent">
                           <img src="https://www.subway.co.kr/images/menu/sandwich_cl03.jpg" alt="미트볼"/>
                           <b style={Contentstro}>미트볼</b>
                           <p style={ConP}>이탈리안 스타일 비프 미트볼에<br/> 써브웨이만의 풍부한 토마토 향이 살아있는<br/> 마리나라소스를 듬뿍</p>
                      </span>
                  </Link>
               </li>
           </SwiperSlide>
     <SwiperSlide>
         <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                       <img src="https://www.subway.co.kr/images/menu/sandwich_cl04.jpg" alt="햄"/>
                       <b style={Contentstro}>햄</b>
                       <p style={ConP}>기본 중에 기본!<br/> 풍부한 햄이 만들어내는 <br/>입 안 가득 넘치는 맛의 향연</p>
                 </span>
            </Link>
         </li>
     </SwiperSlide>
     <SwiperSlide>
         <li style={ConLi}>
             <Link to="/" style={ConA}>
                <span className="swicontent">
                    <img src="https://www.subway.co.kr/images/menu/sandwich_cl05.jpg" alt="참치"/>
                    <b style={Contentstro}>참치</b>
                    <p style={ConP}>남녀노소 누구나 좋아하는 <br/>담백한 참치와 고소한 마요네즈의<br/> 완벽한 조화</p>
                </span>
            </Link>
         </li>
     </SwiperSlide>
     <SwiperSlide style={{height: '320px'}}></SwiperSlide>
     <SwiperSlide style={{height: '320px'}}></SwiperSlide>
 </Swiper>
},{
    tabTitle: "프레쉬&라이트",
    id:1,
    content: <Swiper 
    className="fleshLight"
    slidesPerView={4}
    spaceBetween={5}
    slidesPerGroup={4}

    allowTouchMove = {false}
    navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }}
    >
     <SwiperSlide>
         <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                       <img src="https://www.subway.co.kr/images/menu/sandwich_fl01.jpg" alt="로티세리 바비큐 치킨"/>
                       <b style={Contentstro}>로티세리 바비큐 치킨</b>
                       <p style={ConP}>촉촉한 바비큐 치킨의 풍미가득. <br/>손으로 찢어 더욱 부드러운 치킨의 혁명</p>
                 </span>
            </Link>
         </li>
     </SwiperSlide>
     <SwiperSlide>
         <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_fl02.jpg" alt="로스트 치킨"/>
                      <b style={Contentstro}>로스트 치킨</b>
                      <p style={ConP}>오븐에 구워 담백한 저칼로리<br/>닭가슴살의 건강한 풍미</p>
                 </span>
            </Link>
          </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                      <img src="https://www.subway.co.kr/images/menu/sandwich_fl04.jpg" alt="써브웨이 클럽"/>
                      <b style={Contentstro}>써브웨이 클럽</b>
                      <p style={ConP}>명실공히 시그니처 써브!<br/>터키,햄,베이컨의 완벽한 앙상블</p>
                 </span>
            </Link>
           </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_fl05.jpg" alt="터키"/>
                     <b style={Contentstro}>터키</b>
                     <p style={ConP}>280kcal로 슬림하게 즐기는<br/> 오리지날 터키 샌드위치</p>
                 </span>
            </Link>
           </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                <span className="swicontent">
                    <img src="https://www.subway.co.kr/images/menu/sandwich_fl06.jpg" alt="베지"/>
                   <b style={Contentstro}>베지</b>
                   <p style={ConP}>갓 구운 빵과 신선한 7가지 야채로<br/>즐기는 깔끔한 한끼</p>
                </span>
            </Link>
           </li>
     </SwiperSlide>
     <SwiperSlide style={{height: '320px'}}></SwiperSlide>
     <SwiperSlide style={{height: '320px'}}></SwiperSlide>
     <SwiperSlide style={{height: '320px'}}></SwiperSlide>
 </Swiper>
},{
    tabTitle: '프리미엄',
    id: 2,
    content: <Swiper 
    className="premium"
    slidesPerView={4}
    spaceBetween={5}
    slidesPerGroup={4}

    allowTouchMove = {false}
    navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }}
    >
     <SwiperSlide>
         <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_pm10.jpg" alt="쉬림프"/>
                     <b style={Contentstro}>쉬림프</b>
                     <p style={ConP}>탱글한 식감이 그대로 살아있는 통새우가<br/>5마리 들어가 한 입 베어 먹을 때 마다 <br/>진짜 새우의 풍미가 가득</p>
                 </span>
            </Link>
         </li>
     </SwiperSlide>
     <SwiperSlide>
         <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_pm08.jpg" alt="풀드 포크 바비큐"/>
                     <b style={Contentstro}>풀드 포크 바비큐</b>
                     <p style={ConP}>훈연한 미국 정통스타일의 리얼 바비큐 풀드포크가<br/>들어간 샌드위치</p>
                 </span>
            </Link>
          </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_pm01.jpg" alt="스테이크&amp;치즈"/>
                     <b style={Contentstro}>스테이크&amp;치즈</b>
                     <p style={ConP}>육즙이 쫙~<br/>풍부한 비프 스테이크의 풍미가 입안 한가득</p>
                 </span>
            </Link>
           </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_pm02.jpg" alt="터키 베이컨 아보카도"/>
                     <b style={Contentstro}>터키 베이컨 아보카도</b>
                     <p style={ConP}>담백한 터키와 바삭한 베이컨 환상조합에<br/>부드러운 아보카도는 신의 한수</p>
                 </span>
            </Link>
           </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_pm06.jpg" alt="스파이시 이탈리안"/>
                     <b style={Contentstro}>스파이시 이탈리안</b>
                     <p style={ConP}>살라미, 페퍼로니가 입안 한가득!<br/>쏘 핫한 이탈리아의 맛</p>
                 </span>
            </Link>
           </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_pm07.jpg" alt="치킨 데리야끼"/>
                     <b style={Contentstro}>치킨 데리야끼</b>
                     <p style={ConP}>담백한 치킨 스트립에 달콤짭쪼름한 써브웨이<br/>특제 데리야끼 소스와의 환상적인 만남</p>
                 </span>
            </Link>
           </li>
     </SwiperSlide>
     <SwiperSlide style={{height: '320px'}}></SwiperSlide>
     <SwiperSlide style={{height: '320px'}}></SwiperSlide>
 </Swiper>
},{
    tabTitle: '아침메뉴',
    id:3,
    content: <Swiper
    className="breakfastM" 
    slidesPerView={4}
    spaceBetween={5}
    slidesPerGroup={4}

    allowTouchMove = {false}
    navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }}
    >
     <SwiperSlide>
         <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_bf01.jpg" alt="햄, 에그&amp;치즈"/>
                     <b style={Contentstro}>햄, 에그&amp;치즈</b>
                     <p style={ConP}>푹신한 오믈렛과 햄의 가장 클래식한 조화</p>
                 </span>
            </Link>
         </li>
     </SwiperSlide>
     <SwiperSlide>
         <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_bf02.jpg" alt="햄, 에그&amp;치즈"/>
                     <b style={Contentstro}>웨스턴, 에그&amp;치즈</b>
                     <p style={ConP}>토마토, 피망, 양파 세가지 야채가 더해져<br/>더욱 신선한 하루 시작</p>
                 </span>
            </Link>
          </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_bf03.jpg" alt="베이컨, 에그&amp;치즈"/>
                     <b style={Contentstro}>베이컨, 에그&amp;치즈</b>
                     <p style={ConP}>오리지널 아메리칸 스타일 베이컨으로<br/>더욱 풍성한 아침 식사</p>
                 </span>
            </Link>
           </li>
     </SwiperSlide>
     <SwiperSlide>
          <li style={ConLi}>
             <Link to="/" style={ConA}>
                 <span className="swicontent">
                     <img src="https://www.subway.co.kr/images/menu/sandwich_bf04.jpg" alt="스테이크, 에그&amp;치즈"/>
                     <b style={Contentstro}>스테이크, 에그&amp;치즈</b>
                     <p style={ConP}>육즙 가득 비프 스테이크로<br/>든든한 아침 식사</p>
                 </span>
            </Link>
           </li>
     </SwiperSlide>
 </Swiper>
}]