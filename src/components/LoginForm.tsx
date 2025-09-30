import {doSocialLogin} from "@/app/actions";

const LoginForm = () => {
    return (
        <form
            action={doSocialLogin}
        >
            <button
                type="submit"
                name="action"
                value="google"
                className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg cursor-pointer"
            >
                Sign in with Google
            </button>
            <button
                type="submit"
                name="action"
                value="github"
                className="bg-black text-white p-1 rounded-md m-1 text-lg cursor-pointer"
            >
                Sign in with Github
            </button>
        </form>
    )
}

export default LoginForm