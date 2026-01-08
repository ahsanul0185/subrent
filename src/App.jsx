import { useLenis } from "./contexts/useLenis";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import { Toaster } from "sonner";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoutes";
import ListReviews from "./pages/ListReviews";
import CreateReview from "./pages/CreateReview";
import UpdateReview from "./pages/UpdateReview";
import FormSubmissions from "./pages/FormSubmissions";

const App = () => {
  useLenis();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route index element={<Navigate to="reviews" />} />
          <Route path="reviews" element={<ListReviews />} />
          <Route path="create-review" element={<CreateReview />} />
          <Route path="update-review/:id" element={<UpdateReview />} />
          <Route path="form-submissions" element={<FormSubmissions />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </>
  );
};

export default App;
