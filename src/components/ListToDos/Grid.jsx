import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import RemoveToDo from '../RemoveToDo';
import ToggleToDo from '../ToggleToDo';
import '../../index.css';
import EditToDo from '../EditToDo';

const ListToDosGrid = ({ toDo }) => {
	return (
		<Grid
			key={toDo.title}
			templateColumns='repeat(8, 1fr)'
			gap={4}
			alignItems='center'
			w='100%'
			borderWidth='1px'
			borderRadius='lg'
			boxShadow='base'
			p={4}
			mt={4}
			border='none'
			position='relative'
			_hover={{
				transition: 'transform .2s',
				transform: 'scale(1.02)',
			}}
		>
			{toDo.completed ? (
				<>
					<GridItem colSpan={7} opacity='0.5' textDecoration='line-through'>
						<Box fontSize='1rem'>{toDo.title}</Box>
					</GridItem>
				</>
			) : (
				<>
					<GridItem colSpan={7}>
						<EditToDo toDoToEdit={toDo.title} />
					</GridItem>

					{/* <GridItem colSpan={4}>
            <Box fontSize='1rem'>{toDo.title}</Box>
          </GridItem> */}
				</>
			)}
			<GridItem colStart={9} colEnd={9}>
				<ToggleToDo toDo={toDo} />
				<RemoveToDo toDo={toDo} />
			</GridItem>
		</Grid>
	);
};

export default ListToDosGrid;
