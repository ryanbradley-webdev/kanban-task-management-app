export const SAMPLE_DATA: Board[] = [
  {
    id: '1234',
    name: "Platform Launch",
    columns: [
      {
        name: "Todo",
        tasks: [
          {
            title: "Build UI for onboarding flow",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: 'asdie84993',
                title: "Sign up page",
                isCompleted: true
              },
              {
                id: '84n28cvb49f',
                title: "Sign in page",
                isCompleted: false
              },
              {
                id: 'nbmvzxcv',
                title: "Welcome page",
                isCompleted: false
              }
            ]
          },
          {
            title: "Build UI for search",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: '098709870987',
                title: "Search page",
                isCompleted: false
              }
            ]
          },
          {
            title: "Build settings UI",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: '4444444444444444444444444444444',
                title: "Account page",
                isCompleted: false
              },
              {
                id: '69696969696',
                title: "Billing page",
                isCompleted: false
              }
            ]
          },
          {
            title: "QA and test all major user journeys",
            description: "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
            status: "Todo",
            subtasks: [
              {
                id: 'omgifhtssgdm',
                title: "Internal testing",
                isCompleted: false
              },
              {
                id: 'loljknrijbdfnr',
                title: "External testing",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        name: "Doing",
        tasks: [
          {
            title: "Design settings and search pages",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: 'nggyunglyd',
                title: "Settings - Account page",
                isCompleted: true
              },
              {
                id: 'ngraahy',
                title: "Settings - Billing page",
                isCompleted: true
              },
              {
                id: 'ngmycngsg',
                title: "Search page",
                isCompleted: false
              }
            ]
          },
          {
            title: "Add account management endpoints",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: 'ngtalody',
                title: "Upgrade plan",
                isCompleted: true
              },
              {
                id: ';jlkasfdjk;lsadfk;j',
                title: "Cancel plan",
                isCompleted: true
              },
              {
                id: 'hello there',
                title: "Update payment method",
                isCompleted: false
              }
            ]
          },
          {
            title: "Design onboarding flow",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: 'general kenobi',
                title: "Sign up page",
                isCompleted: true
              },
              {
                id: 'its over anakin',
                title: "Sign in page",
                isCompleted: false
              },
              {
                id: 'i have the high ground',
                title: "Welcome page",
                isCompleted: false
              }
            ]
          },
          {
            title: "Add search enpoints",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: 'i hate you',
                title: "Add search endpoint",
                isCompleted: true
              },
              {
                id: 'do or do not, there is no try',
                title: "Define search filters",
                isCompleted: false
              }
            ]
          },
          {
            title: "Add authentication endpoints",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: 'ive got a lovely bunch of coconuts',
                title: "Define user model",
                isCompleted: true
              },
              {
                id: 'deedleydee',
                title: "Add auth endpoints",
                isCompleted: false
              }
            ]
          },
          {
            title: "Research pricing points of various competitors and trial different business models",
            description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            status: "Doing",
            subtasks: [
              {
                id: 'there they are a-standing in a row',
                title: "Research competitor pricing and business models",
                isCompleted: true
              },
              {
                id: 'bum bum bum',
                title: "Outline a business model that works for our solution",
                isCompleted: false
              },
              {
                id: 'big ones small ones some as big as your head',
                title: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        name: "Done",
        tasks: [
          {
            title: "Conduct 5 wireframe tests",
            description: "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
            status: "Done",
            subtasks: [
              {
                id: 'there goes my hero',
                title: "Complete 5 wireframe prototype tests",
                isCompleted: true
              }
            ]
          },
          {
            title: "Create wireframe prototype",
            description: "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
            status: "Done",
            subtasks: [
              {
                id: 'watch him as he goes',
                title: "Create clickable wireframe prototype in Balsamiq",
                isCompleted: true
              }
            ]
          },
          {
            title: "Review results of usability tests and iterate",
            description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
            status: "Done",
            subtasks: [
              {
                id: 'aim for the bushes?',
                title: "Meet to review notes from previous tests and plan changes",
                isCompleted: true
              },
              {
                id: 'aim for the bushes.',
                title: "Make changes to paper prototypes",
                isCompleted: true
              },
              {
                id: 'oh nooooooooooooooooooo',
                title: "Conduct 5 usability tests",
                isCompleted: true
              }
            ]
          },
          {
            title: "Create paper prototypes and conduct 10 usability tests with potential customers",
            description: "",
            status: "Done",
            subtasks: [
              {
                id: 'tippy typing away',
                title: "Create paper prototypes for version one",
                isCompleted: true
              },
              {
                id: 'hamtaro',
                title: "Complete 10 usability tests",
                isCompleted: true
              }
            ]
          },
          {
            title: "Market discovery",
            description: "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
            status: "Done",
            subtasks: [
              {
                id: 'the cold never bothered me anyway',
                title: "Interview 10 prospective customers",
                isCompleted: true
              }
            ]
          },
          {
            title: "Competitor analysis",
            description: "",
            status: "Done",
            subtasks: [
              {
                id: 'only four left',
                title: "Find direct and indirect competitors",
                isCompleted: true
              },
              {
                id: 'now three',
                title: "SWOT analysis for each competitor",
                isCompleted: true
              }
            ]
          },
          {
            title: "Research the market",
            description: "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
            status: "Done",
            subtasks: [
              {
                id: 'omg im almost done',
                title: "Write up research analysis",
                isCompleted: true
              },
              {
                id: 'last one!',
                title: "Calculate TAM",
                isCompleted: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2345',
    name: "Marketing Plan",
    columns: [
      {
        name: "Todo",
        tasks: [
          {
            title: "Plan Product Hunt launch",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: 'iweiouph',
                title: "Find hunter",
                isCompleted: false
              },
              {
                id: 'we89098',
                title: "Gather assets",
                isCompleted: false
              },
              {
                id: '24398c',
                title: "Draft product page",
                isCompleted: false
              },
              {
                id: '32098hg',
                title: "Notify customers",
                isCompleted: false
              },
              {
                id: '208c-w98',
                title: "Notify network",
                isCompleted: false
              },
              {
                id: '0d83b',
                title: "Launch!",
                isCompleted: false
              }
            ]
          },
          {
            title: "Share on Show HN",
            description: "",
            status: "",
            subtasks: [
              {
                id: '02398ndsklasd;',
                title: "Draft out HN post",
                isCompleted: false
              },
              {
                id: '209cbn4bnas098hlaub',
                title: "Get feedback and refine",
                isCompleted: false
              },
              {
                id: 'asd0894bh98fhgb',
                title: "Publish post",
                isCompleted: false
              }
            ]
          },
          {
            title: "Write launch article to publish on multiple channels",
            description: "",
            status: "",
            subtasks: [
              {
                id: '0asd98h',
                title: "Write article",
                isCompleted: false
              },
              {
                id: '098sd4oi8ug',
                title: "Publish on LinkedIn",
                isCompleted: false
              },
              {
                id: 'asdpoiahser;kljasdfhg;',
                title: "Publish on Inndie Hackers",
                isCompleted: false
              },
              {
                id: ';lkasdf;lkajsdf;lkajsdf;lkjasdf',
                title: "Publish on Medium",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        name: "Doing",
        tasks: []
      },
      {
        name: "Done",
        tasks: []
      }
    ]
  },
  {
    id: '3456',
    name: "Roadmap",
    columns: [
      {
        name: "Now",
        tasks: [
          {
            title: "Launch version one",
            description: "",
            status: "",
            subtasks: [
              {
                id: '254',
                title: "Launch privately to our waitlist",
                isCompleted: false
              },
              {
                id: '264',
                title: "Launch publicly on PH, HN, etc.",
                isCompleted: false
              }
            ]
          },
          {
            title: "Review early feedback and plan next steps for roadmap",
            description: "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
            status: "",
            subtasks: [
              {
                id: '243645',
                title: "Interview 10 customers",
                isCompleted: false
              },
              {
                id: '2348',
                title: "Review common customer pain points and suggestions",
                isCompleted: false
              },
              {
                id: 'asdehaerg',
                title: "Outline next steps for our roadmap",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        name: "Next",
        tasks: []
      },
      {
        name: "Later",
        tasks: []
      }
    ]
  },
  {
    id: '4567',
    name: 'Test',
    columns: []
  }
]