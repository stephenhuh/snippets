const a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved 1')
    }, 2000);
  })
}

const b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved 2')
    }, 4000);
  })
}

const c = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve('resolved 3'), 7000);
  })
}

const f = async () => {
  try{ 
    const ax = a();
    console.log('trigger');
    await ax;
    console.log('trigger3');
    console.log(ax);
  } catch(e) {
    throw e;
  }
}


f()
  .then(() => {
    console.log('done')
  })
  .catch((e) => {
    console.log('caught', e)
  })
