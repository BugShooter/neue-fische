import { main as exercise1 } from './exercise-001-singlton'
import { main as exercise2 } from './exercise-002-factory'

[
    exercise1,
    exercise2,
].forEach(fn => {
    fn();
    console.log();
});
