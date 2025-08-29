import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const DevtoolsLazy = import.meta.env.DEV
	? lazy(() =>
			import("@tanstack/react-devtools").then((m) => ({
				default: m.TanstackDevtools,
			})),
		)
	: null;

const RouterDevtoolsPanelLazy = import.meta.env.DEV
	? lazy(() =>
			import("@tanstack/react-router-devtools").then((m) => ({
				default: m.TanStackRouterDevtoolsPanel,
			})),
		)
	: null;

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			{import.meta.env.DEV && DevtoolsLazy && RouterDevtoolsPanelLazy ? (
				<Suspense>
					<DevtoolsLazy
						config={{ position: "bottom-left" }}
						plugins={[
							{
								name: "Tanstack Router",
								render: <RouterDevtoolsPanelLazy />,
							},
						]}
					/>
				</Suspense>
			) : null}
		</>
	),
});
