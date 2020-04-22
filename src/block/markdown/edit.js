/**
 * EDIT: Markdown Block
 */
import marked from "marked";

const {
	blockEditor: {
		BlockControls,
		PlainText,
	},
	components: {
		Button,
		SandBox,
		Toolbar,
	},
	element: {
		useState,
	},
	i18n: {
		__,
	}
} = wp;

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
				<Toolbar>
					<Button
						className= {
							!isPreview ?
								'components-tab-button is-active' :
								'components-tab-button'
						}
						onClick={() => setIsPreview(false)}
					>
						<span>{__('Markdown', 'fe-markdown-block')}</span>
					</Button>
					<Button
						className={
							isPreview ?
								'components-tab-button is-active' :
								'components-tab-button'
						}
						onClick={() => setIsPreview(true)}
					>
						<span>{__('Preview', 'fe-markdown-block')}</span>
					</Button>
				</Toolbar>
			</BlockControls>
			{
				isPreview ? (
					<SandBox html={ marked(source||'') } />
				) : (
					<PlainText
						onChange={ onChangeSource }
						value={ source }
						placeholder={ __( 'Markdown Demo...', 'fe-markdown-block' ) }
					/>
				)
			}
		</div>
	);
};

export default Edit;
