import { Fake as RFake } from '../../src'
import { logGroup, once } from 'abandonjs'
const logs = once(logGroup)

logs(
  'Time',
  RFake('@timeStamp'),
  RFake('@nowTimeStamp'),
  RFake('@now'),
  RFake('@now(YYYY-MM-DD HH:mm:ss)'),
  RFake('@date'),
  RFake('@date(YYYY-MM-DD)'),
  RFake('@date(YYYY-MM-DD HH:mm:ss)'),
  RFake('@time'),
  RFake('@time(HH:mm:ss)'),
  RFake('@time(YYYY-MM-DD HH:mm:ss)'),
)