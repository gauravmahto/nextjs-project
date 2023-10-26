import { useContext } from 'react';
import { LevelContext } from './level-context';

export default function Section({ children }) {

  const level = useContext(LevelContext);

  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );

}

// Above, a just better for this use case
// export default function Section({ level, children }) {

//   return (
//     <section className="section">
//       <LevelContext.Provider value={level}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );

// }

// Old way, now above use parent context
// export default function Section({ children }) {

//   return (
//     <section className="section">
//       {children}
//     </section>
//   );

// }
