const Event = require('../../models/event')

function eventController() {
    return {
        async index(req, res) {
        	const hi = await Event.find()
            res.render('event/event', { hi: hi })

        },
        createevent(req, res) {
            res.render('event/createevent')
         
        },

        postevent(req, res) {

            			console.log(req.body)

						const {title, description, location, time, price} = req.body

			            const hello = new Event({
			             title, 
			             description,
			             location, 
			             time, 
						 price
			         })
			            
			            	hello.save().then((hello) => {
			            return res.redirect('/')
			         }).catch(err => {
			                return res.redirect('/event')
			         })          
			        
			   
			  } 
			    }

}
module.exports = eventController