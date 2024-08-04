// import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
// import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
// import gamestackTexture2 from '~/assets/gamestack-list.jpg';
// import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
// import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
// import gamestackTexture from '~/assets/gamestack-login.jpg';
// import sliceTextureLarge from '~/assets/slice-app-large.jpg';
// import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
// import sliceTexture from '~/assets/slice-app.jpg';
// import sraTexture from '~/assets/peepsra.jpeg';
// import fitnessTexture from '~/assets/peepfitness.jpeg';
// import dataTexture from '~/assets/peepdataclean.jpeg';
// import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
// import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
// import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
// import { Footer } from '~/components/footer';
// import { baseMeta } from '~/utils/meta';
// import { Intro } from './intro';
// import { Profile } from './profile';
// import { ProjectSummary } from './project-summary';
// import { useEffect, useRef, useState } from 'react';
// import config from '~/config.json';
// import styles from './home.module.css';

// import daredetect from '~/assets/faredetect.mp4'; //LAPTOP
// import chazz from '~/assets/chazz.mp4'; //LAPTOP
// import foodmania from '~/assets/foodmania.mp4'; //PHONE

// // Prefetch draco decoader wasm
// export const links = () => {
//   return [
//     {
//       rel: 'prefetch',
//       href: '/draco/draco_wasm_wrapper.js',
//       as: 'script',
//       type: 'text/javascript',
//       importance: 'low',
//     },
//     {
//       rel: 'prefetch',
//       href: '/draco/draco_decoder.wasm',
//       as: 'fetch',
//       type: 'application/wasm',
//       importance: 'low',
//     },
//   ];
// };

// export const meta = () => {
//   return baseMeta({
//     title: '',
//     description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
//   });
// };

// export const Home = () => {
//   const [visibleSections, setVisibleSections] = useState([]);
//   const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
//   const intro = useRef();
//   const projectOne = useRef();
//   const projectTwo = useRef();
//   const projectThree = useRef();
//   const details = useRef();

//   useEffect(() => {
//     const sections = [intro, projectOne, projectTwo, projectThree, details];

//     const sectionObserver = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const section = entry.target;
//             observer.unobserve(section);
//             if (visibleSections.includes(section)) return;
//             setVisibleSections(prevSections => [...prevSections, section]);
//           }
//         });
//       },
//       { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
//     );

//     const indicatorObserver = new IntersectionObserver(
//       ([entry]) => {
//         setScrollIndicatorHidden(!entry.isIntersecting);
//       },
//       { rootMargin: '-100% 0px 0px 0px' }
//     );

//     sections.forEach(section => {
//       sectionObserver.observe(section.current);
//     });

//     indicatorObserver.observe(intro.current);

//     return () => {
//       sectionObserver.disconnect();
//       indicatorObserver.disconnect();
//     };
//   }, [visibleSections]);

//   return (
//     <div className={styles.home}>
//       <Intro
//         id="intro"
//         sectionRef={intro}
//         scrollIndicatorHidden={scrollIndicatorHidden}
//       />
//       <ProjectSummary
//         id="project-1"
//         sectionRef={projectOne}
//         visible={visibleSections.includes(projectOne.current)}
//         index={1}
//         title="Smart Retail Assistant (SRA)"
//         description="AI-powered app for personalized shopping and real-time inventory tracking."
//         buttonText="View project"
//         buttonLink=""
//         model={{
//           type: 'laptop',
//           alt: 'Smart Sparrow lesson builder',
//           textures: [
//             {
//               srcSet: `${sraTexture} 1280w, ${sprTextureLarge} 2560w`,
//               placeholder: sprTexturePlaceholder,
//             },
//           ],
//         }}
//       />
//       <ProjectSummary
//         id="project-2"
//         alternate
//         sectionRef={projectTwo}
//         visible={visibleSections.includes(projectTwo.current)}
//         index={2}
//         title="HealthTrack Mobile App"
//         description="Flutter app offering personalized health insights and reminders."
//         buttonText="View website"
//         buttonLink=""
//         model={{
//           type: 'phone',
//           alt: 'App login screen',
//           textures: [
//             {
//               srcSet: `${fitnessTexture} 375w, ${gamestackTextureLarge} 750w`,
//               placeholder: gamestackTexturePlaceholder,
//             },
            
//           ],
//         }}
//       />
//       <ProjectSummary
//         id="project-3"
//         sectionRef={projectThree}
//         visible={visibleSections.includes(projectThree.current)}
//         index={3}
//         title="DataClean Pro Analytics"
//         description="Web platform automating data cleaning and analysis for actionable insights."
//         buttonText="View project"
//         buttonLink="/projects/slice"
//         model={{
//           type: 'laptop',
//           alt: 'Annotating a biomedical image in the Slice app',
//           textures: [
//             {
//               srcSet: `${dataTexture} 800w, ${sliceTextureLarge} 1920w`,
//               placeholder: sliceTexturePlaceholder,
//             },
//           ],
//         }}
//       />
//       <Profile
//         sectionRef={details}
//         visible={visibleSections.includes(details.current)}
//         id="details"
//       />
//       <Footer />
//     </div>
//   );
// };

import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sraTexture from '~/assets/peepsra.jpeg';
import fitnessTexture from '~/assets/peepfitness.jpeg';
import dataTexture from '~/assets/peepdataclean.jpeg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

import daredetect from '~/assets/faredetect.mp4'; //LAPTOP
import chazz from '~/assets/chazz.mp4'; //LAPTOP
import foodmania from '~/assets/foodmania.mp4'; //PHONE
import foodman from '~/assets/foodman.jpg';
import chazzz from '~/assets/chazzz.jpg';
import detect from '~/assets/detect.jpg';
import ecomm from '~/assets/ecomm.jpg';
import mern from '~/assets/mern.mp4';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: '',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Fare-Det: Sentiment Analysis for Fake Reviews"
        description="Detect fake reviews with sentiment analysis. Get a clear overview with the management panel."
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${detect} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
        video={daredetect}
        videoStyles={{ width: '100%', height: 'auto' }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="FoodMania: Your Ultimate Food Ordering App"
        description="Order food easily from a wide range of cuisines. Enjoy a user-friendly experience."
        buttonText="View website"
        buttonLink=""
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${foodman} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            
          ],
        }}
        video={foodmania}
        videoStyles={{ width: '55%', height: 'auto' }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Chazz: Connect and Chat with Ease"
        description="Chat with people effortlessly. Experience real-time messaging with a simple interface."
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${chazzz} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
        video={chazz}
        videoStyles={{ width: '100%', height: 'auto' }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={4}
        title="ShopSmart: Your MERN-Powered E-commerce Solution"
        description="Advanced e-commerce website using the MERN stack. Enjoy seamless browsing and secure transactions."
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${ecomm} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
        video={mern}
        videoStyles={{ width: '100%', height: 'auto' }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

