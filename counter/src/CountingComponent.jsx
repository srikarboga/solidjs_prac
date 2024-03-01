import styles from './App.module.css';
import { createSignal, onCleanup } from "solid-js";

const CountingComponent = () => {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);
	onCleanup(() => clearInterval(interval));
	return <div class={styles.App}> <header class={styles.header}>Count value is {count()}</header></div>;
};


export default CountingComponent;