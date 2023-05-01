import Link from 'next/link';

export default function Normal() {
  return (
    <div>
      <Link href="/main">일반회원 회원가입</Link>
      <Link href="/signup">
        <button type="button" className="btn-primary">
          취소
        </button>
      </Link>
    </div>
  );
}
