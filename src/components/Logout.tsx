import {doLogout} from "@/app/actions";

const Logout = () => {
    return (
        <form
            action={doLogout}
        >
            <button
                type="submit"
                className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg cursor-pointer"
            >
                Logout
            </button>
        </form>
    )
}

export default Logout