import AdminDashboard from "../pages/Admin/AdminDashboard";
import Administration from "../pages/Administration/Administration";
import Admissions from "../pages/Admissions/Admissions";
import Alumni from "../pages/Alumni/Alumni";
import ErrorPage from "../pages/Error/ErrorPage";
import EventAppPage from "../pages/EventApp/EventAppPage";
import Events from "../pages/Events/Events";
import Examination from "../pages/Examination/Examination";
import Faculties from "../pages/Faculties/Faculties";
import Home from "../pages/Home/Home";
import Journals from "../pages/Journals/Journals";
import Library from "../pages/Library/Library";
import EventDashboard from "../pages/Managers/EventDashboard/EventDashboard";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/admin-usama',
        element: <AdminDashboard />
    }, {
        path: '/event-manager',
        element: <EventDashboard />
    },
    {
        path: '/events',
        element: <Events />
    },
    {
        path: '/events/application-new-event',
        element: <EventAppPage />
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

