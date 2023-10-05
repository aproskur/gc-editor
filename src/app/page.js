'use client'
import styles from './page.module.css';
import Header from './components/Header';
import EditorPanel from './components/EditorPanel';
import EditorScreen from './components/EditorScreen';
import { SharedDataProvider } from './SharedDataContext'; 



// Import the functions from ActionProvider.js

export default function Home() {

  return (
    <>
        <main className={styles.main}>
              <SharedDataProvider>
                <Header />
                <EditorPanel className="editor" />
                <EditorScreen className="screen" />
              </SharedDataProvider>          
        </main>

   
    </>
  );
}