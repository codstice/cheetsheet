# 확장 프로그램
```Remote - SSH``` 설치

# 환경 설정 순서

### 비밀번호 활용시
**~/.ssh/config 파일에 다음 설정**
```
Host <GUI 메뉴에 노출될 이름>
  HostName <IP주소 또는 도메인 입력>
  Port <포트번호>
  User <유저이름>
```

### RSA 활용시
**서버에서 키파일 생성, 등록**
- ```ssh-keygen -t rsa -b 4096```
- ```$ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys```

**윈도우에서 ~/.ssh/id_rsa.pub 저장 후 다음 설정**
```
Host <GUI 메뉴에 노출될 이름>
  HostName <IP주소 또는 도메인 입력>
  Port <포트번호>
  User <유저이름>
  IdentityFile ~/.ssh/id_rsa.pub
```
