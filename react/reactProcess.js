const program = require('commander');
const chalk = require('chalk');

// template generators
const classComp = require('./componentTypes/class');
const funcComp = require('./componentTypes/functional');

const reactColor = '#00d8ff';

/**
 * Process args through commander for React components and send them to template generators
 * @param {Array} args - process.argv, array of inputs
 * @param {String} pwd - process.cwd, string for current directory path
 * @returns {File} a React component in .js, .jsx, .ts or .tsx
 */

const reactProcess = (args, pwd) => {
  program
    .option('R, React [type]', 'Create a new React component')
    .option('-c, --class', 'Class Component')
    .option('-f, --functional', 'Functional Component')
    .option('-p, --pure', 'Pure Component')
    .option('-s, --state', 'State')
    .option('--gdsfp, --getDerivedStateFromProps', 'getDerivedStateFromProps')
    .option('--cdm, --componentDidMount', 'componentDidMount')
    .option('--scu, --shouldComponentUpdate', 'shouldComponentUpdate')
    .option('--gsbu, --getSnapshotBeforeUpdate', 'getSnapshotBeforeUpdate')
    .option('--cdu, --componentDidUpdate', 'componentDidUpdate')
    .option('--cwu, --componentWillUnmount', 'componentWillUnmount')
    .option('--gdsfe, --getDerivedStateFromError', 'getDerivedStateFromError')
    .option('--cdc, --componentDidCatch', 'componentDidCatch')
    .option('--us, --useState', 'useState hooks')
    .option('--ue, --useEffect', 'useEffect hooks')
    .option('--uc, --useContext', 'useContext hooks')
    .option('--ur, --useReducer', 'useReducer hooks')
    .option('--ucb, --useCallback', 'useCallback hooks')
    .option('--um, --useMemo', 'useMemo hooks')
    .option('--uref, --useRef', 'useRef hooks')
    .option('--uih, --useImperativeHandle', 'useImperativeHandle hooks')
    .option('--ule, --useLayoutEffect', 'useLayoutEffect hooks')
    .option('--udv, --useDebugValue', 'useDebugValue hooks')
    .option('--ptypes, --propTypes', 'propTypes')
    .option('--dprops, --defaultProps', 'defaultProps')
    .option('--frag, --fragment', 'fragments')
    .option('.js, --js', 'JS file type')
    .option('.jsx, --jsx', 'JSX file type')
    .option('.ts, --ts', 'TypeScript file type')
    .option('.tsx, --tsx', 'TypeScript JSX file type');
    // more options coming soon
    /*
    todo:
      - customFunc (bind or arrow)
      - redux/mobx
      - context?
      - HOC?
    */
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
    useState: false,
    useEffect: false,
    useContext: false,
    useReducer: false,
    useCallback: false,
    useMemo: false,
    useRef: false,
    useImperativeHandle: false,
    useLayoutEffect: false,
    useDebugValue: false,
    propTypes: false,
    defaultProps: false,
    fragment: false,
    fileType: '',
    extension: '',
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
  if (program.useState) compData.useState = true;
  if (program.useEffect) compData.useEffect = true;
  if (program.useContext) compData.useContext = true;
  if (program.useReducer) compData.useReducer = true;
  if (program.useCallback) compData.useCallback = true;
  if (program.useMemo) compData.useMemo = true;
  if (program.useRef) compData.useRef = true;
  if (program.useImperativeHandle) compData.useImperativeHandle = true;
  if (program.useLayoutEffect) compData.useLayoutEffect = true;
  if (program.useDebugValue) compData.useDebugValue = true;
  if (program.propTypes) compData.propTypes = true;
  if (program.defaultProps) compData.defaultProps = true;
  if (program.fragment) compData.fragment = true;
  // currently set jsx to be default file type if more than 2 options are chosen
  if (program.jsx) {
    compData.fileType = 'js';
    compData.extension = '.jsx';
  } else if (program.js) {
    compData.fileType = 'js';
    compData.extension = '.js';
  } else if (program.ts) {
    compData.fileType = 'ts';
    compData.extension = '.ts';
  } else if (program.tsx) {
    compData.fileType = 'ts';
    compData.extension = '.tsx';
  }

  // create template based on type of component
  let template;
  switch (compData.type) {
    case 'class':
      template = classComp(compData);
      break;
    case 'functional':
      template = funcComp(compData);
      break;
    case 'pure':
      template = classComp(compData);
      break;
    default:
      console.log('Please pick a component type! i.e. class, func or pure');
  }
  console.log(compData);
  console.log(template);
  console.log(chalk.bold.hex(reactColor)(`Finished building ${compData.name} component!`));
};

module.exports = reactProcess;
