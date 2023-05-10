/* This Component is for showing loading state */

import React from "react";
import { Spinner, Center } from "@chakra-ui/react";

export const Loading = () => {
	return (
		<Center>
			<Spinner
				colorScheme="blue.500"
				size="xl"
				thickness="4px"
				emptyColor="grey"
				m="100"
				p={"20"}
				speed="5s"
			/>
		</Center>
	);
};
