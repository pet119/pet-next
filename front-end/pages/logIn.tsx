import { useRouter } from "next/router";

function LogIn() {
  // make login page
    /* login */
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = event.currentTarget.username.value;
        const password = event.currentTarget.password.value;
        if(username === "admin" && password === "admin") {
            // move to main\index.tsx
            router.push("/main");
            console.log("Logged in");
        } else {
            console.log("Wrong username or password");
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" style={{color: 'black'}}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"style={{color: 'black'}}/>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;