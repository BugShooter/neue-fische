import { main as exercise1 } from './exercise-001-singlton'
import { main as exercise2 } from './exercise-002-factory'
import { main as exercise3 } from './exercise-003-adapter'
import { main as exercise4 } from './exercise-004-decorator'
[
    exercise1,
    exercise2,
    exercise3,
    exercise4
].forEach(fn => {
    fn();
    console.log();
});
