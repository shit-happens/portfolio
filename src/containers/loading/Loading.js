import React from "react";
import "./loading.scss";

export default function Loading() {
  return (
    <div className="loading" role="status" aria-label="Loading">
      <span className="loading__spinner" />
    </div>
  );
}
