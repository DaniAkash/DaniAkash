interface EventType {
  year: number;
  events: {
    date: string;
    name: string;
    title: string;
    description: string;
    cta?: {
      title: string;
      url: string;
    }[];
    video?: string;
  }[];
}

export const events: EventType[] = [
  {
    year: 2023,
    events: [
      {
        date: 'Aug 14, 2023',
        name: 'React Nexus 2023',
        title: 'Signal Boosting',
        description: 'Improving React Rendering performance using Signals. Lightning talk at React Nexus 2023 International Conference.',
        cta: [
          {
            title: 'Event Website',
            url: 'https://reactnexus.com/'
          }
        ],
        video: 'https://www.youtube.com/watch?v=Swa1fHgeRWM'
      },
      {
        date: 'Jun 14, 2023',
        name: 'React Bangalore Meetup #67',
        title: 'How to build BFF with Wundergraph',
        description: "This talk focuses on how to build a Backend for Frontend (BFF) gateway using Wundergraph.",
        cta: [
          {
            title: 'Event Website',
            url: 'https://www.meetup.com/reactjs-bangalore/events/293420307/'
          },
          {
            title: 'Code',
            url: 'https://github.com/DaniAkash/wundergraph-bff'
          }
        ],
        video: 'https://www.youtube.com/watch?v=Gx83aU1uT9k'
      },
      {
        date: 'Mar 18, 2023',
        name: 'React Bangalore Meetup #65',
        title: 'Beyond Virtual DOM - Speeding up large React Apps',
        description: 'This talk focuses on understanding React Virtual DOM and how new solutions are on the rise to go beyond the Virtual DOM using alternate DOM implementations and state management techniques to speed up large React applications.',
        cta: [
          {
            title: 'Event Website',
            url: 'https://www.meetup.com/reactjs-bangalore/events/291680714/'
          },
          {
            title: 'Slides + Code',
            url: 'https://github.com/DaniAkash/beyond-virtual-dom'
          }
        ],
        video: 'https://www.youtube.com/watch?v=jW20sQ6C3ik'
      },
      {
        date: 'Jan 28, 2023',
        name: 'React Bangalore Meetup #63',
        title: 'Turbo Charge your SSR pages with Edge Rendering',
        description: 'This talk takes a beginner friendly approach to different rendering patterns and how to leverage edge infrastructure to speed up server side rendered pages.',
        cta: [
          {
            title: 'Event Website', 
            url: 'https://www.meetup.com/reactjs-bangalore/events/290171038/'
          },
          {
            title: 'Slides + code',
            url: 'https://github.com/DaniAkash/rendering-patterns'
          }
        ],
        video: 'https://www.youtube.com/watch?v=_Zq1yjgq8iM'
      }
    ]
  },
  {
    year: 2022,
    events: [
      {
        date: 'Dec 10, 2022',
        name: 'React Meetup #61',
        title: 'Improving web performance with Islands Architecture',
        description: 'Modern web apps are shipping too much javascript. This talk focuses on how to cut-down on heavy page load times by leveraging Islands Architecture provided by Astro.',
        cta: [
          {
            title: 'Event Website',
            url: 'https://www.meetup.com/reactjs-bangalore/events/289565060/'
          },
          {
            title: 'Slides + Code',
            url: 'https://github.com/DaniAkash/Islands-Experiment'
          }
        ],
        video: 'https://www.youtube.com/watch?v=pBqh-wUUCz4',
      }
    ]
  },
  {
    year: 2020,
    events: [
      {
        date: 'Apr 30, 2020',
        name: 'Thoughtworks Geeknight 76th Edition',
        title: 'Qbits & Quantum Mechanics Explained',
        description: 'A science + tech focused talk explaining how the world of tiny particles work & how it is leveraged in Quantum computers as Qbits.',
        cta: [
          {
            title: 'Slides',
            url: 'https://daniakash.github.io/Qubits-and-Quantum-Mechanics-Explained/'
          }
        ],
        video: 'https://youtu.be/-AtUeVgRFLg?t=45',
      },
      {
        date: 'Apr 26, 2020',
        name: 'Basaveshwar Engineering College, IEEE Student branch',
        title: 'How to learn a programming language',
        description: 'A live stream webinar for college students on which programming languages to learn & how to learn them.',
        cta: [
          {
            title: 'Slides',
            url: 'https://daniakash.github.io/how-to-learn-a-programming-language/'
          }
        ],
        video: 'https://www.youtube.com/watch?v=_QIDzHfqkkg',
      },
      {
        date: 'Apr 17, 2020',
        name: 'Guvi 30 days webinar',
        title: 'Building a command line tool with Node.js',
        description: 'How to use Node.js to build a command line utility - explained in very simple steps by building a translator app live on video.',
        video: 'https://www.youtube.com/watch?v=rTyY6NcZ0XQ',
      },
      {
        date: 'Apr 02, 2020',
        name: 'Guvi 30 days webinar',
        title: 'Visualize Application State With XSTATE In Javascript',
        description: 'Building visual model of an application state by leveraging the concept of finite state machines with XSTATE.',
        cta: [
          {
            title: 'Slides',
            url: 'https://docs.google.com/presentation/d/11AI28PgImaxnGLKv6FAXcyvwEumCUdUg1tVqutn0qJ0/edit?usp=sharing'
          },
          {
            title: 'Code',
            url: 'https://codesandbox.io/s/visualizing-app-state-with-xstate-p1lqc'
          }
        ],
        video: 'https://www.youtube.com/watch?v=GhHh_9I6CXQ',
      },
      {
        date: 'Mar 21, 2020',
        name: 'Guvi 30 days webinar',
        title: 'Redux for State Management',
        description: 'Live programming of building a stateful application & managing the state transitions using the Redux library.',
        cta: [
          {
            title: 'Code',
            url: 'https://codesandbox.io/s/state-management-with-redux-4ntim'
          }
        ],
        video: 'https://www.youtube.com/watch?v=6bCkflDLYp8',
      },
      {
        date: 'Mar 17, 2020',
        name: 'Guvi 30 days webinar',
        title: 'Up and Running with React Native',
        description: 'A beginner friendly introduction to building apps with React Native - live coding a todo list app on video using an Expo Snack.',
        cta: [
          {
            title: 'Slides',
            url: 'https://docs.google.com/presentation/d/1I8Mo4NzNFzMpcG0w86vlD4_e_Aijf6__uvez4cfYNmk/edit?usp=sharing'
          },
          {
            title: 'Code',
            url: 'https://snack.expo.dev/@daniakash/up-nd-running-webinar'
          }
        ],
        video: 'https://www.youtube.com/watch?v=rU7qtmrm-TA',
      }
    ]
  },
  {
    year: 2019,
    events: [
      {
        date: 'Jul 25, 2019',
        name: 'Thoughtworks Geeknight 69th Edition',
        title: 'The State of React Native in 2019',
        description: 'A detailed talk on the state of React Native & the types of libraries & apps the community is building around the React Native ecosystem.',
        video: 'https://www.youtube.com/watch?v=O_vVceZxtkc',
        cta: [
          {
            title: 'Slides',
            url: 'https://docs.google.com/presentation/d/1WaWqyEfoR_GPrREr3Xq3s9-5Aqq3LHVVJ-r1tcLbMf0/edit?usp=sharing'
          }
        ],
      },
      {
        date: 'Jun 8, 2019',
        name: 'PYT Talks Episode 1',
        title: 'React.js Best Practices',
        description: 'Sharing the best practices on building applications with React based on my experience in building the Pickyourtrail mobile app & the web app.',
        video: 'https://fb.watch/hLQWn-53Ju'
      }
    ]
  },
  {
    year: 2018,
    events: [
      {
        date: 'Jun 07, 2018',
        name: 'Thoughtworks Geeknight 55th edition',
        title: 'Lightning fast application development with MobX',
        description: "A talk focused on introducing a new state management approach powered by MobX & how it'll greatly speed up application development times.",
        video: 'https://www.youtube.com/watch?v=2xjVsMdp3bo',
        cta: [
          {
            title: 'Slides',
            url: 'https://docs.google.com/presentation/d/1DYlyd4h2Tt1g8zjGjLqHIWXzxXP0ONQh0oFcCXpgxy8/edit?usp=sharing'
          },
          {
            title: 'Code',
            url: 'https://github.com/DaniAkash/geeknight-mobx'
          }
        ]
      }
    ]
  },
  {
    year: 2017,
    events: [
      {
        date: 'Jun 10, 2017',
        name: 'Facebook Developer Circles Chennai',
        description: 'A beginner friendly talk + live tutorial on how to build mobile apps with React Native for the facebook developer circles community.',
        title: 'React Native for Beginners',
        cta: [
          {
            title: 'Event Website',
            url: 'https://fbdc-chennai-1.splashthat.com/'
          },
          {
            title: 'Slides',
            url: 'https://docs.google.com/presentation/d/1vTSLTj8-ZXoIGtLJuIgXCn61F9XbgTdg034oudzykQo/edit?usp=sharing'
          },
          {
            title: 'Code',
            url: 'https://github.com/DaniAkash/FBDevCChennai-ReactNative-for-beginners'
          },
        ]
      },
      {
        date: 'Mar 24, 2017',
        name: 'React Native Chennai',
        title: 'Building React Native apps with Angular 2',
        description: 'A PoC project explaining the underlying architecture of React Native & how we can leverage it for other frameworks with Angular 2 as an example.',
        cta: [
          {
            title: 'Slides',
            url: 'https://docs.google.com/presentation/d/1F7_WM6OQ_AE3ExH6Ug5BwCPUJy8Oxpgx9kHTeYkGWHY/edit?usp=sharing',
          },
          {
            title: 'Code',
            url: 'https://github.com/DaniAkash/Todo-List-App-with-React-Native-and-Angular'
          }
        ],
        video: 'https://youtu.be/ajB8nQBgj88?t=208',
      },
      {
        date: 'Mar 11, 2017',
        name: 'Chennai Geeks',
        title: 'Angular JS 2 for beginners',
        description: 'How to build applications with Angular 2 - a beginner friendly talk + live coding session.',
        cta: [
          {
            title: 'Event Website',
            url: 'https://www.facebook.com/events/ajira/angular-js-2-for-beginners-chennai-geeks-march-meetup/1452730704737953/'
          },
          {
            title: 'Slides',
            url: 'https://docs.google.com/presentation/d/1lmiZFR2kAvF1bAM4Y-qwOskmN15Qd2XboAKjiKpfIMI/edit?usp=sharing',
          },
          {
            title: 'Code',
            url: 'https://github.com/DaniAkash/chennai-geeks-angular-meetup'
          }
        ]
      },
      {
        date: 'Feb 21, 2017',
        name: 'React Native Chennai',
        title: 'Navigation in React Native',
        description: 'Explaining the most complicated part of React Native mobile development - using the Navigator module to build screen navigation.',
        cta: [
          {
            title: 'Code',
            url: 'https://github.com/DaniAkash/ReactNativeNavigationDemo'
          }
        ],
        video: 'https://www.youtube.com/watch?v=HOzC-xkvy9Q',
      },
    ]
  }
]
