import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div className="scrollable-menu">
        <div className="menu-items">
          <Link legacyBehavior href="/main">
            <a
              href="{() => false}"
              className={router.pathname === '/main' ? 'active' : ''}
            >
              <Image
                src="/test/cat_icon.png"
                alt="Home"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <Link legacyBehavior href="/main/adopt">
            <a
              href="{() => false}"
              className={router.pathname === '/main/adopt' ? 'active' : ''}
            >
              <Image
                src="/test/cat_icon.png"
                alt="Adopt"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <Link legacyBehavior href="/main/volunteer">
            <a
              href="{() => false}"
              className={router.pathname === '/main/volunteer' ? 'active' : ''}
            >
              <Image
                src="/test/cat_icon.png"
                alt="Volunteer"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <Link legacyBehavior href="/main/rescue">
            <a
              href="{() => false}"
              className={router.pathname === '/main/rescue' ? 'active' : ''}
            >
              <Image
                src="/test/cat_icon.png"
                alt="Rescue"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <Link legacyBehavior href="/main/interest">
            <a
              href="{() => false}"
              className={router.pathname === '/main/interest' ? 'active' : ''}
            >
              <Image
                src="/test/cat_icon.png"
                alt="Interest"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <Link legacyBehavior href="/main/community">
            <a
              href="{() => false}"
              className={router.pathname === '/main/community' ? 'active' : ''}
            >
              <Image
                src="/test/cat_icon.png"
                alt="Community"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <Link legacyBehavior href="/main/mypage">
            <a
              href="{() => false}"
              className={router.pathname === '/main/mypage' ? 'active' : ''}
            >
              <Image
                src="/test/cat_icon.png"
                alt="Mypage"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          padding-top: 2vh;
          padding-bottom: 1vh;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 5vh 10vh -2vh,
            rgba(0, 0, 0, 0.3) 0px 3vh 6vh -3vh;
        }

        .scrollable-menu {
          overflow-x: auto;
          display: flex;
          gap: 2vw;
        }

        .menu-items {
          display: flex;
          gap: 2vw;
        }

        .menu-items a {
          font-weight: 600;
          font-size: 5vw;
        }

        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
