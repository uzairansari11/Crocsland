import { Box, Button, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const PaginationComponent = ({
	totalPages,
	handlePagination,
	currentPage,
}) => {
	const totalButton = new Array(totalPages)?.fill(0);
	return (
		<Box display="flex" gap={2} justifyContent="center" alignItems="center" py={2}>
			<IconButton
				icon={<ChevronLeftIcon />}
				onClick={() => handlePagination(currentPage - 1)}
				colorScheme="teal"
				variant="outline"
				isRound
				disabled={currentPage === 1}
				pointerEvents={currentPage === 1 ? "none" : "auto"}
				opacity={currentPage === 1 ? 0.5 : 1}
			/>

			{totalButton?.map((ele, index) => {
				const pageNumber = index + 1;
				const isActive = pageNumber === currentPage;

				return (
					<Button
						size="sm"
						key={ele + index * Math.random()}
						onClick={() => handlePagination(pageNumber)}
						colorScheme={isActive ? "red" : "teal"}
						variant={isActive ? "solid" : "outline"}
						isRound
						disabled={isActive}

					>
						{pageNumber}
					</Button>
				);
			})}

			<IconButton
				icon={<ChevronRightIcon />}
				onClick={() => handlePagination(currentPage + 1)}
				colorScheme="teal"
				variant="outline"
				isRound
				disabled={currentPage === totalPages}
				opacity={currentPage === totalPages ? 0.5 : 1}
			/>
		</Box>
	);
};
