import Form from "../components/Form"

function Login() {
    const handleSuccessfulAuth = () => {
        // Your logic to fetch user info or update state
        console.log("User successfully logged in, fetching user info...");
        fetchUserInfo(); // Assuming this function is defined in the parent or the same component
    };
    return <Form route="/api/token/" method="login" onSuccessfulAuth={handleSuccessfulAuth}  />;
    
}

export default Login