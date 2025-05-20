import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import popToast from "@/lib/popToast";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      popToast("Invalid email address", "warning");
      return;
    }

    if (!validatePassword(password)) {
      popToast("Password must be at least 8 characters", "warning");
      return;
    }

    setIsLoading(true);

    try {
      setTimeout(() => {
        popToast("Logged in successfully", "success");
        navigate("/profile");
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      popToast("Login failed. Please try again.", "error");
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      popToast("Please enter your first and last name", "warning");
      return;
    }

    if (!validateEmail(email)) {
      popToast("Invalid email address", "warning");
      return;
    }

    if (!validatePassword(password)) {
      popToast("Password must be at least 8 characters", "warning");
      return;
    }

    if (!termsAccepted) {
      toast({
        title: "Terms not accepted",
        description: "Please accept the Terms of Service and Privacy Policy.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      setTimeout(() => {
        popToast("Account created successfully", "success");
        navigate("/profile");
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      popToast("Signup failed. Please try again.", "error");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md px-4">
          <Card className="border-0 shadow-lg">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                    Welcome back
                  </CardTitle>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                    Enter your details to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-gray-700 dark:text-gray-200"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="password"
                          className="text-gray-700 dark:text-gray-200"
                        >
                          Password
                        </Label>
                        <Link
                          to="/forgot-password"
                          className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) =>
                          setRememberMe(checked === true)
                        }
                      />
                      <Label
                        htmlFor="remember"
                        className="text-sm text-gray-700 dark:text-gray-200"
                      >
                        Remember me
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Log in"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 border-t pt-4">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>
                </CardFooter>
              </TabsContent>

              <TabsContent value="signup">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                    Create an account
                  </CardTitle>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                    Enter your details to get started
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="first-name"
                          className="text-gray-700 dark:text-gray-200"
                        >
                          First name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="last-name"
                          className="text-gray-700 dark:text-gray-200"
                        >
                          Last name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="signup-email"
                        className="text-gray-700 dark:text-gray-200"
                      >
                        Email
                      </Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="signup-password"
                        className="text-gray-700 dark:text-gray-200"
                      >
                        Password
                      </Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={termsAccepted}
                        onCheckedChange={(checked) =>
                          setTermsAccepted(checked === true)
                        }
                        required
                      />
                      <Label
                        htmlFor="terms"
                        className="text-sm text-gray-700 dark:text-gray-200"
                      >
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                        >
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Sign up"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 border-t pt-4">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                  </div>
                </CardFooter>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Login;
