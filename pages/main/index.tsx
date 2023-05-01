import Link from 'next/link';

function Main() {
  return (
    <>
      <Link href="/main/adopt">입양하기</Link>
      <Link href="/main/volunteer">봉사활동하기</Link>
    </>
  );
}

export default Main;
