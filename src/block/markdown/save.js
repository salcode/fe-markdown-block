/**
 * SAVE: Markdown to HTML
 */
import marked from "marked";

const {
	element: {
		RawHTML,
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
		<RawHTML>{ marked(source) }</RawHTML>
	);
};

export default Save;
