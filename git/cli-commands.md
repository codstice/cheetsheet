# 자주 활용하는 VSCODE GUI 툴
Git History
GitLens
Git Graph

---

# git 설치

### 현재 디렉토리를 작업 폴더로 지정

```
$ git init
```

### 레포지토리로부터 프로젝트 복제

```
$ git clone https://github.com/codstice/cheetsheet
```

# 기본 명령어

**변경된 파일 Stage**
```
$ git add <specific file or folder>
$ git add .
```

**Stage된 파일 commit**
```
$ git commit
```
> 에디터로 상세히 작성

**동기화 저장소 지정**
```
$ git remote https://github.com/codstice/cheetsheet
```

**저장소 변동내역 최신화**
```
$ git pull origin <branch>
```

**저장소에 푸쉬**
```
$ git push origin <branch>
```

# 충돌 컨트롤
**rebase (작업 정지하고 써야함)**
```
$ git checkout <issue_branch>
$ git rebase master
```

**stash로 임시저장하며 확인**
```
$ git stash
$ git pull origin <branch>
$ git stash pop
```

# 브랜치

### 브랜치 생성
```
$ git branch <new_branch>
```

### 브랜치 지정
```
$ git checkout <branch>
```

### 브랜치 병합
```
$ git checkout main
$ git merge <branch>
```
