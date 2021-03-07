import { IResearch } from '../models/research.models'
import { MOCK_DB_META } from './db.mock'

export const MOCK_RESEARCH_ITEMS: IResearch.ItemDB[] = [
  {
    ...MOCK_DB_META(),
    title: 'Make a big 244 x 122 sheetpress?',
    description: 'We want to see whether we can make a big sheetpress',
    slug: 'make-a-big-244-x-122-sheetpress',
    tags: { 'Plastic Hero': true, 'Another tag': true },
    updates: [
      {
        ...MOCK_DB_META(),
        title: 'Research Online',
        description: 'We looked into some online reach that you can find',
        files: [],
      },
    ],
    _createdBy: 'Precious Plastic Malesia',
  },
  {
    ...MOCK_DB_META(),
    title: 'Run the injection machine on Solar?',
    description: 'Run the injection machine on Solar?',
    slug: 'run-the-injection-machine-on-solar',
    tags: { 'Plastic Hero': true, any: true },
    updates: [
      {
        ...MOCK_DB_META(),
        title: 'Research Online',
        description: 'We looked into some online reach that you can find',
        files: [],
      },
    ],
    _createdBy: 'Zelenew',
  },
]

export const MOCK_UPDATES: IResearch.Update[] = [
  {
    title: 'Trying a small version',
    description: `Ad minus expedita quibusdam. Amet quia recusandae quia sequi. Molestiae adipisci officia rerum officia. Itaque eveniet natus dolores et at quae non hic. Qui odio consequatur id quia quam.
  Consequuntur possimus dolorem dignissimos beatae saepe. Ipsam nemo eos magnam sed. Recusandae modi eum dolorem autem voluptas dolor est.`,
    files: [],
  },
  {
    title: 'Melt the HDPE',
    description: `Ad minus expedita quibusdam. Amet quia recusandae quia sequi. Molestiae adipisci officia rerum officia. Itaque eveniet natus dolores et at quae non hic. Qui odio consequatur id quia quam.
  Consequuntur possimus dolorem dignissimos beatae saepe. Ipsam nemo eos magnam sed. Recusandae modi eum dolorem autem voluptas dolor est.`,
    files: [],
  },
]
