exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({
          user_id: 99901,
          name: 'Amber A',
          email: 'aar@example.org',
          url: 'www.bad.com'
        }),
        knex('profiles').insert({
          user_id: 99902,
          name: 'Billy B',
          email: 'bab@example.org',
          url: 'www.fresh.com'
        }),
      ]);
    });
};
