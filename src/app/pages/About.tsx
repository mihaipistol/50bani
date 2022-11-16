import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <section className='content'>
      <h2>About</h2>
      <p>This is a demo page</p>
      <Link to='/'>back home</Link>
    </section>
  );
};

export default Error404;
