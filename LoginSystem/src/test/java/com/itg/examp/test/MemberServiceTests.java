package com.itg.examp.test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import com.itg.examp.MemberService;

@SpringBootTest
public class MemberServiceTests {
	//화이트박스(내부 ex_조건문,반복문), 블랙박스(외부 ex_값을 주면 어떤게 오나)
	//블랙박스_경계값분석(boundary analyze): 값의 경계가 되는 부분에서 오류가 많이 난다고 해서 사용함 
	String[] rightId;
	String[] wrongId;
	String[] rightpw;
	String[] wrongpw;
	
	@Autowired
	MemberService ms;
	@BeforeEach //테스트함수를 수행할 때마다 이걸 시행
	public void setVariable() {
		//블랙박스_동치분할 : 유효한값과 유효하지않은 값을 나눔
		rightId = new String[] {"aaaa","abcde","abcd","a@E3ool","bb#cc"};
		wrongId = new String[] {"aaa","abc","aa","a#c","123"};
		rightpw = new String[] {"123456","214#aa","aa#11aa","a@eegd","44AA@EE"};
		wrongpw = new String[] {"12345","214#a","#11aa","a@gd","AA@EE"};
	}
	//단위테스트 unit test
	@Test
	public void testId() {
		boolean res = false;
		for(int i=0;i<rightId.length;i++) {
			 res = ms.checkId(rightId[i]);
			 Assertions.assertEquals(true, res, ": 올바른 아이디 입니다. :");
			 
		}
		for(int i=0;i<wrongId.length;i++) {
			res = ms.checkPasword(wrongId[i]);
			Assertions.assertEquals(false, res, ": 잘못된 아이디 입니다. :");
		}
	}
	@Test
	public void testPassword() {
		boolean res = false;
		for(String pw : rightpw) {
			 res = ms.checkId(pw);
			 Assertions.assertEquals(true, res, ": 올바른 패스워드 입니다. :");
			 
		}
		for(String pw : wrongpw) {
			res = ms.checkPasword(pw);
			Assertions.assertEquals(false, res, ": 잘못된 패스워드 입니다. :");
		}
	}
}

