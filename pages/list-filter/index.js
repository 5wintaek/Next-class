import { useEffect, useLayoutEffect } from 'react';

const people = [
  {
    id: 'person-ckji2d',
    name: 'Creola Katherine Johnson',
    profession: '수학자',
    imageId: 'MK3eW3A',
  },
  {
    id: 'person-ajiu9i',
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: '화학자',
    imageId: 'mynHUSa',
    accomplishment:
      'pioneering cortisone drugs, steroids and birth control pills',
  },
  {
    id: 'person-zudi1z',
    name: 'Mohammad Abdus Salam',
    profession: '물리학자',
    imageId: 'bE7W1ji',
  },
  {
    id: 'person-riyu3n',
    name: 'Percy Lavon Julian',
    profession: '화학자',
    imageId: 'IOjWm71',
    accomplishment:
      'pioneering cortisone drugs, steroids and birth control pills',
  },
  {
    id: 'person-znmd7u',
    name: 'Subrahmanyan Chandrasekhar',
    profession: '천체물리학자',
    imageId: 'lrWQx8l',
  },
];

export default function Listfilter() {
  // const chemists = people.filter((person) =>
  //   person.profession.includes('화학자')
  // );

  const chemists = people.filter((person) => person.profession === '화학자');

  useEffect(() => {
    console.log('Test');
  });
  return (
    <ul>
      {chemists.map((person) => (
        <li key={person.id}>
          <p>
            <b>{person.name}</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      ))}
    </ul>
  );
}
