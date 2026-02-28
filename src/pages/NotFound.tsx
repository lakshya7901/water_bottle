import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="glass-card max-w-md w-full p-12 text-center animate-float">
        <h1 className="mb-4 text-7xl font-bold text-gradient-water">404</h1>
        <p className="mb-8 text-xl text-muted-foreground font-body">
          Oops! The water seems to have dried up here. Page not found.
        </p>
        
        {/* Using Link instead of <a> to keep the SPA state */}
        <Link 
          to="/" 
          className="btn-water inline-block no-underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;