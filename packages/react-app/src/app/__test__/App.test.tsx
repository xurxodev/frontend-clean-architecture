import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", async () => {
    render(<App />);
    await screen.findByText("Results for");
    await screen.findByText("Element");
});
