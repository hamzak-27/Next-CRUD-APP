import styles from '@/ui/editTopicForm/editTopicForm.module.css'

const EditTopicForm = () => {
  return (
    <div className={styles.form}>
        <div className={styles.topic}>
            <input className={styles.title} type='text' placeholder='Title'/>

        </div>
        <div className={styles.description}>
            <input className={styles.desc} type='text' placeholder='Description'/>

        </div>

        <div className={styles.button}>
            <button>Update Topic</button>
        </div>
    </div>
  )
}

export default EditTopicForm