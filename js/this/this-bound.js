function ask(question) {
  console.log(this.teacher, question)
}

var workshop = {
  teacher : 'Kyle',
  ask(question) {
    console.log(this.teacher, question);
  }
}

// Implicitly bound 
workshop.ask('whats implicit binding');


const workshopOne = {
  teacher: 'Kyle',
  ask : ask
}

const workshopTwo = {
  teacher: 'Suzy',
  ask:ask
}

workshopOne.ask("how do i share a method?");
workshopTwo.ask('How do I share a method?');


// Explicit


ask.call(workshopOne, 'Explcitly bound');
