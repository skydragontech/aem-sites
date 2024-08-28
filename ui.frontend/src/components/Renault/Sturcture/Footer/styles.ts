// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
import respondTo from '../../../../utils/mixins';

const WrapperDiv = styled.li.attrs((props: { className: any; }) => ({className: props.className,}))`
	${respondTo.lg`
		&.cmp-list__item{
			color:white;
		}
	`}
`;

export default WrapperDiv;
