import styles from '@/ui/topiclist/topiclist.module.css'
import Removebtn from '../removebtn/removebtn'
import { MdEdit } from "react-icons/md";
import Link from 'next/link';

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics.");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error loading topics: ", error);
        return { topics: [] };  // Return an empty array as a fallback
    }
};

export default async function Topiclist() {
    const { topics } = await getTopics() || { topics: [] };  // Ensure topics is defined

    return (
        <>
            {topics.map(t => (
                <div className={styles.main} key={t._id}>
                    <div className={styles.containerfirst}>
                        <div className={styles.topicTitle}>
                            <h1>{t.title}</h1>
                        </div>

                        <div className={styles.topicDescription}>
                            <p>{t.description}</p>
                        </div>
                    </div>

                    <div className={styles.containersecond}>
                        <div className={styles.iconone}>
                            <Removebtn id = {t._id}/>
                        </div>

                        <div className={styles.icontwo}>
                            <Link href={`/editTopic/${t._id}`}>
                                <MdEdit size={25} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
