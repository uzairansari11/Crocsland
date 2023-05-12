import { Box, Button } from "@chakra-ui/react";

export const PaginationComponent = ({
	totalCount,
	handlePagination,
	currentPage,
}) => {
	const totalButton = new Array(Math.ceil(totalCount / 5)).fill(0);


	return (
		<Box display={'flex'} gap={2} justifyContent={'center'}
			alignItems={'center'}
			py={2}
		>
			{totalButton?.map((ele, index) => {
				return (
					<Button
						size={'sm'}
						key={ele + index * Math.random()}
						onClick={() => handlePagination(index + 1)}
						colorScheme={index + 1 == currentPage ? "red" : "teal"}
						variant={'outline'}


					>
						{index + 1}
					</Button>
				);
			})}
		</Box>
	);
};
