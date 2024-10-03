import Alert from 'react-bootstrap/Alert';

function NotFound() {
  return (
    <>
        <Alert variant={'danger'}>
        <h1>404 NOT FOUND</h1>
        <p>The page you are looking for does not exist.</p>
        </Alert>
    </>
  );
}



export default NotFound;