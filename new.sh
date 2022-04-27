echo 'Creating new kata'

echo 'name: '$1''
echo 'url: '$2''

# Create new kata

echo '// '$1'' >> ./kata/$1.js
echo '// '$2'' >> ./kata/$1.js
echo '' >> ./kata/$1.js
echo '' >> ./kata/$1.js
echo '' >> ./kata/$1.js
echo 'module.exports = ' >> ./kata/$1.js

# Create new kata test

echo "const  = require('../$1.js')" >> ./kata/__tests__/$1.test.js
echo '' >> ./kata/__tests__/$1.test.js
echo 'describe('VowelCount', () => {' >> ./kata/__tests__/$1.test.js
echo '	it.each([' >> ./kata/__tests__/$1.test.js

for (( i=1; i <= $3; i++ ))
do  
	echo '		{ input: [], output:  },' >> ./kata/__tests__/$1.test.js
done


echo '	])(' >> ./kata/__tests__/$1.test.js
echo "		'should return \$output for \$input'," >> ./kata/__tests__/$1.test.js
echo '		({ input, output }) => {' >> ./kata/__tests__/$1.test.js
echo '			expect((...input)).toBe(output)' >> ./kata/__tests__/$1.test.js
echo '		}' >> ./kata/__tests__/$1.test.js
echo '	)' >> ./kata/__tests__/$1.test.js
echo '})' >> ./kata/__tests__/$1.test.js
