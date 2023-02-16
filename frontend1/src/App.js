import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from './authContext/AuthContext';
import { useNavigate } from 'react-router-dom';

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import UserPage from './Pages/UserPage';
import FormSubmit from './Components/FormSubmit/FormSubmit';
import AdminPage from './Pages/AdminLogin';
import Admin from './Pages/AdminPage';
import RecordTrack from './Pages/RecordList';
import SlotsPage from './Pages/Slots';
import Homepage from './Pages/Homepage';
import { useContext } from 'react';
import Post from './store/PostContext';

import Slt from './Components/slt';
import ErrorPage from './Pages/ErrorPage';


function App() {
  const { currentUser } = useContext(AuthContext)
  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const ProtectedPage = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/userpage" />
    }
    return children
  }


  return (
    <div>
      <Post>

        <Router>
          <Routes>



            {/* const {currentUser} = useContext(AuthContext)
  const ProtectedRouter = ({children})=>{
    if(currentUser){
      return  <Navigate to="/userpage"/>
    }else{
      <Login/>
    }
    return children
  }
} */}
            {/* </Route> */}

            {/* <Route  path='/' element={<Homepage/>}/> */}

            <Route path='/signup' element={<Signup />} />

            <Route exact path='/' element={
              //  <ProtectedRouter>
              <Homepage />
              //  </ProtectedRouter>

            } />

            <Route path='/login' element={
              < ProtectedPage>
                <Login />
              </ProtectedPage>
            } />

            <Route path='/userpage' element={
              <ProtectedRouter>
                <UserPage />
              </ProtectedRouter>
            } />


            <Route path='/formsubmit' element={
              <ProtectedRouter>
                <FormSubmit />
              </ProtectedRouter>
            } />

            <Route path='/admin' element={
              // <ProtectedRouter>
              <AdminPage />

              // </ProtectedRouter>
            } />

            <Route path='/adminpage' element={
              // <ProtectedRouter>
              <Admin />

              // </ProtectedRouter>
            } />

            <Route path='/recordlist' element={
              // <ProtectedRouter>
              <RecordTrack />
              // </ProtectedRouter>
            } />

            <Route path='/slots' element={
              // <ProtectedRouter>
              <SlotsPage />
              // </ProtectedRouter>
            } />


            <Route path='/slt' element={
              // <ProtectedRouter>
              < Slt />
              // </ProtectedRouter>
            } />



            <Route path="*" element={< ErrorPage />} />


            {/* <Route  path='/userpage' element={<UserPage/>}/>
<Route  path='/formsubmit' element={<FormSubmit/>}/>
<Route  path='/admin' element={<AdminPage/>}/>
<Route  path='/adminpage' element={<Admin/>}/>
<Route  path='/recordlist' element={<RecordTrack/>}/>
<Route  path='/slots' element={<SlotsPage/>}/> */}





          </Routes>
        </Router>

      </Post>

    </div>
  );
}

export default App;
