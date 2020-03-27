/**
 * SAVE: Rich Rext Block
 */
const {
	blockEditor: {
		RichText,
	},
} = wp;

const Save = ( props ) => {
	const {
		attributes: {
			source,
		},
		className,
	} = props;

	return (
		<RichText.Content
			className={ className }
			tagName="p"
			value={ source }
		/>
	);
};

export default Save;
