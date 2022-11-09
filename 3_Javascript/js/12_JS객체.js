// 객체 생성1
document.getElementById("btn1").addEventListener("click", function(){

    // {} 객체 생성 및 다루기

    // ** (중요) **
    // JS 객체의 key는 무조건 string (묵시적으로 string)
    // -> key 작성 시 "", '', (따옴표x)는 모두 string으로 인식

    const brand = "스타벅스";

    const product = {
        "pName" : "텀블러",
        'brand' : "투썸플레이스",
        color : ["red", "black", "silver"],
        price : 30000,

        // 객체의 기능
        'information' : function(){
            console.log(brand);
            // 객체 내부 함수에서 변수명을 작성하면
            // 해당 객체의 변수(key)가 아닌
            // 전역변수가 우선순위를 가진다.
            // 왜? 같은 객체의 변수(key)를 선택하는 
            // 방법이 별도 존재해서

            // 객체 내부에서 this == 현재 객체
            console.log(this.pName);
            console.log(this.brand);
            console.log(this.color);
            console.log(this.price);
        }
    };

    console.log(product);

    // 객체 기능 호출하기
    product.information();

    // 객체가 가지고 있는 값 출력하기
    const div1 = document.getElementById("div1");

    div1.innerHTML = ""; // 이전 내용 모두 삭제

    // 객체의 값을 얻어오거나 대입하는 방법
    // 1) 얻어오기 : 객체명.key 또는 
    //               객체명['key']

    // 2) 대입하기 : 객체명.key = 값;
    //               객체명['key'] = 값

    div1.innerHTML += "product.pName : " + product.pName + "<br>"; 
    div1.innerHTML += "product.brand : " + product.brand + "<br>"; 
    div1.innerHTML += "product.color : " + product.color + "<br>"; 
    div1.innerHTML += "product.price : " + product.price + "<br>"; 
    div1.innerHTML += "<hr>";

    // product.price 값 변경
    product.price = 25000;
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";

    // JS 객체에 없는 key에 값 대입하기!
    // -> 객체에 추가된다!!
    product.capacity = "550ml";
    console.log(product);
    div1.innerHTML += "product.capacity : " + product.capacity + "<br>";
    div1.innerHTML += "<hr>";

    // 객체의 key 제거 방법
    // -> delete 객체변수명.key

    // 객체명['key'] 방법으로
    // 객체가 가지고 있는 모든 값 출력하기
    // -> for in 구문(객체 전용 for문)

    div1.innerHTML += "product['capacity'] : " + product['capacity'] + "<br>";
    div1.innerHTML += "<hr>";

    // for(let key in 객체명) : 매 바퀴마다 객체의 K를 하나씩 얻어와
    //                          key 변수에 저장

    for (let key in product){
        // 객체의 K는 모두 string == 'pName', 'price'
        div1.innerHTML += product['pName'] + "<br>"
    }

});

// const obj = {};
// 
// 

// 생성자 함수
document.getElementById("btn2").addEventListener("click", function(){
    const div2 = document.getElementById("div2");

    // 비여있는 배열
    const stdList = [];

    // 2. 생성자 함수 호출 : new 생성자 함수명 (매개변수)
    stdList.push( new Student(1, 1, "홍길동")); 
    stdList.push( new Student(6, 2, "홍길이")); 
    stdList.push( new Student(2, 4, "홍삼동")); 
    stdList.push( new Student(3, 5, "사길동")); 
    stdList.push( new Student(4, 7, "오길동")); 

    div2.innerHTML = "";
    // for of : 배열/컬렉션 요소 반복 접근용 for문
    for(let std of stdList){

        // for in : 객체의 키 반복 접근용 for문
        for (let key in std){
            
            // std[key]의 자료형이 'function'이면 실행 후 출력
            if(typeof std[key] == 'function'){

                div2.innerHTML += key + " : " + std[key]() + "<br>";
            } else{

                div2.innerHTML += key + " : " + std[key] + "<br>";
            }

        }
        div2.innerHTML += "<hr>";

    }

    // console.log(stdList);
});

// 1. 생성자 함수 정의 : 생성자 함수의 시작은 반드시 대문자!!
function Student(grade, ban, name) { 
    // JS 함수의 매개변수는 let, const, val를 적지 않음!
    // -> 안 적어도 해당 함수의 지역변수로 취급
    
    // 생성자 함수에서의 this 
    // == new 연산자를 통해 만들어지는 객체

    // 속성
    this.grade = grade;
    // 매개변수 grade값을 생성되는 객체의 grade에 대입
    this.ban = ban;
    this.name = name;

    // 기능
    this.introduce = function(){
        return this.grade + "학년 " + this.ban + "반 " + this.name;
    }

}

// JSON
document.getElementById("btn3").addEventListener("click", function(){

    // JSON.stringify(JS객체) : JS객체 -> JSON문자열 변환

    // JSON.parse(JSON문자열) : JSON문자열 -> JS 객체 변환

    const std = new Student(5, 7, "오취리");

    console.log(std); // 객체로 인식
    console.log(JSON.stringify(std)); // 객체가  -> JSON으로 변환
    // ** JSON 변환 시 객체의 기능은 포함하지 않는다!! **
    // -> JSON은 데이터 전다렝 특화된 형태

    const member =  '{"memberId":"user01","memberPw":"pass01","age":20}';

    console.log(member); // JSON 문자열
    console.log(JSON.parse(member));
});