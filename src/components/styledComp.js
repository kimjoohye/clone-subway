import styled, { keyframes, css } from 'styled-components'
import { Link } from 'react-router-dom'
import "../index.css"

// 헤더
export const Container = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`

export const Nav = styled.nav`
  position: absolute;
  width: 100%;
  top: 120px;
  display: flex;
  justify-content: center;
`

export const Ul = styled.ul`
  display: flex;
  padding: 0px;
  height: 50px;
`

export const Li = styled.li`
  display: inline-block;
  position: relative;
  width: 165px;
  text-align: center;
`
export const LogoLink = styled(Link)`
  position: absolute; left: 50%;
  top: 40px; width: 202px; height: 40px;
  transform: translate(-50%, 0);
  background: url('https//kimjoohye.github.io/clone-subway/images/logo_s.png');
  font-size: 0px; z-index: 10000;
`
const Menudropdown = keyframes`
   from{
     height: 0px;
   }
   to{
     height: 300px;
   }
 `
const Menudropup = keyframes`
  from{
     height: 300px;
  }
  to{
     height: 0px;
  }
`
export const Subpan = styled.div`
  position: absolute;
  top: 170px; left: 0px;
  width: 100%;
  background-color: white;
  border-top: 1px solid #e5e5e5;
  z-index: 99;
  overflow: hidden;

  ${props => {
    if(props.dropdown === true){
      return css `animation : ${Menudropdown} 120ms 1 linear`
    }
    else if(props.enter === 1 && props.dropdown === false){
      return css `animation : ${Menudropup} 120ms 0s 1 linear`
    }
    
  }}
`

export const NavLink = styled(Link)`
  display: inline-block;
  width: 165px;
  text-decoration: none;
  font-weight: bold;
  color: #292929;
  font-size: 18px;

  &:hover{
    color: #009223;
  }
`

export const SideUl = styled.ul`
  width: 1170px;
  position: absolute;
  right: 14%;
  top: 40px;
  display: flex;
  justify-content: flex-end;
`
export const SideLi = styled.li`
  display: inline-block;
  height: 30px;
`

export const SideLink = styled(Link)`
  display: inline-block;
  height: 100%;
  box-sizing: border-box;
  padding: 7px 0px;
  font-size: 13px;
  color: #666666;
  text-decoration: none;
  `

export const SideLink2th = styled(Link)`
  display: inline-block;
  height: 100%;
  box-sizing: border-box;
  padding: 7px 0px;
  margin-left: 30px;
  font-size: 13px;
  color: #666666;
  text-decoration: none;

  &::before{
    content: '';
    background-color: #ddd;
    width: 3px; height: 3px;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    left: 31%;
    transform: translate(0, -50%);
  }
`

export const LogoGlobal = styled(Link)`
  position: absolute; width: 30px; height: 30px;
  background: url('https//kimjoohye.github.io/clone-subway/images/icon_global.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  line-height: 0;
  font-size: 0px;
`

export const Subpans = styled.div`
  display: flex;
  justify-content: center;
`

export const Dropdownul = styled.ul`
  flex-direction: row;
  z-index: 99;
  list-style-type: none;
  height: 250px;
  width: 165px;
  display: ${props => props.dropdown === false ? 'none': 'block'};
`

export const DropdownLi = styled.li`
   display: inline-block;
   padding: 8px 0px 10px;
   width: 165px;
   text-align: center;
`
export const Submenu = styled(Link)`
  text-decoration: none;
  &:hover{
    color: #009223;
    text-decoration: underline;
  }
`
// 메인 상단1
export const SwipeImage = styled.div`
  position: relative;
  height: 440px;
  background-image: url(${props => props.url});
  background-position: 52% 50%;
  background-repeat: no-repeat;
`
export const ButtonPosi = styled.div`
  position: absolute;
  top: 580px; left: 760px;
  margin-left: -590px;
  display: flex; justify-content: flex-end;
  width: 1170px;
  z-index: 30;
`

export const FindSpan = styled.span`
  display: inline-block;
  width: 300px; height: 80px;
  background-color: #ffce32;
  border-radius: 30px 0px 0px;
  
`
export const ButtonLink = styled(Link)`
  text-decoration: none; height: 100%;
  display: flex;
  justify-content: center; align-items: center;
`
export const SubsSpan = styled.span`
  display: inline-block;
  width: 300px; height: 80px;
  background-color: #009223;
  border-radius: 0px 0px 30px 0px;
`

export const FindIcon = styled.span`
  color: #000000;
  font-weight: bold; font-size:22px;
  
  &::before{
    content:"";
    background: url("https//kimjoohye.github.io/clone-subway/images/icon_map.png") no-repeat 0px 0px;
    vertical-align: middle;
    display: inline-block;
    width: 24px; height: 30px;
    padding-right: 12px;
  }
`

export const SubsIcon = styled.span`
  color: #FFFFFF;
  font-weight: bold; font-size:22px;

  &::before{
    content:"";
    background: url("https//kimjoohye.github.io/clone-subway/images/icon_franchise.png") no-repeat 0px 0px;
    vertical-align: middle;
    display: inline-block;
    width: 33px; height: 30px;
    padding-right: 12px;
  }
`

export const SubwayContent = styled.div`
  height: 550px;
  padding-top: 120px;
`

export const ContentMenu = styled.div`
  margin: 0px 50px;
`

export const MenuP = styled.p`
  font-family: 'SBAggroB';  
  color: #292929; font-size: 35px;
  font-weight: bolder;
  padding: 15px 0px 0px 20px;
  background-image: url('https//kimjoohye.github.io/clone-subway/images/bul_tit.png');
  background-repeat: no-repeat;
  background-size: 53px;
  width: 1170px; position: relative;
  margin: 0 auto;
`
export const TabDiv = styled.div`
position: relative;
top: -28px; left: 700px;
margin-left: -590px;
display: flex; justify-content: flex-end;
width: 1170px;
`
export const Tabli = styled.li`
  display: inline-block;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bolder;

  color: ${props => {
    if(props.id === 0){
      return props.menufColor;
    }
    else if(props.id === 1){
      return props.menusColor;
    }
    else if(props.id === 2){
      return props.menutColor;
    }
    else if(props.id === 3){
      return props.menufoColor;
    }
  }};

  &::before{
    content: "|";
    width: 1px; height: 15px;
    padding-right: 25px;
    font-weight: normal;
  }
  &:first-child::before{
    content: "";
  }
`
export const Prev = styled.button`
  width: 50px; height: 50px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  background-color: ${props => props.prevBackColor};
  `
export const Next = styled.button`
  width: 50px; height: 50px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${props => props.nextBackColor};
`
export const ContentMenuC = styled.div`
  padding: 25px 0px; width: 1200px;
  margin: 0 auto;
`


