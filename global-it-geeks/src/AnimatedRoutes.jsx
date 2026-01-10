import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Pages/Home";
import Trainings from "./Pages/Courses";
import ServicesPage from "./Pages/Services";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageWrapper>
                            <Home />
                        </PageWrapper>
                    }
                />

                <Route
                    path="/trainings"
                    element={
                        <PageWrapper>
                            <Trainings />
                        </PageWrapper>
                    }
                />

                <Route
                    path="/services"
                    element={
                        <PageWrapper>
                            <ServicesPage />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/paymentcta"
                    element={
                        <PageWrapper>
                            <Pricing />
                        </PageWrapper>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <PageWrapper>
                            <About />
                        </PageWrapper>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

/* Reusable page animation wrapper */
function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}
