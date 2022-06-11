exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mood_snapshots')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('mood_snapshots').insert([
        {
          id: 1,
          mood: 'excellent',
          location: 'home',
          people: 'myself',
          notes: 'Relaxing by myself.',
          user_id: 1
        },
        {
          id: 2,
          mood: 'happy',
          location: 'public',
          people: 'friend',
          notes: 'At a pub with friends.',
          user_id: 1
        },
        {
          id: 3,
          mood: 'neutral',
          location: 'work',
          people: 'coworker',
          notes: 'Doing what I got to do at work.',
          user_id: 1
        },
        {
          id: 4,
          mood: 'sad',
          location: 'travel',
          people: 'other',
          notes: 'I am running late.',
          user_id: 1
        },
        {
          id: 5,
          mood: 'terrible',
          location: 'nature',
          people: 'family',
          notes: 'Today was a disaster while camping.',
          user_id: 1
        }
      ]);
    });
};
