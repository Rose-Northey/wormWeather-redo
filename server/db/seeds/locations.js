// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('lawns').del()
  await knex('lawns').insert([
    { id: 1, name: 'parliament_lawns', lat: -41.2866, long: 174.7756 },
    { id: 2, name: 'dunedin_botanics', lat: -45.8567, long: 170.5181 },
    { id: 3, name: 'auckland_domain', lat: -41.2866, long: 174.7756 },
    { id: 4, name: 'mount_taranaki', lat: -39.2957, long: 174.0639 },
  ])
}
