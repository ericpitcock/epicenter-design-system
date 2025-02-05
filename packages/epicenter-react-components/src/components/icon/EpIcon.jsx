import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EpIcon = ({ name, type: Element = 'span', ...props }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    const loadIcon = async () => {
      try {
        // Dynamically import the SVG file
        const rawSvg = await import(`./icons/${name}.svg?raw`);
        setSvgContent(rawSvg.default);
      } catch (error) {
        console.error(`Failed to load icon: ${name}`, error);
        setSvgContent(''); // Clear the content if loading fails
      }
    };

    loadIcon();
  }, [name]);

  return (
    <Element
      className="ep-icon"
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...props}
    />
  );
};

EpIcon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string, // Default to 'span'
};

export default EpIcon;