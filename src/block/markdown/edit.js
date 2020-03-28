/**
 * EDIT: Markdown Block
 */
const {
	blockEditor: {
		PlainText,
	},
	i18n: {
		__,
	},
} = wp;

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
