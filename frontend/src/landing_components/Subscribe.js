'use client'
import { Button, Container } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import Link from "next/link";

function Subscribe() {
  return (
    <div className="subscribe">
      <Container className="mt-1">
        <AnimationTitles
          title={`Join our community`}
          className="title text-center mx-auto w-75"
        />
        <p className="gray-50 text-center mt-3 mb-5">
          Stay up to date with TRIBU or get involved in our community
        </p>
        <div className="d-flex justify-content-center align-items-center mx-auto p-1 border-0">
          <Link href="/register">
            <button className="m-0 my-3 px-1 py-2 fs-5 fw-bold">Join the Tribu</button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Subscribe;