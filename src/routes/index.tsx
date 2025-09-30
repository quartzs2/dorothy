import { ROUTES } from "@constants/urls";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.ROOT)({
	component: Index,
});

function Index() {
	return (
		<main>
			<h1>Hello World</h1>
		</main>
	);
}
