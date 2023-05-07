import PropTypes from 'prop-types';
import { SectionMarkup, Title} from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionMarkup>
      {title && <Title>{title}</Title>}
      {children}
    </SectionMarkup>
  )
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}