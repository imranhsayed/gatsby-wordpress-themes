const fs = require( 'fs' );

// Give executable permission.
fs.chmodSync( 'bin/deploy.sh', '0755' );
