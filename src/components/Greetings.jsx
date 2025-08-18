import { useState } from "preact/hooks";

export default function Greetings({ message }) {
    const randomMessage = () => message[(Math.floor(Math.random() * message.length))];
    const [greeting, setGreeting] = useState(message[0]);

    return (
        <div>
            <h3>{greeting} Gracias por tu visita!</h3>
            <button onClick={() => setGreeting(randomMessage())}>
                Nuevo saludo
            </button>
        </div>
    );

}