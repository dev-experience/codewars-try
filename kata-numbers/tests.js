const { sumOfN } = require('./task.js');

Test.assertSimilar(sumOfN(3), [0, 1, 3, 6]); 
Test.assertSimilar(sumOfN(-4), [0, -1, -3, -6, -10]);  
Test.assertSimilar(sumOfN(1), [0, 1]);    
Test.assertSimilar(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
