/**
 * EDIT: Markdown Block
 */
import { BlockControls, PlainText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {
  const [isPreview, setIsPreview] = useState(false);
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
		<div className={ className }>
			<BlockControls>
				<button onClick={() => setIsPreview(!isPreview)}>Toggle isPreview</button>
			</BlockControls>
			<p>isPreview is {isPreview ? 'true' : 'false'}</p>
			<PlainText
				onChange={ onChangeSource }
				value={ source }
				placeholder={ __( 'Markdown Demo...', 'fe-markdown-block' ) }
			/>
		</div>
	);
};

export default Edit;
