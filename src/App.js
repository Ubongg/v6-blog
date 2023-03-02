import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import BlogDetails, { BlogDetailsLoader } from "./Pages/BlogDetails";
import Create, { createAction } from "./Pages/Create";
import Home, { BlogsLoader } from "./Pages/Home";
import BlogsError from "./components/BlogsError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}
        loader={BlogsLoader}
        errorElement={<BlogsError />}
      />
      <Route
        path="blogs/:id"
        element={<BlogDetails />}
        loader={BlogDetailsLoader}
        errorElement={<BlogsError />}
      />
      <Route path="create" element={<Create />} action={createAction} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
