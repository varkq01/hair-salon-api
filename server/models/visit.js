const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');


const VisitSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    services: [
      {
        name: {
          type: String,
          required: true
        },
        description: {
          type: String
        },
        price: {
          type: Number,
          required: true
        }
      }
    ],
    price: {
      type: Number,
      required: true
    },
    employee: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      }
    },
    clientMail: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const workStartTime = 8; // 8:00
const workCompletionTime = 18; // 18:00
const step = 30; // 30 minutes

VisitSchema.statics.getAvailableHours = function(
  appDate,
  duration,
  employeeID
) {
  const date = new Date(appDate);
  const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const Visit = this;

  return Visit.find({
    date: {
      $gte: firstDayMonth,
      $lte: lastDayMonth
    },
    employee: {
      id: ObjectID(employeeID)
    }
  })
    .then(visits => {
      let days = [];
      let hours = [];
      for (let d = firstDayMonth;d < lastDayMonth;d.setDate(d.getDate() + 1)) {
        let startOfWorkingDay = Visit.getStartOfDay(d);
        let endOfWorkingDay = Visit.getEndOfDay(d);
        let startTime = startOfWorkingDay.getTime();
        //for single day check all hours
        let hourDay = new Date(startTime);
        while (Visit.addMinutes(hourDay, duration) <= endOfWorkingDay) {
          if (Visit.isWorkingDay(hourDay)) {
            // if there is no visit - add hour as available
            if (!Visit.checkIfExist(hourDay, duration, visits) && !Visit.isBeforeToday(hourDay)) {
              hours.push(new Date(hourDay));
            }
          }          
          hourDay = Visit.addMinutes(hourDay, step);
        }

        days.push({date: startOfWorkingDay, hours: hours.slice(0)});
        hours = [];
      }
      return days;
    })
    .catch(err => {
      console.log(err);
      throw new Error(err);
    });
};

VisitSchema.statics.checkIfExist = function(date, duration, visits) {
  const endDate = Visit.addMinutes(date, duration);
  const visit = visits.find(v => {
    const visitEndTime = Visit.addMinutes(v.date, v.duration);
    const isStartBetween = v.date < date && visitEndTime > date;
    const isEndBetween = v.date < endDate && visitEndTime > endDate;
    const isVisitStartBetween = date <= v.date && v.date < endDate;
    const isVisitEndBetween = date < visitEndTime && visitEndTime <= endDate;
    return (
      isStartBetween || isEndBetween || isVisitStartBetween || isVisitEndBetween
    );
  });
  if (!visit) {
    return false;
  }

  return true;
};

VisitSchema.statics.isBeforeToday = function(date) {
  const now = new Date().getTime();
  return now > date.getTime();
}

VisitSchema.statics.isWorkingDay = function(date) {
  const day = date.getDay();

  return day !== 0 && day !== 6;
}

VisitSchema.statics.getStartOfDay = function(date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    workStartTime,
    0,
    0,
    0
  );
};

VisitSchema.statics.getEndOfDay = function(date) {
  const workCompletionTime = 18;
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    workCompletionTime,
    0,
    0,
    0
  );
};

VisitSchema.statics.addMinutes = function(date, minutes) {
  const time = date.getTime();
  const ms = 60 * minutes * 1000;
  return new Date(time + ms);
};

const Visit = mongoose.model('Visit', VisitSchema);

module.exports = { Visit };
