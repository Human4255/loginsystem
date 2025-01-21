package com.itg.examp.DAO;

import java.util.List;
import java.util.Map;
import com.itg.examp.dto.MemberDTO;


public interface MemberDAO {
	//(가입)회원가입시 데이터 DB입력
	public int signupMember(MemberDTO member);
	//(로그인)회원로그인시 아이디 비밀번호 확인
	public MemberDTO signinMember(Map<String, String> member);
	//(조회)회원리스트 조회시 리스트 출력
	public List<MemberDTO> memberList();
	

}
