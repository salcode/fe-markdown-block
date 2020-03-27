/**
 * EDIT: Markdown Block
 */
import { PlainText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {
	const {
		attributes: {
			source,
		},
		className,
		setAttributes,
	} = props;

	// Update field source on change.
	const onChangeSource = ( newSource ) => {
		setAttributes( { source: newSource } );
	};

	return (
		<PlainText
			className={ className }
			onChange={ onChangeSource }
			value={ source }
			placeholder={ __( 'Markdown Demo...', 'fe-markdown-block' ) }
		/>
	);
};

export default Edit;
