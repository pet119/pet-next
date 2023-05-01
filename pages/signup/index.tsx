import Link from 'next/link';

export default function SignUp() {
  return (
    <>
      <div>
        <Link href="/signup/normal">
          <button type="button" className="btn-primary">
            일반회원으로 회원가입
          </button>
        </Link>
      </div>
      <div>
        <Link href="/signup/center">
          <button type="button" className="btn-primary">
            유기동물센터명의로 회원가입
          </button>
        </Link>
      </div>
      <div>
        <Link href="/">
          <button type="button" className="btn-primary">
            취소
          </button>
        </Link>
      </div>
    </>
  );
}
