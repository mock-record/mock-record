import { testMock } from "../config"

testMock(
  'Time',
  [
    ('@timeStamp'),
    ('@nowTimeStamp'),
    ('@now'),
    ('@now(YYYY-MM-DD HH:mm:ss)'),
    ('@date'),
    ('@date(YYYY-MM-DD)'),
    ('@date(YYYY-MM-DD HH:mm:ss)'),
    ('@time'),
    ('@time(HH:mm:ss)'),
    ('@time(YYYY-MM-DD HH:mm:ss)'),
  ]

)