/**
 * SAVE: Rich Rext Block
 */
import marked from "marked";

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
			tagName="div"
			value={ marked(source) }
		/>
	);
};

export default Save;
