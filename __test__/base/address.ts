import { Mock } from '../../src'
import { logGroup } from 'abandonjs'

logGroup(
  'address',
  // Mock('@ip'),
  // Mock('@ip()'),
  // Mock('@ip6()'),
  Mock('@url()'),
  // Mock('@domain'),
  // Mock('@domain()'),
  // Mock('@email()'),
)

logGroup(
  'address',
  Mock('@region'),
  Mock('@province'),
  Mock('@city'),
  Mock('@district'),
  Mock('@address'),
  Mock('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  Mock('@region'),
  Mock('@province'),
  Mock('@city'),
  Mock('@district'),
  Mock('@address'),
  Mock('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  Mock('@region'),
  Mock('@province'),
  Mock('@city'),
  Mock('@district'),
  Mock('@address'),
  Mock('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  Mock('@region'),
  Mock('@province'),
  Mock('@city'),
  Mock('@district'),
  Mock('@address'),
  Mock('@address(RR PP CC DD)'),
)