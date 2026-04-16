import { Link, useRouteError } from "react-router-dom";
import Page from "./Page";

export default function ErrorBoundary() {
  const error = useRouteError() as Record<string, unknown>;

  return (
    <Page heading="Something went wrong">
      <p className="not-prose">
        {error?.status ? `Error ${error.status}` : "An error occurred"}.{" "}
        <Link to="/">Go home</Link>.
      </p>
    </Page>
  );
}
