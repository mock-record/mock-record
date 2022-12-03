import { Mock as RMock } from '../../src'
import { logGroup, once } from 'abandonjs'
const logs = once(logGroup)

logs(
  'Time',
  RMock('@timeStamp'),
  RMock('@nowTimeStamp'),
  RMock('@now'),
  RMock('@now(YYYY-MM-DD HH:mm:ss)'),
  RMock('@date'),
  RMock('@date(YYYY-MM-DD)'),
  RMock('@date(YYYY-MM-DD HH:mm:ss)'),
  RMock('@time'),
  RMock('@time(HH:mm:ss)'),
  RMock('@time(YYYY-MM-DD HH:mm:ss)'),
)