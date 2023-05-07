import { useState, useEffect } from 'react';

import styles from './Message.module.css';

interface messageProps {
  text: string;
  type: string;
}

export default function Message({ text, type }: messageProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!text) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      {visible && (
        <div className={`${styles.message_container} ${styles[type]} `}>
          <p>{text}</p>
        </div>
      )}
    </>
  );
}
