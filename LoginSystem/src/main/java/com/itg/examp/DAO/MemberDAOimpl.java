package com.itg.examp.DAO;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.itg.examp.dto.MemberDTO;

import jakarta.websocket.Session;

@Repository
public class MemberDAOimpl implements MemberDAO {
	@Autowired
	SqlSessionTemplate session; 
	@Override
	public int signupMember(MemberDTO member) {
		int res = session.insert("memberMapper.signup",member);
		System.out.println("회원가입DAO:"+res);
		return res;
	}
	@Override
	public MemberDTO signinMember(Map<String, String> data) {
		return null;
	}

	@Override
	public List<MemberDTO> memberList() {
		return null;
	}
}
