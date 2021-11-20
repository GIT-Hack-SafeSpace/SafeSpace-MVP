import { useState, useEffect } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import styled from "styled-components";
import { MainButton } from "../styles/ButtonStyle";
import Form from "react-bootstrap/Form";
import Link from "next/link";

const SplashStyles = styled.div`
  padding: 300px 30px 50px;
  color: white;
  background-image: url("images/safespaceMainPg.png");
  min-height: 820px;

  a {
    color: yellow !important;
  }

  .form {
    text-align: left;
    margin-top: 50px;
  }

  .text-muted,
  .form-text {
    color: white !important;
  }
`;

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (user) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email to confirm login");
    } catch (error) {
      alert("Please provide an email address");
    } finally {
      setLoading(false);
    }
  };

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <main className="d-flex flex-column text-center">
          <h1 className="splash-title">SafeSpace. </h1>
          <hr />
          <p className="description">
            A place where Black women can support each other, manage our mental
            health, and work related trauma.
          </p>
          <Form.Group className="form">
            <Form.Label className="visually-hidden visually-hidden-focusable">
              Email address
            </Form.Label>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <Form.Control
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> */}
          </Form.Group>
          <MainButton
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Get Your Secure Link"}</span>
          </MainButton>

          <Form.Text className="text-muted mt-3">
            <Form.Label className="visually-hidden visually-hidden-focusable">
              Learn More
            </Form.Label>
            <Link href="/about">Learn more</Link> about SafeSpace.
          </Form.Text>
        </main>
      );
    }
  };

  return <SplashStyles>{view()}</SplashStyles>;
}
