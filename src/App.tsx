import { Stepper } from './Stepper';

const steps = [
  {
    title: 'First title',
    description: 'Some first description'
  },
  {
    title: 'Second item',
    description: 'New text do stuff'
  },
  {
    title: 'Third thing',
    description: 'Something to do'
  },
  {
    title: 'Last child',
    description: 'Blah blah blah'
  },
  {
    title: 'Wow',
    description: 'Is it work?'
  }
];

function App() {
  return (
    <div>
      <Stepper
        steps={steps}
        options={{ completedSteps: [0] }}
      />
    </div>
  );
}

export default App;