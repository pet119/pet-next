import { useRouter } from 'next/router';

function LogIn() {
  // make login page
  /* login */
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    if (username === 'admin' && password === 'admin') {
      // move to main\index.tsx
      router.push('/main');
      //   console.log('Logged in');
    } else {
      //   console.log('Wrong username or password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username
            <input
              className="box"
              type="text"
              id="username"
              name="username"
              style={{ color: 'black' }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              className="box"
              type="password"
              id="password"
              name="password"
              style={{ color: 'black' }}
            />
          </label>
        </div>

        <button className="box" type="submit">
          Log In
        </button>
      </form>
      <style jsx>{`
        .box {
          border: solid;
        }
      `}</style>
    </div>
  );
}

export default LogIn;
