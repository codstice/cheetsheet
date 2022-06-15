\# [container] : 컨테이너의 name 또는 id

\# [image] : 이미지의 [repository]:[tag]

---

# 도커 프로그램 설치

### 우분투 활용시

```$ apt-get install docker.io```

# 도커 네트워크 컨트롤 명령어

### 도커 네트워크 생성

```$ docker network create --gateway 172.100.0.1 --subnet 172.100.0.0/24 mynetwork```
> 직접 생성한 도커 네트워크를 사용하지 않으면, NAT 방식으로 컨테이너를 구동한 순서대로 내부ip가 할당된다. 내부망 주소가 바뀌면 안될 때는 생성한 네트워크를 활용해야함.

### 생성한 도커 네트워크 적용

```$ docker run -it -p80:80 -p443:443 -p2222:22 --network mynetwork --ip 172.100.0.101 --restart=always --name=web codstice/docstice:myweb```

# 이미지 컨트롤 명령어

### 도커 이미지 검색, 다운로드, 삭제

```$ docker search [RepositoryName]:[tag]```

```$ docker pull ubuntu:latest```

> 도커 공통 레포지토리에서 ubuntu 최신버전 이미지를 호스트에 설치

```$ docker pull codstice/docstice:web_chall_2```

> 도커 허브의 codstice 계정의 docstice 저장소에서 web_chall_2라는 태그의 이미지를 호스트에 설치

```$ docker rmi [image]```

### 설치된 이미지 리스팅

```$ docker images```

# 컨테이너 컨트롤 명령어

### 도커 컨테이너 리스팅

```$ docker ps```

> -a : 실행중인 컨테이너들만 리스팅

```$ docker ps -a ```

> -a : 메모리에 up되지 않은 컨테이너들도 모두 리스팅

### 도커 컨테이너 세부정보 확인

```$ docker inspect [container]```

### 도커 컨테이너 및 이미지 삭제

```$ docker rm [container]```

### 이미지를 통해 도커 컨테이너 생성

```$ docker run -it --name [지정할 별칭] -p 80:80 [image] /bin/bash```

> it 옵션 : interective tty(쉘)로, 백그라운드 모드인 d옵션의 반대 개념
> 마지막 파라미터는 실행할 파일을 입력하는 것으로, 파라미터를 주지 않으면 /bin/bash가 기본적으로 실행 됨.

### 도커 컨테이너 up/exit

```$ docker start [container]```

```$ docker stop [container]```
 

### 켜진 컨테이너 tty 접근

```$ docker attach [container]```
 

### 컨테이너 외부에서 내부로 명령어 입력

```$ docker exec [container] [operation]```

### 접속한 컨테이너 쉘에서 도커 끄지않고 escape

```$ Ctrl pq```

# 기타

### 도커->호스트 파일복제

```$ docker cp [container]:[파일경로] [호스트경로]```

### 자동 재시작
```$ docker run --restart=always [image]```

### 도커 컨테이너를 이미지로 저장 (run 이후 변동/추가된 레이어들을 commit)

```docker commit [image] [repository_name]:[tag_name]```

### 도커 이미지를 도커 허브에 저장

```$ docker login```

```$ docker push [image]```

ex: ```$ docker push codstice/docstice:web_chall_20```

> codstice/docstice:web_chall_20 : 도커 허브의 codstice계정의 docstice저장소의 web_chall_20이라는 태그
