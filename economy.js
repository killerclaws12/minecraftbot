const startDate = new Date().getTime();
// Run mongo
const endDate = new Date().getTime();
console.log(endDate - startDate)
const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')
const itemsSchema = require('./schemas/items-schema.js')

const coinsCache = {} // { 'guildId-userId': coins }
const diamondsCache = {}
const emeraldsCache = {}
const stoneCache = {}
const oakwoodCache = {}
const birchwoodCache = {}
const sprucewoodCache = {}
const junglewoodCache = {}
const acaciawoodCache = {}
const dirtCache = {}
const gravelCache = {}
const grassCache = {}
const wheatCache = {}
const carrotCache = {}
const potatoCache = {}
const kaellyCache = {}


module.exports = (client) => {}

module.exports.getItemsAmount = async (userId, item) => {
    if(item == 'diamonds') {
    const cachedValue = diamondsCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'emeralds') {
    const cachedValue = emeraldsCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'stone') {
    const cachedValue = stoneCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'oakwood') {
    const cachedValue = oakwoodCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'birchwood') {
    const cachedValue = birchwoodCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'sprucewood') {
    const cachedValue = sprucewoodCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'acaciawood') {
    const cachedValue = acaciawoodCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'junglewood') {
    const cachedValue = junglewoodCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'dirt') {
    const cachedValue = dirtCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'gravel') {
    const cachedValue = gravelCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'grass') {
    const cachedValue = grassCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'wheat') {
    const cachedValue = wheatCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'carrot') {
    const cachedValue = carrotCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'potato') {
    const cachedValue = potatoCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } else if(item == 'kaelly') {
    const cachedValue = kaellyCache[`${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  } 
  console.log(item + ' - vibv')

  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOne()')

      const result = await itemsSchema.findOne({
        
        userId,
      })

      console.log('RESULT:', result)

      let amount = 0
      if (result) {
        if(item == 'diamonds') {amount = result.diamonds; diamondsCache[`${userId}`] = amount}
        if(item == 'emeralds') {amount = result.emeralds; emeraldsCache[`${userId}`] = amount}
        if(item == 'stone') {amount = result.stone; stoneCache[`${userId}`] = amount}
        if(item == 'gravel') {amount = result.gravel; gravelCache[`${userId}`] = amount}
        if(item == 'dirt') {amount = result.dirt; dirtCache[`${userId}`] = amount}
        if(item == 'grass') {amount = result.grass; grassCache[`${userId}`] = amount}
        if(item == 'birchwood') {amount = result.birchwood; birchwoodCache[`${userId}`] = amount}
        if(item == 'oakwood') {amount = result.oakwood; oakwoodCache[`${userId}`] = amount}
        if(item == 'sprucewood') {amount = result.sprucewood; sprucewoodCache[`${userId}`] = amount}
        if(item == 'junglewood') {amount = result.junglewood; junglewoodCache[`${userId}`] = amount}
        if(item == 'acaciawood') {amount = result.acaciawood; acaciawoodCache[`${userId}`] = amount}
        if(item == 'wheat') {amount = result.wheat; wheatCache[`${userId}`] = amount}
        if(item == 'carrot') {amount = result.carrot; carrotCache[`${userId}`] = amount}
        if(item == 'potato') {amount = result.potato; potatoCache[`${userId}`] = amount}
        if(item == 'kaelly') {amount = result.kaelly; kaellyCache[`${userId}`] = amount}
      }

      return amount
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.addItems = async (userId, amount, type) => {
  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOneAndUpdate()')

       if(type == 'diamonds') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {
              diamonds: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
       diamondsCache[`${userId}`] = result.diamonds
  
        return result.diamonds
        } else if(type == 'emeralds') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {
              emeralds: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        emeraldsCache[`${userId}`] = result.emeralds
  
        return result.emeralds
        } else if(type == 'kaelly') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {
              kaelly: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        kaellyCache[`${userId}`] = result.kaelly
  
        return result.kaelly
        } else if(type == 'oakwood') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {
              oakwood: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        oakwoodCache[`${userId}`] = result.oakwood
  
        return result.oakwood
        } else if(type == 'birchwood') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {

              birchwood: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        birchwoodCache[`${userId}`] = result.birchwood
  
        return result.birchwood
        } else if(type == 'sprucewood') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {

            
            userId,
            $inc: {
              sprucewood: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        sprucewoodCache[`${userId}`] = result.sprucewood
  
        return result.sprucewood
        } else if(type == 'junglewood') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {

              junglewood: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        junglewoodCache[`${userId}`] = result.junglewood
  
        return result.junglewood
        } else if(type == 'acaciawood') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {

            
            userId,
            $inc: {
              acaciawood: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        acaciawoodCache[`${userId}`] = result.acaciawood
  
        return result.acaciawood
        } else if(type == 'gravel') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {

              gravel: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        gravelCache[`${userId}`] = result.gravel
  
        return result.gravel
        } else if(type == 'dirt') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {

            
            userId,
            $inc: {
              dirt: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        dirtCache[`${userId}`] = result.dirt
  
        return result.dirt
        } else if(type == 'grass') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {

              grass: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        grassCache[`${userId}`] = result.grass
  
        return result.grass
        } else if(type == 'wheat') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {

              wheat: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        wheatCache[`${userId}`] = result.wheat
  
        return result.wheat
        } else if(type == 'carrot') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {

            
            userId,
            $inc: {
              carrot: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        carrotCache[`${userId}`] = result.carrot
  
        return result.carrot
        } else if(type == 'potato') {
        const result = await itemsSchema.findOneAndUpdate(
          {

            
            userId,
          },
          {
            
            userId,
            $inc: {

              potato: amount,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        console.log('RESULT:', result)
  
        potatoCache[`${userId}`] = result.potato
  
        return result.potato
        }
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.addCoins = async (userId, coins) => {
  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOneAndUpdate()')

      const result = await profileSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
          
          userId,
          $inc: {
            coins,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      console.log('RESULT:', result)

      coinsCache[`${userId}`] = result.coins

      return result.coins
        } finally {
        mongoose.connection.close()
      }  
  })
}

module.exports.getCoins = async (userId) => {
  const cachedValue = coinsCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOne()')

      const result = await profileSchema.findOne({
        
        userId,
      })

      console.log('RESULT:', result)

      let coins = 0
      if (result) {
        coins = result.coins
      } else {
        console.log('Inserting a document')
        await new profileSchema({
          
          userId,
          coins,
        }).save()
      }

      coinsCache[`${userId}`] = coins

      return coins
    } finally {
      mongoose.connection.close()
    }
  })
}
