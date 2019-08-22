import { StyleSheet } from 'react-native';

const color = '#e74c3c';
const background  = '#fff'; 
const glass_background = '#ffffffe0';
const input_height = 44; 
const input_padding = 10;
const input_width  = '100%';
const alert_padding = 20;
const col_p_h = 10; 
const col_p_v = 10;
const colors = {
	primary: '#1976d2', 
	success: '#5cb85c', 
	danger: '#d9534f', 
	default: '#f5f7f8', 
	info: '#31b0d5', 
	warning: '#ec971f',
	secondary: '#6c757d', 
	light: '#212529', 
}
const font_sizes = {
	h1: 20, 
	h2: 18, 
	h3: 16, 
}
const line_heights = {
	h1: 30, 
	h2: 25, 
	h3: 20, 
}


const s_all = StyleSheet.create({
	root: {
		flex: 1,
		padding: 5, 
		backgroundColor: background, 
	}, 
	img_root: {
		flex: 1, 
		padding: 5,
		backgroundColor: glass_background, 
	},
	footer: {
		height: 40, 
		padding: 10, 
		backgroundColor: '#e74c3c80',
	}, 
	p: {
		fontSize: 14, 
		lineHeight: 16, 
	}, 
	img: {
		width: '100%', 
		height: 300,
	}, 
	bordered: {
		borderWidth: 1, 
		borderColor: '#eee', 
		borderRadius: 5, 
		padding: 5,
	}, 
	section: {
		margin: 5, 
		padding: 5, 
		borderWidth: 1, 
		borderColor: '#eee', 
		borderRadius: 4, 
	}
})

/*Image manipulation*/
const s_img = StyleSheet.create({
	thumb: {
		width: 30, 
		height: 30, 
	}, 
	banner: {
		width: '100%', 
		height: 200,
	}, 
	card: {
		width: 300, 
		height: 300,
	}, 
	background: {
		width: '100%', 
    	height: '100%'
	},
})

/*Heading container*/
const s_hc = StyleSheet.create({
	container: {
		marginVertical: 10,
	}, 
	text: {
		fontWeight: 'bold', 
		fontSize: 18, 
		color: '#e74c3c',
		lineHeight: line_heights.h1,
		textAlign: 'center',
	}
})

/*Inputs*/
const s_entry = StyleSheet.create({
	general: {
		width: input_width, 
		height: input_height, 
		padding: input_padding, 
		color: '#000',
	}, 
	text: {
		width: input_width, 
		height: input_height, 
		padding: input_padding, 
		color: '#000',
	}, 
	picker: {
		width: input_width, 
		height: input_height, 
		padding: input_padding, 
		color: '#000',
	}, 
	text_area: {
		width: input_width, 
		height: 200, 
		padding: input_padding, 
		color: '#000',
	}
})

/*Flex*/
const s_flex = StyleSheet.create({
	row: {
		flex: 1, 
		flexDirection: 'row', 
	}, 
	col1: { flex: 1, paddingHorizontal: col_p_h, paddingVertical: col_p_v }, 
	col2: { flex: 2, paddingHorizontal: col_p_h, paddingVertical: col_p_v }, 
	col3: { flex: 3, paddingHorizontal: col_p_h, paddingVertical: col_p_v }, 
	col4: { flex: 4, paddingHorizontal: col_p_h, paddingVertical: col_p_v }, 
	col5: { flex: 5, paddingHorizontal: col_p_h, paddingVertical: col_p_v }, 
	col6: { flex: 6, paddingHorizontal: col_p_h, paddingVertical: col_p_v }, 
	col7: { flex: 7, paddingHorizontal: col_p_h, paddingVertical: col_p_v }, 
})

const s_justify = StyleSheet.create({
	center: {
		justifyContent: 'center', 
	}, 
	between: {
		justifyContent: 'space-between',
	}, 
	around: {
		justifyContent: 'space-around' 
	}, 
})

const s_text = StyleSheet.create({
	primary: {
		color: colors.primary,
	},
	success: {
		color: colors.success,
	}, 
	danger: {
		color: colors.danger, 
	}, 
	info: {
		color: colors.info, 
	}, 
	default: {
		color: colors.default
	},
	warning: {
		color: colors.warning
	},
	secondary: {
		color: colors.secondary
	},
	light: {
		color: colors.light
	},
})

const s_alert = StyleSheet.create({
	primary: {
		padding: alert_padding, 
		backgroundColor: colors.primary, 
		color: '#fff', 
	}, 
	success: {
		padding: alert_padding, 
		backgroundColor: colors.success, 
		color: '#fff', 
	}, 
	danger: {
		padding: alert_padding, 
		backgroundColor: colors.danger, 
		color: '#fff', 
	}, 
	default: {
		padding: alert_padding, 
		backgroundColor: colors.default, 
		color: '#fff', 
	}, 
	info: {
		padding: alert_padding, 
		backgroundColor: colors.info, 
		color: '#fff', 
	}, 
	warning: {
		padding: alert_padding, 
		backgroundColor: colors.warning, 
		color: '#fff', 
	}, 
	secondary: {
		padding: alert_padding, 
		backgroundColor: colors.secondary, 
		color: '#fff', 
	}, 
	light: {
		padding: alert_padding, 
		backgroundColor: colors.light, 
		color: '#fff', 
	}, 
})

export {
	s_all, 
	s_hc,
	s_img,
	s_entry, 
	s_flex,
	s_text, 
	s_alert,
	s_justify
}