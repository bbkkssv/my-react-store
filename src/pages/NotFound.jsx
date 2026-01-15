import { Link } from 'react-router-dom';
import { IconMoodPuzzled,IconWorld } from '@tabler/icons-react';

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center text-center py-5 text-wa-brown" style={{minHeight: '60vh'}}>

      <IconMoodPuzzled stroke={2} size={100} color="gray" />
      <IconWorld stroke={2} size={100} color="gray" />
      <h1 className="display-1 fw-bold mb-3 text-wa-orange">404</h1>
      <h2 className="display-4 mb-3">Page Not Found</h2>
      <p className="fs-5 mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-lg btn-wa-green">Go Home</Link>
    </div>
  );
}

export default NotFound;
