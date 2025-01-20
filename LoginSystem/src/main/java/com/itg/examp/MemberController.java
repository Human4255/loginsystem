package com.itg.examp;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.examp.DAO.MemberDAO;
import com.itg.examp.dto.MemberDTO;

@RestController
@RequestMapping("/member")
public class MemberController { 
	@Autowired //제어의역전: 제어를 framework가 한다.
	MemberDAO dao;
	@Autowired
	MemberService service;
	@PostMapping("/signup")
	public Map<String, Object> singupMember(MemberDTO member) {
		//id는 4글자이상 pw는 6글자이상으로 입력
		System.out.println(member.toString());
		boolean ckid = service.checkId(member.getMid());
		boolean ckpw = service.checkPasword(member.getMpw());
		HashMap<String, Object> hm = new HashMap<>();
		if(!ckid) {
			hm.put("message", "아이디를 점검하세요");
		}
		if(!ckpw) {
			hm.put("message", "비밀번호를 점검하세요");
		}
		int res = dao.signupMember(member);
		if(res==1) {
			hm.put("message", "회원가입성공");
			hm.put("data", member);
			System.out.println(member.getName()+" 회원 가입성공");
			
		}else {
			hm.put("message", "회원가입실패 관리자 문의");
			System.out.println("회원가입실패");
		}
		return hm;
	}
	
	@PostMapping("/login") //로그인
	public void singin() {}
	
	@GetMapping("/logout")//로그아웃
	public void sigout() {}
	
	@GetMapping("/listview") //회원일 경우 리스트확인
	public void listView() {}
}


