# 헌혈증 NFT 프로젝트

![image](https://user-images.githubusercontent.com/69336797/210229025-a5ba6dd0-a049-40cf-9b0e-4eb29a1843e8.png)

## 프로젝트 소개

> > > > > > > c004c6bf2eea4dc2fab6ab97e522814462efdb9c
> > > > > > > 기존 종이 헌혈증을 NFT로 발행한 프로젝트입니다.

> 기존 헌혈증은 종이로 발급됩니다.  
> 종이로 보관함으로써 분실위험이 생기고 헌혈증을 양도하거나 기부하는 과정에서 불편함이 있었습니다.  
> 그뿐만 아니라 기부된 헌혈증의 사용을 추적하기 어려웠습니다.

이런 문제를 해결하기 위해 프로젝트를 시작하였습니다.

헌혈증을 NFT로 발급함으로써 얻을 수 있는 이점으로는

- 헌혈증을 개인 지갑에 소유하여 분실 확율을 낮춤.
- 소유하고 있는 헌혈증을 다른사람에게 쉽게 전송할 수 있음.
- 헌혈증을 발행 받은 사람부터 거쳐가는 소유자들의 지갑을 기록하기 때문에 투명하게 관리 가능.

## NFT 사용 시나리오

![image](https://user-images.githubusercontent.com/69336797/209934451-9bf40823-3ab7-472b-9f8b-6971c7e0e30f.png)

1. 컨트랙트를 발행한 지갑이 관리자가 됩니다.
2. 관리자는 새로운 관리자, 헌혈의집, 병원의 권한을 줄 수 있습니다.
3. 헌혈의 집 권한을 가진 지갑은 헌혈증을 발행할 수 있습니다.
4. 병원 권한을 가진 지갑은 헌혈증을 받아 사용할 수 있습니다.
5. 헌혈자는 헌혈증NFT로 발급할 수 있고, 필요로 하는 단체나 사람의 지갑주소만 알면 쉽게 양도하거나 기부할 수 있습니다.
6. 병원에서는 수혈받은 환자가 헌혈증 사용시 무상으로 혈액을 제공할 수 있습니다.

## 헌혈증 NFT

![image](https://user-images.githubusercontent.com/69336797/210229670-f8e70076-e1d4-42cd-8bc6-3a8d779e4791.png)

![image](https://user-images.githubusercontent.com/69336797/210229675-7dccf618-ba5f-457c-8395-e2f607921133.png)

헌혈증 NFT 디자인은 사용전과 사용후의 디자인이 있습니다.

이미지의 크기는 1080 x 1080 입니다.

## 환경

- node v16.19.0

## 실행전 설정

###Contract 배포

BloodDonationContract 폴더에서
<img width="983" alt="image" src="https://user-images.githubusercontent.com/69336797/210166696-9169bf3c-0b86-47a1-b018-d2454a46e369.png">
사진에 보이는 것과 같이 klaytn url과 private key를 .env 파일을 만들어 넣어 줍니다.

private key의 지갑에는 충분한 klaytn이 있어야합니다.
지갑의 첫번째 주소가 admin으로 설정됩니다.

```shell
npx hardhat run scripts/deploy.ts --network klaytn
npx hardhat run scripts/deploy.ts --network klaytn_cypress
```

contract를 baobab에 배포하려면 위의 커맨드를 입력하고, cypress에 배포하려면 아래의 명령어를 실행하면 됩니다.

### aws

<img width="472" alt="image" src="https://user-images.githubusercontent.com/69336797/210167271-46519ff9-aa84-4d78-a9e1-fd146547f050.png">

aws에서 Graphql을 사용해서 사진과 같은 구조로 만들어 줍니다.

aws에서 authentication을 설정해줍니다.

설정후에 deploy해줍니다.

## 헌혈증 웹

### 메인

![image](https://user-images.githubusercontent.com/69336797/210231449-a8a5d364-53bd-432d-aaad-0ece9e866ff4.png)

### 헌혈증 조회

![image](https://user-images.githubusercontent.com/69336797/210232049-b474aa51-d47c-4259-9abe-917db5c0a577.png)
![image](https://user-images.githubusercontent.com/69336797/210232065-05b21efd-8882-4ebf-a3f5-a9bad4631b2a.png)

지갑에 보유하고 있는 헌혈증을 조회할 수 있습니다.

### 헌혈증 요청하기

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/69336797/210241093-039ca8ec-8ba5-481e-980d-be26c03cac5b.png">

로그인을 한 후에 도움을 요청할 수 있습니다.
kaikas 지갑 로그인은 하지 않아도 요청할 수 있습니다.
수정도 가능합니다.

### 헌혈의집 위치

![image](https://user-images.githubusercontent.com/69336797/210241392-fb08e38f-f5ac-41a3-8fba-4bb4d9509e9d.png)
전국에 헌혈의 집 위치를 볼 수 있습니다.


### 설정

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/69336797/210241581-5ddc5e42-dfe1-4fd4-a966-9536066f7e97.png">

유저들이 사용하는 않는 기능들이 있습니다.

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/69336797/210241723-4256d09f-8949-4a6d-84a0-55ced19b7fa0.png">
관리자 페이지에서 다른 지갑에 역할을 부여할 수 있습니다.

![image](https://user-images.githubusercontent.com/69336797/210241840-6a0767ff-4a1f-4acd-960d-8fa0689b4cfe.png)
헌혈자의 지갑 주소를 입력하고 헌혈 종류, 헌혈한 지점을 선택하면 헌혈증을 발행할 수 있습니다.

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/69336797/210242018-963ef681-caaf-4fd4-87ad-fde986f7f7fc.png">
주소의 역할을 확인할 수 있습니다.



