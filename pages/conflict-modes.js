import React from "react";
import { useRouter } from "next/router";
import { profilePictures } from "../data/profilePictures";
import HeaderOnly from "../layouts/HeaderOnly";

export default function ConflictModes() {
  const router = useRouter();

  return (
    <HeaderOnly>
      <h1 className="splash-title text-center">Conflict Modes</h1>
      <hr />
      <div className="d-flex justify-content-between mb-3">
        {profilePictures.map((pic, i) => (
          <img key={i} style={{ width: "60px" }} src={pic.url} />
        ))}
      </div>
      <hr />
      <p>
        Each of us is capable of using all five conflict-handling modes. None of
        us can be characterized as having a single style of dealing with
        conflict. But certain people use some modes better than others and,
        therefore, tend to rely on those modes more heavily than others—whether
        because of temperament or practice.
      </p>

      <p>
        Your conflict behavior in the workplace is therefore a result of both
        your personal predispositions and the requirements of the situation in
        which you find yourself. Knowing what your default style is will help
        you understand your response and know when you should choose another
        style when needed.
      </p>

      <button
        className="btn-warning btn"
        onClick={() => router.push("/conflict-quiz")}
      >
        Get Your Default Style
      </button>
      <button
        className="btn-success mx-3 btn"
        onClick={() => router.push("/conflict-styles")}
      >
        See All Styles
      </button>
    </HeaderOnly>
  );
}
