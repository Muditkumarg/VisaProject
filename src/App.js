import './App.css';
import NavigationBar from "../src/component/NavigationBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './component/Login/AdminLogin/AdminLogin';
import AboutPage from './component/About/About';
import AdminSignUpPage from './component/SignUp/AdminSignUp/AdminSignUp';
import AdminNavigationBar from './AddminPannel/NevigatinBar';
import DashboardPage from './AddminPannel/Dashboard/DashBoard';
import ApplyVisaPage from './AddminPannel/ApplyVisa/ApplyVisa';
import OrderPage from './AddminPannel/Order';
import VisaOnlinePage from './component/VisaFormApply/VisaOnline';
import ServicesPage from './AddminPannel/Services/Services';
import ServicesPackagePage from './AddminPannel/ServicesPackage/ServicesPackage';
import AgentLoginPage from './component/Login/AgentLogin/AgentLogin';
import AgentSignUpPage from './component/SignUp/AgentSignUp/AgentSignUp';
import AgentNavigationBar from './AgentManagementPannel/AgentNavigationBar/AgentNavigationBar';
import FirstStepPage from './component/FirstStepApplyVisaForm/FirrstStep';
import AgentDashboardPage from './AgentManagementPannel/AgentDashboard/AgentDashBoard';
import AgentApplyVisaPage from './AgentManagementPannel/AgentApplyVisa/ApplyVisa';
import UserLoginPage from './component/Login/UserLogin/UserLogin';
import UserSignUpPage from './component/SignUp/UserSignUp/UserSignUp';
import TermsPage from './component/Terms/Terms';
import PrivacypolicyPage from './component/PrivacyPolicy/PrivacyPolicy';
import UserDashBoardPage from './UserPannel/UserDashBoard';
import EmailActivationPage from './component/SignUp/UserSignUp/EmailActivation';
import PaymentHistoryPage from './AddminPannel/PaymentHistory/PaymentHistory';
import UserManagementPage from './AddminPannel/Usermanagement/Usermanagement';
import AgentManagementPage from './AddminPannel/Agentmanagement/AgentManagement';
import VisaApplyFormPage from './ApplyVisaForm/VisaApplyForm';
import AgentOrderPage from './AgentManagementPannel/AgentOrder/AgentOrder';

function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationBar />} />
        <Route exact path='/adminlogin' element={<AdminLoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/adminsignup' element={<AdminSignUpPage />} />
        <Route path='/adminpannel' element={<AdminNavigationBar />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/applyvisa' element={<ApplyVisaPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/visaonline' element={<VisaOnlinePage/>} />
        <Route path='/servicespackage' element={<ServicesPackagePage/>} />
        <Route path='/agentlogin' element={<AgentLoginPage/>} />
        <Route path='/agentsignup' element={<AgentSignUpPage/>} />
        <Route path='/agentpannel' element={<AgentNavigationBar/>} />
        <Route path='/firststepform' element={<FirstStepPage/>} />
        <Route path='/agentdashboard' element={<AgentDashboardPage/>} />
        <Route path='/agentapplyvisa' element={<AgentApplyVisaPage/>} />
        <Route path='/userlogin' element={<UserLoginPage/>} />
        <Route path='/usersignup' element={<UserSignUpPage/>} />
        <Route path='/terms' element={<TermsPage/>} />
        <Route path='/privacy' element={<PrivacypolicyPage/>} />
        <Route path='/userdashboard' element={<UserDashBoardPage/>} />
        <Route path='/emailactivate' element={<EmailActivationPage/>} />
        <Route path='/paymenthistory' element={<PaymentHistoryPage/>} />
        <Route path='/usermanagement' element={<UserManagementPage/>} />
        <Route path='/agentmanagement' element={<AgentManagementPage/>} />
        <Route path='/applyvisaform' element={<VisaApplyFormPage/>} />
        <Route path='/agentorder' element={<AgentOrderPage/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
