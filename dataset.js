
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/19IQoXiARr83tIhM0q3mQAfyLWCxvOPw-/view?usp=drive_link",imglog:"작성된 요구사항명세서",sourceurl:"https://docs.google.com/document/d/1YQG5y8IdsTug-SbBu_nv7jKVqG1j9O_gBv_HOyBOxNY/edit?usp=drive_link"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1z4mFDvovnvQnXVqeEbAWOa-ja-JU2dJz/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1BKwroidze5UCn-ou01jyU_de8V2fvyDsgBSCfHY4KZE/edit?usp=sharing"})//이미지타이틀
d1.set_img(1,{imgtitle:"클라이언트 개발언어",imgurl:"https://drive.google.com/file/d/1GWZaucsIKEO962jIj0BVQ1syBfk2QUG1/view?usp=drive_link",imglog:"작성문서_html5,css,javascript",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/resources/static/index.html"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터베이스세팅",imgurl:"https://drive.google.com/file/d/1z26KQSTE7Y7ObTzmmaPKtpuAevO-8cV0/view?usp=drive_link",imglog:"마리아DB설정 및 데이베이스생성",sourceurl:""})

d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1Gll6QttUHKmhFUiOl_U5IpEBosmC0kCX/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1YpiEmIeDize5ZMk2rHEjsXvn0ATa6j9UuLskoi_dPyM/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 모음",imgurl:"https://drive.google.com/file/d/1WUGAYWtoG_xuOQTKqMuP97oKoAWUeoHz/view?usp=drive_link",imglog:"서버 개발을 효율적으로 하고자 도구를 모아둠",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1MMwAEhD7q1vZ9icpeWOpwkh8afEGxfza/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1oec5idqvrWVFpp4ysu8hUn8uxCleK3t9/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1XrUo9XG8NQySh6ljHQ4ECJ21XZGZ3d4p/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"공통모듈구현을 위한 파일생성",imgurl:"https://drive.google.com/file/d/1EYb6PrdWkTxfPPKB8KjUJ7xbZevExASu/view?usp=drive_link",imglog:"common.js파일을 생성하여 공통모듈(로그아웃,로그인)을 이곳에 구현하였다. 함수만 호출하면 어디에서든 로그인,로그아웃 기능을 사용할 수 있다. ",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})//이미지타이틀
d2.set_img(0,{imgtitle:"공통모듈 테스트 할 웹페이지 생성",imgurl:"https://drive.google.com/file/d/1w9_SaZbvfEK4WTHGoJ_pU0bO12u2b1RH/view?usp=drive_link",imglog:"newpage.html파일을 생성하여 함수가 잘 호출되고 작동하는지 테스트해본다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/resources/static/newpage.html"})//이미지타이틀
d2.set_img(0,{imgtitle:"로그인 로그아웃 테스트",imgurl:"https://drive.google.com/file/d/1m_FIUMfgGqyKCCfR28Hz5P-YkTGgT6EH/view?usp=drive_link",imglog:"공통모듈을 사용해 로그인, 로그아웃 동작 확인 ",sourceurl:"https://docs.google.com/document/d/18yo1TRTYfw4Drvh53a1N_uzvgxQvWYf1O2lY5I8hwWc/edit?usp=drive_link"})//이미지타이틀
d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(1,{imgtitle:"테스트케이스 작성",imgurl:"https://drive.google.com/file/d/1pFW2W3mjGOAJbmiNQalDZebonLfGs0U2/view?usp=drive_link",imglog:"테스트케이스를 작성하여 단위테스트 계획을 세웠다.",sourceurl:"https://docs.google.com/document/d/1DGkhsq0PWBT0L3EaeOfQdWtoE852KS0sYcVuW97ojCQ/edit?usp=drive_link"})//이미지타이틀
d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"단위테스트를 실행코드",imgurl:"https://drive.google.com/file/d/1kJBNAl879l5OFAuuIdeScstpgPtin5bI/view?usp=drive_link",imglog:"유효하지 않은 아이디,비밀번호 및 메서드 작동이 정상적으로 진행되는지를 확인하는 코드를 작성하였다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/MemberServiceTests.java"})//이미지타이틀
d2.set_img(2,{imgtitle:"junit으로 단위테스트를 실행",imgurl:"https://drive.google.com/file/d/1pozysR29vYTnzpnhmYuEonq3qOB9tFkg/view?usp=drive_link",imglog:"error와 failures가 0이므로 테스트한 모든 메서드가 정상작동을 하고 있다는 걸 알 수 있다.",sourceurl:""})//이미지타이틀
d2.set_content("테스트결과 보고서를 작성합니다.")
d2.set_img(3,{imgtitle:"단위테스트 결과를 정리",imgurl:"https://drive.google.com/file/d/1uePgQYXFMUYp-ymvIOamYgwlLYJFXhes/view?usp=drive_link",imglog:"단위테스트,기타 테스트의 결과를 토대로 보고서를 작성함으로써 보안점을 한 눈 에 파악할 수 있다.",sourceurl:"https://docs.google.com/document/d/1PCLANnacwRUGyU5Xj344fkbkzTkGtOCrFvJy52i0riU/edit?usp=sharing"})//이미지타이틀

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"회원가입 조건설정",imgurl:"https://drive.google.com/file/d/1Bk1lESonU_GXxC3eNLwT1lmHCHzFeH1E/view?usp=drive_link",imglog:"아이디는 4글자 이상, 비밀번호는 6글자 이상이 되도록 값을 설정해준다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberService.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 DAO",imgurl:"https://drive.google.com/file/d/1Q2pTpXaXjGXfeDdPiGvutaiKYVoeL25l/view?usp=drive_link",imglog:"DAO를 통해 DB와 연결시키고 정보 저장을 위해 객체를 저장할 수 있는 리스트로 만들어주었다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/DAO/MemberDAO.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 요청컨트롤러",imgurl:"https://drive.google.com/file/d/1jF9B3eKQDif_98MXAOqzPAPtqc7Qnpib/view?usp=drive_link",imglog:"사용자가 회원가입정보를 입력하면 해당 데이터를 가공하여 컨트롤러에게 전달하고, DAO가 이를 DB에 저장한다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/DAO/MemberDAOimpl.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 서버컨트롤러",imgurl:"https://drive.google.com/file/d/1TMKCHFcrJ7aNOxfQhDpMKrL7jBdCKFAg/view?usp=drive_link",imglog:"회원가입 POST 요청이 들어오면 유효성을 검증한 후, 맵핑 진행 후 회원가입을 처리한다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입HTML문서작성",imgurl:"https://drive.google.com/file/d/1KgK1l6jKhV98MQeBLvxAX_pqeXJpb-5-/view?usp=drive_link",imglog:"회원가입 시 필요한 정보(이름,비밀번호,비밀번호확인,나이,주소,성별,취미,직업)기입하는 ui를 HTML문서로작성했다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/resources/static/singnup.html"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입ui",imgurl:"https://drive.google.com/file/d/1zee27_zxHvfV9oJF9xp6Y7OTGvGf2S34/view?usp=drive_link",imglog:"완성된 회원가입 ui를 확인할 수 있다.",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입성공화면",imgurl:"https://drive.google.com/file/d/1ffpEQKvXL3LMUFiMPWD536behXdnrcTR/view?usp=drive_link",imglog:"회원가입이 성공하고 있다는 걸 확인할 수 있다.",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"DB에 저장된 회원정보",imgurl:"https://drive.google.com/file/d/1xbHYttgW6bK2JJ8I6B67rXhqYW5EMJZv/view?usp=drive_link",imglog:"정상적으로 회원가입에 성공한 회원들의 정보가 DB에 저장되었음을 확인할 수 있다.",sourceurl:""})//이미지타이틀
d3.set_content("회원로그인 구현")
d3.set_img(1,{imgtitle:"로그인 기능 구현",imgurl:"https://drive.google.com/file/d/1Zg_DioLvyj4tT3PPx9mSrdKL_Q5pkjzf/view?usp=drive_link",imglog:"아이디,비밀번호를 매개변수를 받아 서버에 POST요청을 보낸다. 서버로부터 반환된 응답은 JSON형태로 받는다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인 DAO",imgurl:"https://drive.google.com/file/d/1Q2pTpXaXjGXfeDdPiGvutaiKYVoeL25l/view?usp=drive_link",imglog:"DAO를 통해 DB와 연결시키고 DB에 저장되어 있는 사용자인지 확인한다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/DAO/MemberDAO.java"})//이미지타이틀
d3.set_img(1,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/16k0J3yO48f-BZdIXRx66Dv7NKpLc3YPq/view?usp=drive_link",imglog:"MyBatis 매퍼 파일의 구조를 정의하며 회원등록,로그인검증,회원정보조회 SQL쿼리를 정의하고 있다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인 서버컨트롤러",imgurl:"https://drive.google.com/file/d/1ebYhjw0UldwTs_-FU7HsEiqETDEFJmTA/view?usp=drive_link",imglog:"로그인 POST 요청이 들어오면 로그인 검증을 하고, 성공하면 세션을 생성해준다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인java script작성",imgurl:"https://drive.google.com/file/d/1eEXc6huKWdfajb4TGVA6RVQrqsEQUO8m/view?usp=drive_link",imglog:"로그인을 위해 필요한 정보(아이디입력,비밀번호입력,로그인실패메시지,로그인성공메시지 및 페이지경로)등을 바탕으로 ui를 자바스크립트로 작성했다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/resources/static/newpage.html"})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인성공화면",imgurl:"https://drive.google.com/file/d/1N_WB9kvSrwPZ1u8jWKYxnZU2yFe8Fk-1/view?usp=drive_link",imglog:"정상적으로 로그인이 성공했음을 확인할 수 있다.",sourceurl:""})//이미지타이틀
d3.set_content("회원로그아웃 구현")
d3.set_img(2,{imgtitle:"로그아웃 기능 구현",imgurl:"https://drive.google.com/file/d/1kJlQSBrTjE0lUaLvasuasCdBxfMbMOo2/view?usp=drive_link",imglog:"처리 할 ui요소를 인수로 받아 GET요청을 보낸다. 서버로부터 반환된 응답은 JSON형태로 받고 이를 사용자에게 알리며 페이지를 리다이렉션 해준다. ",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃 서버컨트롤러",imgurl:"https://drive.google.com/file/d/1gCDWSf2bHiDgxfw0tVy6ctydkWniEhHv/view?usp=drive_link",imglog:"로그아웃 GET요청을 통해 로그아웃을 처리하고, 세션을 무효화시킨다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃성공화면",imgurl:"https://drive.google.com/file/d/1CAzAtgskE7rkP8LYrklmjZGVWQN2bbDh/view?usp=drive_link",imglog:"로그아웃이 정상적으로 이루어졌음을 확인할 수 있따.",sourceurl:""})//이미지타이틀
d3.set_content("회원리스트출력 구현")
d3.set_img(3,{imgtitle:"회원리스트 DAO",imgurl:"https://drive.google.com/file/d/1Q2pTpXaXjGXfeDdPiGvutaiKYVoeL25l/view?usp=drive_link",imglog:"DAO를 통해 DB에 접근할 수 있도록 해주었다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/DAO/MemberDAO.java"})//이미지타이틀
d3.set_img(3,{imgtitle:"회원리스트출력 서버측 컨트롤러",imgurl:"https://drive.google.com/file/d/1tmv5yUS2gJWaSk83dq4-IE4lHMK5Ast9/view?usp=drive_link",imglog:"로그인 된 사용자일 경우, 회원리스트 GET요청을 통해 로그인 된 사용자의 회원목록을 조회한다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(3,{imgtitle:"DTO를 통한 회원정보 반환",imgurl:"https://drive.google.com/file/d/1MIiKW98n-DZqzR2Qg2rRJURjsFjLbd5s/view?usp=drive_link",imglog:"DTO(서비스계층에서 사용되는 클래스)를 통해 DB에서 조회한 회원정보를 반환시킨다. ",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dto/MemberDTO.java"})//이미지타이틀
d3.set_img(3,{imgtitle:"회원리스트출력성공화면",imgurl:"https://drive.google.com/file/d/1AvZDxCUgzdBEbHvm87-gQEZXK6AFkAlT/view?usp=drive_link",imglog:"회원리스트가 정상적으로 출력되었음을 확인할 수 있다.",sourceurl:""})//이미지타이틀

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀
d4.set_img(0,{imgtitle:"Spring Boot 애플리케이션 설정 코드",imgurl:"https://drive.google.com/file/d/1H74BNs5MOZieG8QTAalD0CInAJBSLGqq/view?usp=drive_link",imglog:"배치작업이 실행되도록 설정해준다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/LoginSystemApplicationTests.java"})//이미지타이틀
d4.set_img(0,{imgtitle:"Spring Boot 배치작업 세부 설정 코드",imgurl:"https://drive.google.com/file/d/1zbikxT8_7KxZfYC3Kml_zrJs2W3vakX-/view?usp=drive_link",imglog:"배치작업 job으로 정의, Step으로 단계 정의, 배치작업 실행 시 메시지를 출력하며 작업 완료시 반환해준다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/job/BatchConfiguration.java"})//이미지타이틀
d4.set_img(0,{imgtitle:"Spring Boot 배치작업 실행 스케줄링 코드",imgurl:"https://drive.google.com/file/d/1_dnx7f_WbWhJ3v1NeOqY-Ub22cpbfOf0/view?usp=drive_link",imglog:"1분마다 스케줄러가 실행되며, JobLaunchar를 사용해 Job을 실행한다.",sourceurl:"https://github.com/Human4255/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/job/BatchSchedule.java"})//이미지타이틀
d4.set_img(0,{imgtitle:"배치스케줄 테스트",imgurl:"https://drive.google.com/file/d/1wkIgCO2b6fjaPbBq-i85e_eL5QHdGOG1/view?usp=drive_link",imglog:"배치스케줄이 잘 실행되고 있음을 확인할 수 있다.",sourceurl:""})//이미지타이틀
d4.set_img(0,{imgtitle:"배치로그기록 DB 스냅샷",imgurl:"https://drive.google.com/file/d/1qW8n2w2ClnqRlHDEJpzPbGuK8NB9CSXZ/view?usp=drive_link",imglog:"배치로그기록이 DB에 저장되었음을 확인할 수 있다.",sourceurl:""})//이미지타이틀

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
