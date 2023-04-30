import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <h2>유기 동물을 위한 펫 119</h2>
        </div>
        <div>
          <h2>유기동물의 모든 것을 제공하는 커뮤니티</h2>
        </div>
        <h2> 펫 119와 시작하세요!</h2>
      </div>
      <div className="fixed bottom-40 left-0 w-full flex flex-col items-center">
        <Link href="/signup">
          <button type="button" className="btn-primary">
            시작하기
          </button>
        </Link>
        <div className="ml-2">
          이미 계정이 있나요?{' '}
          <Link href="/logIn" className="text-blue-500 underline">
            로그인
          </Link>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 80%;
          margin: 0 auto;
        }
        .btn-primary {
          background-color: #1da1f2;
          color: #ffffff;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
