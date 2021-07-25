# Jest Tutorial

- 소개, 설치 및 간단한 테스트 작성
- 유용한 Matchers
  1. toEqual, toStrictEqual
  2. toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy
  3. toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBeCloseTo
  4. toMatch
  5. toContain
  6. toThrow
- 비동기 코드 테스트
  1. 콜백 패턴
  2. 프로미스 패턴
  3. 프로미스 패턴(resovles, rejects Matcher)
  4. Async/Await 패턴
  5. Async/Await 패턴(resovles, rejects Matcher)
- 테스트 전후 작업
  1. beforeEach, afterEach
  2. beforeAll, afterAll (DB에서 하나의 데이터를 가져오는 경우)
  3. beforeEach/beforeAll, afterEach/afterAll 작동 순서
  4. only, skip
- 목 함수
  1. 목 함수 생성, calls
  2. 목 함수 활용
  3. results
  4. mockReturnValueOnce, mockReturnValue
  5. mockResolvedValue
  6. mocking module