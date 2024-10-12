import Form from "../components/Form"

function Register() {
    const handleSuccessfulAuth = () => {
        // Your logic to fetch user info or update state
        console.log("User successfully Created, fetching user info...");
        fetchUserInfo(); // Assuming this function is defined in the parent or the same component
    };
    return <Form route="/api/user/register/" method="register" onSuccessfulAuth={handleSuccessfulAuth} />
    
}

export default Register