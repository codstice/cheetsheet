# 자주 활용하는 VSCODE 플러그인
GitLens - 깃 주요기능 VSCODE GUI 사용 가능

Git Graph - 깃 브랜치, 커밋 로그 분기 흐름과 함께 확인

https://learngitbranching.js.org/?locale=ko

---

# 개념
### HEAD
- 지금 추가되는 커밋, 지금 추가하는 브랜치는 항상 checkout중인 HEAD에서 추가된다.
- commit을 참조하여 새 commit을 작성하면, branch는 같이 움직이지 않는다. ```git branch -f <new_commit> <branch>```까지 해줘야 branch의 참조 대상이 업데이트된다.
- branch를 참조하여 새 commit을 작성하면, branch의 참조 대상 또한 자동 업데이트 된다.

### 푸쉬 조건
- git log에서 origin은 원격저장소의 상태
- origin이 아닌 것은 로컬의 상태
- 로컬브랜치가 원격브랜치 이상의 변동내역이 있을 때 원격에 push 권한 있음
- 강제 푸시하면 로컬 상태로 강제 동기화시킨다.
- 푸쉬가 안될 때는 브랜치와 HEAD의 위치를 확인하고 origin과 비교해야함.

### commit
- 모든 깃 브랜치들은 특정 commit의 별칭일 뿐, 모두 커밋의 트리로 구성되어 있다.
- 각 commit은 이전 commit으로부터 변경된 파일에 대한 변경사항이다. C1-C2-C3-C4의 순서를 C1-C3-C2-C4로 rebase해도, C4의 결과는 같다. 단 C3 checkout시 C2 내역 부재로 버그가 날 수도 있다.

### branch 지정
- 새로운 커밋을 분기할 때 태그된 브랜치가 없으면 사라진다.
- ff(fast-forward) 브랜치 : 수정 내역에 서로 간섭이 없는 관계, merge시 태그 이름만 바뀜.
- no-ff(not fast-forward) 브랜치 : 수정 내역에 간섭이 있는 관계, merge시 conflict가 나며, merge 로그가 남는다. 
  - 프로젝트에서 rebase를 통한 트리 관리를 하려면 ff인 브랜치도 merge시에 --no-ff 옵션을 줘서 commit을 남겨야 flow를 보기 용이하다.

# 태그(브랜치) 관리

### 특정 버전 워킹 디렉토리 보기 / 브랜치를 통해 이동하기
```
$ git checkout main // HEAD -> *main -> commit
$ git checkout <commit> // HEAD -> commit
$ git checkout HEAD~2
$ git branch bugfix
```

### 브랜치 참조 커밋 재지정
```
$ git checkout main
$ git branch -f main <새 커밋>
```
- 브랜치 버전을 새로 발행한 커밋으로 업데이트하거나 과거 시점에 태깅해야 할 때 사용.
- 브랜치 스트림에 없는 커밋들은 삭제된다.

### 브랜치 삭제
```
$ git checkout <A_branch>
$ git branch -d <B_branch>
```

### 브랜치 병합
```
$ git checkout main
$ git merge bugfix
$ git branch --merged // 결과 확인
$ git branch --no-merged // 병합 안된 브랜치 확인
$ git merge --squash bugfix // Index에 최종 변동사항 기록하며 커밋 히스토리 삭제
```

### 브랜치 베이스 재지정
```
$ git checkout bugfix
$ git rebase main 
$ git rebase main bugfix // $ git rebase [to commit / branch] [from commit]
```
- 가장 가까운 베이스(브랜치의 분기점 조상)이 동일한 commit에 쓸 수 없다.
- to commit시 commit을 베이스삼아 브랜치가 통쨰로 재작성된다.
- to branch시 공통되는 부분을 거르고, 마지막 공통되는 커밋에서 분기되어 재작성된다.
- 커밋 해쉬는 새로 생성되어, 팀원의 코드가 강제로 브랜치 미지정 분기가 될 수 있다. (팀원이 브랜치 만들고 풀받은 다음 다시 rebase 해야함)
- 병합에 비해 스트림이 하나로 통합되므로 보기 깔끔해진다.


### 브랜치 복사
```
$ git checkout main
$ git cherry-pick backend frontent
$ git rebase -i <copy_branch> // GUI
```
- 기존 브랜치는 놔두고, 새 브런치로 복사할 때 사용된다.
- ```rebase```와 ```rebase -i```는 아예 다른 명령이다.
- 사이 사이 불필요한 커밋 내역을 삭제시키거나 순서를 바꿀 수 있어서, 커밋 트리 관리나 과거 내역 수정에 용이하다.
- git rebase -i HEAD~4를 통해 최근 4개 커밋을 통합하여(squash 옵션) 하나의 커밋을 작성할 수 있어 커밋 관리에 용이하다.

### 과거 내역을 패치해야 할 때
```
$ git rebase -i <old_commit> // edit 키워드 사용시 edit할 commit 시점에서 rebase 일시정지
$ git commit --amend // 추가 변경 후 amend 사용 가능
$ git rebase --continue // 과거변경 적용, 연쇄적으로 새 커밋(새 커밋 해쉬)으로 재작성됨
```

# 롤백
### 커밋 재작성
```
$ git commit --amend // 다시작성
```

### 브랜치 제어 중 브랜치로부터 벗어나 log로부터 유실된 commit 조회
```
$ git reflog // 로컬에서 한 번이라도 참조했던 commit까지 리스팅한다.
```


### Index에 변동내역(delta) 관리
```
// save in stack
$ git stash
$ git pull origin <branch>
$ git stash pop

// stage
$ git add <file>
$ git add .
$ git add * // incude files defined with git ignore

// unstage to HEAD version
$ git restore <file>
$ git reset HEAD // branch 이전 커밋에서 사용시 미래 작업내역도 날라감.

// remove delta
$ git checkout -- <file>
$ git reset --hard HEAD // branch 이전 커밋에서 사용시 미래 작업내역도 날라감.
```

### HEAD 유지한 채 과거파일로 덮어씌우기 (unstaged overwrite)
```
git restore --source <commit hash> <file>
```

### revert - 스트림 유지 롤백

```$ git revert <commit>```
- 과거 버전의 워킹 디렉토리와 함께 새 커밋을 작성한다.

### reset - 스트림까지 롤백
- HEAD를 옮긴다.
- 옮긴 HEAD가 로컬 최신버전이라고 커밋 히스토리를 편집한다.
- 워킹 디렉토리를 변경한다.

```
$ git reset --mixed <commit>
```
- (default)
- 리셋 전 워킹 디렉토리 보존, 모든 변동내역들이 unstaged
- 히스토리를 날리고, 작업 내역까지 수정할 때 사용된다.

```
$ git reset --mixed <commit>
```
- 리셋 전 워킹 디렉토리 보존, 모든 변동내역들이 staged
- 히스토리만 날릴 때 사용된다.

```
$ git reset --hard <commit>
```
- 리셋 전 시점까지의 워킹 디렉토리 모두 삭제
- 히스토리와 작업 내역을 통째로 날릴 때 사옹된다.

