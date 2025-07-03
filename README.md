## [모히또에서 몰디브 한 잔 - 칵테일 검색 사이트]
********************
#### 서비스 소개
저희는 누구나 쉽게 칵테일에 대해 검색하고,
정보를 얻을 수 있는 사이트를 만들고자 했습니다.
분위기, 재료, 당도, 알콜세기, 이름 등의 여러 조건으로 쉽게 검색 가능한 칵테일 사이트!
"모히또에서 몰디브 한 잔" 을 소개합니다.✨
************
#####  [🍹배포링크는 여기서 확인 가능합니다 🍸](https://mojito-next.vercel.app/)
************
#### 기술 스택
###### Next.js 14
- app/ 폴더 기반의 파일 라우팅 및 레이아웃 설계
- 서버 컴포넌트, 동적 페이지, SSR/CSR 선택적 적용
###### React 18
- 반복적인 로직 커스텀 훅으로 분리, 코드 재사용성 향상
###### TypeScript
- 주요 파일에 타입을 명시, 코드 안정성 확보
###### NextAuth
- 카카오톡 로그인 인증
- 세션 관리, 사용자 인증 플로우, 권한 처리 구현
###### SCSS
- 변수, 믹스인, 중첩(Nesting) 등 강력한 스타일링 기능 활용
- PC / Labtop / Tablet / Mobile 디바이스별 반응형 구현
###### Zustand
- 효율적인 전역 상태관리
- 사용자 세션, 필터 상태, UI 상태 등에 활용
###### MongoDB
- mongoose로 DB 연결 및 CRUD 구현
###### ESLint
- 코드 품질 및 일관성 유지
*****
#### 주요 기능
1) ##### 헤더

|PC|모바일|
|---|---|
| ![PC 동작화면](https://private-user-images.githubusercontent.com/87072502/460554892-ee594f03-6874-4553-8c68-233b3b505dde.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1NTAyMDcsIm5iZiI6MTc1MTU0OTkwNywicGF0aCI6Ii84NzA3MjUwMi80NjA1NTQ4OTItZWU1OTRmMDMtNjg3NC00NTUzLThjNjgtMjMzYjNiNTA1ZGRlLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzAzVDEzMzgyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwNmYzYzAyNTlmNDI2MWY2MDRiYjg2NDUwOTA3NGQ4YTViOWIxZTczOWI0OGYyZDlhNDllNGFjNDYxYmMzODgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.K9h7AeJCpPX4PCMAa3Gp6VorqoW37o3ftYaIDU7915w)   |![모바일 동작 화면]()|
- PC / 모바일 UI 차별화
    - PC에서는 헤더가 상단에 위치 / 모바일에서는 하단 위치해 사용자 편의성을 높였다.
- 카카오톡 로그인 기능
    - NextAuth 카카오톡 로그인을 구현했고 회원 데이터를 db에 저장한다.
- 탑다운 버튼
    - 일정한 길이만큼 스크롤 했을 때 페이지 최상단/최하단으로 가는 버튼이 나타난다.

2) ##### 메인페이지
  
|PC|모바일|
|---|---|
| ![PC 동작화면](https://private-user-images.githubusercontent.com/87072502/460670284-75ef0656-dade-4cab-af5c-7a6d21829304.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1NTAyMDcsIm5iZiI6MTc1MTU0OTkwNywicGF0aCI6Ii84NzA3MjUwMi80NjA2NzAyODQtNzVlZjA2NTYtZGFkZS00Y2FiLWFmNWMtN2E2ZDIxODI5MzA0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzAzVDEzMzgyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY1ODhhZGE1MWUxMjdhNjJkMjA0ZThjNmZjZTE5ZDNjNjZhYTJmMjcxMzBiZWZkMDU0ZGE0YjU1NjM5YTU2NGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.fi3AhKOVPkrc1gzbuKA0xxrDKrf1Qa_wbDgyQ6d2H9U)  |![모바일 동작 화면]()|
- 랜덤칵테일
    - top100 칵테일을 렌더링 때마다 랜덤으로 10개를 보여준다.
    - 스와이프ui로 칵테일이 자동으로 슬라이드 된다.
- 필터검색
    - 칵테일의 맛, 베이스, 도수, 당도 데이터에 따라 필터링 검색을 할 수 있다.
    - 검색 전에는 모든 칵테일을 볼 수 있다.
    - 검색된 카드의 개수가 표기된다.
    - 모바일 UI에서는 필터를 모달로 구현했다.
- top100 더보기 버튼 이동
    - 버튼을 클릭하면 top100 해시태그가 포함된 칵테일이 검색된 페이지로 이동한다.
- 칵테일 카드 무한스크롤
    - 칵테일 카드를 25개씩 보여주는 무한스크롤을 구현했다.
    - 칵테일을 클릭하면 칵테일 상세페이지로 이동한다.
    - 칵테일 카드의 하트를 클릭하면 내 칵테일 창고에 저장된다.

3) ##### 칵테일 검색페이지

|PC|모바일|
|---|---|
| ![PC 동작화면](https://private-user-images.githubusercontent.com/87072502/460674567-8cff6fc6-945d-45ef-b446-beaf85f53c44.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1NTAyMDcsIm5iZiI6MTc1MTU0OTkwNywicGF0aCI6Ii84NzA3MjUwMi80NjA2NzQ1NjctOGNmZjZmYzYtOTQ1ZC00NWVmLWI0NDYtYmVhZjg1ZjUzYzQ0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzAzVDEzMzgyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE0NzE5ZmUwODJmMTY2NDViMWE0ZDI5OWQ0NzRlYWMyYTY2OWZmYzE3MzQyMmI3NjRkOWQ3ZmZiMmU2Y2FkMDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Gm178tZbzPyTeGsYW0M-TyibXzgQfC7KYfst-MCpz74)   |![모바일 동작 화면]()|
- 검색기능
    - 칵테일의 이름과 재료로 검색할 수 있다.
    - 한국어 영어 모두 검색 가능하다.
- 해시태그 필터링 기능
    - 테마에 따른 해시태그로 칵테일을 필터링해서 보여준다.

4) ##### 내 칵테일 창고

|PC|모바일|
|---|---|
| ![PC 동작화면](https://private-user-images.githubusercontent.com/87072502/460668882-c16d386f-8557-4bf7-8909-c5a36bd73c04.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1NTAyMDcsIm5iZiI6MTc1MTU0OTkwNywicGF0aCI6Ii84NzA3MjUwMi80NjA2Njg4ODItYzE2ZDM4NmYtODU1Ny00YmY3LTg5MDktYzVhMzZiZDczYzA0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzAzVDEzMzgyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI0MzE2NjVkODdjNWQ2NTQwMTQzZDJlYjZlZjcxYTcwMzU5NjI4MzlkNjQ0MjY3YzY4MTdmNzI0MzFmYWY3NDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.sm-HWfx-F5_ZcwS8IDJAnmSrqFo3vy2ZSxsWY4QM78I)   |![모바일 동작 화면]()|

- 내 칵테일 데이터 확인
    - “별점”과 “리뷰”를 남긴 칵테일 카드를 “칵테일 기록” 탭에서 확인 가능하다.
    - “좋아요 (하트버튼)” 을 누른 칵테일 칵드를 “찜한 칵테일” 탭에서 확인 가능하다.
- 정렬기능
    - 최신순과 별점순으로 카드를 정렬하여 볼 수 있다.

5)  ##### 마이페이지

|PC|모바일|
|---|---|
| ![PC 동작화면](https://private-user-images.githubusercontent.com/87072502/460570761-00b6a6b7-2f7a-4015-8216-d53a0b0676ab.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1NTAyMDcsIm5iZiI6MTc1MTU0OTkwNywicGF0aCI6Ii84NzA3MjUwMi80NjA1NzA3NjEtMDBiNmE2YjctMmY3YS00MDE1LTgyMTYtZDUzYTBiMDY3NmFiLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzAzVDEzMzgyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2MDM4M2M3ZTgxM2VmNzNlOTEyMjI2MWRkZjNjMWZhOWFkMDRhZWUxZTk3M2U1NjE5ODZmYTg0ODAxYmY0NTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.775WXLeA33DThF40cirsoEQvZQkX0BCn_Xx8TEE7MMw)   |![모바일 동작 화면]()|

- 사용자 정보 확인 / 수정
    - 사용자의 프로필 이미지, 닉네임을 변경, 확인할 수 있다.
- 내 칵테일 기록 / 찜한 칵테일
    - 사용자가 “좋아요” 혹은 “별점 , 리뷰” 를 남긴 칵테일 카드의 갯수를 확인할 수 있으며, 
    해당 페이지로 이동 가능하다.
- 로그아웃
    - 로그아웃 후 메인페이지로 이동한다.
- 회원탈퇴
    - 회원탁퇴 버튼으로 DB 에서 회원의 정보를 삭제할 수 있다.

*************
#### 역할분담

<span style="background-color:#E9F9F2">백경호</span>
- UI 
    - 상세 페이지
    - 마이 페이지
    - 내 칵테일 창고 페이지
    - 칵테일 리스트 컴포넌트
    - top100 추천 컴포넌트
    - 프로필 설정, 로그인 요청, 회원탈퇴 확인 모달
    - 이 외의 반응형 
- 기능구현
    -  칵테일 별점 및 리뷰 CRUD 
    -  칵테일 별점순, 최신순 정렬
    -  프로필 데이터(이미지, 닉네임) CRUD
    -  회원탈퇴, 로그아웃에 따른 데이터 관리
    -  python과 gpt API를 통한 데이터 한글화 및 DB 저장
    -  이름, 재료 기반의 칵테일 검색
    -  해쉬태그 기반의 칵테일 검색
    -  25개의 칵테일 카드 단위의 무한 스크롤
    -  로그인 상태 판별
    -  버튼 연속 클릭 방지 hook



<span style="background-color:#EBFFA2">박수완</span>

- UI/UX 디자인 
- UI
	- 전역 SCSS 작성
	- 칵테일 필터
	- 공통 컴포넌트 (버튼, 카드, 네비게이션, 모달)
- 기능구현
	- app 디렉토리 구조로 레이아웃, 라우팅 설계
	- MongoDB 구조 설계 및 연동,스키마 작성, api 구축
	- Zustand 구조 설계
	- 로그인 기능
	- 필터 검색 기능
	- 즐겨찾기 기능
	- 탑다운 스크롤 기능 (쓰로틀 기능)
