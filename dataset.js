
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
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1z4mFDvovnvQnXVqeEbAWOa-ja-JU2dJz/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1YpiEmIeDize5ZMk2rHEjsXvn0ATa6j9UuLskoi_dPyM/edit?usp=sharing"})//이미지타이틀
d1.set_img(1,{imgtitle:"클라이언트 개발언어",imgurl:"https://drive.google.com/file/d/1GWZaucsIKEO962jIj0BVQ1syBfk2QUG1/view?usp=drive_link",imglog:"작성문서_html5,css,javascript",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터베이스세팅",imgurl:"https://drive.google.com/file/d/1z26KQSTE7Y7ObTzmmaPKtpuAevO-8cV0/view?usp=drive_link",imglog:"마리아DB설정 및 데이베이스생성",sourceurl:""})

d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1Gll6QttUHKmhFUiOl_U5IpEBosmC0kCX/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 모음",imgurl:"https://drive.google.com/file/d/1WUGAYWtoG_xuOQTKqMuP97oKoAWUeoHz/view?usp=drive_link",imglog:"서버 개발을 효율적으로 하고자 도구를 모아둠",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1vl3Ridea05eDn3Hx0cfIWzgkPi-vQX31/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1vlxyuzBmzaBk7B9VoycUH0mRBBxe4nTr/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1XrUo9XG8NQySh6ljHQ4ECJ21XZGZ3d4p/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"공통모듈구현을 위한 파일생성",imgurl:"https://drive.google.com/file/d/1EYb6PrdWkTxfPPKB8KjUJ7xbZevExASu/view?usp=drive_link",imglog:"common.js파일을 생성하여 공통모듈(로그아웃,로그인)을 이곳에 구현하였다. 함수만 호출하면 어디에서든 로그인,로그아웃 기능을 사용할 수 있다. ",sourceurl:"https://docs.google.com/document/d/18yo1TRTYfw4Drvh53a1N_uzvgxQvWYf1O2lY5I8hwWc/edit?usp=drive_link"})//이미지타이틀
d2.set_img(0,{imgtitle:"공통모듈 테스트 할 웹페이지 생성",imgurl:"https://drive.google.com/file/d/1w9_SaZbvfEK4WTHGoJ_pU0bO12u2b1RH/view?usp=drive_link",imglog:"newpage.html파일을 생성하여 함수가 잘 호출되고 작동하는지 테스트해본다.",sourceurl:""})//이미지타이틀
d2.set_img(0,{imgtitle:"로그인 로그아웃 테스트",imgurl:"https://drive.google.com/file/d/1m_FIUMfgGqyKCCfR28Hz5P-YkTGgT6EH/view?usp=drive_link",imglog:"공통모듈을 사용해 로그인, 로그아웃 동작 확인 ",sourceurl:""})//이미지타이틀
d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(1,{imgtitle:"구현한 공통모듈 작동확인",imgurl:"",imglog:"common.js파일을 생성하여 공통모듈(로그아웃,로그인)을 이곳에 구현하였다. 함수만 호출하면 어디에서든 로그인,로그아웃 기능을 사용할 수 있다. ",sourceurl:"https://docs.google.com/document/d/18yo1TRTYfw4Drvh53a1N_uzvgxQvWYf1O2lY5I8hwWc/edit?usp=drive_link"})//이미지타이틀
d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"공통모듈구현하기",imgurl:"",imglog:"common.js파일을 생성하여 공통모듈(로그아웃,로그인)을 이곳에 구현하였다. 함수만 호출하면 어디에서든 로그인,로그아웃 기능을 사용할 수 있다. ",sourceurl:""})//이미지타이틀

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_content("회원로그인구현")
d3.set_content("회원리스트연동")
d3.set_content("테스트케이스 작성")
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_content("결과보고서 작성")
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
