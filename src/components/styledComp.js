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

export const Li = styled.li`
  display: inline-block;
  position: relative;
  width: 165px;
  text-align: center;
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
export const ButtonLink = styled(Link)`
  text-decoration: none; height: 100%;
  display: flex;
  justify-content: center; align-items: center;
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

