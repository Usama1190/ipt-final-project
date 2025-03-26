import AdminDashboard from "../pages/Admin/AdminDashboard";
import Administration from "../pages/Administration/Administration";
import Admissions from "../pages/Admissions/Admissions";
import Alumni from "../pages/Alumni/Alumni";
import ErrorPage from "../pages/Error/ErrorPage";
import Events from "../pages/Events/Events";
import Examination from "../pages/Examination/Examination";
import Faculties from "../pages/Faculties/Faculties";
import Home from "../pages/Home/Home";
import Journals from "../pages/Journals/Journals";
import Library from "../pages/Library/Library";
import Login from "../pages/Login/Login";
import EventDashboard from "../pages/Managers/EventDashboard/EventDashboard";
import Signup from "../pages/Signup/Signup";
import StudentDashboard from "../pages/Students/[id]";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/admin-usama',
        element: <AdminDashboard />
    }, 
    {
        path: '/event-manager',
        element: <EventDashboard />
    },
    {
        path: '/students/',
        element: <StudentDashboard />
    },
    {
        path: '/account/sign-up',
        element: <Signup />
    },
    {
        path: '/account/login',
        element: <Login />
    },
    {
        path: '/events',
        element: <Events />
    },
    {
        path: '/admissions',
        element: <Admissions />
    },
    {
        path: '/faculties',
        element: <Faculties />
    },
    {
        path: '/library',
        element: <Library />
    },
    {
        path: '/administration',
        element: <Administration />
    },
    {
        path: '/ann_results',
        element: <Examination />
    },
    {
        path: '/alumni',
        element: <Alumni />
    },
    {
        path: '/journals',
        element: <Journals />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]

