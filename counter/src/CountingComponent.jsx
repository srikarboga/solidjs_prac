import styles from './App.module.css';
import { createEffect, createSignal, onCleanup } from "solid-js";

const CountingComponent = () => {
	const [start, setStart] = createSignal(Date.now());
	const [count, setCount] = createSignal(0);
	const [time, setTime] = createSignal(Date.now());
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);
	
	createEffect(() => {
		const timer = setInterval(
			() => setTime(Date.now()),
			100
		);
		onCleanup(() => clearInterval(timer))
	})
	onCleanup(() => clearInterval(interval));
	return <div class={styles.App}> 
	<header class={styles.header}>Count value is {count()}
	<p>Timer: {((time() - start())/1000).toFixed(1)}</p>
	</header>
	</div>;
};

export default CountingComponent;