function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return onToggle();
}

Usage('err....', 'second arg');
