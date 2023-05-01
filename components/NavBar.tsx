import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Image
        src="/icons/favicon-196x196.png"
        alt="Logo image"
        width={50}
        height={50}
      />
      <div>
        <Link legacyBehavior href="/main">
          <a
            href="{() => false}"
            className={router.pathname === '/main' ? 'active' : ''}
          >
            Home
          </a>
        </Link>
        <Link legacyBehavior href="/main/adopt">
          <a
            href="{() => false}"
            className={router.pathname === '/main/adopt' ? 'active' : ''}
          >
            Adopt
          </a>
        </Link>
        <Link legacyBehavior href="/main/volunteer">
          <a
            href="{() => false}"
            className={router.pathname === '/main/volunteer' ? 'active' : ''}
          >
            Volunteer
          </a>
        </Link>
        <Link legacyBehavior href="/main/community">
          <a
            href="{() => false}"
            className={router.pathname === '/main/community' ? 'active' : ''}
          >
            Community
          </a>
        </Link>
        <Link legacyBehavior href="/main/mypage">
          <a
            href="{() => false}"
            className={router.pathname === '/main/mypage' ? 'active' : ''}
          >
            Mypage
          </a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
