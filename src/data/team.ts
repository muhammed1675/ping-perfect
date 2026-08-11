export interface Coach {
  name: string;
  shortRole: string;
  fullRole: string;
  bio: string;
  homeBio: string;
  photoLabel: string;
  photoSrc: string;
}

export const COACHES: Coach[] = [
{
  name: 'Ademola Abiola',
  shortRole: 'Head Coach',
  fullRole: 'Head Coach – Professional Table Tennis Trainer',
  bio: 'A highly experienced coach using modern training methods designed to improve technique and performance.',
  homeBio:
  'Head Coach at Ping Perfect, leading technical development and training excellence in table tennis programs across Dubai.',
  photoLabel: 'Coach portrait',
  photoSrc: '/assets/img/ademola-abiola-table-tennis-coach-dubai.png'
},
{
  name: 'Funmilayo Adedosu',
  shortRole: 'Coach',
  fullRole: 'Table Tennis Coach – Table Tennis Trainer',
  bio: 'A seasoned coach committed to developing players through advanced, systematic training methods.',
  homeBio:
  'Coach at Ping Perfect, training players with skill development, mastery, and a passion for the sport.',
  photoLabel: 'Coach portrait',
  photoSrc: '/assets/img/Coach-Adedosu.jpg'
}];