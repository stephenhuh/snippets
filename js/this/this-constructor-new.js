function ask(question) {
  console.log(this.teacher, question);
}

const newEmptyObject = new ask("what is new doing here");

// The new keyword is invoke afn with this pointing at new empty object - basically .call({});



