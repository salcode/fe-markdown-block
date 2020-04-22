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
		<div className={ className }>
			<RawHTML>{ marked(source||'') }</RawHTML>
		</div>
	);
};

export default Save;
