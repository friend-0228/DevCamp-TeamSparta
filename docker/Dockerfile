# 베이스 이미지
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /src/app

# Nest CLI 설치
RUN yarn global add @nestjs/cli

# 패키지 파일 복사 및 종속성 설치
COPY package.json yarn.lock ./
RUN yarn install

# 소스 코드 복사
COPY . .

# 빌드
RUN yarn build

# 포트 노출
EXPOSE 3000

# 애플리케이션 시작 명령
CMD ["yarn", "start:dev"]
