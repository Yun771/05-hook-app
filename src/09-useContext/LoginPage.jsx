import { useContext } from "react"
import { UserContext } from "./context/UseContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1 className="">
                LoginPage
            </h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => {
                    setUser({
                        id: 1234,
                        name: 'Ever Yuneri',
                        email: 'reve_1997@hotmail.com'
                    })
                }}
            >
                Establecer Usuario
            </button>
        </>
    )
}
