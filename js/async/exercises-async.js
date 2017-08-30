function setTimeoutExercise() {
  console.log("Bye");

  setTimeout(() => {
    console.log("Hello");
  },0)

  console.log("There");

  setTimeout(()=> {
    console.log("What");
  },0);

  setTimeout(()=> {
    console.log("Boo");
  },100);
}

function setImmediateExercise() {
  console.log("Yo");
  setTimeout(() => {
    console.log("Dude");
  },0);
  setTimeout(() => {
    console.log("Man");
  },1000);
  setImmediate(() => {
    console.log("what");
  })
  console.log("...");
}
setImmediateExercise();

