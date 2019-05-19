const program = require('commander');
const chalk = require('chalk');

const reactColor = '#00d8ff';

const reactComp = (args) => {
  program
    .option('R, React [type]', 'Create a new React component')
    .option('-c, --class', 'Class Component')
    .option('-f, --functional', 'Functional Component')
    .option('-p, --pure', 'Pure Component')
    .option('-s, --state', 'State')
    .option('-gdsfp, --getDerivedStateFromProps', 'getDerivedStateFromProps')
    .option('-cdm, --componentDidMount', 'componentDidMount')
    .option('-scu, --shouldComponentUpdate', 'shouldComponentUpdate')
    .option('-gsbu, --getSnapshotBeforeUpdate', 'getSnapshotBeforeUpdate')
    .option('-cdu, --componentDidUpdate', 'componentDidUpdate')
    .option('-cwu, --componentWillUnmount', 'componentWillUnmount')
    .option('-gdsfe, --getDerivedStateFromError', 'getDerivedStateFromError')
    .option('-cdc, --componentDidCatch', 'componentDidCatch')
    .option('-dprops, --defaultProps', 'defaultProps')
    .option('-frag, --fragment', 'fragments')
    .option('.js, --js', 'JS file type')
    .option('.jsx, --jsx', 'JSX file type')
    .option('.ts, --ts', 'TypeScript file type');
    // more options coming soon
    // todo: hooks, customFunc (bind or arrow), context?, HOC?, propTypes

  program.parse(args);

  // object to hold options and to be passed onto the file maker
  const compData = {
    name: '',
    type: '',
    state: false,
    getDerivedStateFromProps: false,
    componentDidMount: false,
    shouldComponentUpdate: false,
    getSnapshotBeforeUpdate: false,
    componentDidUpdate: false,
    componentWillUnmount: false,
    getDerivedStateFromError: false,
    componentDidCatch: false,
    defaultProps: false,
    fragment: false,
    fileType: '',
  };

  // reassign compData properties with commander option results
  if (typeof program.React === 'string') compData.name = program.React;
  // currently set to default to class if more than 2 options are chosen
  if (program.class) {
    compData.type = 'class';
  } else if (program.functional) {
    compData.type = 'functional';
  } else if (program.pure) {
    compData.type = 'pure';
  }
  if (program.state) compData.state = true;
  if (program.getDerivedStateFromProps) compData.getDerivedStateFromProps = true;
  if (program.componentDidMount) compData.componentDidMount = true;
  if (program.shouldComponentUpdate) compData.shouldComponentUpdate = true;
  if (program.getSnapshotBeforeUpdate) compData.getSnapshotBeforeUpdate = true;
  if (program.componentDidUpdate) compData.componentDidUpdate = true;
  if (program.componentWillUnmount) compData.componentWillUnmount = true;
  if (program.getDerivedStateFromError) compData.getDerivedStateFromError = true;
  if (program.componentDidCatch) compData.componentDidCatch = true;
  if (program.defaultProps) compData.defaultProps = true;
  if (program.fragment) compData.fragment = true;
  // currently set jsx to be default file type if more than 2 options are chosen
  if (program.jsx) {
    compData.fileType = '.jsx';
  } else if (program.js) {
    compData.fileType = '.js';
  } else if (program.ts) {
    compData.fileType = '.ts';
  }

  // todo: send off compData to template generator
  console.log(compData);
  console.log(chalk.bold.hex(reactColor)('Finished building '), compData.name, chalk.bold.hex(reactColor)('component!'));
};

module.exports = reactComp;
