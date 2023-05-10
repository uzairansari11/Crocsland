import { Box, Button } from "@chakra-ui/react";

export const PaginationComponent = ({
	totalCount,
	handlePagination,
	currentPage,
}) => {
	const totalButton = new Array(Math.ceil(100 / 5)).fill(0);
	return (
		<Box>
			{totalButton?.map((ele, index) => {
				return (
					<Button
						key={ele + index * Math.random()}
						onClick={() => handlePagination(index + 1)}
					>
						{index + 1}
					</Button>
				);
			})}
		</Box>
	);
};
