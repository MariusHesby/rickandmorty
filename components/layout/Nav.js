import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../context/AuthContext";




export default function Nav() {


    const [auth, setAuth] = useContext(AuthContext);

    const history = useRouter();

    function logout() {
        setAuth(null);
        history.push("/");
    }




    return (
        <nav className="text-xl bg-black text-white">
            <div className="max-w-6xl sm:flex justify-between items-center p-5">

                <div className="font-creepster text-4xl mb-3 sm:mb-0 text-green-600">
                    <Link href="/">Rick and Morty</Link>
                </div>

                <div className="flex gap-5 pt-2">
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    {auth ? (
                        <>
                            <Link href="/admin">Admin</Link> <button onClick={logout} className="text-red-600">Log out</button>
                        </>
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </div>

            </div>
        </nav>
    );
}