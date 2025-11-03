import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import { Eye, EyeOff, Shield, UserPlus, Mail } from "lucide-react";

interface AdminLoginProps {
  onLoginSuccess: (accessToken: string) => void;
  onCancel: () => void;
}

type ViewMode = 'login' | 'register' | 'forgot-password';

export function AdminLogin({
  onLoginSuccess,
  onCancel,
}: AdminLoginProps) {
  const [currentView, setCurrentView] = useState<ViewMode>('login');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      // Hardcoded admin credentials
      if (formData.email === "admin12@gmail.com" && formData.password === "Admin@12") {
        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 1000));
        onLoginSuccess("mock-admin-token-" + Date.now());
      } else {
        setError("Invalid credentials. Please use the demo admin login.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate registration process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess('Registration successful! Please use the demo admin login credentials: admin12@gmail.com / Admin@12');
      setCurrentView('login');
      setFormData({
        email: "admin12@gmail.com",
        password: "",
        confirmPassword: "",
        name: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      // Simulate password reset process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('For the demo version, please use: admin12@gmail.com / Admin@12');
    } catch (error) {
      console.error("Forgot password error:", error);
      setError("An error occurred while sending reset email");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
    setError("");
    setSuccess("");
  };

  const switchView = (view: ViewMode) => {
    setCurrentView(view);
    resetForm();
  };

  const renderLoginForm = () => (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button
          type="submit"
          className="flex-1"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>

      <div className="text-center space-y-2">
        <button
          type="button"
          onClick={() => switchView('forgot-password')}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Forgot Password?
        </button>

      </div>
    </form>
  );

  const renderRegisterForm = () => (
    <form onSubmit={handleRegister} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            placeholder="Enter your password (min 6 characters)"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            placeholder="Confirm your password"
            required
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button
          type="submit"
          className="flex-1"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={() => switchView('login')}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Already have an account? Login here
        </button>
      </div>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form onSubmit={handleForgotPassword} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="flex gap-2 pt-4">
        <Button
          type="submit"
          className="flex-1"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Reset Email"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={() => switchView('login')}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Back to Login
        </button>
      </div>
    </form>
  );

  const getTitle = () => {
    switch (currentView) {
      case 'register':
        return 'Admin Registration';
      case 'forgot-password':
        return 'Reset Password';
      default:
        return 'Admin Login';
    }
  };

  const getSubtitle = () => {
    switch (currentView) {
      case 'register':
        return 'Create a new admin account';
      case 'forgot-password':
        return 'Enter your email to receive reset instructions';
      default:
        return 'Access the admin dashboard to manage content';
    }
  };

  const getIcon = () => {
    switch (currentView) {
      case 'register':
        return <UserPlus className="h-12 w-12 text-blue-600 mx-auto mb-4" />;
      case 'forgot-password':
        return <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />;
      default:
        return <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-6">
          {getIcon()}
          <h2 className="text-2xl font-bold text-gray-900">
            {getTitle()}
          </h2>
          <p className="text-gray-600 mt-2">
            {getSubtitle()}
          </p>
        </div>

        {error && (
          <Alert className="mb-4 border-red-200 bg-red-50">
            <AlertDescription className="text-red-700">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-4 border-green-200 bg-green-50">
            <AlertDescription className="text-green-700">
              {success}
            </AlertDescription>
          </Alert>
        )}

        {/* Hardcoded Admin Info - Only for development */}
        {currentView === 'login' && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Demo Admin Login:</strong><br/>
              Email: admin12@gmail.com<br/>
              Password: Admin@12
            </p>
          </div>
        )}

        {currentView === 'login' && renderLoginForm()}
        {currentView === 'register' && renderRegisterForm()}
        {currentView === 'forgot-password' && renderForgotPasswordForm()}
      </Card>
    </div>
  );
}