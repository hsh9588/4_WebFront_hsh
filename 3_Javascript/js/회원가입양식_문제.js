// 선생님 답
const inputId = document.getElementById("inputId");

inputId.addEventListener("change", function(){
    // 영어 소문자로 시작하고,
    // 영어 대/소문자, 숫자, - , _ 로만 이루어진 6~14 글자 사이 문자열인지 검사
    // 아이디 정규표현식 : (각자 작성)

    const regEx = /^[a-z][\w-_]{5,13}$/;

    // - 형식이 일치할 경우
    // 입력창의 배경색을 springgreen 으로 변경
    if(regEx.test(this.value)){
        this.style.backgroundColor = "springgreen";
        this.style.color = "black";
    } else {
        // - 형식이 일치하지 않은 경우
        // 입력창의 배경색을 red, 글자색을 white 로 변경
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }
});

const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
const pwMessage = document.getElementById("pwMessage");
// * 비밀번호, 비밀번호 확인 : 키보드가 올라올 때
inputPwConfirm.addEventListener("keyup", function(){
    if(inputPw.value.trim().length == 0){
        inputPwConfirm.value = "";
        inputPw.focus();
    }
    if(inputPw.value == inputPwConfirm.value){
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.style.color = "green";
    } else{
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.style.color = "red";
    }
});

inputPw.addEventListener("keyup", function(){

    if(inputPw.value == inputPwConfirm.value){
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.style.color = "green";
    } else{
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.style.color = "red";
    }
});

// "비밀번호" 를 미입력한 상태에서 "비밀번호 확인"을 작성할 경우
// "비밀번호 확인"에 작성된 내용을 모두 삭제하고
// '비밀번호를 입력해주세요' 경고창 출력 후
// focus 를 "비밀번호" 입력창으로 이동

const inputName = document.getElementById("inputName");
const nameMessage = document.getElementById("nameMessage");

inputName.addEventListener("change", function(){

    const regEx = /^[가-힣]{3,6}$/;
    if()
});


// html from 태그에 onsubmit= return validate(); 추가 작성 후 

function vaildate(){
    // const gender = document.getElementsByName("gender");

    // if(!gender[0].checked && !gender[1].checked){
    //     alert("성별을 선택해주세요.");
    //     return false;
    // }

    // return true;

    // 방법2)
    const gender = document.querySelector("input[name='gender']:checked");
    // 체크된 성별 라이도 버튼만 얻어오기

    if (gender == null){
        alert("성별을 선택해주세요.");
        return false;
    }

    const inputTel = document.getElementById("inputTel");

    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regEx.test(inputTel.value)){
        alert("전화번효 형식이 올바르지 않습니다.");
        return false;
    }

    return true;

}