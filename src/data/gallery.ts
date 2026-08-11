export type GalleryCategory = 'Coaches' | 'Players' | 'Training Sessions' | 'Videos';

export interface GalleryItem {
  id: string;
  label: string;
  category: GalleryCategory;
  ratio: string;
  src: string;
}

export const GALLERY_FILTERS: Array<'All' | GalleryCategory> = [
'All',
'Coaches',
'Players',
'Training Sessions',
'Videos'];


export const GALLERY_ITEMS: GalleryItem[] = [
{ id: 'g1', label: 'Head coach portrait', category: 'Coaches', ratio: '3/4', src: '/assets/img/ademola-abiola-table-tennis-coach-dubai-Copy-3.jpg' },
{ id: 'g2', label: 'Ping Perfect coaching banner', category: 'Training Sessions', ratio: '4/3', src: '/assets/img/ping-perfect-table-tennis-coaching-dubai.jpg' },
{ id: 'g3', label: 'Coach portrait', category: 'Coaches', ratio: '4/3', src: '/assets/img/Coach-Adedosu.jpg' },
{ id: 'g4', label: 'Full-length coach portrait', category: 'Coaches', ratio: '3/4', src: '/assets/img/ademola-abiola-table-tennis-coach-dubai-Copy-2.jpg' },
{ id: 'g5', label: 'Junior group session', category: 'Training Sessions', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_1.jpg' },
{ id: 'g6', label: 'Squad rally drill', category: 'Training Sessions', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_2.jpg' },
{ id: 'g7', label: 'Coach demonstrating a serve', category: 'Coaches', ratio: '4/3', src: '/assets/img/coach-ademola-table-tennis-coaching-dubai.jpg' },
{ id: 'g8', label: 'Players in a rally', category: 'Players', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_3.jpg' },
{ id: 'g9', label: 'Forehand drive practice', category: 'Training Sessions', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_4.jpg' },
{ id: 'g10', label: 'One-to-one home session', category: 'Training Sessions', ratio: '4/3', src: '/assets/img/private-table-tennis-training-dubai.jpg' },
{ id: 'g11', label: 'Junior player receiving a serve', category: 'Players', ratio: '4/3', src: '/assets/img/kids-table-tennis-training-dubai.jpg' },
{ id: 'g12', label: 'Coach correcting grip', category: 'Coaches', ratio: '4/3', src: '/assets/img/professional-table-tennis-coach-dubai.jpg' },
{ id: 'g13', label: 'Multi-ball training', category: 'Training Sessions', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_5.jpg' },
{ id: 'g14', label: 'Junior serve practice', category: 'Players', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_6.jpg' },
{ id: 'g15', label: 'Coach and player review', category: 'Coaches', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_7.jpg' },
{ id: 'g16', label: 'Backhand technique work', category: 'Training Sessions', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_8.jpg' },
{ id: 'g17', label: 'Coach guiding a junior', category: 'Coaches', ratio: '3/4', src: '/assets/img/coach-ganiou.jpg' },
{ id: 'g18', label: 'Tournament warm-up', category: 'Players', ratio: '3/4', src: '/assets/img/TT8.jpg' },
{ id: 'g19', label: 'Competition venue session', category: 'Training Sessions', ratio: '4/3', src: '/assets/img/ping-perfect-home-table-tennis-training-dubai.jpg' },
{ id: 'g20', label: 'Player serving at a tournament', category: 'Players', ratio: '4/3', src: '/assets/img/TT4.jpg' },
{ id: 'g21', label: 'Junior match highlight', category: 'Videos', ratio: '3/4', src: '/assets/img/TT6.jpg' },
{ id: 'g22', label: 'Junior player tossing the ball to serve at a Dubai table tennis tournament', category: 'Players', ratio: '1/1', src: '/assets/img/junior-player-serve-table-tennis-tournament-dubai.jpg' },
{ id: 'g23', label: 'Coach briefing a group of junior players around the table during a Dubai training session', category: 'Training Sessions', ratio: '1/1', src: '/assets/img/table-tennis-group-coaching-session-dubai.jpg' },
{ id: 'g24', label: 'Ping Perfect coach explaining drills to the junior squad in Dubai', category: 'Coaches', ratio: '1/1', src: '/assets/img/coach-briefing-junior-squad-table-tennis-dubai.jpg' }];
