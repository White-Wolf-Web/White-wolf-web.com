import {FloatingCards} from './FloatingCards';
import styles from './Card.module.css';

export const cards = [
  { id: 1, content: 'Carte 1' },
  { id: 2, content: 'Carte 2' },
  { id: 3, content: 'Carte 3' },
  { id: 4, content: 'Carte 4' },
  { id: 5, content: 'Carte 5' },
  { id: 6, content: 'Carte 6' },
  { id: 7, content: 'Carte 7' },
  { id: 8, content: 'Carte 8' },
  { id: 9, content: 'Carte 9' },
];

export function StormContainerCard() {
  return (
    <div className={styles.stormContainer}>
      <FloatingCards cards={cards} />
     
    </div>
  );
}
