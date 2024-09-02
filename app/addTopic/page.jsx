"use client";

import { useState } from 'react';
import styles from '@/ui/addTopic/addTopic.module.css';
import { useRouter } from 'next/navigation';

export default function TopicForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if(!title || !description){
          alert("Title and description are required.");
          return;
        }

        try {
          await fetch('http://localhost:3000/api/topics', {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({title, description}),

          });

          if (res.ok) {
            router.push("/");
          }else {
            throw new Error("Failed to create a topic");
          }
           
        } catch (error) {
          console.log(error);
        }

        
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.topic}>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={styles.title}
                    type='text'
                    placeholder='Title'
                    required
                />
            </div>
            <div className={styles.description}>
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className={styles.desc}
                    type='text'
                    placeholder='Description'
                    required
                />
            </div>
            <div className={styles.button}>
                <button type='submit'>Add Topic</button>
            </div>
        </form>
    );
}


