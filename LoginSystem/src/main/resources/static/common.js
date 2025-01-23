async function login(mid,mpw){ //로그인 함수 분리 (해당 함수는 아이디,비밀번호를 넣어주면 리턴해줌)
	const logindata = {mid:$("#mid").val(),mpw:$("#mpw").val()}
	//json은 따로 헤더값을 줘야함 --> "content-type":"application/json" -규정되어있음
	const ctype = "application/json"
	const res = await fetch("/member/login",{method:"post",headers:{"content-type":ctype},body:JSON.stringify(logindata)})
	const data = await res.json();
	return data;
}
function logout(logoutui){ //로그아웃 함수 분리
	logoutui.attr("href","/member/logout").text("로그아웃") //체이닝 /setter
}







