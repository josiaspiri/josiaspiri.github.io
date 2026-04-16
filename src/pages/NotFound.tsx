import { Link } from "react-router-dom";
import Page from "@/components/Page";

export default function NotFound() {
  return (
    <Page heading="4 0 4 !">
      <p className="not-prose">
        Nothing is here. <Link to="/">Go home.</Link>
      </p>
    </Page>
  );
}
