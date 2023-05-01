import Link from 'next/link';

export default function Center() {
  return (
    <div>
      <Link href="/main">센터회원 회원가입</Link>
      <Link href="/signup">
        <button type="button" className="btn-primary">
          취소
        </button>
      </Link>
    </div>
  );
}
