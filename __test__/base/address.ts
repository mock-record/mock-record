import { Fake } from '../../src'
import { logGroup } from 'abandonjs'

logGroup(
  'address',
  // Fake('@ip'),
  // Fake('@ip()'),
  // Fake('@ip6()'),
  Fake('@url()'),
  // Fake('@domain'),
  // Fake('@domain()'),
  // Fake('@email()'),
)

logGroup(
  'address',
  Fake('@region'),
  Fake('@province'),
  Fake('@city'),
  Fake('@district'),
  Fake('@address'),
  Fake('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  Fake('@region'),
  Fake('@province'),
  Fake('@city'),
  Fake('@district'),
  Fake('@address'),
  Fake('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  Fake('@region'),
  Fake('@province'),
  Fake('@city'),
  Fake('@district'),
  Fake('@address'),
  Fake('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  Fake('@region'),
  Fake('@province'),
  Fake('@city'),
  Fake('@district'),
  Fake('@address'),
  Fake('@address(RR PP CC DD)'),
)