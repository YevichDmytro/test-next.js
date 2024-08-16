import { useId } from 'react';
import course from './course.json';
import styles from './page.module.css';

export default function Home() {
  const id = useId();
  return (
    <main className={styles.main}>
      <ul>
        {course.lessons.map(lesson => {
          return (
            <li key={id}>
              <h2>{`це lesson.title ${lesson.title}`}</h2>
              <p>{`це lesson.points ${lesson.points}`}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
