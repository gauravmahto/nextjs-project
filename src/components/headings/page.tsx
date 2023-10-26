'use client';

import './styles.css';

import Heading from './heading';
import Section from './section';

export default function Page() {

  return (
    <Section>

      <Heading>Title</Heading>

      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>

        <Section>
          <Heading>Sub-heading</Heading>

          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-sub-heading</Heading>
            <Heading>Sub-sub-sub-sub-heading</Heading>
          </Section>

        </Section>

      </Section>

    </Section>

  );

  // Above, a tad better for this use case
  // export default function Page() {

  //   return (
  //     <Section level={1}>

  //       <Heading>Title</Heading>

  //       <Section level={3}>
  //         <Heading>Heading</Heading>
  //         <Heading>Heading</Heading>

  //         <Section level={4}>
  //           <Heading>Sub-heading</Heading>

  //           <Section level={6}>
  //             <Heading>Sub-sub-heading</Heading>
  //             <Heading>Sub-sub-sub-heading</Heading>
  //             <Heading>Sub-sub-sub-sub-heading</Heading>
  //           </Section>

  //         </Section>

  //       </Section>

  //     </Section>

  //   );

  // Old way tp pass to all Heading. Above use from parent and pass to children
  // return (
  //   <Section>

  //     <Heading level={1}>Title</Heading>

  //     <Section>
  //       <Heading level={3}>Heading</Heading>
  //       <Heading level={3}>Heading</Heading>

  //       <Section>
  //         <Heading level={4}>Sub-heading</Heading>

  //         <Section>
  //           <Heading level={6}>Sub-sub-heading</Heading>
  //           <Heading level={6}>Sub-sub-sub-heading</Heading>
  //           <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
  //         </Section>

  //       </Section>

  //     </Section>

  //   </Section>

  // );

}
