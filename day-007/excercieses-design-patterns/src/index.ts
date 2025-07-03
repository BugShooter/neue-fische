import { main as exercise1 } from './exercise-001-singlton'
import { main as exercise2 } from './exercise-002-factory'
import { main as exercise3 } from './exercise-003-adapter'
[
    exercise1,
    exercise2,
    exercise3
].forEach(fn => {
    fn();
    console.log();
});
