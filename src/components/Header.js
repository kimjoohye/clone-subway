import React, { useState} from 'react'
import { Ul, Li, Nav, NavLink, SideLink, SideLink2th, LogoLink, LogoGlobal,
     SideUl, SideLi, DropdownLi, Dropdownul, Subpan, Subpans, Submenu } from './styledComp'

function Header(){

    const li_global = {
        display: 'inline-block', width: '30px',
        height: '30px', listStyleType: 'none',
        marginLeft: '14px'
    }

    const main = {
        width: '100%', height: '165px',
        borderTop: '5px solid #009223', boxSizing: 'content-box'
    }

    const [dropdown, setDropdown] = useState(false);
    const [enter, setEnter] = useState(0);

    return <div style={main}>
            <header style={{ height: '100%', width: '100%'}}>
                <LogoLink to="/">SUBWAY</LogoLink>
                <Nav>
                    <Ul onMouseEnter={() => {setDropdown(true); setEnter(1)}} 
                onMouseLeave={() => { setDropdown(false);}}>
                        <Li>
                            <NavLink to="/">메뉴소개</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/">이용방법</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/">새소식</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/">써브웨이</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/">가맹점</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/">온라인주문</NavLink>
                        </Li>
                    </Ul>
                </Nav>

                {/* 서브메뉴 */}
                <Subpan onMouseOver={() => {setDropdown(true);}} 
                onMouseOut={() => {setDropdown(false)}} dropdown={dropdown} enter={enter}>
                    <Subpans>
                            <Dropdownul dropdown={dropdown}>
                                <DropdownLi><Submenu to="/">샌드위치</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">랩ㆍ기타</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">샐러드</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">아침메뉴</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">스마일썹</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">단체메뉴</Submenu></DropdownLi>
                            </Dropdownul>
                            <Dropdownul dropdown={dropdown}>
                                <DropdownLi><Submenu to="/">써브웨이 이용방법</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">단체메뉴 이용방법</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">신선한 재료 소개</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">App 이용방법</Submenu></DropdownLi>
                            </Dropdownul>
                             <Dropdownul dropdown={dropdown}>
                                <DropdownLi><Submenu to="/">이벤트ㆍ프로모션</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">뉴스ㆍ공지사항</Submenu></DropdownLi>
                                 <DropdownLi><Submenu to="/">광고영상</Submenu></DropdownLi>
                            </Dropdownul>
                            <Dropdownul dropdown={dropdown}>
                                <DropdownLi><Submenu to="/">써브웨이 역사</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">써브웨이 약속</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">샌드위치 아티스트 지원</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">매장찾기</Submenu></DropdownLi>
                            </Dropdownul>
                            <Dropdownul dropdown={dropdown}>
                                <DropdownLi><Submenu to="/">써브웨이 프랜차이즈</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">가맹관련 FAQ</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">가맹신청ㆍ문의</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">지사안내</Submenu></DropdownLi>
                                <DropdownLi><Submenu to="/">사업설명회</Submenu></DropdownLi>
                            </Dropdownul>
                                <Dropdownul dropdown={dropdown}>
                                    <DropdownLi><Submenu to="/">FAST-SUB</Submenu></DropdownLi>
                                    <DropdownLi><Submenu to="/">HOME-SUB</Submenu></DropdownLi>
                                    <DropdownLi><Submenu to="/">단체주문</Submenu></DropdownLi>
                            </Dropdownul>
                        </Subpans>
                </Subpan>

                <SideUl>
                        <SideLi><SideLink to="/login">로그인</SideLink></SideLi>
                        <SideLi><SideLink2th to="/submit">회원가입</SideLink2th></SideLi>
                        <li style={li_global}><LogoGlobal to="/">글로벌</LogoGlobal></li>
                </SideUl>
            </header>
        </div>
}

export default Header