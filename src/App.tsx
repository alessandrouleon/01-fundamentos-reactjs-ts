import { Header } from './components/Header';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://img.freepik.com/premium-psd/3d-cartoon-avatar-isolated-3d-rendering_235528-265.jpg?w=30',
      name: 'Alessandro Uleon',
      role: 'Analista de Sistema'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: ' 👉 jane.design/doctorcare' },

      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' }

    ],
    publishedAt: new Date('2023-05-04 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://img.freepik.com/premium-psd/3d-female-cartoon-character-avatar-isolated-3d-rendering_235528-987.jpg?w=82',
      name: 'Amanda Fernado',
      role: 'Lider de Equipe'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: ' 👉 jane.design/doctorcare' },

      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' }

    ],
    publishedAt: new Date('2023-03-08 22:00:00')
  }

]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
          }
        </main>
      </div>
    </div>
  )
}

