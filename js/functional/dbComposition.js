  //Top-down approach
  const getSetsAcc = (exerciseIds, acc) => {
    return knex('sets')
      .select('*')
      .whereIn('exercise_id',exerciseIds)
      .tap((sets) => {
        sets.forEach((set) => {
          const idx = findIndex(propEq('exercise_id', set.exercise_id))(acc);
          acc[idx].sets.push(set);
        })
      })
      .then(res => {
        return res;
      })
  }

  const getExercisesAcc = (workoutId, acc) => {
    return knex('exercises')
      .select('*')
      .where('workout_id', workoutId)
      .tap((exercises) => {
        //logger.info(`exercises ${JSON.stringify(exercises)}`) 
        exercises.forEach(exercise => {
          const {exercise_name, exercise_id} = exercise;
          const o = {};
          o.exercise_name = exercise_name;
          o.exercise_id = exercise_id;
          o.sets = [];
          acc.push(o);
        })
      })
      .then(exercises => {
        const pluckIds = pluck('exercise_id');
        return pluckIds(exercises);
      })
  }

  const cGetExercisesAcc = curry(getExercisesAcc);
  const cGetSetsAcc = curry(getSetsAcc);
  const ogAcc = [];
  const sameRes = await composeP(cGetSetsAcc(__, ogAcc), cGetExercisesAcc(__, ogAcc))(44);


