import React, { useEffect, useState } from 'react';

const ChordDiagram = ({ chordName }) => {
  const [chordDiagram, setChordDiagram] = useState(null);

  useEffect(() => {
    const fetchChordDiagram = async () => {
      try {
        const response = await fetch(`https://api.uberchord.com/v1/chords/${chordName}`);
        const data = await response.json();
        setChordDiagram(data.data[0].embed.html);
      } catch (error) {
        console.error('Error fetching chord diagram:', error);
      }
    };

    fetchChordDiagram();
  }, [chordName]);

  return (
    <div>
      {chordDiagram ? (
        <div dangerouslySetInnerHTML={{ __html: chordDiagram }} />
      ) : (
        <p>Loading chord diagram...</p>
      )}
    </div>
  );
};

export default ChordDiagram;
