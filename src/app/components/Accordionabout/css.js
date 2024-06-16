import { createUseStyles } from 'react-jss';

export default createUseStyles({
	accordContainer: {
		borderBottom: 'solid 1px #ccc',

		margin: '50px 10px 10px',
	},
	headerContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '4px 8px',

		cursor: 'pointer',
	},
	iconTitleContainer: {
		display: 'flex',
		alignItems: 'center',
		padding: '4px 0',
	},
	icon: {
		margin: '0 10px',
	},
	accordTitle: {
		marginLeft: '25px',
		fontSize: '22px',
		fontWeight: 'normal',
	},
	accordTextClose: {
		height: '0px',
		overflow: 'hidden',
		margin: '10px 40px 10px 50px',
		padding: 0,
		transition: 'height .3s',
	},
	accordTextOpen: {
		height: '200px',
		overflow: 'hidden',
		margin: '10px 40px 10px 50px',
		padding: 0,
		//borderTop: '.4px solid gray',
		transition: 'height .3s',
	},
});
