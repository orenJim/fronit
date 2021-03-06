const classComponent = require('../../react/componentTypes/class');

describe('classComponent', () => {
  // component options
  const compData = {
    name: 'Hello',
    type: 'class',
    state: false,
    getDerivedStateFromProps: false,
    componentDidMount: false,
    shouldComponentUpdate: false,
    getSnapshotBeforeUpdate: false,
    componentDidUpdate: false,
    componentWillUnmount: false,
    getDerivedStateFromError: false,
    componentDidCatch: false,
    hooks: false,
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
    fileType: 'js',
    extension: 'jsx',
  };

  // template before formatting (raw)
  const template =
`import React from 'react';


class Hello extends React.Component {
  constructor(props) {
    super(props);

  }








  render() {
    return (
      <div>
        {/* Insert elements and/or components */}
      </div>
    );
  }


}
export default Hello;`;

  test('given compData object, create a class template', () => {
    expect(classComponent(compData)).toEqual(template);
  });
});
