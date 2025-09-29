import { URLS } from "@constants/urls";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(URLS.ROOT)({
	component: Index,
});

function Index() {
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
}
