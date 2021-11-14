import * as Yup from 'yup'

export function vEmail(){
    return Yup.string("").email("아이디 혹은 비밀번호가 잘못되었습니다.")
    .required("")
}

export function vPassword(){
    let check1 = /^(?=.*[a-z])(?=.*[0-9]).{8,15}$/;
    let check2 = /^(?=.*[a-z])(?=.*[^a-z0-9]).{8,15}$/;
    let check3 = /^(?=.*[^a-z0-9])(?=.*[0-9]).{8,15}$/;
  
    return Yup.string("").matches(check1 || check2 || check3, {
      message: "아이디 혹은 비밀번호가 잘못되었습니다."
    })
    .required("")
}