/**
 * REGISTER: Rich Text Block.
 */
import edit from './edit';
import save from './save';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

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
