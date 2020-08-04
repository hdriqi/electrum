import { schedules } from '../utils/common'
import { useState, useEffect } from 'react'
import ReactDropdown from 'react-dropdown'

const scheduleDay = schedules.map(schedule => schedule.day)

const InputSchedule = ({ value = {}, className, cb }) => {
  const [chosenDay, setChosenDay] = useState(null)
  const [chosenHour, setChosenHour] = useState(null)
  const [hourOpts, setHourOpts] = useState([])

  useEffect(() => {
    if (value) {
      if (value.day != chosenDay) {
        setChosenDay(value.day)
      }
      if (value.hour != chosenHour) {
        setChosenHour(value.hour)
      }
    }
  }, [value])

  useEffect(() => {
    if (chosenDay) {
      setHourOpts(schedules.find(schedule => schedule.day === chosenDay).hours)
    }
  }, [chosenDay])

  useEffect(() => {
    if (chosenDay && chosenHour) {
      cb({
        day: chosenDay,
        hour: chosenHour
      })
    }
  }, [chosenHour])

  return (
    <div className={className}>
      <div className="flex flex-wrap -mx-3">
        <div className="w-1/2 mt-3 px-3">
          <label className="block">Hari</label>
          <ReactDropdown options={scheduleDay} value={chosenDay} onChange={opt => setChosenDay(opt.value)} placeholder="Pilih Hari" controlClassName="truncate w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
        </div>
        <div className="w-1/2 mt-3 px-3">
          <label className="block">Waktu</label>
          <ReactDropdown disabled={!chosenDay} value={chosenHour} onChange={opt => setChosenHour(opt.value)} options={hourOpts} placeholder="Pilih Waktu" controlClassName="truncate w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
        </div>
      </div>
    </div>
  )
}

export default InputSchedule