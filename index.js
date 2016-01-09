var counter = function(state, action) {
  state = state || 0;

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
} 

var Counter = function(props) {
  var incrementBtn = React.createElement(
    'button',
    { onClick: props.onIncrement },
    '+'
  );

  var decrementBtn = React.createElement(
    'button',
    { onClick: props.onDecrement },
    '-'
  );

  return React.createElement('div', null, [
    React.createElement('h1', null, props.value),
    decrementBtn,
    incrementBtn
  ]);
};

var mapStateToProps = function(state) {
  return {
    value: state
  };
}

var mapDispatchToProps = function(dispatch) {
  return {
    onIncrement: () => {
      dispatch({
        type: 'INCREMENT'           
      })            
    },
    onDecrement: () => {
      dispatch({
        type: 'DECREMENT'           
      })            
    }
  };
};

var CounterContainer = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

var store = Redux.createStore(counter);

ReactDOM.render(
  React.createElement(CounterContainer, { store: store }),
  document.getElementById('root')
);