import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
  return (
    <Box width="400px" sx={{width: {xl: "1488px"}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
