const mongoose = require('mongoose');



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
        },
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
    },
    clientMail: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);



VisitSchema.statics.getAvailableHours = function(date) {
  const workStartTime = 8; // 8:00
  const workCompletionTime = 18; // 18:00
  const step = 30; // 30 minutes

  const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayMonth = new Date(date.getFullYear(), date.getMonth() +1, 0);
  

  const Visit = this;

  Visit.find({
    date: {
      "$gte": firstDayMonth,
      "$lte": lastDayMonth
    }
  }).then(visits => {
    let days = [];

    for (var d = firstDayMonth; d <= lastDayMonth; d.setDate(d.getDate() + 1)) {
      // for d loop every hour

      let hourDay = new Date(d).setHours(workStartTime,0,0,0);
      let endHourDay = new Date(d).setHours(workCompletionTime, 0,0,0);
      while(hourDay < endHourDay) {
        //todo check hour
        let visit = this.visits.find(v => {
          v.date <= hourDay && 
          v.date.setMinutes(v.date.getMinutes() + v.duration) > hourDay &&
          v.date <= hourDay.set && 
          v.date.setMinutes(v.date.getMinutes() + v.duration) > hourDay
        });


        hourDay.setHours(hourDay.getHours,hourDay.getMinutes() + step, 0,0);
      }


    }





  })
};


const Visit = mongoose.model('Visit', VisitSchema);

module.exports = { Visit };
