import { padded } from '../../helpers/decorators.js'
import EpCodeView from '@/components/code-view/EpCodeView.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import { computed } from 'vue'

const codeExamples = {
  javascript: `function myFunction(name, age) {
  // This is a comment
  console.log('Hello, ' + name + '!');

  if (age >= 18) {
    console.log('You are an adult.');
  } else {
    console.log('You are a minor.');
  }

  const myArray = [1, 2, 3];
  const myObject = { name: 'John', age: 25 };

  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }

  for (const property in myObject) {
    console.log(property + ': ' + myObject[property]);
  }

  try {
    // Some code that might throw an error
  } catch (error) {
    console.error(error);
  }
}`,
  html: `<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>My Page</h1>
    <p>This is my page.</p>
  </body>
</html>`,
  css: `.selector {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #000000, #ffffff);
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.selector:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
}
`,
  json: `{
  "name": "John",
  "age": 25,
  "cars": [
    { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
    { "name": "BMW", "models": ["320", "X3", "X5"] },
    { "name": "Fiat", "models": ["500", "Panda"] }
  ]
}`,
}

export default {
  title: 'Components/Code View',
  component: EpCodeView,
  decorators: [padded],
  argTypes: {
    code: {
      table: { disable: true }
    },
    language: {
      name: 'Language',
      options: [
        'Javascript',
        'HTML',
        'CSS',
        'JSON',
        // 'Markdown',
      ],
      mapping: {
        Javascript: 'javascript',
        HTML: 'html',
        CSS: 'css',
        JSON: 'json',
        // Markdown: 'markdown',
      },
      control: {
        type: 'select',
      }
    },
    lineNumbers: {
      name: 'Line Numbers',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const CodeView = args => ({
  components: { EpCodeView, EpContainer },
  setup() {
    const code = computed(() => codeExamples[args.language])
    return { args, code }
  },
  template: `
  <ep-container
    width="fit-content"
    content-padding="2rem"
    border-radius="var(--border-radius)"
    background-color="var(--interface-surface)"
  >
    <ep-code-view :code="code" v-bind="args" />
  </ep-container>
  `
})

CodeView.args = {
  language: 'Javascript',
  lineNumbers: true,
}
