/**
 * REGISTER: Rich Text Block.
 */
import edit from './edit';
import save from './save';

const {
	i18n: {
		__,
	},
	blocks: {
		registerBlockType,
	},
} = wp;

registerBlockType( 'salcode/markdown', {
	title: __( 'salcode Markdown', 'fe-markdown-block' ),
	icon: 'edit',
	category: 'common',
	keywords: [
		__( 'richtext', 'fe-markdown-block' ),
	],
	attributes: {
		source: { type: 'string' },
	},
	edit,
	save,
} );
