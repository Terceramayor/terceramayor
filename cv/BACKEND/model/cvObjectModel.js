const { Schema, model } = require('mongoose');

const cvSchema = new Schema(

  {
    about: {
      name: String,
      email: String,
      location: String,
      photoURL: String,
      presentation: String,
      role: String
    },
    skills: {
      profesional: [{
        skill: String,
        score: Number,
        priority: Number
      }
      ],
      personal: [{
        skill: String,
        score: Number,
        priority: Number
      }
      ],
      languages: [{
        skill: String,
        score: Number,
        priority: Number,
        flag: String
      }
      ]
    },
    profesionalExperience: [{
      company: String,
      companyLogo: String,
      role: String,
      location: String,
      duration: Number,
      description: String,
      endYear: Number,
      order: Number
    }],
    portfolio: {
      personal: [{
        name: String,
        imageURL: String,
        description: String,
        gitHubURL: String,
        priority: String
      }
      ],
      asStudent: [{
        name: String,
        imageURL: String,
        description: String,
        gitHubURL: String,
        priority: String
      }
      ],
      profesional: [{
        name: String,
        imageURL: String,
        description: String,
        gitHubURL: String,
        priority: String
      }
      ]
    },
    education: [{
      title: String,
      academy: String,
      location: String,
      completionYear: Number,
      academylogo: String
    }]
  }

);

module.exports = model('cvs', cvSchema);
