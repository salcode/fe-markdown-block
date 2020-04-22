/**
 * SAVE: Markdown to HTML
 */
import marked from "marked";

import { RawHTML } from '@wordpress/element';

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
