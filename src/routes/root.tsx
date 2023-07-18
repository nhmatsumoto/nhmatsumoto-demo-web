import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

export default function Root() {
    return (
      <> 
        <Sidebar/>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }