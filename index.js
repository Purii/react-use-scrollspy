import { useState, useEffect } from 'react';
import throttle from 'lodash/fp/throttle';

export default ({
  activeSectionDefault = 0,
  offsetPx = 0,
  sectionElements = [],
  throttleMs = 100,
}) => {
  const [activeSection, setActiveSection] = useState(activeSectionDefault);

  const handle = throttle(throttleMs, () => {
    let currentSectionId = activeSection;
    for (let i = 0; i < sectionElements.length; i++) {
      const section = sectionElements[i];
      // Needs to be a valid DOM Element
      if (!section || !(section instanceof Element)) continue;
      // GetBoundingClientRect returns values relative to viewport
      if (section.getBoundingClientRect().top + offsetPx < 0) {
        currentSectionId = i;
        continue;
      }
      // No need to continue loop, if last element has been detected
      break;
    }

    setActiveSection(currentSectionId);
  });

  useEffect(
    () => {
      window.addEventListener('scroll', handle);

      return () => {
        window.removeEventListener('scroll', handle);
      };
    },
    [sectionElements, offsetPx]
  );
  return activeSection;
};
