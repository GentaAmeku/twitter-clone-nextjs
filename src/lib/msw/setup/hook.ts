"use client";

import { useEffect } from "react";

export const MswWorker = () => {
	useEffect(() => {
		if (process.env.NODE_ENV !== "development") return;

		if (typeof window === "undefined") {
			import("./server").then(({ server }) => {
				server.listen();
			});
		} else {
			import("./browser").then(({ worker }) => {
				worker.start();
			});
		}
	});

	return null;
};
