import Communicate from 'pages/Communicate';
import Home from 'pages/Home';
import Course from 'pages/Course';
import Personal from 'pages/Personal';
import ListCourse from 'pages/ListCourse'

const routes = [
  {
    path: '/communicate',
    component: Communicate,
    layout: true,
  },
  {
    path: '/learn',
    component: Course,
    layout: true,
  },
  {
    path: '/personal',
    component: Personal,
    layout: true,
  },
  {
    path: '/courses/list',
    component: ListCourse,
    layout: true,
  },
  {
    path: '/',
    component: Home,
    layout: true,
  },
];

export default routes;
